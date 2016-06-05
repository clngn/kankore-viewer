document.addEventListener('DOMContentLoaded', (event) => {
  var webview = document.getElementById('mainWebView');

  webview.addEventListener('dom-ready', () => {
    // webview.openDevTools();  // debug

    webview.insertCSS('body { overflow: hidden; }');
    webview.executeJavaScript('window.scrollTo(110, 77);');
  });
});
