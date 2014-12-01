/*
 * LayoutView（検索領域）
 */
define([
  'views/credits/index/result/collection',
  'text!templates/credits/index/result/layout.html',
], function( ResultCollectionView, ResultLayoutTemplate ){

  var LayoutView = Marionette.LayoutView.extend({

    tagName: 'div',

    template: _.template(ResultLayoutTemplate),

    regions: {
      'resultTable' : '#credit-list'
    },

    onRender: function(){
      /** 検索入力（テキスト）領域の描画 */
      var collectionView = new ResultCollectionView({collection: this.collection});
      this.resultTable.show(collectionView);
    }

  });

  return LayoutView;
});