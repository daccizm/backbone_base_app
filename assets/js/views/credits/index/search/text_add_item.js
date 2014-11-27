/*
 * ItemView（検索項目追加）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'models/credits/search/text_item',
], function($, _, Backbone, Marionette, SearchTextItem){
  var ItemView = Marionette.ItemView.extend({
    template: false,
    el: '#search-text-action',
    ui: {
      btn: '#add-text-item',
    },
    events: {
      'click @ui.btn': 'add_search_text_item',
    },
    add_search_text_item: function() {
      alert();
      // var item = new SearchTextItem();
      // this.collection.add(item);
      // console.log(this.collection)
    },
  });

  return ItemView;
});
