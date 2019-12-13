function Dog(name) {
    this.name = name;
  }
  
  // 请把你的代码写在这条注释以下
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }else{
      return false;
    }
  }
  