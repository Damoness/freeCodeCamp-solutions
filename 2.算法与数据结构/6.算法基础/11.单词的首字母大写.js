function titleCase(str) {
    return str.split(' ').map(item=>item.substring(0,1).toUpperCase() + item.substring(1).toLowerCase()).join(' ');
  }
  
  titleCase("I'm a little tea pot");