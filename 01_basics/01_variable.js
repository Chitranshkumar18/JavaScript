const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"// we are use var atthis time because of issue in block scope and functional scope



accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed because constant are not changeable 


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])