const express = require('express')
const app = express()
const port = 5555
app.listen(port, (err) =>
  err
    ? console.log('Error!', err)
    : console.log(`The server is running on port: ${port}`),
)
