function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // 请把你的代码写在这条注释以下
  
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  
  
  