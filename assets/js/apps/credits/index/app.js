require.config({
  paths : {
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
