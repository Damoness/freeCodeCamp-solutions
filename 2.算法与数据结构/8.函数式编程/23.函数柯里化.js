function add(x) {
    // 请在本行以下添加你的代码
    
    return function (y){
      return function(z){
        return x + y + z;
      }
    }
    // 请在本行以上添加你的代码
  }
  add(10)(20)(30);