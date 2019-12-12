import Head from 'next/head';

// import { frontMatter as introData } from '../pages/docs/intro.mdx';
// import { frontMatter as advancedData } from '../pages/docs/advanced.mdx';

const DocsPage = frontMatter => {
  const __scans = frontMatter.__scans;
  return function docsPageLayout({ children }) {
    return (
      <>
        {/* Similar to adding a script to document <head/> we load a font stylesheet here vs. running arbitrary JS */}
        {__scans.hasMesh && (
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
        )}

        <Head>
          <title>{frontMatter.title}</title>
        </Head>

        <h1 style={{ fontFamily: "'Press Start 2P'" }}>{frontMatter.title}</h1>
        <h2 style={{ fontFamily: "'Press Start 2P'" }}>Should render in 8-bit font because...</h2>
        {__scans.hasMesh && <h1>We found mesh</h1>}

        {__scans.meshName && <h1>{__scans.meshName}</h1>}
        <p>hi</p>
        {children}
      </>
    );
  };
};

export default DocsPage;
