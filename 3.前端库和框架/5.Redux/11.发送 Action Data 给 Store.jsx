const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // 修改此行下方的代码
    case ADD_NOTE:{
      return action.text;
    }

    // 修改此行上方的代码
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // 修改此行下方的代码
  return {
    type:ADD_NOTE,
    text:note,
  }
  // 修改此行上方的代码
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());