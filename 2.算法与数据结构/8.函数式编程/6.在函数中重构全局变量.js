// 全局变量
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* 这个函数应该增加一本书到列表中，并返回这个列表 */
// 新参数应在 bookName 之前

// 请在本行以下添加你的代码
function add (bookList,bookName) {

  let result = bookList.slice();
  result.push(bookName);
  
  return result;
  
  // 请在本行以上添加你的代码
}

/* 这个函数应该移除一本书到列表中，并返回这个列表 */
// 新参数应在 bookName 之前

// 请在本行以下添加你的代码
function remove (bookList,bookName) {
  const index = bookList.indexOf(bookName);
  if (index >= 0) {
    
      let result = bookList.slice();
      result.splice(index, 1);
      return result;
    
    // 请在本行以上添加你的代码
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);