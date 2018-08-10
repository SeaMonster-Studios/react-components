import sanitizeHtml from 'sanitize-html'

export function setHtml(content) {
  return {
    dangerouslySetInnerHTML: {
      __html: sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h2']),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt'],
          '*': ['class', 'aria*'],
        },
      }),
    },
  }
}
