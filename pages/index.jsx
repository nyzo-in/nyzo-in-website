import NextLink from 'next/link';
import React from 'react';
import { i18n, Link, withTranslation } from '../lib/i18n';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Wallets from '../components/wallets/Wallets';
import Exchanges from '../components/exchanges/Exchanges';
import First from '../components/infographics/First';

const Homepage = ({ t, lang, frontMatter }) => {
  console.log(frontMatter);
  return (
    <>
      <Hero heading="Nyzo.in Home" />
      <First />
      <Features heading="Nyzo features" />
      <Wallets heading="Nyzo wallets" />
      <Exchanges heading="Nyzo exchanges" />

      <ul>
        {frontMatter.map(page => {
          return (
            <li key={page.__resourcePath}>
              <NextLink href={formatPath(page.__resourcePath)}>
                <a>{page.title}</a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
});

export default withTranslation('footer')(Homepage);

function formatPath(p) {
  return `/${p.replace(/\.mdx$/, '')}`;
}
