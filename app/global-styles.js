import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Quicksand', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lexend Giga', sans-serif;
  }

  p,
  label {
    font-family: 'Quicksand', sans-serif;
    line-height: 1.5em;
  }

  button {
    outline: none;
    border: none;
    background-color: unset;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
