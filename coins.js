/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


    var coinPurseId = document.getElementById("coinPurse")

    function coinCounter(total) {

// / Initialize a JavaScript object to hold the coins
    
    var coinPurse = {};

    total = total*100;
    console.log(total)
    
    var coinPurse = {
    quarters: null,
    dimes: null,
    nickels: null,
    pennies: null,
};

    var coinPurse.quarters = 25/total;
    var coinPurse.dimes = 10/total;
    var coinPurse.nickels = 5/total;
    var coinPurse.pennies = 1/total;
 

return total;
}


var coins = coinCounter(.67)
console.log();
