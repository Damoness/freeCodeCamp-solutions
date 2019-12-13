function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // 请把你的代码写在这条注释以下 
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }else{
      prototypeProps.push(property);
    }
  }
  
  
  
  
  