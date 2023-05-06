# 前端常用工具函数

## 校验数据类型

```js
const typeOf = function(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
```

**示例：**

```js
typeOf('树哥')  // string
typeOf([])  // array
typeOf(new Date())  // date
typeOf(null) // null
typeOf(true) // boolean
typeOf(() => { }) // function
```

## 防抖

```js
const debounce = (() => {
  let timer = null
  return (callback, wait = 800) => {
    timer&&clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()
```

**示例：**

```js
methods: {
  loadList() {
    debounce(() => {
      console.log('加载数据')
    }, 500)
  }
}
```

## 节流

```js
const throttle = (() => {
  let last = 0
  return (callback, wait = 800) => {
    let now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()
```



## 手机号脱敏

## 开启全屏

## 关闭全屏

## 大小写转换



