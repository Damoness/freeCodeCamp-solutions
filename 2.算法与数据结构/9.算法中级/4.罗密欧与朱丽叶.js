function whatIsInAName(collection, source) {
    // What's in a name?
    
    // 请把你的代码写在这条注释以下
    var srcKeys = Object.keys(source);
  
    // 请把你的代码写在这条注释以上
    return collection.filter(x=>srcKeys.every(key => x.hasOwnProperty(key) && x[key] == source[key] ));
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });