import React from 'react';
import { frontMatter } from './**/*.mdx';
import { compareOrder } from '../../lib/utils.js';
import Homepage from '../index';

const HomepageLocalEs = () => {
  frontMatter.sort(compareOrder);
  return <Homepage frontMatter={frontMatter} />;
};

HomepageLocalEs.getInitialProps = async () => ({});

export default HomepageLocalEs;
