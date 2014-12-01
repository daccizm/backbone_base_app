/*
 * ItemView（検索項目追加）
 */
define([
  'models/credit/search/text_item',
  'models/credit/search/text_collection',
], function(SearchTextItem, SearchTextCollection){
  var ItemView = Marionette.ItemView.extend({
    template: false,
    el: '#search-text-action',
    ui: {
      add: '#add-text-item',
      remove: '.delete',
    },
    events: {
      'click @ui.add': 'add_item',
      'click @ui.remove': 'delete_item',
    },
    add_item: function() {
      this.collection.add(new SearchTextItem());
    },
    delete_item: function() {
      console.log(this.collection);
      // this.collection.remove();
    },
  });

  return ItemView;
});
