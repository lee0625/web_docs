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

```js
const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}
```



## 开启全屏

```js
const launchFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}
```



## 关闭全屏

```js
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
```



## 大小写转换

**参数：**

- `{string} `   `str` 待转换的字符串

- `{number}`   `type` 1-全大写 2-全小写 3-首字母大写

```js
const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
    default:
      return str
  }
}
```

**示例**

```js
turnCase('vue', 1) // VUE
turnCase('REACT', 2) // react
turnCase('vue', 3) // Vue
```



