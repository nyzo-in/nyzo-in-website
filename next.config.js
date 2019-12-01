const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  scan: {
    hasMesh: {
      pattern: /<Mesh.*.*\/>/
    },
    meshName: {
      pattern: /<Mesh.*name=['"](.*)['"].*\/>/,
      transform: arr => arr[1] // An optional callback function that transforms the result of the match operation
    }
  }
})()