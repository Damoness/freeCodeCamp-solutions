const ADD_TO_DO = 'ADD_TO_DO';

// 一个字符串列表表示要做的任务
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // 不要在这里改变 state，否则测试将失败
      return [
          ...todos,
          action.todo,
      ]
    //return todos.concat([action.todo]);
    default:
      return state;
  }
};

// 一个 todo 的例子是 'Learn React'，
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);