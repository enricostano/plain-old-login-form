'use strict';

var Backbone = require("backbone")
  , loginView = require("./views/login.js")
  , logoutView = require("./views/logout.js")
  , signupView = require("./views/signup.js");

module.exports = Backbone.Router.extend({
  routes: {
    "login": "login"
  , "signup": "signup"
  , "logout": "logout"
  }
, login: function() {
    this.view = new loginView();
    this.view.render();
  }
, signup: function() {
    this.view = new signupView();
    this.view.render();
  }
, logout: function() {
    this.view = new logoutView();
    this.view.render();
  }
});
