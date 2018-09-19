import { css } from "react-emotion"

export const createMediaQueries = (breakpoints: { [size: string]: number }) =>
  Object.keys(breakpoints).reduce((accumulator, label) => {
    let prefix = typeof breakpoints[label] === "string" ? "" : "min-width:"
    let suffix = typeof breakpoints[label] === "string" ? "" : "px"
    accumulator[label] = (cls) =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  }, {})

export const createColors = (colors: { [colorName: string]: Array<string> }) =>
  Object.keys(colors).reduce((acc, label) => {
    const raw = colors[label]

    acc[label] = {
      raw: raw.map((raw) => raw),
      rgb: raw.map((rgb) => `rgb(${rgb})`),
      rgba: (opacity = 1) => raw.map((rgb) => `rgba(${rgb}, ${opacity})`),
    }

    return acc
  }, {})
