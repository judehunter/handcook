import React from 'react';
import {Global} from '@emotion/react';
import tw, {css, theme, GlobalStyles as BaseStyles} from 'twin.macro';

const customStyles = [
  css({
    body: {
      // WebkitTapHighlightColor: theme`colors.purple.500`,
      ...tw`antialiased`,
    },
  }),
  css`
    @font-face {
      font-family: 'Inter var experimental';
      font-weight: 100 900;
      font-display: swap;
      font-style: oblique 0deg 10deg;
      src: url('Inter.var.woff2?v=3.19') format('woff2');
    }
    html,
    .inter {
      font-family: 'Inter var experimental', sans-serif;
    }
  `,
];

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
