import { createGlobalStyle } from 'styled-components';


 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #root{
      display:flex;
      flex-direction: column;
      height: 100%;
  }
`;
 
export default GlobalStyle;