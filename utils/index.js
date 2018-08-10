import sanitizeHtml from 'sanitize-html'

export function setHtml(content) {
  return {
    dangerouslySetInnerHTML: {
      __html: sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'img',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'br',
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt', 'iframe'],
          '*': ['class', 'aria*'],
          iframe: ['width', 'height', 'src'],
        },
      }),
    },
  }
}

export function documentReady(fn) {
  if (
    typeof document !== 'undefined' && document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
