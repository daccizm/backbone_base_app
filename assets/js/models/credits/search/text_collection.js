/*
 * Model（検索項目）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/credits/search/text_item',
], function($, _, Backbone, Item){
  var Collection = Backbone.Collection.extend({
    model: Item,
  });
  return Collection;
});
