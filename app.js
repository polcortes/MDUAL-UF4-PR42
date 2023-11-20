const express = require('express')
const shadowsObj = require('./utilsShadows.js')
const webSockets = require('./utilsWebSockets.js')
ws = new webSockets();

var ws = new webSockets()
let shadows = new shadowsObj()

// Start HTTP server
const app = express()
const port = process.env.PORT || 8888

// Publish static files from 'public' folder
app.use(express.static('public'))

// Activate HTTP server
const httpServer = app.listen(port, appListen)
async function appListen () {
  await shadows.init('./public/index.html', './public/shadows')
  console.log(`Listening for HTTP queries on: http://localhost:${port}`)
  console.log(`Development queries on: http://localhost:${port}/index-dev.html`)
}

// Close connections when process is killed
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  httpServer.close()
  ws.end()
  process.exit(0);
}

// WebSockets
ws.init(httpServer, port)
