import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Header from './header/Header.jsx';
import { withTranslation } from '../i18n';

class Page extends Component {
  render() {
    return (
      <>
        <Header lang={this.props.lang} />
        <div>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default withTranslation('footer')(Page);
