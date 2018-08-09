import { css } from 'react-emotion'
//

let colorsRaw = {
  white: ['255,255,255', '232,232,232'],
  gray: ['186,186,186', '140,140,140', '93,93,93'],
  black: ['47,47,47', '0,0,0'],
  tan: ['235,236,217', '255,232,209', '232,211,190'],
  brown: ['175,155,144', '130,98,81', '107,81,67'],
  cyan: ['180,236,253', '138,225,252', '113,185,207'],
  blue: ['66,168,190', '72,184,208', '191,65,60'],
  red: ['255,127,104', '255,99,71', '197,83,55'],
  green: ['116,48,77', '116,63,73', '116,63,60'],
}

export const color = Object.keys(colorsRaw).reduce(
  (accumulator, label) => {
    const raw = colorsRaw[label]
    accumulator.raw[label] = raw

    accumulator.rgb[label] = raw.map(rgb => css`rgb(${rgb})`)
    accumulator.rgba[label] = opacity =>
      raw.map(rgb => css`rgba(${rgb}, ${opacity})`)

    return accumulator
  },
  { raw: {}, rgb: {}, rgba: {} },
)
