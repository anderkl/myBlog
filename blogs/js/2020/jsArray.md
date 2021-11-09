---
title: 「JS-数组」JS数组方法大总结
date: 2020-12-6
tags:
 - JavaScript
 - Array
categories:
 - JavaScript
 - Array
imgSrc: https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48dbb2ae0ce54351bbb204270922dad7~tplv-k3u1fbpfcp-watermark.image
---
## 前言

今天我将通过这篇文章好好整理一下关于 JS 数组的方法，让大家通过这一篇文章 `掌握` 数组一系列操作，同时，在面试或者工作的时候也能写出`简洁、优雅、美观、高效`的代码。

![](C:\Users\15129\Desktop\数组操作.png)

## 数组的遍历

### for循环

```js
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
// 1
// 2
// 3
// 4
// 5
```

### for...of循环

摘自`MDN`上一句话，`for...of` 语句遍历**可迭代对象**定义要迭代的数据。简单来说，`for...of`遍历的就是 `value`。

```js
let arr = ['wpq', 'bzz', 'slp']

for (let val of arr) {
  console.log(val)
}
// wpq
// bzz
// slp
```

### for...in循环

摘自`MDN`上一句话，`for...in` 语句以任意顺序迭代对象的**可枚举属性**。简单来说，`for...in`遍历的就是 `key`。对于数组，`key`对应着的是数组的**下标索引**。

```js
let arr = ['wpq', 'bzz', 'slp']

for (let key in arr) {
  console.log(key)
}
// 0
// 1
// 2
```

### array.forEach()方法

先来介绍语法：

```js
array.forEach(callback(currentValue, index, arr), thisArg)
```

::: warning
callback:为数组中每个元素执行的函数，该函数接收一至三个参数 currentValue 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) forEach() 方法正在操作的数组 thisArg 可选参数,当执行回调函数 callback,用作 this 值
:::

简单例子：

```js
let arr = ['wpq', 'bzz', 'slp']

arr.forEach(function(cur, index, arr) {
  console.log(cur, index, arr)
})

// wpq 0 ['wpq', 'bzz', 'slp']
// bzz 1 ['wpq', 'bzz', 'slp']
// slp 2 ['wpq', 'bzz', 'slp']
```

从上述例子中，了解到 `forEach`需要传递一个回调函数，而那三个参数，后面两个是可选的，那么如何让代码更加优雅美观一点呢，同时，后面两个参数按需添加即可：

```js
let arr = ['wpq', 'bzz', 'slp']

arr.forEach((cur) => {
  console.log(cur)
})
// wpq
// bzz
// slp
```

**疑难点**，我想小伙伴们，应该对最后一个 `thisArg` 有疑问吧，现在就来解释一下：

```js
function Foo() {
  this.sum = 0
  this.cnt = 0
}
// 在原型上添加一个名为 doSth 方法
Foo.prototype.doSth = function(arr) {
  arr.forEach(function(cur) {
    this.sum += cur
    this.cnt++
  }, this) // this 指向实例对象
}

let foo = new Foo()
let arr = [1, 2, 3]
foo.doSth(arr)

console.log(foo.sum, foo.cnt)
// 6 3
// 解释： 6 === (1+2+3)  3 === (1+1+1)
```

::: warning
注意：如果使用`箭头函数表达式`来传入函数参数， thisArg 参数会被忽略，因为箭头函数在词法上绑定了 this 值。
:::

因此，如果对于普通函数的话，可以看做是将 `this` 通过传参的形式解决**无法继承** 问题，当然，通过箭头函数的方式是一个不错的选择！

### map遍历

定义：返回一个新数组，其结果是该数组中的每个元素是调用一次提供的回调函数后的返回值。

先来介绍语法：

```js
let newArray = array.map(function(currentValue, index, arr), thisArg)
```

::: warning
callback:为数组中每个元素执行的函数，该函数接收一至三个参数 currentValue 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) map() 方法正在操作的数组 thisArg 可选参数,当执行回调函数 callback,用作 this 值
:::

简单例子：

