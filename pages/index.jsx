import NextLink from 'next/link';
import { i18n, Link, withTranslation } from '../i18n';
// import { frontMatter } from './docs/*.mdx';
import { frontMatter } from './*/docs/*.mdx';

const Homepage = ({ t, lang }) => {
  console.log(frontMatter);
  return (
    <>
      <h1>root Docs Index</h1>
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
  return '/' + p.replace(/\.mdx$/, '');
}
