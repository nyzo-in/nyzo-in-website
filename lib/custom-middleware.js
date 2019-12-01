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

      // const currentLngRequiresSubpath = subpathIsRequired(config, currentLng);
      // const currentLngSubpathIsPresent = subpathIsPresent(req.url, currentLngSubpath);

      // const lngFromCurrentSubpath = allLanguages.find(l =>
      //   subpathIsPresent(req.url, subpathFromLng(config, l)),
      // );

      // if (lngFromCurrentSubpath !== undefined && lngFromCurrentSubpath !== currentLng) {
      //   /*
      //     If a user has hit a subpath which does not
      //     match their language, give preference to
      //     the path, and change user language.
      //   */
      //   req.i18n.changeLanguage(lngFromCurrentSubpath);
      //   currentLng = lngFromCurrentSubpath;
      // } else if (currentLngRequiresSubpath && !currentLngSubpathIsPresent) {
      //   /*
      //     If a language subpath is required and
      //     not present, prepend correct subpath
      //   */
      //   return redirectWithoutCache(res, addSubpath(req.url, currentLngSubpath));
      // }

      /*
        If a locale subpath is present in the URL,
        modify req.url in place so that NextJs will
        render the correct route
      */

      // if we're working with docs then
      // we have /docs/intro
      // we need to add the language back in to the req.url
      // for next fo find the correct mdx file

      console.log(req.url);

      var array = req.url.split('/');

      console.log(req.url);

      if (array.includes('docs')) {
        req.url = addSubpath(req.url, currentLngSubpath);
        console.log(req.url);
      }

      if (typeof lngFromCurrentSubpath === 'string') {
        const params = localeSubpathRoute(req.url);
        if (params !== false) {
          const { subpath } = params;
          // req.query = { ...req.query, subpath, lng: currentLng };
          // req.url = removeSubpath(req.url, subpath);
        }
      }
    }

    next();
  });

  return middleware;
};
