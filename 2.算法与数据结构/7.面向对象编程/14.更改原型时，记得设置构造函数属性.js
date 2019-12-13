function Dog(name) {
    this.name = name; 
  }
  
  // 请只修改这条注释以下的代码
  Dog.prototype = {
    constructor:Dog,
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };