const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const Koa = require('koa');
const request = require('request-promise-native');
const assert = require('assert');

const config = require('./config');

const app = new Koa();

// Middleware
app.use(logger());
app.use(koaBody());

// Route handler
async function getWeather(ctx) {
  try {
    assert(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(ctx.query.zip));
  } catch (e) {
    ctx.throw(400, 'invalid zip');
  }

  console.log(`Retrieving weather for ${ctx.query.zip}`);
  const req = await request(`${config.weatherApiUrl}?zip=${ctx.query.zip}&APPID=${config.unsecuredApiKey}`);

  ctx.body = `Current weather in ${ctx.query.zip} is ${req}`;
}

// Router
router.get('/', getWeather);
app.use(router.routes());

// Server
// Don't listen to this port if the app is required from a test script.
if (!module.parent) {
  app.listen(8080);
  console.log('Listening on port 8080');
}

module.exports = app;
