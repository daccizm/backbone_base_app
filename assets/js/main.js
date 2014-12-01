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
  	text         : 'js/text',
  	applications : 'js/applications',
  	views        : 'js/views',
    models       : 'js/models',
  	templates    : 'js/templates',
  },
});

define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  return {};
});