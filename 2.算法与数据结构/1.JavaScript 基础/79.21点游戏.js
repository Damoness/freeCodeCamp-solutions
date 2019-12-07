var count = 0;

function cc(card) {
  // 请把你的代码写在这条注释以下
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count  +=1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -=1;
      break;
  }

  if(count>0){
    return count + " Bet";
  }else{
    return count + " Hold";
  }

  // 请把你的代码写在这条注释以上
}

// 你可以在这里添加/删除 cc 方法的调用来测试结果
// 提示: 左边只会显示最后一次执行的返回值
cc(2); cc(3); cc(7); cc('K'); cc('A');