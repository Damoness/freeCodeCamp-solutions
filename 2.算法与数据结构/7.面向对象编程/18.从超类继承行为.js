function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// 请把你的代码写在这条注释以下

let duck = Object.create(Animal.prototype); // 修改这一行代码
let beagle = Object.create(Animal.prototype);; // 修改这一行代码

duck.eat(); // 应该输出 "nom nom nom"
beagle.eat(); // 应该输出 "nom nom nom" 