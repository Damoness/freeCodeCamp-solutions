const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// 用于计数的全局变量：
let count = 0;

// 修改此行下方的代码
store.subscribe(()=>{
  
  count++;
  console.log(count);
})
// 修改此行上方的代码

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);