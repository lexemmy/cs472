const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET request to /users' })
})

router.post('/', (req, res) => {
  const user = req.body
  res.json({ message: 'POST request to /users', user })
})

module.exports = router
