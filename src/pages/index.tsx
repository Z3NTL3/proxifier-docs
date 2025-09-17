import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '../components/header';
import styles from './index.module.css';

const tailwindTheme = `
@theme {
  --color-clifford: #da373d;
}
`

const HomeMeta = () => (
  <>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script type="text/tailwindcss">
      {tailwindTheme}
    </script>
  </>
)

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomeMeta />
      <main className='' >
          <Header/>
      </main>
    </>
  );
}
