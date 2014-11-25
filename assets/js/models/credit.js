/*
 * Model（取引）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
], function($, _, Backbone, Marionette){
  var Credit = Backbone.Marionette.Model.extend({
    defaults: {
      // TODO: 属性は要変更
      attr1: 'Attr1',
      attr2: 'Attr2',
      attr3: 'Attr3',
      attr4: 'Attr4',
      attr5: 'Attr5',
      attr6: 'Attr6',
      attr7: 'Attr7',
    }
  });
  return Credit;
});
