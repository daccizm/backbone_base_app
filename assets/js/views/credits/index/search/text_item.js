/*
 * ItemView（検索項目追加）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/credits/index/search/text_item.html',
], function($, _, Backbone, Marionette, template){

  var ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: _.template(template),
    collectionEvents: {
      'add': 'modelAdd'
    }
  });

  return ItemView;
});
