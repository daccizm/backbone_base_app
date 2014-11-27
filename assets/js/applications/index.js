/*
 * アプリケーション（ホーム）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  app = new Backbone.Marionette.Application();
  app.addInitializer(function(){
    // 初期処理
  });
  return app;
});