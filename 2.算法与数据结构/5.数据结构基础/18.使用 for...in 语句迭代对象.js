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
  
  function countOnline(obj) {
    // 请把你的代码写在这条注释以下
    let n = 0;
    for(let key in obj){
      obj[key].online && n++;
    }
    return n;
    // 请把你的代码写在这条注释以上
  }
  
  console.log(countOnline(users));