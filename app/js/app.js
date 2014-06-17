'use strict';

require("../../lib/bootstrap-3.1.1-dist/css/bootstrap.css");
require("../styles/main.css");
require("imports?jQuery=jquery!../../lib/bootstrap-3.1.1-dist/js/bootstrap.js");

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , headerLayout = require("./layouts/header.js")
  , Katuma = new Marionette.Application({});

Katuma.rootRoute = "/";

Katuma.addRegions({
  navRegion: "#js-nav-region"
, mainRegion: "#js-main-region"
});

Katuma.addInitializer(function(options) {
  Katuma.navRegion.show(new headerLayout);
});

Katuma.on("initialize:after", function(){
  Backbone.history.start();
});

Katuma.start();
