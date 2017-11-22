const utils = require('./utils')
const chai = require('chai')
const expect = chai.expect

it('should add two numbers', () => {
   expect(utils.add(5, 10)).to.be.a('number')
                           .to.equal(15)
                           
})

it('should square a number', () => {
    expect(utils.square(10)).to.be.a('number')
                            .to.equal(100)
})

it('should expect some values', () => {
    //expect(12).to.not.equal(11)
    //expect({name: 'User'}).to.deep.equal({name: 'User'})
    expect([1, 2, 3]).to.include(3)
    expect([1, 2, 3]).to.not.be.empty
    expect([]).to.be.empty
    expect({
        name: 'User',
        age: 30,
        location: 'St. Louis'
    }).to.include({name: 'User'})
})

it('should verify first and last names are set', () => {
    var user = {
        age: 30,
        location: 'St. Louis'
    }

    expect(utils.setName(user, 'Andrew Hummel')).to.be.an('object')
                                                .to.include({firstName: 'Andrew'})
                                                .to.include({lastName: 'Hummel'})
})

it('should async add two numbers', (done) => {
    utils.asyncAdd(5, 3, (sum) => {
        expect(sum).to.equal(8)
                   .to.be.a('number')
        done()
    })
})

it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).to.equal(25)
                   .to.be.a('number')
        done()
    })
})