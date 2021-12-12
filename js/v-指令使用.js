
//延迟一秒钟后渲染
  setTimeout(() => {
    console.log("延迟1秒钟");
    const app = new Vue({
      el:document.getElementById("container"),
      data: {
        hello: "hello",
        htmlText: "<a href='https://www.baidu.com/'>www.baidu.com</a>"
      },
      methods: {
    
      }
    })
  }, 1000);