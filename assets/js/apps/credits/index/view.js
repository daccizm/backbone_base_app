/*
 * View（取引一覧）
 */
define([
  'manager',
  'text!app_root/index/templates/search/text_item.html',
  'text!app_root/index/templates/search/layout.html',
  'text!app_root/index/templates/result/table_row.html',
  'text!app_root/index/templates/result/table.html',
  'text!app_root/index/templates/result/layout.html',
  'shareds/modal/layout',
], function(Manager, SearchTextItemTemplate, SearchLayoutTemplate, ResultTableRowTemplate, ResultTableTemplate, ResultLayoutTemplate){
  Manager.module('View.Search', function(Search, Manager){

    /*
     * 検索レイアウト
     */
    Search.Layout = Marionette.LayoutView.extend({
      tagName: 'div',
      template: _.template(SearchLayoutTemplate),
      regions: {
        'searchText' : '#search-text-region',
        'searchDate' : '#search-date-region',
      },
      ui: {
        addTextItem: '#add-text-item',
        showModal: '#show-modal',
        search: '#search-credits',
      },
      events: {
        'click @ui.addTextItem': 'addTextItem',
        'click @ui.showModal': 'createModal',
        'click @ui.search': 'search',
      },
      addTextItem: function() {
        Manager.Controller.trigger("search:textitem:add");
      },
      createModal: function() {
        Manager.Controller.trigger("search:createModal");
      },
      search: function() {
        Manager.Controller.trigger("search:execute");
      },
      onRender: function(){
        /** 検索入力（テキスト）領域の描画 */
        var collectionView = new Search.TextItems({collection: this.collection});
        this.searchText.show(collectionView);
      },
    });

    /*
     * 検索入力（テキスト）Item
     */
    Search.TextItem = Marionette.ItemView.extend({
      tagName: 'li',
      template: _.template(SearchTextItemTemplate),
      ui: {
        remove: '.delete',
        input: '.text-item',
      },
      events: {
        'click @ui.remove': 'delete_item',
      },
      bindings: {
        '.text-item': 'value',
        '.code-items': {
          observe: 'attr_code',
          selectOptions: {
            collection: function() {
              return [
                {code: 'fixed_attr1', name: '固定属性１'},
                {code: 'fixed_attr2', name: '固定属性２'},
                {code: 'fixed_attr3', name: '固定属性３'},
                {code: 'fixed_attr4', name: '固定属性４'},
                {code: 'variable_attr5', name: '可変属性５'},
                {code: 'variable_attr6', name: '可変属性６'},
                {code: 'variable_attr7', name: '可変属性７'},
              ]
            },
            labelPath: 'name',
            valuePath: 'code',
          }
        }
      },
      delete_item: function() {
        this.model.destroy();
      },
      onRender: function(){
        Backbone.Validation.bind(this, {
          valid: function(view, attr) {
            view.ui.input.popover('destroy');
          },
          invalid: function(view, attr, error) {
            view.ui.input.attr('data-content', error);
            view.ui.input.popover('show');
          }
        });
        this.stickit();
      }
    });

    /*
     * 検索入力（テキスト）Collection
     */
    Search.TextItems = Marionette.CollectionView.extend({
      tagName: 'ul',
      childView: Search.TextItem,
    });

  });

  Manager.module('View.Result', function(Result, Manager){

    /*
     * 検索結果レイアウト
     */
    Result.Layout = Marionette.LayoutView.extend({
      tagName: 'div',
      template: _.template(ResultLayoutTemplate),
      regions: {
        'resultTable' : '#credit-list'
      },
      onRender: function(){
        var collectionView = new Result.Table({collection: this.collection});
        this.resultTable.show(collectionView);
      },
    });

    /*
     * 検索結果テーブルItem
     */
    Result.TableItem = Marionette.ItemView.extend({
      tagName: 'tr',
      template: _.template(ResultTableRowTemplate),
    });

    /*
     * 検索結果テーブルCollection
     */
    Result.Table = Marionette.CompositeView.extend({
      childView: Result.TableItem,
      childViewContainer: 'tbody',
      template: _.template(ResultTableTemplate),
    });

  });

  Manager.module('View.Modal', function(Modal, Manager){

    /*
     * モーダルレイアウト
     */
    Modal.Layout = Manager.Shareds.Modal.Layout.extend({
      id: 'reset-modal',
      onRender: function(){
        this.body.show(new Modal.Body());
        this.footer.show(new Modal.Footer());
      },
    });

    /*
     * モーダルBody
     */
    Modal.Body = Manager.Shareds.Modal.Body.extend({
      template: "#modalBodyTemplate",
    });

    /*
     * モーダルFooter
     */
    Modal.Footer = Manager.Shareds.Modal.Footer.extend({
      template: "#modalFooterTemplate",
      ui: {
        reset: '#reset-item',
      },
      events: {
        'click @ui.reset': 'resetItem',
      },
      resetItem: function() {
        Manager.Controller.trigger("search:textitem:reset");
      },
    });

  });

  return Manager.View;

});
