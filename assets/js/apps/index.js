/*
 * 基本設定のロード / アプリケーションの実行
 */
require(['../main'], function(Main) {
  require(['applications/index'], function(App){
    App.start();
  });
});
