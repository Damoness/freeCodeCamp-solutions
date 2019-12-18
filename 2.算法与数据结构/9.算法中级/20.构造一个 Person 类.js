var Person = function(firstAndLast) {
    // 请先写出这个方法。其他方法的写法与这个类似
  
  
    let firstName = firstAndLast.split(' ')[0];
    let lastName =  firstAndLast.split(' ')[1];
  
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
  
    this.getFirstName = function(){
      return firstName
    }
  
    this.getLastName = function() {
      return lastName;
    }
  
    this.setFullName = function(fn){
      firstName = fn.split(' ')[0];
      lastName = fn.split(' ')[1];
    }
  
    this.setLastName = function(ln){
      lastName = ln;
    }
  
    this.setFirstName = function(fn){
      firstName = fn;
    }
  
  
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();