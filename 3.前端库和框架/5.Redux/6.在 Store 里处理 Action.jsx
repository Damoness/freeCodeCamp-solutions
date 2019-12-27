const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // 修改此行下方的代码
  
    if(action.type == 'LOGIN'){
      return {
        login:true,
      }
    }
  
     return state;   
    
    // 修改此行上方的代码
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  