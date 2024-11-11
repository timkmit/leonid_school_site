import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Verdana';
    background-color: #f0f2f5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
