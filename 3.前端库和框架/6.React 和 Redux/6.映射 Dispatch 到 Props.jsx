const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // 请在本行以下添加你的代码
  function mapDispatchToProps(dispatch){
      return {
          submitNewMessage:function(message){
              dispatch(addMessage(message));
          }
      }
  }