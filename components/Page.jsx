import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Header from './header/Header.jsx';
import { Outer } from './common/LayoutStyles';

import { withTranslation } from '../lib/i18n';

class Page extends Component {
  render() {
    return (
      <>
        <Outer>
          <Header lang={this.props.lang} />
          <div>{this.props.children}</div>
          <Footer />
        </Outer>
      </>
    );
  }
}

export default withTranslation('footer')(Page);
