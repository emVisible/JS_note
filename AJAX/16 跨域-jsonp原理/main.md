# 解释
- JSONP(JSON with padding)
- 是一个跨域解决方案
- 只支持GET
  
  ## 可跨域标签
  - script
  - img
  - iframe
  - link
  ## 总结
  ``` css
  通过script标签进行跨域连接，client向server发送请求后，server发送回client端的数据会经过浏览器解析。
  而浏览器只能解析js代码。log里报错是因为server端发送的代码无法通过浏览器解析，换句话说server端发送的不是js代码(不是标准js代码)。
  数据不能直接返回，需要配合js代码进行返回。（因为返回的数据无法处理）
```

```css
  
```