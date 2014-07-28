'use strict';

var $ = require("jquery")
  , Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , signupLayout;

signupLayout = {
  template: require("../../templates/signup.handlebars")
, className: "js-signup-page"
, events: {
    "click #signupSubmit": "signupSubmit"
  }
, signupSubmit: function(event) {
    var options = {
      type: "POST"
    , url: this.$("#signup-form").attr("action")
    , data: this.$("#signup-form").serialize()
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

module.exports = Backbone.Marionette.Layout.extend(signupLayout);
