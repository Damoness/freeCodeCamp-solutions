const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // 在这行以下修改代码
    const resultDisplayArray = arr.map(item=>`<li class="text-warning">${item}</li>`);
    // 在这行以上修改代码
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) 应该返回：
   * [ <li class="text-warning">no-var</li>,
   *   <li class="text-warning">var-on-top</li>, 
   *   <li class="text-warning">linebreak</li> ]
   **/
  const resultDisplayArray = makeList(result.failure);