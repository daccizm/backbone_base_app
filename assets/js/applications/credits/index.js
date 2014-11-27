/*
 * アプリケーション（取引一覧）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'models/credits/search/text_item',
  'models/credits/search/text_collection',
  'views/credits/index/search/text_item',
  'views/credits/index/search/text_add_item',
  'views/credits/index/search/text_collection',
  'views/credits/index/search/layout',
], function( $, _, Backbone, Marionette, SearchTextItem, SearchTextCollection, SearchTextItemView, SearchTextAddItemView, SearchTextCollectionView, SearchLayoutView ){
//   'views/credits/index/search/text_collection',
// ], function( $, _, Backbone, Marionette, SearchTextCollectionView, SearchLayoutView ){

  app = new Marionette.Application();

  app.addRegions({
    search: '#search-region',
    result: '#result-region',
  });

  /** 検索条件領域の初期処理 */
  app.addInitializer(function(){
    var layout = new SearchLayoutView();
    // var item = new SearchTextItem();
    // var collection = new SearchTextCollection([item.toJSON()]);
    // var addItemView = new SearchTextAddItemView({collection: collection});
    // var collectionView = new SearchTextCollectionView({collection: collection});
    // var layout = new SearchLayoutView({collectionView: collectionView});
    // layout.searchText.show(collectionView);
    // console.log(this);
    app.search.show(layout);
  });

  /** 検索結果領域の初期処理 */
  app.addInitializer(function(){
  });

  return app;
});