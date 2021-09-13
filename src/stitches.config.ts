import {createStitches} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray500: '#151718',
      gray400: '#ddd',

      primary: '$gray500',
      white: 'white'
    },
    fontSizes: {
      '0': '1rem',
      '1': '1.125rem',
      '2': '1.5rem',
      '-1': '.8rem'
    },
    radii: {
      'sm': 2,
    }
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    test: (value: number) => ({
      margin: value,
    }),
  }
})
 
const Test = styled('div', {
  test
})
