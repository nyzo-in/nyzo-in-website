import React from 'react';
import PropTypes from 'prop-types';
import FontFaceObserver from 'fontfaceobserver';
import { FinalityStyles, FinalityPlainStyles } from './styles';

export default class Finality extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <FinalityStyles>{this.props.children}</FinalityStyles>
        <FinalityPlainStyles>{this.props.children}</FinalityPlainStyles>
      </>
    );
  }
}

Finality.propTypes = {};
