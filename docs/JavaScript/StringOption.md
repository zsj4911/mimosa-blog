---
title: JS 字符串原生API
author: 张世杰
date: '2024-01-18'
---

## 获取字符串长度

```js
const str = "hello world"
console.log(str.length) // 11
```

## 获取字符串指定位置的值

1. charAt(index)

```js
const str = "hello world"
console.log(str.chartAt(0))  // h
```

2. 直接通过index

```js
const str = "hello world",
cnsole.log(str[0]) // h

// 区别：
str.charAt(5) // ''
str[5] // undefined
```

3. charCodeAt(index)  返回字符串索引的Unicode值

```js
const str = "hello world"
console.log(str.chartCodeAt(1)) // 65
console.log(str.chartCodeAt(5)) // Nan
```

## 检索字符串是否包含特定序列

1. indexOf(searchvalue, startIndex)

```js
// 返回第一个出现的位置，不存在返回 -1
const str = "hello world"
console.log(str.indexOf('l'))      // 2
console.log(str.indexOf('l', 4))   // 9
console.log(str.indexOf('c'))      // -1
```

2. lastIndexOf(searchvalue, endIndex) 

```js
// 返回最后一个出现的位置，不存在返回 -1
const str = "hello world"
console.log(str.lastIndexOf('l'))      // 9
console.log(str.lastIndexOf('c'))      // -1
console.log(str.lastIndexOf('l', 4))   // 3
```

3. includes(searchValue, startIndex)

```js
// 包含返回true， 不包含返回false
const str = "hello world"
console.log(str.includes('llo'))     // true
console.log(str.includes('oll'))     // false
console.log(str.includes('llo', 5))  // false
```

4. startsWith(searchValue, startIndex)

```js
// 是否以某一个字符串开始
const str = "hello world"
console.log(str.startsWith('he'))      // true
console.log(str.startsWith('her'))     // false
console.log(str.startsWith('wor', 6))  // true
```

5. endsWith(searchValue, length)

```js
// 是否以某一个字符串结束
const str = "hello world"
console.log(str.endsWith('rld'))      // true
console.log(str.endsWith('llo'))      // false
console.log(str.endsWith('llo', 5))   // true
```

## 连接多个字符串

1. concat(str1, str2, str3 ...strx)

```js
const str = "hello"
console.log(str.concat(' ', 'w', 'or', 'ld')) // hello world
```

2. 使用 '+' 号

```js
// 字符串拼接
const str = "hello"
console.log(str + " world")

// 其他类型转字符串
const num = 123, bool = false
const merge = '' + num + bool
console.log(merge, typeof merge) // 123false, string
```
3. 使用模版字符串

```js
const str1 = "hello"
const str2 = "world"
const str3 = "javascript"

console.log(`${str1} ${str2}, ${str3}`)  // hello world, javascript
```

## 字符串分割成数组
split(separator, limit)

```js
const str = "hello world"
console.log(str.split(" "))     // ['hello', 'world']
console.log(str.split("", 5))   // ['h', 'e', 'l', 'l', 'o']

// 使用正则表达式对多个字符的拆分
const str = "hello;wolrd.java/script"
const reg = /[;./]/
console.log(str.split(reg))
```

## 截取字符串
1. slice(startIndex, endIndex)

```js
// 包含起始索引，不包含结束索引
const str = "hello world"
console.log(str.slice(6))         // 'world'
console.log(str.slice(2, 8))      // 'llo wor'
console.log(str.slice(-1))        // 'd'
console.log(str.slice(-5, -1))    // 'worl'
console.log(str.slice(6, -2))     // 'wor'
```

2. subStr(start, length)

```js
// 已弃用
const str = "hello world"
console.log(str.substr(2, 5))   // 'llo w'
console.log(str.substr(6))      // 'world'
console.log(str.substr(-5, 3))  // 'wor'
```

3. substring(from, to)

