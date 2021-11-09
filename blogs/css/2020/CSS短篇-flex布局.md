---
title: CSS短篇-flex布局
date: 2020-11-19
tags:
 - CSS
 - flex布局
categories:
 - CSS
 - flex布局
imgSrc: https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b2c3b2f9b674cf18f5fba877cd5a337~tplv-k3u1fbpfcp-watermark.image
---

## flex 布局

![img](https://img-blog.csdnimg.cn/20210131165702226.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxMTQ3NTA3,size_16,color_FFFFFF,t_70) **关于这张图**：

- 水平的主轴（main axis）和垂直的交叉轴（cross axis）
- 主轴开始的位置称为 main start，主轴结束的位置称为 main end。
- 交叉轴开始的位置称为 cross start，交叉轴结束的位置称为 cross end。
- 子元素中，占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size

**为什么要使用 flex 布局？**

Flex 布局，可以简便、完整、响应式地实现各种页面布局。（根据 flex 规则很容易达到某个布局效果）

**flex 简介** flex 的使用方法很简单，只需要将其 display 属性设置为 flex 就可以。

**核心的概念**：容器和轴，围绕轴设置容器的一些属性进行布局。其中，容器分为父容器和子容器，轴分为主轴和交叉轴（见上图）。

**父容器的一些属性**

- `flex-direction`:主轴方向 row / row-reverse / column / column-reverse
- `flex-wap`:超出父容器，子容器换行 nowrap / wrap / wrap-reverse
- 前两种属性简写：`flex-flow`
- 主对齐方式：`justify-content`:flex-start \ flex-end \ center \ space-between (两端对齐) \ space-around (每个项目两侧的间隔相等)
- `align-items` 交叉轴上如何对齐 stretch(默认，未设置高或为 auto，将占满整个容器的高度） flex-start \ flex-end \ center \ baseline (项目的第一行文字的基线对齐)
- `align-content` 多根轴线的对齐方式 stretch（默认 轴线占满整个交叉轴）\ flex-start \ flex-end \ center \ space-between \ space-around

**子容器的一些属性**

- `order`：排列顺序 (数值越小，排列越靠前，默认为 0)
- `flex-grow`：剩余空间的拉伸比例
- `flex-shrink`：超出空间的压缩比例
- `flex-basis`：不伸缩情况下的原始尺寸 | auto;
- `flex`：属性是 flex-grow,flex-shrink 和 flex-basis 的简写 ; 两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
- `align-self`：允许单个项目有与其他项目不一样的对齐方式 stretch / auto ( 继承父元素的 align-items ) / flex-start 、 flex-end / center / baseline
