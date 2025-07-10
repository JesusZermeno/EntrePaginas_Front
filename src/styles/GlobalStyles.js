import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', Arial, sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e0f7fa 50%, #c7d2fe 100%);
    color: #1e293b;
    min-height: 100vh;
    transition: background 0.5s, color 0.3s;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }
`;

export default GlobalStyles;
