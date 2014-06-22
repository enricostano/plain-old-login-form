'use strict';

var $ = require("jquery")
  , Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , loginLayout;

loginLayout = {
  template: require("../../templates/login.handlebars")
, className: "js-login-page"
, events: {
    "click #loginSubmit": "loginSubmit"
  }
, loginSubmit: function(event) {
    var options = {
      type: "POST"
    , url: this.$("#login-form").attr("action")
    , data: this.$("#login-form").serialize()
    , success: function(json, status, xhr) {
        document.location.hash = '#/dashboard';
      }
    , error: function(xhr, status, error) {
        console.log("[Failure] Status is: " + status);
      }
    };

    event.preventDefault();
    $.ajax(options);
  }
};

module.exports = Backbone.Marionette.Layout.extend(loginLayout);
