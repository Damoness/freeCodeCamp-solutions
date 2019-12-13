function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// 请把你的代码写在这条注释以下

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();
beagle.eat();  // 应该输出 "nom nom nom"