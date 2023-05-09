---
outline: [1,3]
---
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

## 数组对象根据字段去重

**参数：**

- arr 要去重的数组
- key 根据去重的字段名

```js
const uniqueArrayObject = (arr = [], key = 'id') => {
  if (arr.length === 0) return
  let list = []
  const map = {}
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item
    }
  })
  list = Object.values(map)

  return list
}
```

**示例**

```js
const responseList = [
    { id: 1, name: '树哥' },
    { id: 2, name: '黄老爷' },
    { id: 3, name: '张麻子' },
    { id: 1, name: '黄老爷' },
    { id: 2, name: '张麻子' },
    { id: 3, name: '树哥' },
    { id: 1, name: '树哥' },
    { id: 2, name: '黄老爷' },
    { id: 3, name: '张麻子' },
]

uniqueArrayObject(responseList, 'id')
// [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' }]
```

## 滚动到页面顶部

```js
const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
}
```

> 利用了window.requestAnimationFrame在下一次重绘之前递归调用本身，并使用window.scrollTo方法将页面滚动到指定位置，直到滚动高度为0，即滚动到页面顶部为止。
>
> 这种使用requestAnimationFrame的方式来实现页面滚动的好处在于，可以保证滚动的平滑性和性能。

## 滚动到元素位置

```js
const smoothScroll = element =>{
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
```

**示例**

```js
smoothScroll('#target'); // 平滑滚动到 ID 为 target 的元素
```

## 金额格式化

**参数：**

- {number} number：要格式化的数字
- {number} decimals：保留几位小数
- {string} dec_point：小数点符号
- {string} thousands_sep：千分位符号

```js
const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
  const dec = typeof dec_point === 'undefined' ? '.' : dec_point
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
```

**示例：**

```js
moneyFormat(10000000) // 10,000,000.00
moneyFormat(10000000, 3, '.', '-') // 10-000-000.000
```

## 存储操作

```js
class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    this.storage.setItem(key, value)
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key))
    } catch (err) {
      return this.storage.getItem(key)
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

const localCache = new MyCache()
const sessionCache = new MyCache(false)

export { localCache, sessionCache }
```

**示例：**

```js
localCache.getItem('user')
sessionCache.setItem('name','树哥')
sessionCache.getItem('token')
localCache.clear()
```

## 下载文件

**参数：**

- api 接口
- params 请求参数
- fileName 文件名
- type 请求方式 默认：`get`

```js
const downloadFile = (api, params, fileName, type = 'get') => {
  axios({
    method: type,
    url: api,
    responseType: 'blob', 
    params: params
  }).then((res) => {
    let str = res.headers['content-disposition']
    if (!res || !str) {
      return
    }
    let suffix = ''
    // 截取文件名和文件类型
    if (str.lastIndexOf('.')) {
      fileName ? '' : fileName = decodeURI(str.substring(str.indexOf('=') + 1, str.lastIndexOf('.')))
      suffix = str.substring(str.lastIndexOf('.'), str.length)
    }
    //  如果支持微软的文件下载方式(ie10+浏览器)
    if (window.navigator.msSaveBlob) {
      try {
        const blobObject = new Blob([res.data]);
        window.navigator.msSaveBlob(blobObject, fileName + suffix);
      } catch (e) {
        console.log(e);
      }
    } else {
      //  其他浏览器
      let url = window.URL.createObjectURL(res.data)
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', fileName + suffix)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(link.href);
    }
  }).catch((err) => {
    console.log(err.message);
  })
}`
```

**使用：**

```js
downloadFile('/api/download', {id}, '文件名')
```

> 当前示例方法是基于`axios`模块库，记得安装

## 深拷贝

```js
const clone = parent => {
  // 判断类型
  const isType = (obj, type) => {
    if (typeof obj !== "object") return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
      case "Array":
        flag = typeString === "[object Array]";
        break;
      case "Date":
        flag = typeString === "[object Date]";
        break;
      case "RegExp":
        flag = typeString === "[object RegExp]";
        break;
      default:
        flag = false;
    }
    return flag;
  };

  // 处理正则
  const getRegExp = re => {
    var flags = "";
    if (re.global) flags += "g";
    if (re.ignoreCase) flags += "i";
    if (re.multiline) flags += "m";
    return flags;
  };
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;

    let child, proto;

    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};
