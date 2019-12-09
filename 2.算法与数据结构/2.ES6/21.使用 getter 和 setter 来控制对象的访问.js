function makeClass() {
    "use strict";
    /* 请把你的代码写在这条注释以下 */
    class Thermostat{
      constructor(f){
        this.f = f;
      }
  
      get temperature(){
        return 5/9 * (this.f - 32);
      } 
  
      set temperature(c){
        this.f = c * 9.0 / 5 + 32;
      }
    }
    /* 请把你的代码写在这条注释以上 */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // 使用华氏温度来初始化
  let temp = thermos.temperature; // 摄氏温度24.44度
  thermos.temperature = 26;
  temp = thermos.temperature; // 摄氏温度26度