```js
let arr = ['wpq', 'bzz', 'slp']

let newArr = arr.map(function(cur, index, arr) {
  console.log(cur, index, arr)
  return cur + index
})
// wpq 0 ['wpq', 'bzz', 'slp']
// bzz 1 ['wpq', 'bzz', 'slp']
// slp 2 ['wpq', 'bzz', 'slp']

console.log(newArr)
// [ 'wpq0', 'bzz1', 'bzz2' ]
```

**疑难点**，我想小伙伴们，有了前置问题了，这次理解 `thisArg` 应该没有太多问题了吧，看看下面例子：

```js
function Foo() {
  this.sum = 0
  this.cnt = 0
}
// 在原型上添加一个名为 doSth 方法
Foo.prototype.doSth = function(arr) {
  let newArr = arr.map(function(cur) {
    this.sum += cur
    this.cnt++
    return cur + 10
  }, this) // this 指向实例对象
  return newArr
}

let foo = new Foo()
let arr = [1, 2, 3]

console.log(foo.doSth(arr)) // [ 11, 12, 13 ]
console.log(foo.sum) // 6
console.log(foo.cnt) // 3
```

**一些小操作**~

```js
let arr = [1, 4, 9, 16]
let res = arr.map(Math.sqrt) // 传入Math中sqrt得到数组中每个元素的平方根
console.log(res) // [ 1, 2, 3, 4 ]
```

**总结**：

- `map` 不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组） 回调函数不返回值时，最后新数组的每个值都为`undefined`
- `this` 的值最终相对于 `callback` 函数的可观察性是依据 this 规则，也就是 `this` 指向问题
- `map` 会返回一个新数组

### reduce 遍历

定义：对数组中的每个元素执行一个由您提供的 `reducer` 函数(升序执行)，将其结果汇总为单个返回值。

先来介绍语法：

```js
let res = array.reduce(
  callback(accumulator, currentValue, currentIndex, array),
  initialValue
)
```

::: warning
callback:为数组中每个元素执行的函数，该函数接收一至 4 个参数 accumulator 累计器 currentValue 当前值 currentIndex 当前索引 array 数组 initialValue 作为第一次调用 callback 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
:::

简单例子：

```js
let arr = [3, 5, 7, 1, 2]
let res = arr.reduce(function(acc, cur, index, arr) {
  console.log(acc, cur, index, arr)
  return acc + cur
}, 0)
// 0 3 0 [ 3, 5, 7, 1, 2 ]
// 3 5 1 [ 3, 5, 7, 1, 2 ]
// 8 7 2 [ 3, 5, 7, 1, 2 ]
// 15 1 3 [ 3, 5, 7, 1, 2 ]
// 16 2 4 [ 3, 5, 7, 1, 2 ]
console.log(res)
// 18
```

看完上面代码，你可能还是蒙的，怎么一下输出这么多，结合下面 `gif` 动图再来理解一下吧：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8964ecb3bc7f465087852555aee0a044~tplv-k3u1fbpfcp-zoom-1.image)

**疑难点**，我想小伙伴们对于参数那么多应该一下给看懵了，下面用一些小操作展示一下，并且提供一点自测题目加深巩固~

```js
let arr = [1, 2, 3, 4, 5]
let res = arr.reduce((acc, cur) => {
  return acc + cur
}, 0)
console.log(res) // 15
```

自测题：看看下面输出什么?

