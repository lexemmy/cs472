// routes/products.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET request to /products' })
})

router.post('/', (req, res) => {
  const product = req.body

  res.json({ message: 'POST request to /products', product })
})

module.exports = router
