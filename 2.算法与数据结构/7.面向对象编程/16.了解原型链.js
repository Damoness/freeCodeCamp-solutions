function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // => true
  
  // 修改以下代码使其结果返回 true
  Object.prototype.isPrototypeOf(Dog.prototype);
  