/*
 * Model（検索項目）
 */
define([
], function(){
  var Item = Backbone.Model.extend({
    defaults: {
      // TODO: 属性は要変更
      type_code: 'code1',
      type_name: '取引企業名',
      value: '',
    }
  });
  return Item;
});
