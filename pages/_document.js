import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps(ctx);
    const {
      res: { locals },
    } = ctx;
    const additionalProps = {
      languageDirection: locals.languageDirection,
      language: locals.language,
    };

    return { ...page, styleTags, ...initialProps, ...additionalProps };
  }

  render() {
    return (
      <Html lang={this.props.language}>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
