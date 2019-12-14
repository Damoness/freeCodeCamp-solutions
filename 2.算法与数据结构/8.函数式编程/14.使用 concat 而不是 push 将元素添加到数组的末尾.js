function nonMutatingPush(original, newItem) {
    // 请在本行以下添加你的代码
    return original.concat(newItem);
    
    // 请在本行以上添加你的代码
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);