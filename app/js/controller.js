'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , loginView = require("./views/login.js")
  , logoutView = require("./views/logout.js")
  , signupView = require("./views/signup.js")
  , Controller = {};

Controller.login = function () {
  Katuma.mainRegion.show(new loginView());
};

module.exports = Backbone.Marionette.Controller.extend(Controller);
