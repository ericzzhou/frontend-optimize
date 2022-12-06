/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener("install", function (event) {
  // 注册时执行
});

/* 注册fetch事件，拦截全站的请求 */
this.addEventListener("fetch", function (event) {
  // 发起请求时执行
});

this.addEventListener("message", function (event) {
  let messageType = event.data;

  if (messageType == "longtask_calculate") {
    let result = 0;
    for (let index = 0; index < 10000000000; index++) {
      result += index;
    }

    event.source.postMessage({
      type: "longtask_calculate",
      value: result,
    });
  }
});
