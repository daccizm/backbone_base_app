/*
 * Model（取引）
 */
define([
], function(){
  var Credit = Backbone.Model.extend({
    defaults: {
      // TODO: 属性は要変更
      fixed_attr1: 'Attr1',
      fixed_attr2: 'Attr2',
      fixed_attr3: 'Attr3',
      fixed_attr4: 'Attr4',
      variable_attr5: 'Attr5',
      variable_attr6: 'Attr6',
      variable_attr7: 'Attr7',
    }
  });
  return Credit;
});
