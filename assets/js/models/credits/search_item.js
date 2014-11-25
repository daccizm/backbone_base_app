/*
 * Model（検索項目）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  var SearchItem = Backbone.Marionette.Model.extend({
    defaults: {
      // TODO: 属性は要変更
      type: 'Attr1',
      value: '',
    }
  });
  return SearchItem;
});
