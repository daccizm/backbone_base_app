/*
 * ItemView（検索項目追加）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  var AddSearchItemView = Backbone.Marionette.ItemView.extend({
    template: false,
    el: '#search-form',
    ui: {
      btn: '#add-item',
    },
    events: {
      'click @ui.btn': 'add_item',
    },
    add_item: function(e) {
      // TODO: Collection に Model を add
    },

  });

  return AddSearchItemView;
});
