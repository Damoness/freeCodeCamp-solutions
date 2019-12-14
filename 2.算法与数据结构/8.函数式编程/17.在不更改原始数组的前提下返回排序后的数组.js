var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // 请在本行以下添加你的代码
  const newArray =[].concat(arr);

  return newArray.sort();
  
  // 请在本行以上添加你的代码
}
nonMutatingSort(globalArray);