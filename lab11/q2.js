const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/image') {
    res.setHeader('Content-Type', 'image/jpeg')
    fs.createReadStream('puppy.jpg').pipe(res)
  } else if (req.url === '/pdf') {
    res.setHeader('Content-Type', 'application/pdf')
    fs.createReadStream('sample.pdf').pipe(res)
  } else if (req.url === '/home') {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to my website')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
