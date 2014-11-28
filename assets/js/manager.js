/*
 * 基本設定
 */
require.config({
  baseUrl: '../assets',
  paths : {
  	jquery       : 'vendor/js/jquery-1.11.1.min',
  	underscore   : 'vendor/js/underscore-min',
    backbone     : 'vendor/js/backbone-min',
    marionette   : 'vendor/js/backbone.marionette.min',
  	text         : 'vendor/js/text',
    bootstrap    : 'vendor/js/bootstrap.min',
    manager      : 'js/manager',
    shareds      : 'js/apps/shareds',
    models       : 'js/apps/models',
  },
});

define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'bootstrap',
], function($, _, Backbone, Marionette){
  var Manager = new Marionette.Application();
  Manager.addRegions({
    header: "#header-region",
    footer: "#footer-region",
  });
  return Manager;
});