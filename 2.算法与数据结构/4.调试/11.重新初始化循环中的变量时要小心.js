function zeroArray(m, n) {
    // 创建一个具有 m 行和 n 列“零”的二维数组
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // 添加 m 行到 newArray
      row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n 个“零”到当前行以创建列
        row.push(0);
      }
      // Pushes 当前里面有 n 个“零”的行到 newArray
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);