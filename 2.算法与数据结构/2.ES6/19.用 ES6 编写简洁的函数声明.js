// 在这行以下修改代码
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // 在这行以上修改代码
  bicycle.setGear(3);
  console.log(bicycle.gear);