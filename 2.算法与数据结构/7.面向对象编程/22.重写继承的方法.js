function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// 请把你的代码写在这条注释以下
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
}


// 请把你的代码写在这条注释以下

let penguin = new Penguin();
console.log(penguin.fly());