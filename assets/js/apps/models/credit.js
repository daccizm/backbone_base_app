/*
 * View（取引一覧）
 */
define([
  'manager',
], function(Manager){
  Manager.module('Models.Credit', function(Credit, Manager, Backbone, Marionette, $, _){

    Credit.Search = {};
    Credit.Search.TextItem = Backbone.Model.extend({
      defaults: {
        // MEMO: 属性は要変更
        attr_code: 'fixed_attr1',
        value: '',
        deletable: true,
      }
    });

    Credit.Search.TextItems = Backbone.Collection.extend({
      initialize: function() {
        this.add(new Credit.Search.TextItem({deletable: false}));
      },
      model: Credit.Search.TextItem,
    });

    Credit.Item = Backbone.Model.extend({
      defaults: {
        // MEMO: 属性は要変更
        fixed_attr1: '',
        fixed_attr2: '',
        fixed_attr3: '',
        fixed_attr4: '',
        variable_attr5: '',
        variable_attr6: '',
        variable_attr7: '',
      }
    });

    Credit.Collection = Backbone.Collection.extend({
      model: Credit.Item,
      url: 'stubs/credit_collection.json',
    });

  });

  return Manager.Models.Credit;

});
