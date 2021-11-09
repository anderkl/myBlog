---
title: CSS3选择器（CSS3与CSS的区别）
date: 2020-11-2
tags:
 - CSS3
 - CSS
categories:
 - CSS3
 - CSS
imgSrc: https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd0a9f27d6df44be800699911ac62a9c~tplv-k3u1fbpfcp-watermark.image
---

## CSS1、CSS2的选择器

先介绍一些css1以及css2的选择器吧：

```javascript
.intro// 选择所有class="intro"的元素
#firstname // 选择所有id="firstname"的元素
* // 选择所有元素
p 	// 选择所有<p>元素
div,p // 选择所有<div>元素和<p>元素
div p // 选择<div>元素内的所有<p>元素
div>p // 选择所有父级是 <div> 元素的 <p> 元素
div+p // 选择所有紧接着<div>元素之后的<p>元素
[target] // 选择所有带有target属性元素
[target=-blank] // 选择所有使用target="-blank"的元素
[title~=flower]	// 选择标题属性包含单词"flower"的所有元素
[lang|=en]	// 选择 lang 属性以 en 为开头的所有元素
a:link // 选择所有未访问链接
a:visited 	// 选择所有访问过的链接
a:active // 选择活动链接
a:hover // 选择鼠标在链接上面时
input:focus // 选择具有焦点的输入元素
p:first-letter // 选择每一个<p>元素的第一个字母
p:first-line  // 选择每一个<p>元素的第一行
p:first-child 	// 指定只有当<p>元素是其父级的第一个子级的样式。
p:before 在每个<p>// 元素之前插入内容
p:after 在每个<p>// 元素之后插入内容
p:lang(it)  // 选择一个lang属性的起始值="it"的所有<p>元素
```

## CSS3:

```javascript
 p~ul // 选择p元素之后的每一个ul元素
a[src^="https"] // 选择每一个src属性的值以"https"开头的元素
a[src$=".pdf"]  // 选择每一个src属性的值以".pdf"结尾的元素
a[src*="runoob"]  // 选择每一个src属性的值包含子字符串"runoob"的元素
p:first-of-type  // 选择每个p元素是其父级的第一个p元素
p:last-of-type  // 选择每个p元素是其父级的最后一个p元素
p:only-of-type  // 选择每个p元素是其父级的唯一p元素
p:only-child  // 选择每个p元素是其父级的唯一子元素
p:nth-child(2)  	// 选择每个p元素是其父级的第二个子元素
p:nth-last-child(2)	// 选择每个p元素的是其父级的第二个子元素，从最后一个子项计数
p:nth-of-type(2)	// 选择每个p元素是其父级的第二个p元素
p:nth-last-of-type(2)	// 选择每个p元素的是其父级的第二个p元素，从最后一个子项计数
p:last-child	// 选择每个p元素是其父级的最后一个子级。
:root	// 选择文档的根元素
p:empty	// 选择每个没有任何子级的p元素（包括文本节点）
news:target	// 选择当前活动的#news元素（包含该锚名称的点击的URL）
input:enabled	// 选择每一个已启用的输入元素
nput:disabled	// 选择每一个禁用的输入元素
nput:checked	// 选择每个选中的输入元素
:not(p)	// 选择每个并非p元素的元素
::selection	// 匹配元素中被用户选中或处于高亮状态的部分
:out-of-range	// 匹配值在指定区间之外的input元素
:in-range	// 匹配值在指定区间之内的input元素
:read-write	// 用于匹配可读及可写的元素
::read-only	// 用于匹配设置 "readonly"（只读） 属性的元素
:optional	// 用于匹配可选的输入元素
:required	// 用于匹配设置了 "required" 属性的元素
:valid	// 用于匹配输入值为合法的元素
:invalid	// 用于匹配输入值为非法的元素
```

可以写一写试一试它的效果记忆更深刻哦

```css
/* 元素选择器 */
h1 {
  color: blue;
}
/* class选择器 */
.myh1 {
  color: palevioletred;
}
/* ID选择器 */
#box {
  color: #2e8b57;
}
```

```css
/* 后代选择器 */
.myol li a {
  color: red;
}

/* 子元素选择器 */
.mydiv > a {
  color: yellowgreen;
}

/* 子元素选择器 */
.mydiv > a {
  color: yellowgreen;
}
```

```bash
- 选择器是很重要的，如果选择器没学好，你就没法定位改到你想改的某个组件的样式了
- 一定要试一试它的效果，才会有更深的体会，虽然不一定都会用到吧
```

## CSS与CSS3的区别

然后再说一些我觉得 css3 与 css 的区别吧：

- 最直观的是 CSS3 能做出更有视觉效果的页面。这是由于他增加的一些动画处理，还有一些例如圆角效果、图形化边界、块阴影与文字阴影、使用 RGBA 实现透明效果、渐变效果、使用@Font-Face 实现定制字体、多背景图、文字或图像的变形处理（旋转、缩放、倾斜、移动）、多栏布局、媒体查询等。
- CSS3 主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块。