```js
/**
 * @params from 开始索引
 * @params to   结束索引(非必填)
 * @return string
 */

const str = "hello world"
console.log(str.substring(1))       // 'ello world'
console.log(str.substring(3, 5))    // 'lo'
console.log(str.substring(3, 3))    // ''
console.log(str.substring(7, 3))    // 'lo w'
```

## 字符串大小写转换

1. toLowerCase()

```js
const str = "HeLLo WorLD"
console.log(str.toLowerCase())
```

2. toUpperCase()

```js
const str = "helLO World"
console.log(str.toUpperCase())
```

3. 首字母大写
```js
const str = "hello world i am javascript"
const strArr = str.split(" ")
let resultStr = ''
for(let val of strArr) {
  resultStr += val[0].toUpperCase() + val.slice(1) + ' '
}
console.log(resultStr) // Hello World I Am Javascript
```

## 字符串模式匹配

1. replace(searchvalue, newvalue)

```js
const str = "helLo worLd"
// 普通字符串替换
console.log(str.replace('l', 'z'))    // hezlo world
// 正则表达式全局替换，忽略大小写
console.log(str.replace(/l/gi, 'z'))  // hezzo worzd
```

2. match(regexp)


```js

const str = "hello world"
// 只匹配一次，可以得到匹配的字符串， 索引位置， 源字符串  
// 类似indexOf或lastIndexOf
console.log(str.match("l"))  // [ 'l', index: 2, input: 'hello world', groups: undefined ]
console.log(str.match(/l/))  // [ 'l', index: 2, input: 'hello world', groups: undefined ]

// 取得到的数组中的值
console.log(str.match("l")[0])        // 'l'
console.log(str.match("l")['index'])  // 2
console.log(str.match("l").index)     // 2


// 全局匹配，可以判断字符串中，匹配字符出现了多少次
console.log(str.match(/l/g))  // [ 'l', 'l', 'l' ]
```

3. search(searchvalue)

```js
const str = "heLlo world"
console.log(str.search("l"))  // 3
// 忽略大小写
console.log(str.search(/l/i))   // 2

// 与indexOf的区别：search 可以使用正则匹配，indexOf 不行
```

##  移除字符串首尾空白符

1. trim( )

```js
// 可以去除 换行符、tap、空格。不会改变原字符串
const str = "\n   hello  world \n    "
console.log(str.trim())   // hello  world
```

2. trimStart( )

```js
const str = "\n   hello  world"

console.log(str.trimStart()) // "hello  world"

```

3. trimEnd( )

```js
const str = "hello world /n   /n      "
console.log(str.trimEnd())  // "hello  world"
```

## 获取字符串本身

1. valueOf( )

```js
const str = "hello world"
console.log(str.valueOf()) // "hello world"
```

2. toString( )

```js
const str = "hello world"
console.log(str.toString()) // "hello world"
```

## 重复一个字符串

1. repeat(num)

```js
const str = "hello "
console.log(str.repeat(3))          // hello hello hello 
console.log(str.repeat("2"))        // hello hello 
console.log(str.repeat("jj"))       // ""
console.log(str.repeat(Infinity))   // Invalid count value
console.log(str.repeat(2.9))        // hello hello 
console.log(str.repeat(0.9))        // ""
console.log(str.repeat(-0.9))       // ""
console.log(str.repeat(-1))         // Invalid count value
```

## 补齐字符串长度

1. padStart(len, str)  

首部补齐，len 表示字符串补齐的长度， str表示用于补齐的字符串。

```js
const str = "hello"
console.log(str.padStart(11, "asd "))  // "asd ahello"
// 省略第二个参数, 空格补齐
console.log(str.padStart(8))           // "   hello"

// 常见用法：数字定位数补齐
const str1 = "3"
console.log(str1.padStart(3, "0"))    // "003"
const str2 = "15"
console.log(str2.padStart(3, "0"))    // "015"
```

2. padEnd(len, str)

```js
const str = "hello"
console.log(str.padEnd(9, " e")) // "hello e e"
```

## 字符串转数字

1. parseInt(strNum)

```js
const str = "123"
console.log(typeof parseInt(str),  parseInt(str))
