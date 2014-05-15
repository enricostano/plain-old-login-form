'use strict';

var $ = jQuery

$(document).ready(function() {
  $("#html-form").submit(function() {
    var options = {
      type: "POST"
    , url: $("#html-form").attr("action")
    , data: $("#html-form").serialize()
    , dataType: "json"
    , success: function(json, status, xhr) {
        console.log(json);
        alert("Status is: " + status);
      }
    , error: function(xhr, status, error) {
        console.log("Status is: " + status);
      }
    };

    $.ajax(options);
  });

  $("#signup-form").submit(function() {
    var options = {
      type: "POST"
    , url: $("#signup-form").attr("action")
    , data: $("#signup-form").serialize()
    , dataType: "json"
    , success: function(json, status, xhr) {
        console.log(json);
        alert("Status is: " + status);
      }
    , error: function(xhr, status, error) {
        console.log("Status is: " + status);
      }
    };

    $.ajax(options);
  });

  $("#logout-form").submit(function() {
    var options = {
      type: "DELETE"
    , url: $("#logout-form").attr("action")
    , success: function(json, status, xhr) {
        console.log(json);
        alert("Status is: " + status);
      }
    , error: function(xhr, status, error) {
        console.log("Status is: " + status);
      }
    };

    $.ajax(options);
  });
});
