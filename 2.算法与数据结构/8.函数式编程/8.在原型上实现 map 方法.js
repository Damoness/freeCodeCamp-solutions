// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // 请在本行以下添加你的代码
  this.forEach(item=>newArray.push(callback(item)));
  // 请在本行以上添加你的代码
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});