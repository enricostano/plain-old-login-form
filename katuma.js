#!/usr/bin/env node
'use strict';

var http = require('http')
  , httpProxy = require('http-proxy')
  , spawn = require('child_process').spawn
  , proxy = httpProxy.createProxy()
  , webrick = spawn('./assets.rb')
  , config = {}
  , log = {};

config.port = 8000;

config.assets = {
  target: {
    host: 'localhost'
  , port: 4000
  }
};

config.api = {
  target: {
    host: 'localhost'
  , port: 3000
  }
};

process.on('SIGINT', function () {
  console.log('\nClosing Katuma development environment, see you soon!');
  process.kill(webrick);
  process.exit();
});

http.createServer(function (req, res) {
  var proxy_url
    , api_url = new RegExp("^\/api\/");

  if (api_url.exec(req.url)) {
    proxy_url = config.api;
  } else {
    proxy_url = config.assets;
  }

  proxy.web(req, res, proxy_url);
}).listen(config.port);

console.log('Katuma development environment running on localhost:' + config.port);
console.log('API server: ' + config.api.target.host + ':' + config.api.target.port);
console.log('\n');
console.log('Happy development!');
