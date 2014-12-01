/*
 * Model（検索項目）
 */
define([
], function(){
  var Item = Backbone.Model.extend({
    defaults: {
      // TODO: 属性は要変更
      attr_code: 'fixed_attr1',
      attr_name: '取引企業名',
      value: '',
    }
  });
  return Item;
});
