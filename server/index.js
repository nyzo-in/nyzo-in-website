const { setConfig } = require('next/config');
setConfig(require('../next.config'));

const fs = require('fs');
const express = require('express');
const path = require('path');
const next = require('next');
const fetch = require('isomorphic-unfetch');
const mcache = require('memory-cache');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const customMiddleware = require('../lib/custom-middleware.js').default;
const cpx = require('cpx');

const nextI18next = require('../i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const server = express();

cpx.watch('./content/pages/*/**', './pages').on('copy', e => {});

const cache = duration => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

const API_URL = `http://nyzo.xyz/supply`;

server.get('/api/xyz/supply', cache(10), async (req, res) => {
  const r = await fetch(API_URL);
  const text = await r.text();
  res.send(text);
});

(async () => {
  await app.prepare();

  server.use('/locales', express.static(path.join(__dirname, '../content/locales')));

  server.use(nextI18NextMiddleware(nextI18next));

  // var myLogger = function(req, res, next) {
  //   console.log('LOGGED');
  //   next();
  // };

  server.use(customMiddleware(nextI18next));

  server.get('*', (req, res) => {
    // console.log(req);
    // console.log(res);
    handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
