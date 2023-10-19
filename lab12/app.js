const express = require('express')
const path = require('path')
const app = express()
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const port = process.env.PORT

app.use(express.static('public'))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.use((req, res, next) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'public', '404.html'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
