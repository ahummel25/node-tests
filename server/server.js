const express = require('express')

var app = express()

app.get('/', (req, res) => {
   res.status(404).send({
      error: 'Page not found'
   })
})

app.listen(8000)

module.exports.app = app