import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '../components/Header';
import Head from '@docusaurus/Head';
import Intro from '../components/Intro';
import Feats from '../components/Feats';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {MorphSVGPlugin} from 'gsap/all';
import React from 'react';

const tailwindTheme = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@theme {
  --color-darkest: #111412;
  --color-dark: #1C1B1B;
  --color-primary: #4179C3;
}

@layer base {
  * {
    font-family: "Inter", sans-serif;
  }
}
`

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(MorphSVGPlugin)

const HomeMeta = () => (
  <Head>
    {/* @ts-ignore */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script type="text/tailwindcss">
      {tailwindTheme}
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
)

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomeMeta />
      <main className="w-full h-full overflow-hidden" >
          <Header githubLink={`https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`} />
          <Intro/>
          <Feats/>
      </main>
    </>
  );
}
