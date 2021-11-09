---
title: CSS选择器
date: 2020-11-12
tags:
 - CSS
categories:
 - CSS
imgSrc: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d21baef9286c418690c7b1837149cc75~tplv-k3u1fbpfcp-watermark.image
---

## css 选择器有哪些？

基本选择器比如 标签标签选择器、类选择器、ID 选择器，机构选择器比如后代、子、紧邻兄弟、后兄弟选择器，伪类选择器

**基本选择器**：

- **标签选择器**：通配符选择器*、根据标签为元素设置样式
- **类选择器**：.class 类选择器是为一类状态声明样式规则
- **ID 选择器**：#id 为有 id 属性的元素设置样式

**结构选择器**：

- 后代选择器：div p 选择元素内部的所有元素
- 子元素：div>p 选择子元素，不包括孙级及以下元素
- 紧邻兄弟元素： div+p 选择紧挨着的同级兄弟元素
- 后兄弟元素选择器：p~ul 选择后面的所有兄弟元素

**属性选择器**：[target] 带有 target 属性所有元素、 [target=_blank]targe 属性 等于"_blank" 的所有元素。。。根据属性来为元素设置样式。

**伪类选择器**：

- 超链接伪类 :target（控制具有锚点目标元素的样式）、:root （根元素选择伪类即选择 html） 、:empty （没有内容和空白的元素）
- 结构伪类 ：first-child 、 :last-child 、:nth-child(n) 、 nth-child(odd) 选择奇数 、 nth-child(even)选择偶数（表格隔行变色 table tr>td:nth-child(odd)）
- 表单伪类：input:enabled 选择每个启用的 input 元素
- 字符伪类：p:first-letter 选择每个元素的首字母

------ 以下为详细介绍 ------

### 基本选择器

#### 标签选择

使用 * 可为所有元素设置样式。

```css
* {
  text-decoration: none;
  color: red;
}
```

根据标签为元素设置样式

```css
h1 {
  color: red;
}
```

同时设置多个元素组合

```css
h1,
h2 {
  color: red;
}
```

元素在多个组件中存在

```css
h1,
h2 {
  color: red;
}
h1,
h3 {
  background: yellow;
}
```

### 类选择器

类选择器是为一类状态声明样式规则 把文本居中定义为类样式：

```html
<style>
  .text-center {
    text-align: center;
  }
</style>

<h2 class="text-center">hdcms.com</h2>
```

### ID 选择器

\#id，为有 id 属性的元素设置样式，ID 应该是唯一的

### 结构选择器

#### 后代选择器

后代选择器指元素后的元素（不只是子元素，是后代元素）。 实例：div p 选择 div 元素内部的所有 p 元素

```html
<style>
  main article h2,
  main h1 {
    color: red;
  }
</style>

<main>
  <article>
    <h2>HearLing</h2>
    <aside>
      <h2>HearLing</h2>
    </aside>
  </article>
  <h2>HL</h2>
  <!-- 这个不会变红 -->
  <h1>hl</h1>
</main>
```

#### 元素选择

div > p 选择子元素，不包括孙级及以下元素。

```html
<style>
  article>h2 {
    color: red;
}
</style>
</head>

<body>
  <main>
    <article>
      <h2>HearLing</h2><!-- 只有这个变红 -->
      <aside>
        <h2>HearLing</h2>
      </aside>
    </article>
    <h2>HL</h2>
    <h1>hl</h1>
  </main>
</body>
```

#### 紧邻兄弟元素

div + p 选择紧挨着的同级兄弟元素

```html
<style>
  main article+h2 {
    color: red;
}
</style>
</head>

<body>
  <main>
    <article>
      <h2>HearLing</h2>
      <aside>
        <h2>HearLing</h2>
      </aside>
    </article>
    <h2>HL</h2><!-- 只有这个变红 -->
    <h1>hl</h1>
  </main>
</body>
```

#### 后兄弟元素

p~ul 选择后面的所有兄弟元素

```html
<style>
  main article~*  {
    color: red;
}
</style>
</head>

<body>
  <main>
    <article>
      <h2>HearLing</h2>
      <aside>
        <h2>HearLing</h2>
      </aside>
    </article>
    <h2>HL</h2><!-- 变红 -->
    <h1>hl</h1><!-- 变红 -->
  </main>
</body>
```

### 属性选择器

为具有 class 属性的 h1 标签设置样式

```text
h1[class] {
    color: red;
}
```

约束多个属性

```text
h1[class][id] {
    color: red;
}
```

具体属性值设置样式

```text
a[href="https://hearling.github.io/"] {
    color: green;
}
```

^ 以指定值开头的元素

```text
h2[name^="hdcms"] {
    color: red;
}
```

$ 以指定值结尾的元素

```text
h2[name$="com"] {
    color: red;
}
```

\* 属性内部任何位置出现值的元素

```text
h2[name*="houdunren"] {
    color: red;
}
```

~ 属性值中包含指定词汇的元素

```text
h2[name~="houdunren"] {
    color: red;
}
```

| 以指定值开头或以属性连接破折号的元素

```text
h2[name|="houdunren"] {
    color: red;
}
```

### 伪类选择器

#### 超链接伪类

:target（控制具有锚点目标元素的样式）、:root （根元素选择伪类即选择 html） 、:empty （没有内容和空白的元素）

#### 结构伪类

:first-child 、 :last-child 、:nth-child(n) 、 nth-child(odd) 选择奇数 、 nth-child(even)选择偶数（表格隔行变色 table tr>td:nth-child(odd)）

#### 表单伪类

:nput:enabled 选择每个启用的 input 元素

#### 字符伪类

:p:first-letter 选择每个元素的首字母

### 元素权重：

（可叠加）强制优先级 !important 让某个规则强制有效 ![img](https://img-blog.csdnimg.cn/20210201145852442.png)
