/*
 * アプリケーション（取引一覧）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/credits/index/add_search_item',
], function($, _, Backbone, Marionette, AddSearchItemView, SearchItemView){
  App = new Backbone.Marionette.Application();
  App.addInitializer(function(){
    var addSearchItemView = new AddSearchItemView();
  });
  return App;
});