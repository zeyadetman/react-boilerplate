import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html: {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    line-height: 2;
  }
`;
