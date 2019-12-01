import React, { Component } from 'react';
import App from 'next/app';
import { Html } from 'next/document';
import Page from '../components/Page';
import { i18n, appWithTranslation } from '../i18n';

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
      <>
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </>
    );
  }
}

export default appWithTranslation(MyApp);
