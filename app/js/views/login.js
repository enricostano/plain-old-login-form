'use strict';

var $ = require("jquery")
  , Backbone = require("backbone")
  , loginTemplate = require("../../templates/login.handlebars");

module.exports = Backbone.View.extend({
  el: "#login"
, template: loginTemplate()
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
});
