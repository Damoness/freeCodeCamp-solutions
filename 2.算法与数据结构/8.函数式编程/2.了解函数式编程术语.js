/**
 * 绿茶准备过程
 * @return {string} 一杯绿茶
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * 备红茶准备过程
 * @return {string} 一杯红茶
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * 获得一定数量的茶
 * @param {function():string} prepareTea 茶的类型
 * @param {number} numOfCups 需要茶的数量
 * @return {Array<string>} 给定的茶
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// 请在本行以下添加你的代码

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); // :(

// 请在本行以上添加你的代码

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);