function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
     var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      delete obj.avgAlt;
      obj.orbitalPeriod = orbPeriod;
      return obj;
    };
  
    return arr.map(x=>getOrbPeriod(x));
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);