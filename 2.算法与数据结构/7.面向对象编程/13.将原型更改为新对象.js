function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // 请把你的代码写在这条注释以下
    numLegs:4,
    eat(){
      console.log('eat something')
    },
    describe(){
      console.log('My name is ' + this.name);
    },
  };