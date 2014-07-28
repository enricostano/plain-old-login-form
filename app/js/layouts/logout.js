'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , logoutLayout;

logoutLayout = {
  template: require("../../templates/logout.handlebars")
, className: "js-logout-page"
};

module.exports = Backbone.Marionette.Layout.extend(logoutLayout);
