function add(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}
function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}
function mul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
function div(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.

  const coins = {
    PENNY:0.01,
    NICKEL:0.05,
    DIME:0.1,
    QUARTER:0.25,
    ONE:1,
    FIVE:5,
    TEN:10,
    TWENTY:20,
    "ONE HUNDRED":100,
  }

  var array = [];

  var equal = true;

  console.log(change);

  cid.slice().reverse().forEach(x=>{

    //console.log(x);

    let key = x[0];
    let value = coins[key];
    let sum = x[1];

    if(change > value){

      if(change < sum){

        let temp = Math.floor(change / value);

        array.push([key,  mul(temp,value) ]);

        console.log(change,key,mul(temp,value));

        change = sub(change,mul(temp,value));

        console.log(change,key, mul(temp,value) );

        equal = false;


      }else{

        array.push([key,sum]);

        console.log(change,key,sum);

        change = sub(change,sum) ;
      }

    }

  })


  if(change>0){

    return {status: "INSUFFICIENT_FUNDS", change: []}

  }else if(change == 0){

      if(equal){
        return {
          status:"CLOSED",
          change:cid,
        }
      }else{

        return {status:"OPEN" , change:array};

      }



  }

}