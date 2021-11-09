---
title: GitHub 无法访问解决方案
date: 2021-5-6
tags:
 - Github
categories:
 - Github
imgSrc: https://img0.baidu.com/it/u=146250778,195677632&fm=26&fmt=auto
---
## 前言

GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git 作为唯一的版本库格式进行托管，故名GitHub。

由于GitHub是一个国外网站，在国内访问速度如何呢？

我们通过浏览器访问下**https://github.com**，但是页面很久才能打开，要等待一个较长时间，如下图所示：

![img](https://t10.baidu.com/it/u=2785834992,1999419868&fm=173&app=25&f=JPEG?w=639&h=341&s=58A43D720B2345240CD5C1DA0000C0B2)

接着我们打开系统工具下的命令提示符，输入 **ping github.com**，但可惜的是出现了“请求超时”的信息提示，如下图所示：

![img](https://t12.baidu.com/it/u=1203856823,3048098343&fm=173&app=25&f=JPEG?w=640&h=324&s=837471821DCA3F454050B407000080C3)

## 解决办法

### 第一步：查看 GitHub 的 IP 地址

进入网址 [https://github.com.ipaddress.com](https://github.com.ipaddress.com/)

![image-20211108133927058](C:\Users\15129\Desktop\myBlog\blogs\Github\img\image-20211108133927058.png)

### 第二步：查看 GitHub 的 域名 IP

进入网址 [https://fastly.net.ipaddress.com/github.global.ssl.fastly.net](https://fastly.net.ipaddress.com/github.global.ssl.fastly.net)

![image-20211108134027411](C:\Users\15129\Desktop\myBlog\blogs\Github\img\image-20211108134027411.png)

### 第三步: 查看 GitHub 的 静态资源 IP

进入网址 [https://github.com.ipaddress.com/assets-cdn.github.com](https://github.com.ipaddress.com/assets-cdn.github.com)

![image-20211108134125425](C:\Users\15129\Desktop\myBlog\blogs\Github\img\image-20211108134125425.png)

### 第四步: 修改 Hosts 配置文件

将上面三步所得的 `IP` 写进 `hosts` 文件里

- macOS hosts 文件路径: /etc/hosts

- Windows hosts 文件路径: C:\Windows\System32\drivers\etc\hosts

```
# GitHub
140.82.112.3 github.com
199.232.69.194 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
2606:50c0:8000::153 assets-cdn.github.com
2606:50c0:8001::153 assets-cdn.github.com
2606:50c0:8002::153 assets-cdn.github.com
2606:50c0:8003::153 assets-cdn.github.com
```

## 注意事项

1. 这些 `IP` 过一段时间会变动，所以网上很多教程都是直接复制第四步，却没有效果，这时候一定记得要查一下 `IP` 是否一样。
2. 如果在浏览器开着 `GitHub` （无法访问状态）的时候修改了 `hosts` 文件需要重启浏览器。

::: tip 参考博客来自我的前端导师

博客：[OG-Liu's Blog](https://ogliu.com/)

:::

