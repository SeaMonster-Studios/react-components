import sanitizeHtml from "sanitize-html"

export const callAll = (...fns) => (...args) =>
  fns.forEach((fn) => fn && fn(...args))

export function setHtml(content) {
  return {
    dangerouslySetInnerHTML: {
      __html: sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          "img",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "br",
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ["src", "alt", "iframe"],
          "*": ["class", "aria*", "style"],
          iframe: ["width", "height", "src"],
        },
      }),
    },
  }
}

export function wrapIframesInResponsiveVideo() {
  if (typeof document !== "undefined") {
    const iframes = document.getElementsByTagName("iframe")

    Object.keys(iframes).map((i) => {
      const iframe = iframes[i]
      const src = iframe.getAttribute("src")

      if (src && src.includes("youtube.com" || src.includes("vimeo.com"))) {
        const wrapper = document.createElement("div")

        wrapper.className = "video-responsive"

        wrapper.innerHTML = iframe.outerHTML

        iframe.parentNode.insertBefore(wrapper, iframe)

        iframe.remove()
      }
    })
  }
}

export function scrollIt(
  destination,
  duration = 200,
  easing = "linear",
  callback,
) {
  if (typeof document !== "undefined") {
    const easings = {
      linear(t) {
        return t
      },
      easeInQuad(t) {
        return t * t
      },
      easeOutQuad(t) {
        return t * (2 - t)
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      },
      easeInCubic(t) {
        return t * t * t
      },
      easeOutCubic(t) {
        return --t * t * t + 1
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      },
      easeInQuart(t) {
        return t * t * t * t
      },
      easeOutQuart(t) {
        return 1 - --t * t * t * t
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
      },
      easeInQuint(t) {
        return t * t * t * t * t
      },
      easeOutQuint(t) {
        return 1 + --t * t * t * t * t
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
      },
    }
    const start = window.pageYOffset
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime()

    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    )
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight
    const destinationOffset =
      typeof destination === "number" ? destination : destination.offsetTop
    const destinationOffsetToScroll = Math.round(
      documentHeight - destinationOffset < windowHeight
        ? documentHeight - windowHeight
        : destinationOffset,
    )

    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, destinationOffsetToScroll)
      if (callback) {
        callback()
      }
      return
    }

    function scroll() {
      const now =
        "now" in window.performance ? performance.now() : new Date().getTime()
      const time = Math.min(1, (now - startTime) / duration)
      const timeFunction = easings[easing](time)
      window.scroll(
        0,
        Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start),
      )

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback()
        }
        return
      }

      requestAnimationFrame(scroll)
    }

    scroll()
  }
}
