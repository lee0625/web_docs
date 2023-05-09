# Vue 3

## ref函数

- 作用：定义一个响应式的数据
- 语法：`const xxx = ref(initValue)`
  - 创建一个包含响应数据的引用对象（reference对象，简称ref对象）
  - JS中操作数据：`xxx.value`
  - 模板中读取数据：不需要.value，直接： `<div>{{xxx}}</div>`
- 备注：
  - 接受的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`是`get`与`set`完成的。
  - 对象类型的数据：内部``“求助”``了Vue3.0中的一个新函数——`reactive`函数

## reactive函数

- 作用：定义一个对象类型的响应数据（基本类型不要用他，要用`ref`函数）
- 语法：`const 代理对象 = reactive(源对象)`接受一个对象（或数组），返回一个代理对象（proxy对象）
- reactive定义的响应式数据是“深层次的”
- 内部基于ES6的proxy事项，通过代理对象操作源对象内部数据进行操作

## reactive对比ref

- 从定义数据角度对比：

  - ref用来定义：基本数据类型<font color='red'> 基本类型数据 </font>

  - reactive用来定义：<font style="color:red">对象（或数组）类型数据</font>

  - 备注：ref也可以用来定义对象（或数组）类型数据，它内部自动通过`reactive`转为代理对象

- 从原理角度对比：

  - ref通过`ObjectDefineProperty()`的`get`与`set`来实现响应式（数据劫持）

   - reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部数据。

- 从使用角度对比：
  - ref定义的数据：操作数据需要.value，读取时模板不需要.value
  - reactive定义数据：操作数据与读取数据：均不需要.value   

## 响应原理差异

### Vue2.x的响应式

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对象属性的读取，修改进行拦截（数据劫持）
  - 数据类型：通过重写更新数组的一系列方法实现拦截（对数据的变更方法进行包裹）

  ```js
  Object.defineProperty(data, 'count',{
      get() {},
      set() {}
  })
  ```

- 存在问题：

  - 新增属性、删除属性，界面不会更新。
  - 直接通过下班修改数组，界面不会自动更新。

### Vue3.x的响应式

- 实现原理：
  - 通过Proxy（代理）：拦截对象任意属性的变化，包括属性值的读写、属性的添加、属性的删除等。
  - 通过Reflect（反射）：对代理对象的属性进行操作

## 计算属性与监视

### computed函数

- 与Vue2.x中的computed配置功能一致
- 写法

```js
import {computed} from 'vue'

setup() {
    // 计算属性——简写
    let fullName = computed(() => person.firstName + person.lastName)
    
    // 计算属性——完整
    let fullName = computed({
        get() {
            retrun person.firstName + person.lastName
        }
        set(value) {
        	const nameArr = value.split('-')
        	person.firstName = nameArr[0]
        	person.lastNmae = nameArr[1]
    	}
    })
}
```



### watch函数

- 与Vue2.x中watch配置功能一致
- 两个小“坑”：
  - 监视reactive定义的响应数据时：oldValue无法正确获取、强制开启深度监视（deep配置失效）
  - 监视reactive定义的响应式数据中某个属性时：deep配置有效

```js
// 情况一：监视ref定义的响应数据
watch(sum, (newVlaue, oldValue) => {
    //变化了
}，{immediate：true})

// 情况二：监听多个ref定义的响应数据
watch（[sun,msg], (newVlaue, oldValue) => {
	// 返回数据，依照监听顺序
}）

/*
	情况三：监听reactive定义的响应式数据
			若watch监视的是reactive定义的响应式数据，则无法正确获得oldVlue!!!
			若watch监视的是reactive定义的响应式数据，则强制开启了深度监听
**/
watch(person, (newVlaue, oldValue) => {
    //变化了
}，{immediate：true, deep:true}) // 此处的deep配置不再生效

// 情况四：监视reactive定义的响应式数据中的某个属性
watch(person.name, (newVlaue, oldValue) => {
    //变化了
}，{immediate：true, deep:true})
```



### watchEffect函数

- watch的套路：既要知名监视的属性，也要指明监视的回调
- watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
- watchEffect与computed有点像：
  - 但computed注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而watchEffect更注重过程（回调函数的函数体），所以不用写返回值

```js
// watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行
watchEffect(() => {
    const x = sum.a
})
```

## 生命周期钩子

可以通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子（相对于vue2.x来说）。

| 选项式 API        | Hook inside `setup` |
| ----------------- | ------------------- |
| `beforeCreate`    | Not needed*         |
| `created`         | Not needed*         |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |

​	因为 `setup` 是围绕 `beforeCreate` 和 `created` 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 `setup` 函数中编写。

这些函数接受一个回调函数，当钩子被组件调用时将会被执行:

```js
// MyBook.vue

export default {
  setup() {
    // mounted
    onMounted(() => {
      console.log('Component is mounted!')
    })
  }
}
```

## toRef

- 作用：创建一个ref对象，其value值指向另一个对象的某个属性。
- 语法：`const name = toRef(person, 'name')`
- 应用：要将响应对象中的某个对象中的某个属性单独提供给外部使用时
- 扩展：`toRefs`与`toRef`功能一致，但可以批量创建多个ref对象，语法：`toRefs(person)`

## shallowRactive与shallowRef

- shallowRactive：只处理对象最外层属性的响应式（浅响应）
- shallowRef：只处理基本数据类型的响应式，不进行对象的响应式
- 什么时候使用：
  - 如果有一个对象数据，结构比较深，但变化只是最外层的属性 ===> shallowReactive
  - 如果有一个对象数据，后续功能不修改该对象中的属性，而是新的对象来替换  ===> shallowRef

## readonly与shallowReadonly

- readonly：让一个响应式数据变为只读的（深只读）
- shallowReadonly：让一个响应式数据变为只读的（浅只读）
- 应用场景：不希望数据被修改

## roRow
