'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , loginLayout = require("./layouts/login.js")
  , dashboardLayout = require("./layouts/dashboard.js")
  , Controller = {};

Controller.login = function () {
  Katuma.mainRegion.show(new loginLayout());
};

Controller.dashboard = function () {
  Katuma.mainRegion.show(new dashboardLayout());
};

module.exports = Backbone.Marionette.Controller.extend(Controller);
