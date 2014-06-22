'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , groupView = require("./group.js")
  , groupsView;

groupsView = {
  className: 'js-groups'
, itemView: groupView
};

module.exports = Backbone.Marionette.CollectionView.extend(groupsView);
