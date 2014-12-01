/*
 * ItemView（検索項目追加）
 */
define([
  'text!templates/credits/index/search/text_item.html',
], function(template){

  var ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: _.template(template),
    ui: {
      remove: '.delete',
    },
    events: {
      'click @ui.remove': 'delete_item',
    },
    delete_item: function() {
      this.model.destroy();
    },
  });

  return ItemView;
});
