const request = require('supertest')
const should = require('should')
const { describe } = require('mocha')
const { it } = require('mocha')
const server = require('./index')

describe('GET /users!!!', () => {
  it('response get /users result!!', () => {
    request(server)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        // eslint-disable-next-line no-unused-expressions
        should(res.body).be.String
      })
  })
})

describe('GET /user/:id!!!', () => {
  it('response success!!', () => {
    request(server)
      .get('/api/user/1')
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        // eslint-disable-next-line no-unused-expressions
        should(res.body).be.String
      })
  })
})
