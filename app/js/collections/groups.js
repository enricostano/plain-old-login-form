'use strict';

var Backbone = require("backbone")
  , Groups;

Groups = {
  model: require("../models/group.js")
, url: 'http://localhost:8000/api/v1/groups'
};

module.exports = Backbone.Collection.extend(Groups);
