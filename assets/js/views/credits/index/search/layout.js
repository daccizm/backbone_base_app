/*
 * LayoutView（検索領域）
 */
define([
  'models/credit/search/text_item',
  'models/credit/search/text_collection',
  'views/credits/index/search/text_item',
  'views/credits/index/search/text_add_item',
  'views/credits/index/search/text_collection',
  'text!templates/credits/index/search/layout.html',
], function( SearchTextItem, SearchTextCollection, SearchTextItemView, SearchTextAddItemView, SearchTextCollectionView, SearchLayoutTemplate ){

  var LayoutView = Marionette.LayoutView.extend({

    tagName: 'div',

    template: _.template(SearchLayoutTemplate),

    regions: {
      'searchText' : '#search-text-region',
      'searchTextAction' : '#search-text-action',
      'searchDate' : '#search-date-region',
      'searchAction' : '#search-action-region',
    },

    onRender: function() {
      var item = new SearchTextItem();
      var collection = new SearchTextCollection([item.toJSON()]);
      var collectionView = new SearchTextCollectionView({collection: collection});
      var addItemView = new SearchTextAddItemView({collection: collection});
      this.searchText.show(collectionView);
    }
  });

  return LayoutView;
});