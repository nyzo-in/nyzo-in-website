import Head from 'next/head';

// import { frontMatter as introData } from '../pages/docs/intro.mdx';
// import { frontMatter as advancedData } from '../pages/docs/advanced.mdx';

const DocsPage = frontMatter => {
  const { __scans } = frontMatter;
  return function docsPageLayout({ children }) {
    return (
      <>
        {/* Similar to adding a script to document <head/> we load a font stylesheet here vs. running arbitrary JS */}

        <Head>
          <title>{frontMatter.title}</title>
        </Head>

        <h1>{frontMatter.title}</h1>

        {children}
      </>
    );
  };
};

export default DocsPage;
