#!/bin/bash
      # Helper script for Gradle to call node on macOS in case it is not found
      export PATH=$PATH:/Users/utunga/.nvm/versions/node/v10.13.0/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/utunga/dev/homesafe/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/utunga/dev/homesafe/node_modules/.bin:/Users/utunga/.rbenv/shims:/Users/utunga/.rbenv/bin:/Users/utunga/.nvm/versions/node/v10.13.0/bin:/Users/utunga/.pyenv/shims:/Users/utunga/.rbenv/shims:/Users/utunga/.rbenv/bin:/Users/utunga/.pyenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/fzf/bin
      node $@
    