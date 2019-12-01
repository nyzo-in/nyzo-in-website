import Link from 'next/link';
import { frontMatter } from './docs/*.mdx'

export default () => {
  console.log(frontMatter);
  return (<>
    <h1>Docs Index</h1>
    <ul>
      {frontMatter.map(page => (
      <li key={page.__resourcePath}>
        <Link href={formatPath(page.__resourcePath)}>
          <a>{page.title}</a>
        </Link>
      </li>
      ))}
    </ul>
  </>)
}

function formatPath(p) {
  return p.replace(/\.mdx$/, '')
}