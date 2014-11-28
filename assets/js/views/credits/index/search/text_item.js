/*
 * ItemView（検索項目追加）
 */
define([
  'text!templates/credits/index/search/text_item.html',
], function(template){

  var ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: _.template(template),
  });

  return ItemView;
});
