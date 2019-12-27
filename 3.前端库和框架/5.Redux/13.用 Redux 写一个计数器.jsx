const INCREMENT = 'INCREMENT'; // 为增量 action 类型定义一个常量
const DECREMENT = 'DECREMENT'; // 为减量 action 类型定义一个常量

// 定义计数器，它将根据收到的action增加或减少状态
const counterReducer = (state = 0,action)=>{

  switch(action.type){
    case INCREMENT:{

      return state+1;
      break;
    }
    case DECREMENT:{

      return state-1;
      break;
    }
    default:{
      return state;
    }
  }

}; 

const incAction = ()=>{return {type:INCREMENT} }; // 定义一个用于递增的 action creator

const decAction = ()=>{return {type:DECREMENT}}; // 定义一个用于递减的 action creator

const store = Redux.createStore(counterReducer); // 在这里定义一个 Redux store，传递你的 reducer