'use strict';

var Backbone = require("backbone");

module.exports = Backbone.View.extend({
  el: "#signup"
, template: "<h2>Sign up</h2><form id='signup-form' action='api/v1/users' method='post'><label for='name'>name</label><input id='name' name='name' type='text' size='40' value='' maxlength='50' /><label for='email'>email</label><input id='email' name='email' type='text' size='40' value='' maxlength='50' /><label for='password'>password</label><input id='password' name='password' type='password' size='40' value='' maxlength='50' /><label for='password_confirmation'>password confirmation</label><input id='password_confirmation' name='password_confirmation' type='password' size='40' value='' maxlength='50' /><input id='signupSubmit' type='submit' value='Sign up' class='button' /></form>"
, render: function() {
    this.$el.html(this.template);
  }
, events: {
    "click #signupSubmit": "signupSubmit"
  }
, signupSubmit: function(event) {
    var options = {
      type: "POST"
    , url: this.$("#signup-form").attr("action")
    , data: this.$("#signup-form").serialize()
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
