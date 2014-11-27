/*
 * CollectionView（テキスト検索項目一覧）
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/credits/index/search/text_item',
], function( $, _, Backbone, Marionette, ItemView ){

  var CollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: ItemView,
  });

  return CollectionView;
});
