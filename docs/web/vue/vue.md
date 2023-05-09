# Vue2

## [Object.defineproperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

- 语法

```js
Object.defineProperty(obj, prop, desc)
```
1. obj 需要定义属性的当前对象
2. prop 当前需要定义的属性名
3. desc 属性描述符

- 示例

```js
let person = {
    name: '张三',
    sex: '男'
}

let num = 18

Object.defineProperty(person, 'age', {
    value: 18,
    enumerable: true, // 控制属性是否可枚举  默认是false(描述属性是否会出现在for in 或者 Object.keys()的遍历中)
    writeble: true, // 控制属性是否可修改  默认值是false
    configrable: true, // 控制属性是否可以被删除 默认值是false
    // 当有人读取person的age属性时，get函数（getter）会被调用，且返回age的值
    get() {
        return num
    },
    // 当有人设置person的age属性时，set函数（setter）会被调用，且会收到修改的具体值
    set(value) {
        num = value
    }
})
```

## 数据代理
通过一个对象代理对另一个对象中的属性的操作（读/写）饿

## 常用按键别名

- `.enter` 回车
- `.tab` 换行
- `.delete` (捕获“删除”和“退格”键)
- `.esc` 退出
- `.space `  空格
- `.up`  上
- `.down` 下
- `.left` 左
- `.right`   右

## computed和watch之间的区别

1. computed能完成的功能。watch都可以完成
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

两个重要的小原则：

1. 所有被Vue管理的函数。最好携程普通函数，这样this的指向才是vm 或 组件实例对象
2. 所有不被Vue所管理的函数（定时器的回调函数、Ajax的回调函数、Promise的回调函数等），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

## 绑定样式

### class样式

写法：`class=“xxx”` xxx可以写成字符串、对象、数组

```
			- 字符串写法适用于：类名不确定，要动态获取
			- 对象写法适用于：要绑定多样式，个数不确定，名字也不确定
			- 数组写法适用于：要绑定多个样式、个数确定，名字确定，但不确定用不用
```

### style样式

- `:style="{fontSize: xxx}"`其中xxx是动态值
- `:style="[a,b]"`其中a、b是样式对象

## 数据监测

### vue会监视data中所有层次的数据

### 如何检测对象中的数据？

**通过setter实现监视，且要在new Vue时就传入要监视的数据。**

- 对象中后添加的属性，Vue默认不做响应式处理
- 如果需要给添加属性做响应，请使用如下API：
  - Vue.set(target, propertyName/index, value)
  - Vue.$set(target,propertyName/index, value)

### 如何检测数组中的数据？

**通过包裹数组更新元素的方法实现，本质上就是做了两件事：**

- 调用原生对应的方法对数组进行更新
- 更新解析模板，进而更新页面

### 在Vue修改数组中的某个元素一定要如下方法：

1. 使用这些API：push()、pop()、shift（）、unshift（）、splice（）、sort（）、reverse（）
2. Vue.set() 或 vm.$set()

> 特别注意：
>
> Vue.set()和vm.$set()不能给vm或vm的根数据对象添加属性！！！

## 自定义指令

### 定义语法：

#### 局部指令

```js
new Vue({
    directives:{指令名：配置对象}
})

new Vue({
    directives:{指令名：函数}
})
```

#### 全局指令

```js
Vue.derective(指令名，配置对象)

Vue.derective(指令名，回调函数)
```

### 配置对象中常用的三个回调：

#### bind：指令与元素成功绑定时调用。

#### inserted：指令所在元素插入页面时调用。

#### undate：指令所在模板结构被重新解析时调用。

### 调用时机

- 指令与元素成功绑定时（一上来）
- 指令所在模板被重新解析时

> this指向为window

### 备注

- 指令定义时不加v-，但使用时要加v-；
- 指令名如果是多个单词，要使用kebab-case命名方式，不要使用cameClass命名。

## 组件

### Vue使用组件的三大步骤：

- 定义组件（创建组件）
- 注册组件
- 使用组件（写组件的标签）

### 如何使用一个组件？

使用Vue.extend(option)创建，其中options和Vue（options）时传入的options几乎一样，但也是有点区别：

区别如下：

- el不要写——最终所有的组件都要经过一个vm的管理，有el中的el决定服务哪个容器。
- data必须写成函数——避免组件被复用，组件存在引用关系

> 备注: 使用templete可以配置组件结构。

### 如何注册组件？

#### 局部注册

靠new Vue的时候传入components选项

#### 全局注册

靠Vue.component('组件名'，组件)

