'use strict';

var $ = jQuery

var Router = Backbone.Router.extend({
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

var loginView = Backbone.View.extend({
  el: "#login"
, template: "<h2>Log in</h2><form id='html-form' action='api/v1/sessions' method='post'><label for='email'>email</label><input id='email' name='email' type='text' size='40' value='' maxlength='50' /><label for='password'>password</label><input id='password' name='password' type='password' size='40' value='' maxlength='50' /><input id='loginSubmit' type='submit' value='Log in' class='button' /></form>"
, render: function() {
    this.$el.html(this.template);
  }
, events: {
    "click #loginSubmit": "loginSubmit"
  }
, loginSubmit: function(event) {
    var options = {
      type: "POST"
    , url: this.$("#html-form").attr("action")
    , data: this.$("#html-form").serialize()
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

var signupView = Backbone.View.extend({
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

var logoutView = Backbone.View.extend({
  el: "#logout"
, template: "<h2>Log out</h2><form id='logout-form' action='api/v1/sessions' method='delete'><input id='logoutSubmit' type='submit' value='Log out' class='button' /></form>"
, render: function() {
    this.$el.html(this.template);
  }
, events: {
    "click #logoutSubmit": "logoutSubmit"
  }
, logoutSubmit: function(event) {
    var options = {
      type: "DELETE"
    , url: this.$("#logout-form").attr("action")
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

var router = new Router();

Backbone.history.start();
