(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello, this is Dell');

if ('serviceWorker' in navigator) {
  //如果浏览器支持serviceWorker的话,我们在页面加载完毕后注册service-worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      //注册成功，registration会存储一些注册成功的参数
      console.log('注册成功');
    }).catch(error => {
      console.log('注册失败');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.e7bf695e641eb7a561f1.js.map