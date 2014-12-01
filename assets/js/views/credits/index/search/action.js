/*
 * ItemView（検索アクション）
 */
define([
  'models/credit/api/collection',
], function(ApiCollection){
  var ItemView = Marionette.ItemView.extend({
    initialize: function(option){
      this.collection = option.collection
      this.apiCredits = option.apiCredits
    },
    template: false,
    el: '#search-action-region',
    ui: {
      reset: '#reset-item',
      search: '#search-credits',
    },
    events: {
      'click @ui.reset': 'reset_item',
      'click @ui.search': 'search',
    },
    reset_item: function() {
      this.collection.reset();
    },
    search: function() {
      // this.apiCredits.fetch({
      //   data : {},
      //   dataType : 'json',
      //   success : function (collection, res, options) {
      //   },
      //   error : function (collection, res, options) {
      //   },
      // });
    },
  });

  return ItemView;
});
