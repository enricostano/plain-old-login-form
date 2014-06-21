'use strict';

var $ = require("jquery")
  , Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , loginLayout;

loginLayout = {
  template: require("../../templates/login.handlebars")
, className: "js-login-page"
, render: function() {
    this.$el.html(this.template);
  }
, events: {
    "click #loginSubmit": "loginSubmit"
  }
, loginSubmit: function(event) {
    var options = {
      type: "POST"
    , url: this.$("#login-form").attr("action")
    , data: this.$("#login-form").serialize()
    , dataType: "json"
    , success: function(json, status, xhr) {
        console.log(json);
        alert("Status is: " + status);
      }
    , error: function(xhr, status, error) {
        console.log("Status is: " + status);
      }
    };

    event.preventDefault();
    $.ajax(options);
  }
};

module.exports = Backbone.Marionette.Layout.extend(loginLayout);