```js
;[1, 2, 3, 4].reduce((x, y) => console.log(x, y))
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

::: details 答案

答案: D

`reducer` 函数接收 4 个参数:

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)

`reducer` 函数的返回值将会分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

`reducer` 函数还有一个可选参数`initialValue`, 该参数将作为第一次调用回调函数时的第一个参数的值。如果没有提供`initialValue`，则将使用数组中的第一个元素。

在上述例子，`reduce`方法接收的第一个参数(Accumulator)是`x`, 第二个参数(Current Value)是`y`。

在第一次调用时，累加器`x`为`1`，当前值`“y”`为`2`，打印出累加器和当前值：`1`和`2`。

例子中我们的回调函数没有返回任何值，只是打印累加器的值和当前值。如果函数没有返回值，则默认返回`undefined`。 在下一次调用时，累加器为`undefined`，当前值为“3”, 因此`undefined`和`3`被打印出。

在第四次调用时，回调函数依然没有返回值。 累加器再次为 `undefined` ，当前值为“4”。 `undefined`和`4`被打印出。

:::

***

**总结**：

- 如果数组为空且没有提供 `initialValue`，会抛出`TypeError` 。
- 如果没有提供 `initialValue`，`reduce` 会从索引 1 的地方开始执行 `callback` 方法，跳过第一个索引。如果提供 `initialValue` ，从索引 0 开始。
- `acc`为传入函数的返回值，如果是 `console.log`，则返回默认值 `undefined`

### filter()

定义：创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

先来介绍语法：

```js
let newArray = array.filter(function(currentValue, index, arr), thisArg)
```

::: warning
callback:为数组中每个元素执行的函数，该函数接收一至三个参数 currentValue 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) filter() 方法正在操作的数组 thisArg（可选参数）,当执行回调函数 callback,用作 this 值
:::

简单例子：

```javascript
let arr = [1, 2, 3, 4, 5]

let newArr = arr.filter(function(cur, index) {
  console.log(cur, index)
  return cur % 2 == 0
})
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
console.log(newArr) // [ 2, 4 ]
```

关于 `thisArg` 相关可以参考上文 `array.forEach() 方法` 部分。

简单来说，就是返回满足条件的结果。

### every()

定义：测试一个数组内的所有元素是否**都能通过**某个指定函数的测试，它返回的是一个 `Boolean` 类型的值。

先来介绍语法：

```javascript
array.every(function(currentValue, index, arr), thisArg)
```

> callback:为数组中每个元素执行的函数，该函数接收一至三个参数 currentValue 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) every() 方法正在操作的数组 thisArg 可选参数,当执行回调函数 callback,用作 this 值

```javascript
let res1 = [1, 2, 3, 4, 5].every(function(cur) {
  return cur > 10
})
console.log(res1) // false

let res2 = [1, 2, 3, 4, 5].every(function(cur) {
  return cur >= 1
})
console.log(res2) // true
```

关于 `thisArg` 相关可以参考上文 `array.forEach() 方法` 部分。

简单来说，就是返回是否**都能满足**特定条件的结果，用布尔值返回。

###  some()

定义：测试数组中是不是**至少有 1 个元素通过**了被提供的函数测试，它返回的是一个 `Boolean` 类型的值

先来介绍语法：

```javascript
array.some(function(currentValue, index, arr), thisArg)
```

> callback:为数组中每个元素执行的函数，该函数接收一至三个参数 currentValue 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) some() 方法正在操作的数组 thisArg （可选参数）,当执行回调函数 callback,用作 this 值

```javascript
let res1 = [1, 2, 3, 4, 5].some(function(cur) {
  return cur > 10
})
console.log(res1) // false

let res2 = [1, 2, 3, 4, 5].some(function(cur) {
  return cur === 1
})
console.log(res2) // true
```

关于 `thisArg` 相关可以参考上文 `array.forEach() 方法` 部分。

简单来说，就是返回是否**至少有 1 个满足**特定条件的结果，用布尔值返回。

### find 和 findIndex

> 该方法在 ECMAScript 6 规范中被加入，可能不存在于某些实现中。

定义：

`find`: 返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

`findIndex`：数组中通过提供测试函数的第一个元素的索引。否则，返回 `-1`。

先来介绍语法：

```javascript
let ele = array.find(function(elemnet, index, arr), thisArg)

let eleIndex = array.findIndex(function(elemnet, index, arr), thisArg)
```

> callback:为数组中每个元素执行的函数，该函数接收一至三个参数 elemnet 数组中正在处理的当前元素 index (可选) 数组中正在处理的当前元素的索引 arr (可选) find 方法正在操作的数组 thisArg 可选参数,当执行回调函数 callback,用作 this 值

```javascript
let res1 = [1, 2, 3, 4, 5].find(function(cur) {
  return cur > 2
})
console.log(res1) // 3

