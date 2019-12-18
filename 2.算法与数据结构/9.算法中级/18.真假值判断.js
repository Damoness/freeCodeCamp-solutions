function truthCheck(collection, pre) {
    // 每个都是真的吗？
    return collection.every(x=>x[pre]);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");