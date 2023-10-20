const express = require('express')
const app = express()
const studentRouter = require('./router/studentRouter')
const port = process.env.PORT

app.use(express.json())

app.use('/students', studentRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})