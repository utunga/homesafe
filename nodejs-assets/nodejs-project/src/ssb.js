const fs = require('fs')
const os = require('os')
const path = require('path')
const mkdirp = require('mkdirp')
const manifest = require('./manifest')
const ssbKeys = require('ssb-keys')
// Hack until appDataDir plugin comes out
let  writablePath = path.join(__dirname, '..');
// iOS
if (process.platform==='ios') {
  writablePath = path.join(os.homedir(), 'Documents')
}

const ssbPath = path.resolve(writablePath, '.ssb');
if (!fs.existsSync(ssbPath)) {
  mkdirp.sync(ssbPath);
}

const keys = ssbKeys.loadOrCreateSync(path.join(ssbPath, '/secret'));
const config = require('ssb-config/inject')();
config.path = ssbPath;
config.keys = keys;
config.manifest = manifest;

const startSsbServer = () => new Promise((resolve, reject) => {
  console.log('Starting SSB SERVER')
  const sbot = require('ssb-server')
    .use(require('ssb-server/plugins/master'))
    .use(require('ssb-gossip'))
    .use(require('ssb-replicate'))
    .use(require('ssb-friends'))
    .use(require('ssb-blobs'))
    .use(require('ssb-serve-blobs'))
    .use(require('ssb-backlinks'))
    .use(require('ssb-private'))
    .use(require('ssb-about'))
    .use(require('ssb-contacts'))
    .use(require('ssb-query'))
    .use(require('ssb-threads'))
    .use(require('ssb-invite'))
    .use(require('ssb-server/plugins/local'))
    .use(require('ssb-server/plugins/logging'))
    .call(null, config)

  resolve(sbot)
})

module.exports = startSsbServer