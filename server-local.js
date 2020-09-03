const path = require('path')
const express = require('express')
const app = express()
const PORT = 3001

// Local asset serving pipe ~ "bg" directory
function startServer() {
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.static(path.join(__dirname, 'assets')))
  app.listen(PORT, () => console.info(`Local image asset server started :: ${PORT} 🚀`))
}
startServer()
