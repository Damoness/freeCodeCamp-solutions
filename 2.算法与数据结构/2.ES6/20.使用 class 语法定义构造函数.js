function makeClass() {
    "use strict";
    /* 在这行下面改写代码 */
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
    /* 在这行上面改写代码 */
    return Vegetable;
  }
  
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => 应该显示 'carrot'