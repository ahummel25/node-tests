const chai = require('chai')
const rewire = require('rewire')
const spies = require('chai-spies-next')
const expect = chai.expect

var app = rewire('./app')

chai.use(spies)

describe('App', () => {
    var db = {
        saveUser: chai.spy()
    }
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        var spy = chai.spy()
        spy('foo', 25)
        expect(spy).to.have.been.called.with('foo', 25)
    })

    it('should call saveUser with user object', () => {
        var email = 'ahummel25@gmail.com',
            password = '123abc'

        app.handleSignup(email, password)
        expect(db.saveUser).to.have.been.called.with({
            email,
            password
        })
    })
})