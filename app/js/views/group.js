'use strict';

var Backbone = require("backbone")
  , Marionette = require("backbone.marionette")
  , itemView;

itemView = {
  className: 'js-group-element'
, template: 'ppa'
};

module.exports = Backbone.Marionette.ItemView.extend(itemView);
