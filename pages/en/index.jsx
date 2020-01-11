import React from 'react';
import { frontMatter } from './**/*.mdx';
import { compareOrder } from '../../lib/utils.js';
import Homepage from '../index';

const HomepageLocalEn = () => {
  frontMatter.sort(compareOrder);
  return <Homepage frontMatter={frontMatter} />;
};

HomepageLocalEn.getInitialProps = async () => ({});

export default HomepageLocalEn;
