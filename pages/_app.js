import React, { Component } from 'react';
import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { Html } from 'next/document';
import Page from '../components/Page';
import { i18n, appWithTranslation } from '../lib/i18n';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = createGlobalStyle`
  ${'' /* ${reset} */}
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx, req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    if (ctx.res) {
      pageProps.lang = ctx.res.locals.language;
    } else if (i18n) {
      pageProps.lang = i18n.language;
    } else if (req) {
      pageProps.lang = req.language;
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
