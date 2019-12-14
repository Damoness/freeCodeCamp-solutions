/**
 * 备茶过程
 * @return {string} 一杯茶
 **/
const prepareTea = () => 'greenTea';

/**
 * 获得一定数量的茶
 * @param {number} numOfCups 所需茶的数量
 * @return {Array<string>} 返回给定量的茶
 **/
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// 请在本行以下添加你的代码

const tea4TeamFCC = getTea(40); // :(

// 请在本行以上添加你的代码

console.log(tea4TeamFCC);