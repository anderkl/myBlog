---
title: CSS短篇-CSS单位
date: 2020-11-10
tags:
 - CSS
categories:
 - CSS
imgSrc: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f696aa43ff21462494a182a8b30c3e9a~tplv-k3u1fbpfcp-watermark.image
---

## CSS 有哪些单位？

px、em、rem、vw、vh（viewpoint height，视窗高度，1vh=视窗高度的 1%）、vmin、vmax（vw 和 vh 中较大的那个。）常用的就差不多这些。

### 1.px 像素（Pixel）。

像素 px 相对于显示器屏幕分辨率而言的 **特点**：

1. IE 无法调整那些使用 px 作为单位的字体大小；
2. 国外大部分网站能够调整的原因在于其使用了 em 或 rem 作为字体单位；
3. Firefox 能够调整 px 和 em,rem，但是 96%以上的中国网民使用 IE 浏览器（或内核）。

### 2.em

是相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。 **特点：**

1. em 的值并不是固定的
2. em 会继承父级元素的字体大小。

### 3.rem

rem 只相对根节点计算，这就是说只要在根节点设定好参考值，那么全篇的 1rem 都相等，计算方式同 em，默认 1rem=16px;
