let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // 请把你的代码写在这条注释以下
    userObj.data.friends.push(friend);
  
    return userObj.data.friends;
    // 请把你的代码写在这条注释以上
  }
  
  console.log(addFriend(user, 'Pete'));