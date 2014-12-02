require.config({
  paths : {
  	/** MEMO: ロードする画面に対応するアプリケーションルートパスを設定する */
  	app_root : 'js/apps/credits',
  },
});

/*
 * 基本設定のロード / アプリケーションの実行
 */
require([
  '../../../manager',
], function(Manager) {
  require(['app_root/index/controller'], function(Controller){
    Controller.showSearchLayout();
    Controller.showResultLayout();
    Controller.createModalLayout();
  });
});
