/*
 * Collection（検索結果項目）
 */
define([
  'models/credit',
], function(Item){
  var Collection = Backbone.Collection.extend({
    initialize: function() {
      this.add({
        "fixed_attr1": "Attr11",
        "fixed_attr2": "Attr12",
        "fixed_attr3": "Attr13",
        "fixed_attr4": "Attr14",
        "variable_attr5": "Attr15",
        "variable_attr6": "Attr16",
        "variable_attr7": "Attr17",
      });
      this.add({
        "fixed_attr1": "Attr11",
        "fixed_attr2": "Attr12",
        "fixed_attr3": "Attr13",
        "fixed_attr4": "Attr14",
        "variable_attr5": "Attr15",
        "variable_attr6": "Attr16",
        "variable_attr7": "Attr17",
      });
      this.add({
        "fixed_attr1": "Attr11",
        "fixed_attr2": "Attr12",
        "fixed_attr3": "Attr13",
        "fixed_attr4": "Attr14",
        "variable_attr5": "Attr15",
        "variable_attr6": "Attr16",
        "variable_attr7": "Attr17",
      });
    },
    model: Item,
    url: 'stubs/credit_collection.json',
  });
  return Collection;
});
