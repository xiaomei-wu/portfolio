import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  body,
  html {
    height: 100%;
    margin: 0;
  }

  body {
    ${'' /* font-family: -apple-system, BlinkMacSystemFont, 'Proza Libre', "Libre Franklin", 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */}
    font-family: "lato";
    font-size: 16px;
    margin: 0 50px;
    ${'' /* font-family: 'Magnum'; */}
    background-color: #233554;
    line-height: 1.4;
    color: pink
  }
  p {
    font-size: 1.5em;
  }

  h1 {
    font-size: 7em;
  }

  h2 {
    font-size: 4em;
  }

  h3 {
    font-size: 3em;
  }
`