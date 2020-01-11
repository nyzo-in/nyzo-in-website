import styled, {
  createGlobalStyle
} from 'styled-components';
import {
  PlainTextStyles
} from '../plainText/styles';


const GlobalStyle = createGlobalStyle `

  @import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');

  .slabtexted .slabtext{
    display:-moz-inline-box;
    display:inline-block;
    white-space:nowrap;
  }
`;


const FirstStyles = styled.div `
  padding: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  background-color: #1b2124;
  font-family: 'Lato', sans-serif;

  h2 {
    font-size: 0;
    color: #1b2124;
    text-align: center;
    margin-bottom: 8px;
    img {
      width: 400px;
      max-width: 100%;
      padding: 4px 8px;
    }
    &, 
    & + p {
      color: #ffffff;
    }
    + p {
      margin-bottom: 16px;

    }
  }

  h3 {
    font-size: 100px;
    line-height: 1;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  h2, h3, p {
    
    text-transform: uppercase;
    font-weight: 300;
  }

  h3 , p {
    color: #d0534e;
  }

  p {
    margin: 0;
    font-size: 13px; 
    line-height: 1;
    text-align: justify;
    text-justify: auto;
  }

  .slabtextinactive .slabtext{
    display:inline;
    white-space:normal;
    font-size:1em !important;
    letter-spacing:
    inherit !important;
    word-spacing:inherit !important;
    *letter-spacing:normal !important;
    *word-spacing:normal !important;
    }
  .slabtextdone .slabtext{
    display:block;
  }

`;

const FirstPlainStyles = styled(PlainTextStyles)
`
  h2 img {
    display: none;
  }
`

export {
  FirstStyles,
  FirstPlainStyles,
  GlobalStyle
};
