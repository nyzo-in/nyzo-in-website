import Head from 'next/head';
import React from 'react';

import { Inner } from '../components/common/LayoutStyles';
import Hero from '../components/hero/Hero';

// import { frontMatter as introData } from '../pages/docs/intro.mdx';
// import { frontMatter as advancedData } from '../pages/docs/advanced.mdx';

const DocsPage = frontMatter => {
  console.log(frontMatter.__resourcePath);
  const { __scans } = frontMatter;
  return function docsPageLayout({ children }) {
    return (
      <>
        {/* Similar to adding a script to document <head/> we load a font stylesheet here vs. running arbitrary JS */}
        <Head>
          <title>{frontMatter.title}</title>
        </Head>

        {frontMatter.hero_image && (
          <Hero heading={frontMatter.title} src={frontMatter.hero_image} />
        )}
        {!frontMatter.hero_image && <h1>{frontMatter.title}</h1>}

        <Inner>
          <p>
            Created
            {frontMatter.date}
          </p>
          {frontMatter.update && (
            <p>
              Updated
              {frontMatter.update}
            </p>
          )}
          <p>
            This file:
            {frontMatter.__resourcePath}
          </p>
          <p>
            Written By:
            {frontMatter.author}
          </p>
          {children}
        </Inner>
      </>
    );
  };
};

export default DocsPage;
