/*
 * Collection（検索項目）
 */
define([
  'models/credit/search/text_item',
], function(Item){
  var Collection = Backbone.Collection.extend({
    model: Item,
  });
  return Collection;
});
