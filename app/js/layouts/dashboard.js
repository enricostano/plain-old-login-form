'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , Groups = require("../collections/groups.js")
  , groupsCollectionView = require("../views/groups.js")
  , dashboardLayout;

dashboardLayout = {
  template: require("../../templates/dashboard.handlebars")
, className: "js-dashboard"
, regions: {
    groups: "js-groups-container"
  }
};

dashboardLayout.onRender = function () {
  self.groups = new groupsCollectionView(Groups)
};

module.exports = Backbone.Marionette.Layout.extend(dashboardLayout);
