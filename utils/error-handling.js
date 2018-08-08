export function smsError(message, context) {
  throw new Error(
    `[SMS ReactComponents] ${context ? `[${context}]` : ''} : ${message}
    `,
  )
}
