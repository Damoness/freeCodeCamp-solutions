let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // 请把你的代码写在这条注释以下
    return Object.keys(obj)
    // 请把你的代码写在这条注释以上
  }
  
  console.log(getArrayOfUsers(users));