import React from 'react';
import PropTypes from 'prop-types';
import FontFaceObserver from 'fontfaceobserver';
import { PinBoardStyles, PinBoardPlainStyles } from './styles';

export default class PinBoard extends React.Component {
  componentDidMount() {
    // build the html from markup

    const $htmlElement = $(this.htmlElement);

    const heading =
      '<h1><span>NYZO</span><img src="/images/nyzo-logo--white.svg" alt="NYZO" /></h1>';

    $htmlElement.find('h3').each(function(index) {
      const $this = $(this);
      const additionalClass = '';
      if (index === 6) {
        $this.before(heading);
      }
      const $toWrap = $this.add($this.next('p'));
      $toWrap.wrapAll(
        `<div class='card-wrap ${additionalClass}'><div class='card' /></div>`
      );
    });

    // stick the nyzo logi in the middle
  }

  render() {
    return (
      <>
        <PinBoardStyles ref={c => (this.htmlElement = c)}>
          {this.props.children}
          {/* <div className="top">
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
          </div>
          <div className="middle">

          </div>
          <div className="bottom">
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
            <div className="card-wrap">
              <div className="card">
                <h3>AUTHENTIC AND UNIQUE</h3>
                <p>Built from scratch and open-source (Github)</p>
              </div>
            </div>
          </div> */}
        </PinBoardStyles>
        <PinBoardPlainStyles>{this.props.children}</PinBoardPlainStyles>
      </>
    );
  }
}

PinBoard.propTypes = {};
