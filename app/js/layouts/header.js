'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , headerLayoutTemplate = require("../../templates/header.handlebars")
  , headerLayout;

headerLayout = {
  template: headerLayoutTemplate()
, regions: {
    buttons: "#js-nav-buttons"
  }
, events: {
    'click #js-login-button': 'onLoginButtonClick'
  }
};

headerLayout.onLoginButtonClick = function () {
  console.log('Log in clicked');
};

module.exports = Backbone.Marionette.Layout.extend(headerLayout);
