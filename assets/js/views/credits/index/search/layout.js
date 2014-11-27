/*
 * LayoutView（検索領域）
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
  'text!templates/credits/index/search/layout.html',
], function( $, _, Backbone, Marionette, SearchTextItem, SearchTextCollection, SearchTextItemView, SearchTextAddItemView, SearchTextCollectionView, SearchLayoutTemplate ){

  var LayoutView = Marionette.LayoutView.extend({

    tagName: 'div',

    template: _.template(SearchLayoutTemplate),

    regions: {
      'searchText' : '#search-text-region',
      'searchDate' : '#search-date-region',
      'searchTextAction' : '#search-text-action',
    },

    onRender: function() {
      var item = new SearchTextItem();
      var collection = new SearchTextCollection([item.toJSON()]);
      var collectionView = new SearchTextCollectionView({collection: collection});
      var addItemView = new SearchTextAddItemView({collection: collection});
      // console.log(this);
      this.searchText.show(collectionView);
    }
    // onRender: function() {
    //   this.searchText.show(this.collectionView);
    // }

  });

  return LayoutView;
});