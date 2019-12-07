var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // 请把你的代码写在这条注释以下
  if(strokes == 1){
    return "Hole-in-one!"
  }else if(strokes <= par-2){
    return "Eagle"
  }else if(strokes == par-1){
    return names[2]
  }else if(strokes == par){
    return names[3]
  }else if(strokes == par + 1){
    return names[4]
  }else if(strokes == par + 2){
    return names[5]
  }else {
    return names[6]
  }
  // 请把你的代码写在这条注释以上
}

// Change these values to test
golfScore(5, 4);