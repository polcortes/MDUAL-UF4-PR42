const express = require('express')
const url = require('url')
const database = require('./utilsMySQL.js')
const Obj = require('./utilsMySQL.js')
const app = express()
const port = 3000
const webSockets = require('./utilsWebSockets.js');
ws = new webSockets();

// Crear i configurar l'objecte de la base de dades
var db = new database();
db.init({
  host: 'localhost',
  port: 3306,
  user: "root",
  password: "pwd",
  database: "Pr42"
});

// Publicar arxius carpeta ‘public’ 
app.use(express.static('public'));

// Configurar per rebre dades POST en format JSON
app.use(express.json());

// Activar el servidor 
const httpServer = app.listen(port, appListen)
async function appListen () {
  await shadows.init('./public/index.html', './public/shadows');
  console.log(`Example app listening on: http://localhost:${port}`);
}


function connect(protocol, ip, port) {
    socket = new WebSocket(`${protocol}://${ip}:${port}`)
    socket.onopen = function(e) {
        console.log("Socket connected")
        // Què fer quan un client es connecta?
    }
    socket.onmessage = function(event) {
        let obj = JSON.parse(event.data)
        // Què fer quan rebem un missatge del servidor?
    }
    socket.onerror = function(error) {
        console.log(`WebSocket error: ${error}`)
// Què fer quan es produeix un error?
    }
    socket.onclose = async function(event) {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly`)
        } else {
            console.log('[close] Connection died')
        }
        // Què fer quan un client es desconnecta?
    }
}

