#!/usr/bin/env ruby
require 'webrick'

webrick_options = {
  Port: 4000,
  DocumentRoot: Dir.pwd
}

WEBrick::HTTPServer.new(webrick_options).start
