const express = require('express')
const app = express()
const ssbServer = require('./src/ssb')

process.env = process.env || {};
process.env.CHLORIDE_JS = 'yes'

// var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
// rn_bridge.channel.on('message', (msg) => {
//   rn_bridge.channel.send(msg);
// } );

// // Inform react-native node is initialized.
// rn_bridge.channel.send("Node was initialized.");

ssbServer()
  .then(sbot => {
    // rn_bridge.channel.on('message', (msg) => {
    //   if (msg === '')
    //   rn_bridge.channel.send(msg);
    // })
    app.get('/whoami', (req, res) => {
      sbot.whoami((err, info) => {
        res.json(info.id)
      })
    })
    app.get('/path', (req, res) => {
      res.json(config.path)
    })
    app.listen(3000)
  })
  .catch(err => console.log('Error on server', err))