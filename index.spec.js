/* eslint-env mocha */

const app = require('.');
const request = require('supertest').agent(app.listen());

describe('Weather Reporter', () => {
  it('200', (done) => {
    request
      .get('/?zip=97201')
      .expect(200)
      .end(done);
  });

  it('400 - missing zip', (done) => {
    request
      .get('/')
      .expect(400)
      .end(done);
  });

  it('400 - invalid zip', (done) => {
    request
      .get('/?zip=00')
      .expect(400)
      .end(done);
  });
});
