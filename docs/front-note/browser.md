# browser
## 从输入url到显示页面发生了什么

- 将url进行dns解析成ip；
- 使用 HTTP 协议或者 HTTPS 协议，向IP地址请求；
- 建立3次握手；
- 把请求回来的 HTML 代码经过解析，构建成 DOM 树；
- 计算 DOM 树上的 CSS 属性；
- 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
- 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
- 合成之后，再绘制到界面上。
- 从 HTTP 请求回来，就产生了流式的数据，后续的 DOM 树构建、CSS 计算、渲染、合成、绘制，都是尽可能地流式处理前一步的产出：即不需要等到上一步骤完全结束，就开始处理上一步的输出，这样我们在浏览网页时，才会看到逐步出现的页面。
## 请求头

- Accept：浏览器端接受的格式
- Accept-Encoding：浏览器端接收的编码方式
- Accept-Language：浏览器端接受的语言，用于服务器端判断多语言
- Cache-Control：控制缓存的时效性
- Connection：连接方式，如果是keep-alive，且服务器端支持，则会复用连接
- Host：HTTP访问使用的域名
- If-Mdified-Since：上次访问时的更改时间，如果服务器端认为此时间后自己没有更新，则会给出304响应
- If-None-Match：上次访问时使用的E-Tag，通常是页面的信息摘要，这个比更改时间更准确一些
- User-Agent：客户端标识
- Cookie：客户端存储的cookie字符串
## 响应头

- Cache-Control：缓存控制，用于通知各级缓存保存的时间，例如max-age=0，表示不要缓存
- Connection：连接类型，Keep-Alive表示复用连接
- Content-Encoding：内容编码方式，通常是gzip
- Content-Length：内容的长度，有利于浏览器判断内容是否已经结束
- Content-Type：内容类型，所有请求网页的都是text/html
- Date：当前的服务器日期
- ETag：页面的信息摘要，用于判断是否需要重新到服务器端取回页面
- Expires：过期时间，用于判断下次请求是否需要到服务器端取回页面
- Keep-Alive：保持连续不断时需要的一些信息，如timeout=5，max=100
- Last-Modified：页面上次修改的时间
- Server：服务器端软件的类型
- Set-Cookie：设置cookie，可以存在多个
- Via：服务器端的请求链路，对一些调试场景至关重要的一个头
## HTTPS

作用

- 确定请求的目标服务器端身份
- 保证传输的数据不会被网络中间节点窃听或者篡改

## HTTP2.0

改进

- 支持服务器推送
- 支持TCP连接复用
	
