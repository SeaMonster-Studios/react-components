export function wrapIframesInResponsiveVideo() {
  if (typeof document !== 'undefined') {
    const iframes = document.getElementsByTagName('iframe')

    Object.keys(iframes).map(i => {
      const iframe = iframes[i]
      const src = iframe.getAttribute('src')

      if (src && src.includes('youtube.com' || src.includes('vimeo.com'))) {
        const wrapper = document.createElement('div')

        wrapper.className = 'video-responsive'

        wrapper.innerHTML = iframe.outerHTML

        iframe.parentNode.insertBefore(wrapper, iframe)

        iframe.remove()
      }
    })
  }
}
