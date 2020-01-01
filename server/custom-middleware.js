const pathMatch = require('path-match');

const {
  addSubpath,
  lngFromReq,
  redirectWithoutCache,
  removeSubpath,
  subpathFromLng,
  subpathIsPresent,
  subpathIsRequired,
} = require('next-i18next/dist/commonjs/utils');

const route = pathMatch();

module.exports.default = function(nexti18next) {
  const { config, i18n } = nexti18next;
  const { allLanguages, ignoreRoutes, localeSubpaths } = config;

  const isI18nRoute = req => ignoreRoutes.every(x => !req.url.startsWith(x));
  const localeSubpathRoute = route(`/:subpath(${Object.values(localeSubpaths).join('|')})(.*)`);

  const middleware = [];

  /*
    This does the locale subpath work
  */
  middleware.push((req, res, next) => {
    if (isI18nRoute(req) && req.i18n) {
      let currentLng = lngFromReq(req);

      const currentLngSubpath = subpathFromLng(config, currentLng);

      // if we're working with docs then
      // we have /docs/intro
      // we need to add the language back in to the req.url
      // for next fo find the correct mdx file

      let url = req.url;
      // console.log(url);
      const urlArray = url.split('/');

      if (!urlArray.includes('locales') && url !== '/') {
        req.url = addSubpath(url, currentLngSubpath);
        // console.log(url);
      }
    }

    next();
  });

  return middleware;
};
