/*
 * CollectionView（テキスト検索項目一覧）
 */
define([
  'text!templates/credits/index/result/table/collection.html',
], function( TableTemplate ){

  var CompositeView = Marionette.CompositeView.extend({
    template: _.template(TableTemplate),
  });

  return CompositeView;
});
