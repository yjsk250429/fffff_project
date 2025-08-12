import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-size: 16px;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  .main {
      width: 100%;
      overflow:hidden;
  }
.inner{
    width: 1700px;
    margin:auto;
    box-sizing:border-box;
    position: relative;
}

 
`;

export default GlobalStyle;
