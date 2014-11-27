/*
 * 基本設定のロード / アプリケーションの実行
 */
require(['../../main'], function(Main) {
  require(['applications/credits/index'], function(app){
    app.start();
  });
});
