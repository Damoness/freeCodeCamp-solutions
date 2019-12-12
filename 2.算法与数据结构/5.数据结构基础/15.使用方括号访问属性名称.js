let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // 请不要修改本行以上的代码
  
  function checkInventory(scannedItem) {
    // 请把你的代码写在这条注释以下
    return foods[scannedItem];
  }
  
  // 你可以修改这行代码来测试不同的输入
  console.log(checkInventory("apples"));