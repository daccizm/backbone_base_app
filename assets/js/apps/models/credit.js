/*
 * Model 取引
 */
define([
  'manager',
], function(Manager){
  Manager.module('Models.Credit', function(Credit, Manager, Backbone, Marionette, $, _){

    Credit.Search = {};
    Credit.Search.TextItem = Backbone.Model.extend({
      defaults: {
        // MEMO: 属性はAPIの仕様に合わせて変更すること
        attr_code: 'fixed_attr1',
        value: '',
        deletable: true,
      },
      validation: {
        // MEMO: 本開発時は名前を変更する
        fixed_attr1: 'validateFixedAttr1',
      },
      validateFixedAttr1: function(value, attr, computedState) {
        if ( computedState.attr_code !== 'fixed_attr1' ) return;

        // MEMO: 必須入力チェック
        if ( _.isEmpty(computedState.value) ) return "必ず入力してください。";

        // MEMO: 検索種別固有のチェック
        return "固定属性１の形式で入力してください。"
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
        // MEMO: 属性はAPIの仕様に合わせて変更すること
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
