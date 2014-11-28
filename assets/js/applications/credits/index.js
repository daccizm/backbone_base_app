/*
 * アプリケーション（取引一覧）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/credits/index/search/layout',
], function( $, _, Backbone, Marionette, SearchLayoutView ){

  app = new Marionette.Application();

  app.addRegions({
    search: '#search-region',
    result: '#result-region',
  });

  /** 検索条件領域の初期処理 */
  app.addInitializer(function(){
    var layout = new SearchLayoutView();
    app.search.show(layout);
  });

  /** 検索結果領域の初期処理 */
  app.addInitializer(function(){
  });

  return app;
});