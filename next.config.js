const path = require('path');
const withMdxEnhanced = require('next-mdx-enhanced');
const ExtraWatchPlugin = require('extra-watch-webpack-plugin');

module.exports = withMdxEnhanced({
  scan: {
    hasMesh: {
      pattern: /<Mesh.*.*\/>/,
    },
    meshName: {
      pattern: /<Mesh.*name=['"](.*)['"].*\/>/,
      // An optional callback function that transforms the result of the match operation
      transform: arr => arr[1],
    },
  },
})({
  webpack: config => {
    config.plugins.push(
      new ExtraWatchPlugin({
        dirs: [path.join(config.context, 'pages')],
      }),
    );
    return config;
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
});
