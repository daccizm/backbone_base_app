/*
 * モーダルレイアウト
 */
define([
  'manager',
  'text!shareds/modal/layout.html',
], function(Manager, ModalLayoutTemplate){

  Manager.module('Shareds.Modal', function(Modal, Manager){

    /*
     * モーダルレイアウト
     */
    Modal.Layout = Marionette.LayoutView.extend({
      tagName: 'div',
      className: 'modal fade',
      template: _.template(ModalLayoutTemplate),
      regions: {
        'header' : '.modal-header',
        'body'   : '.modal-body',
        'footer' : '.modal-footer',
      },
    });

    /*
     * モーダルHeader Item
     */
    Modal.Header = Marionette.ItemView.extend({
    });

    /*
     * モーダルBody Item
     */
    Modal.Body = Marionette.ItemView.extend({
    });

    /*
     * モーダルFooter Item
     */
    Modal.Footer = Marionette.ItemView.extend({
    });

  });

  return Manager.Shareds.Modal;
});