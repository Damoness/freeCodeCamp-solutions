// tabs 是窗口中打开网站的标题数组
var Window = function(tabs) {
    this.tabs = tabs; // 我们将数组记录在对象内部
  };
  
  // 当两个窗口合并成一个窗口时
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // 在末尾打开一个新标签
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // 打开一个新的标签
    return this;
  };
  
  // 关闭一个标签
  Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.slice(0, index); // 获取前面的标签
    var tabsAfterIndex = this.tabs.slice(index); // 获取后面的标签
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // 拼接到一起
    return this;
   };
  
  // 创建三个浏览器窗口
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // 邮箱、文档及其他与工作相关的网站
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // 社交网站
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // 娱乐网站
  
  // 执行标签打开，关闭和其他操作
  var finalTabs = socialWindow
                      .tabOpen() // 新开一个 cat memes 的标签
                      .join(videoWindow.tabClose(2)) // 在娱乐网站关闭第三个标签，加入数组
                      .join(workWindow.tabClose(1).tabOpen());
  
  
  alert(finalTabs.tabs);