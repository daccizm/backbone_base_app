/*
 * コントローラ（取引一覧）
 */
define([
  'manager',
  'app_root/index/view',
  'models/credit',
], function(Manager){

  Manager.addRegions({
    search: '#search-region',
    result: '#result-region',
    modal:  '#modal-region',
  });

  Manager.module('Controller', function(Controller, Manager){
    var Controller = Marionette.Controller.extend({

      initialize: function() {
      	/** 検索入力（テキスト）Collection 初期化 */
        this.textItems = new Manager.Models.Credit.Search.TextItems();

      	/** 検索結果 Collection 初期化 */
        this.credits = new Manager.Models.Credit.Collection();

      },

      search: function() {
        /** 検索処理 */

        /*
         * MEMO: 本開発では data属性 に 検索条件のパラメータをセットする
         */
        this.credits.fetch({
          data: {},
          dataType : 'json',
          success : function (collection, res, options) {
            console.log("Search Success !!");
          },
          error : function (collection, res, options) {
            console.log("Search Error !!");
          },
        })
      },

      createModalLayout: function() {
        /** モーダル領域生成 */
        if ( this.modalLayout !== undefined ) this.modalLayout.$el.html('');
        this.modalLayout = new Manager.View.Modal.Layout();
        Manager.modal.show(this.modalLayout);
      },

      showSearchLayout: function() {
        /** 検索レイアウト表示 */
        var layout = new Manager.View.Search.Layout({collection: this.textItems});
        Manager.search.show(layout);
      },

      showResultLayout: function() {
        /** 検索結果レイアウト表示 */
        var layout = new Manager.View.Result.Layout({collection: this.credits});
        Manager.result.show(layout);

        /** 検索処理実行 */
        this.search();
      },

    });

    var controller = new Controller();

    /** 検索入力（テキスト）項目の追加 */
    controller.listenTo(controller, "search:textitem:add", function(){
      this.textItems.add(new Manager.Models.Credit.Search.TextItem());
    });

    /** 検索入力（テキスト）のリセット */
    controller.listenTo(controller, "search:textitem:reset", function(){
      this.textItems.reset();
      this.search();
      this.modalLayout.body.$el.html($("#modalResetAfterBodyTemplate").html());
      this.modalLayout.footer.$el.html($("#modalResetAfterFooterTemplate").html());
    });

    /** 検索実行 */
    controller.listenTo(controller, "search:execute", function(){
      this.search();
    });

    /** 検索入力項目のリセット時に初期項目を追加 */
    controller.listenTo(controller.textItems, 'reset', function(){
      controller.textItems.add(new Manager.Models.Credit.Search.TextItem({deletable: false}));
    });

    /** モーダル領域生成 */
    controller.listenTo(controller, 'search:createModal', function(){
      controller.createModalLayout();
    });

    Manager.Controller = controller;
  });

  return Manager.Controller;
});