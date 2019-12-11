// tip: this is how he simulated privates
// on ES5
function makeBankAccount(user) {
    let balance = fetchBalance(user);
    function substractTaxesToBalance(balance) {
        const taxes = 0.16;
        return balance - (balance * taxes)

    }

    function validateBalance(balance) {
        // some code...
    }

    function setBalance(newBalance) {
        if(validateBalance(newBalance)){
            balance = newBalance;
        }
    }

    function getBalance() {
        return substractTaxesToBalance(balance);
    }

    // every time someone call balance 
    // the fetch is performed
    return {
        setBalance,
        getBalance
    };
}
 
// you are doing two things in order to get 
// the inital balance
const account = makeBankAccount();
const balance = account.getBalance();

// other example of doing to step in this case
// to set the balance value
const newBalance = 200;
// tip: another good practice in js is chaining methods.
const balance = account.setBalance(newBalance).getBalance();