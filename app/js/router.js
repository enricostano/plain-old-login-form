'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , Router;

Router = {
  appRoutes: {
    "login": "login"
  //, "signup": "signup"
  //, "logout": "logout"
  }
};

module.exports = Backbone.Marionette.AppRouter.extend(Router);
