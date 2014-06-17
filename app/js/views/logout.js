'use strict';

var Backbone = require("backbone");

module.exports = Backbone.View.extend({
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
