import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
  }

  *{
    padding:0;
    margin:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  u{
    text-decoration: underline;
  }

  *:link,
  *:visited{
    color:unset;
  }
  
  /* *::-webkit-scrollbar {
    display: none;
  } */
  
  *:focus{
    outline:none;
  }

  input{
    outline: none;
    user-select: auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  label{
    cursor: pointer;
  }

  .noSpace{
    width: 0;
    height: 0;
    overflow: hidden;
  }

  button{
    background: none;
    cursor: pointer;
  }

  .inner {
    padding: 2px 4px;
    background: #ececec;
    border-radius: 2px;
  }
`;

export default GlobalStyle;
