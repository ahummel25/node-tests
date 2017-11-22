const request = require('supertest')
const chai = require('chai')
const expect = chai.expect

var app = require('./server').app

describe('server', () => {

    describe('GET /', () => {
        it('should return hello response', (done) => {
            request(app).get('/')
                        .expect(404)
                        .expect((res) => {
                            expect(res.body).to.include({
                                error: 'Page not found'
                            })
                        })
                        .end(done)
         })
    })
     
    describe('GET /users', () => {
        it('should return an array of users', (done) => {
            request(app).get('/users')
                        .expect(200)
                        .expect((res) => {
                            expect(res.body).to.be.an('array')
                                            .to.have.lengthOf(3)
                            expect(res.body[0]).to.include({name: 'user1', age: 20})
                        })
                        .end(done)
         })
    })
})
