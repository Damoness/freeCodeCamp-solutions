let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // 请把你的代码写在这条注释以下
  
  
  let glideMixin = function(obj){
      obj.glide = function(){
          console.log('Flying , wooosh!');
      }
  }
  
  
  glideMixin(boat);
  glideMixin(bird);