let res2 = [1, 2, 3, 4, 5].findIndex(function(cur) {
  return cur > 2
})
console.log(res2) // 2
```

### keys 与 values 与 entries

定义：

- `keys()` 方法返回一个包含数组中每个索引键的 **Array Iterator** 对象。
- `values()` 方法返回一个新的 `Array Iterator` 对象，该对象包含数组每个**索引的值**
- `entries()` 方法返回一个新的 `Array Iterator` 对象，该对象包含数组中每个**索引的键/值对**。

```javascript
arr.keys()
arr.values()
arr.entries()
```

简单例子：

```javascript
let arr = ['Chocolate', 'zhlll', 'lionkk']

let itKeys = arr.keys()
let itVals = arr.values()
let itEntries = arr.entries()

for (let it of itKeys) {
  console.log(it)
}
// 0
// 1
// 2
for (let it of itVals) {
  console.log(it)
}
// Chocolate
// zhlll
// lionkk
for (let it of itEntries) {
  console.log(it)
}
// [ 0, 'Chocolate' ]
// [ 1, 'zhlll' ]
// [ 2, 'lionkk' ]
```

------

好了，到此关于数组的遍历方式基本上介绍完毕了，也许还有其它方法，但是万变不离其宗，接下来我们将探究 **改变原数组** 的方法。

### 改变原始数组方法

### sort()

先来介绍语法：

```javascript
arr.sort([compareFunction])
```

> compareFunction 可选，用来指定按某种顺序进行排列的函数。 如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。 否则，如果指明了 compareFunction： 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前； 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。

简单例子：

```javascript
let arr = [1, 10, 2, 5, 8, 3]

arr.sort() // 默认
console.log(arr) // [ 1, 10, 2, 3, 5, 8 ]

arr.sort((a, b) => a - b) // 从小到大排序
console.log(arr) // [ 1, 2, 3, 5, 8, 10 ]

arr.sort((a, b) => b - a) // 从大到小排序
console.log(arr) // [ 10, 8, 5, 3, 2, 1 ]
```

### push()

> 类似栈、队列的一些操作

**注意**，`push()` 成功之后会返回数组的长度。

```javascript
let arr = [1, 2]
let res = arr.push(100)
console.log(arr) // [ 1, 2, 100 ]
console.log(res) // 3
```

### pop()

> 类似栈、队列的一些操作

```javascript
let arr = [1, 2, 100]
let res = arr.pop()
console.log(arr) // [ 1, 2 ]
console.log(res) // 100
```

### shift()

> 类似栈、队列的一些操作

```javascript
let arr = [1, 2, 100]
let res = arr.shift()
console.log(arr) // [ 2, 100 ]
console.log(res) // 1
```

### unshift()

定义：将一个或多个元素添加到 **数组的开头**，并 (该方法修改原有数组)

**注意**：该方法会返回该数组的新长度

```javascript
let arr = [1, 2, 100]
let res = arr.unshift(4, 5, 6)
console.log(arr) // [ 4, 5, 6, 1, 2, 100 ]
console.log(res) // 6
```

### reverse()

定义：将数组中元素的位置颠倒，并返回该数组。

```javascript
let arr = [1, 2, 3]
arr.reverse()
console.log(arr) // [ 3, 2, 1 ]
```

###  splice()

> 这个我放最后一个也是有原因的，它比其它几个要更复杂一点，刚开始我也是花了老长时间才理解，而且原本一直与 `split()` 这些分不清楚。

定义：

通过**删除或替换**现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。

```javascript
array.splice(start,deleteCount,item1,.....,itemX)z
```

> start: 指定修改的开始位置（从 0 计数）

```
如果超出了数组的长度，则从数组末尾开始添加内容
如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素，并且等价于array.length-n）
如果负数的绝对值大于数组的长度，则表示开始位置为第0位
```

> deleteCount(可选) : 整数,表示要移除的数组元素个数

```
如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被			删除(含第 start 位)
如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是		   说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新		   元素。
```

> item1, item2, ...(可选) 要添加进数组的元素,从 start 位置开始。如果不指定，则 splice() 将只删除数组元素。

从第 2 位开始插入“Wpq”

```javascript
let arr = ['one', 'two', 'three']

