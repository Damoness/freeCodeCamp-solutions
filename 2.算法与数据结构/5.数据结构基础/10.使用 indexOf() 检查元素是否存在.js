function filteredArray(arr, elem) {
    let newArr = [];
    // 请把你的代码写在这条注释以下
    for(let i = 0 ; i < arr.length ; i++){
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
    // 请把你的代码写在这条注释以上
    return newArr;
  }
  
  // 你可以修改这行代码来测试不同的输入：
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));