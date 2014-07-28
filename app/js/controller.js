'use strict';

var $ = require("jquery")
  , Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , loginLayout = require("./layouts/login.js")
  , signupLayout = require("./layouts/signup.js")
  , logoutLayout = require("./layouts/logout.js")
  , dashboardLayout = require("./layouts/dashboard.js")
  , Controller = {};

Controller.login = function () {
  Katuma.mainRegion.show(new loginLayout());
};

Controller.signup = function () {
  Katuma.mainRegion.show(new signupLayout());
};

Controller.logout = function () {
  var options = {
    type: "DELETE"
      , url: '/api/v1/sessions'
      , success: function(json, status, xhr) {
        Katuma.mainRegion.show(new logoutLayout());
      }
    , error: function(xhr, status, error) {
      console.log("[Failure] Status is: " + status);
    }
  };
  $.ajax(options);
};

Controller.dashboard = function () {
  Katuma.mainRegion.show(new dashboardLayout());
};

module.exports = Backbone.Marionette.Controller.extend(Controller);
