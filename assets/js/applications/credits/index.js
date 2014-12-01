/*
 * アプリケーション（取引一覧）
 */
define([
  'models/credit/search/text_item',
  'models/credit/search/text_collection',
  'views/credits/index/search/layout',
  'views/credits/index/search/text_add_item',
  'views/credits/index/search/action',
  'text!templates/credits/index/search/layout.html',
  'models/credit/api/collection',
  'views/credits/index/result/layout',
], function( SearchTextItem, SearchTextCollection, SearchLayoutView, SearchTextAddItemView, SearchActionItemView, SearchLayoutTemplate, ResultCollection, ResultLayoutView ){

  var App = Marionette.Application.extend({});

  app = new App();

  app.addRegions({
    search: '#search-region',
    result: '#result-region',
  });

  /** 検索入力欄のインスタンス生成 */
  var item = new SearchTextItem();
  var collection = new SearchTextCollection([item.toJSON()]);

  /** 検索APIのインスタンス生成 */
  var apiCredits = new ResultCollection({});

  /** 検索条件領域の初期処理 */
  app.addInitializer(function(){

    collection.on("remove", function(model, collections, options) {
      // alert();
    });

    /** 検索領域の描画 */
    var layout = new SearchLayoutView({collection: collection});
    this.search.show(layout);

    // /** 検索入力（テキスト）追加のインスタンス生成 */
    var addItemView = new SearchTextAddItemView({collection: collection});

    /** 検索アクションのインスタンス生成 */
    var actionItemView = new SearchActionItemView({
      collection: collection,
      apiCredits: apiCredits,
    });

    /** 検索実行 */
    actionItemView.search();

    // var layout = new SearchLayoutView();
    // var controller = new CreditsIndexController({searchTextCollection: collection});

    // app.search.show(layout);

    // controller.showSearchText(layout);


    // var collectionView = new SearchTextCollectionView({collection: collection});

    // layout.listenTo(layout, "show", function(credits){
    //   this.searchText.show(collectionView);
    // });

    // var c = new Con({ credits: [{type_code: "hoge"}] });
    // c.listenTo(c, "stuff:done", function(credits){
    // });

    // c.doStuff();

  });

  /** 検索結果領域の初期処理 */
  app.addInitializer(function(){
    var layout = new ResultLayoutView({collection: apiCredits});
    this.result.show(layout);
  });

  return app;
});