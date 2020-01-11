import React from 'react';
import PropTypes from 'prop-types';
import FontFaceObserver from 'fontfaceobserver';
import { FirstStyles, FirstPlainStyles, GlobalStyle } from './styles';

export default class First extends React.Component {
  componentDidMount() {
    const slabText = require('slabtext/js/jquery.slabtext.js');

    const $htmlElement = $(this.htmlElement);
    const $h3s = $htmlElement.find('h3');
    $h3s.wrapInner("<span class='slabtext'></span>");

    const fontLato = new FontFaceObserver('Lato');

    fontLato.load().then(function() {
      $h3s.slabText({});
      $htmlElement.find('p').slabText({
        viewportBreakpoint: 380,
        maxFontSize: 32,
        minCharsPerLine: 25
      });
    });
  }

  render() {
    return (
      <>
        <FirstStyles ref={c => (this.htmlElement = c)}>
          <GlobalStyle />
          {this.props.children}
        </FirstStyles>
        <FirstPlainStyles>{this.props.children}</FirstPlainStyles>
      </>
    );
  }
}

First.propTypes = {};
