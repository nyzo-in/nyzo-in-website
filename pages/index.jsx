import NextLink from 'next/link';
import { i18n, Link, withTranslation } from '../lib/i18n';
import { frontMatter } from './en/**/*.mdx';

function compare(a, b) {
  if (!a.order || !b.order) {
    return 0;
  }
  return Number.parseInt(b.order) > Number.parseInt(a.order) ? -1 : 1;
}

const Homepage = ({ t, lang }) => {
  // console.log(frontMatter);
  frontMatter.sort(compare);
  return (
    <>
      <h1>root Docs Index 13</h1>
      <ul>
        {frontMatter.map(page => {
          const resourceLang = page.__resourcePath.split('/')[0];
          if (resourceLang !== lang) {
            return;
          }
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
