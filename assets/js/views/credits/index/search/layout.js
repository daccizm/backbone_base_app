/*
 * LayoutView（検索領域）
 */
define([
  'models/credit/search/text_item',
  'models/credit/search/text_collection',
  'views/credits/index/search/text_add_item',
  'views/credits/index/search/text_collection',
  'text!templates/credits/index/search/layout.html',
], function( SearchTextItem, SearchTextCollection, SearchTextAddItemView, SearchTextCollectionView, SearchLayoutTemplate ){

  var LayoutView = Marionette.LayoutView.extend({

    tagName: 'div',

    template: _.template(SearchLayoutTemplate),

    regions: {
      'searchText' : '#search-text-region',
      'searchDate' : '#search-date-region',
    },

    onRender: function(){
      /** 検索入力（テキスト）領域の描画 */
      var collectionView = new SearchTextCollectionView({collection: this.collection});
      this.searchText.show(collectionView);
    },

  });

  return LayoutView;
});