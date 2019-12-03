import NextRouter from 'next/router';
import { relations } from '../data/relations';

function nextPageFromLang(fromLanguage, toLanguage) {
  // console.log(NextRouter);
  // console.log(NextRouter.asPath);
  // console.log(NextRouter.route);

  let url = '/';
  let as = '/' + toLanguage;

  const routeParts = NextRouter.route.split('/');

  // console.log({ fromLanguage, toLanguage });

  // TODO - fix this for multi level folders
  // TODO - fallbacks for undefined, go to lang page

  relations.forEach(function(value) {
    let folder = value.folder[fromLanguage];
    if (!routeParts.includes(folder)) {
      return;
    }
    // console.log('here', value);

    let toFolder = value.folder[toLanguage];
    // console.log('toFolder', toFolder);

    value.files.forEach(function(file) {
      let x = file[fromLanguage];
      if (!routeParts.includes(x)) {
        return;
      }
      let toFile = file[toLanguage];
      url = '/' + toLanguage + '/' + toFolder + '/' + toFile;
      as = '/' + toLanguage + '/' + toFolder + '/' + toFile;
      // console.log('here file', file);
      return [url, as, { shallow: true }];
    });
  });

  // console.log([url, as]);
  return [url, as];
}

export { nextPageFromLang };
