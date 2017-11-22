const express = require('express')

var app = express()

app.get('/', (req, res) => {
   res.status(404).send({
      error: 'Page not found',
      name: 'Todo App v1.0'
   })
})

app.get('/users', (req, res) => {
    res.status(200).send([
        {name: 'user1', age: 20},
        {name: 'user2', age: 30},
        {name: 'user3', age: 40},
    ])
 })

app.listen(8000)

module.exports.app = app