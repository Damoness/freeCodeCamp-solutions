## 创建
```js
const reducer = (state = 5) => state;

const store = Redux.createStore(reducer)

```

## Action : 动作

* 使用常量声明 Action Types
* Action Creator
* 使用Switch处理多个Actions
* 携带数据

## Reducer

* 多个reducer组合
* 使用中间件处理异步操作
* 返回新的状态