```

> 此方法存在一定局限性：一些特殊情况没有处理: 例如Buffer对象、Promise、Set、Map。

**如果确实想要完备的深拷贝，推荐使用 lodash 中的 cloneDeep 方法。**

## 模糊搜索

**参数：**

- list 原数组
- keyWord 查询的关键词
- attribute 数组需要检索属性

```js
const fuzzyQuery = (list, keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord)
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i])
    }
  }
  return arr
}
```

**示例：**

```js
const list = [
  { id: 1, name: '树哥' },
  { id: 2, name: '黄老爷' },
  { id: 3, name: '张麻子' },
  { id: 4, name: '汤师爷' },
  { id: 5, name: '胡万' },
  { id: 6, name: '花姐' },
  { id: 7, name: '小梅' }
]
fuzzyQuery(list, '树', 'name') // [{id: 1, name: '树哥'}]
```

## 遍历树节点

在树形结构中查找某个节点，可以使用深度优先搜索或广度优先搜索算法。

### 第一种：

**参数：**

- `data` 数据源
- `callback `返回返回，返回值为当前项
- `childrenName` 子节点属性

```js
const foreachTree = (data, callback, childrenName = 'children') => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i])
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName)
    }
  }
}
```

**示例：**

假设我们要从树状结构数据中查找 id 为 9 的节点

```js
const treeData = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
 }, {
  id: 2,
  label: '一级 2',
  children: [{
    id: 5,
    label: '二级 2-1'
  }, {
    id: 6,
    label: '二级 2-2'
  }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
}],

let result
foreachTree(data, (item) => {
  if (item.id === 9) {
    result = item
  }
})
console.log('result', result)  // {id: 9,label: "三级 1-1-1"}   
```

### 第二种(深度优先搜索算法):

**参数：**

- `tree`：一个包含树形数据的数组。
- `nodeId`：要查找的节点 ID。
- `childrenField`：指定子节点数组的名称，默认值为 `'children'`。
- `returnNode` : 是否返回节点， 默认是`false`

```js
const findNode = (tree, nodeId, childrenField = 'children', returnNode = false) => {
  for (const node of tree) {
    if (node.id === nodeId) {
      return returnNode ? node : true;
    }

    if (node[childrenField]) {
      const result = findNode(node[childrenField], nodeId, childrenField, returnNode);
      if (result) {
        return result;
      }
    }
  }

  return false;
}

```

### 第三种(广度优先搜索算法)：

**参数**

- `tree`：一个包含树形数据的数组。
- `nodeId`：要查找的节点 ID。
- `childrenField`：指定子节点数组的名称，默认值为 `'children'`。
- `returnNode` : 是否返回节点， 默认是`false`

```js
const findNode = (tree, nodeId, childrenField = 'children', returnNode = false) => {
  const queue = [...tree];

  while (queue.length) {
    const node = queue.shift();
    if (node.id === nodeId) {
      return returnNode ? node : true;
    }
    if (node[childrenField]) {
      queue.push(...node[childrenField]);
    }
  }

  return false;
}
```



## 平行结构转树形结构

**参数：**

- `data`：一个包含平行数据的数组。
- `parentField`：指定父节点 ID 字段的名称，默认值为 `'parentId'`。
- `idField`：指定节点 ID 字段的名称，默认值为 `'id'`。
- `childrenField`：指定子节点数组的名称，默认值为 `'children'`。

```js
const buildTree = (data, parentField = 'parentId', idField = 'id', childrenField = 'children') => {
  const idMap = {};
  const tree = [];

  // 将所有节点按照 id 存储到 idMap 中
  for (const node of data) {
    idMap[node[idField]] = {...node, [childrenField]: []};
  }

  // 将节点依次放到其父节点的 children 数组中
  for (const node of data) {
    const parent = idMap[node[parentField]];
    if (parent) {
      parent[childrenField].push(idMap[node[idField]]);
    } else {
      tree.push(idMap[node[idField]]);
    }
  }

  return tree;
}

```

**示例**

```js
const data = [
  {id: 1, name: 'Node 1', parentId: null},
  {id: 2, name: 'Node 2', parentId: 1},
  {id: 3, name: 'Node 3', parentId: 2},
  {id: 4, name: 'Node 4', parentId: 2},
  {id: 5, name: 'Node 5', parentId: null},
  {id: 6, name: 'Node 6', parentId: 5},
  {id: 7, name: 'Node 7', parentId: 6},
];

const tree = buildTree(data);
console.log(tree); // 输出转换后的树形数据结构
```

## 树形结构转平行结构

**参数：**

- `tree`：一个包含树形数据的数组。
- `childrenField`：指定子节点数组的名称，默认值为 `'children'`。

```js
const flattenTree = (tree, childrenField = 'children') => {
  const result = [];

  function flatten(node) {
    const { [childrenField]: children, ...rest } = node;
    result.push(rest);
    
    for (const child of children) {
      flatten(child);
    }
  }
  
  for (const node of tree) {
    flatten(node);
  }
  
  return result;
}
```

## 随机数

**参数：**

- `min` 最小值
- `max` 最大值
- 返回一个在区间 [min, max) 之间的整数

```js
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

