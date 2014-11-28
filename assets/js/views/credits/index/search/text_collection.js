/*
 * CollectionView（テキスト検索項目一覧）
 */
define([
  'views/credits/index/search/text_item',
], function( ItemView ){

  var CollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: ItemView,
  });

  return CollectionView;
});
