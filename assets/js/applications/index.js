/*
 * アプリケーション（ホーム）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  App = new Backbone.Marionette.Application();
  App.addInitializer(function(){
    // 初期処理
  });
  return App;
});