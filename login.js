'use strict';

var $ = jQuery

$(document).ready(function() {
  $("html-form").submit(function() {
    var options = {
      type: "POST"
    , url: $("html-form").attr("action")
    , data: $("html-form").serialize()
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
});
