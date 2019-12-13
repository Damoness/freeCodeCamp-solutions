function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// 请把你的代码写在这条注释以下
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log('wwwww')
}



// 请把你的代码写在这条注释以下

let beagle = new Dog();

beagle.eat(); // 应该输出 "nom nom nom"
beagle.bark(); // 应该输出 "Woof!"