arr.splice(2, 0, 'Wpq')
console.log(arr) // [ 'one', 'two', 'Wpq', 'three' ]
```

从第 2 位开始删除 1 个元素，然后插入“Wpq”

```javascript
let arr = ['one', 'two', 'three']

arr.splice(2, 1, 'Wpq')
console.log(arr) // [ 'one', 'two', 'Wpq' ]
```

> 主流的还是这 7 个方法，对于改变原数组还有 `fill()` 和 `copyWithin()` 方法，小伙伴们可以继续研究~

------

## 数组的映射

### Array.map()方法

> 上文已经介绍

### Array.from()方法

定义：通过在每个数组项上使用 `callback` 调用结果来创建一个新数组。

先来介绍语法：

```javascript
Array.from(Array, callback(currentValue, index, arr))
```

简单例子：

```javascript
let arr = [1, 2, 3]

let newArr = Array.from(arr, function(cur) {
  return cur + 10
})
console.log(newArr) // [ 11, 12, 13 ]
```

------

## 数组的连接

### Array.concat() 方法

`array.concat(array1[, array2, ...])` 将一个或多个数组连接到原始数组。如下所示，连接两个数组：

```javascript
let arrA = [1, 2, 3]
let arrB = [4, 5, 6]
let ans = arrA.concat(arrB)
console.log(ans) // [ 1, 2, 3, 4, 5, 6 ]
```

### 操作符

```javascript
let arrA = [1, 2, 3]
let arrB = [4, 5, 6]
let ans = [...arrA, ...arrB]
console.log(ans) // [ 1, 2, 3, 4, 5, 6 ]
```

------

## 获取数组的片段

### Array.slice() 方法

定义： 返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括 `end`）——原始数组不会被改变。

先介绍语法：

```javascript
arr.slice([begin[, end]])
```

> begin (可选)

1. 提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
2. 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取
3. slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）
4. 如果省略 begin，则 slice 从索引 0 开始。
5. 如果 begin 大于原数组的长度，则会返回空数组。

> end (可选)

1. slice(1,4) 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3 的元素）
2. 如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。
3. 如果 end 被省略，则 slice 会一直提取到原数组末尾。
4. 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。

```javascript
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let res = fruits.slice(1, 3)
let res1 = fruits.slice(1)
let res2 = fruits.slice(-1)
let res3 = fruits.slice(0, -1)
console.log(res) // [ 'Orange', 'Lemon' ]
console.log(res1) // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(res2) // [ 'Mango' ]
console.log(res3) // [ 'Banana', 'Orange', 'Lemon', 'Apple' ]
```

------

## 转换数组

### join()

定义：

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

语法:

```javascript
arr.join(separator)
```

简单例子：

```javascript
let arr = ['one', 'two', 'three']
let res = arr.join('^')
let res1 = arr.join('&')

console.log(res) // one^two^three
console.log(res1) // one&two&three
```

### split()

定义：

使用指定的分隔符字符串将一个 `String` 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

语法：

```javascript
str.split([separator[, limit]])
```

```javascript
const str = 'The best Chocolate'

const words = str.split(' ')
console.log(words) // [ 'The', 'best', 'Chocolate' ]
console.log(words[2]) // Chocolate
```

### toString()

定义：

返回一个字符串，表示指定的数组及其元素。

> 当一个数组被作为文本值或者进行字符串连接操作时，将会`自动调用`其 `toString` 方法。

语法:

```javascript
arr.toString()
```

```javascript
let arr = ['one', 'two', 'three']
console.log(arr.toString()) // one,two,three
```

------

## 数组的扁平化

### flat()

定义：

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个`新数组`返回。

语法：

```javascript
var newArray = arr.flat([depth])
```

> 参数 depth 可选 指定要提取嵌套数组的结构深度，默认值为 1。 返回值 一个包含将数组与子数组中所有元素的新数组。

```javascript
const arr1 = [0, 1, 2, [3, 4]]
console.log(arr1.flat()) // [ 0, 1, 2, 3, 4 ]

const arr2 = [0, 1, 2, [[[3, 4]]]]
console.log(arr2.flat(2)) // [ 0, 1, 2, [ 3, 4 ] ]
```

