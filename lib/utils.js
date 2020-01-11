import NextRouter from 'next/router';
import { relations } from '../pages/_relations';

function nextPageFromLang(fromLanguage, toLanguage) {
  // console.log(NextRouter);
  // console.log(NextRouter.asPath);
  // console.log(NextRouter.route);

  let url = `/${toLanguage}`;
  let as = `/${toLanguage}`;

  const routeParts = NextRouter.route.split('/');

  // console.log({ fromLanguage, toLanguage });

  // TODO - fix this for multi level folders
  // TODO - fallbacks for undefined, go to lang page

  relations.forEach(function(value) {
    const folder = value.folder[fromLanguage];
    if (!routeParts.includes(folder)) {
      return;
    }
    // console.log('here', value);

    const toFolder = value.folder[toLanguage];
    // console.log('toFolder', toFolder);

    value.files.forEach(function(file) {
      const x = file[fromLanguage];
      if (!routeParts.includes(x)) {
        return;
      }
      const toFile = file[toLanguage];
      url = `/${toLanguage}/${toFolder}/${toFile}`;
      as = `/${toLanguage}/${toFolder}/${toFile}`;
      // console.log('here file', file);
      return [url, as, { shallow: true }];
    });
  });

  // console.log([url, as]);
  return [url, as];
}

function compareOrder(a, b) {
  if (!a.order || !b.order) {
    return 0;
  }
  return Number.parseInt(b.order) > Number.parseInt(a.order) ? -1 : 1;
}

export { nextPageFromLang, compareOrder };
