function makeBankAccount(user) {
    function substractTaxesToBalance(balance) {
        const taxes = 0.16;
        return balance - (balance * taxes)

    }

    function validateBalance(balance) {
        // some code...
    }

    // every time someone call balance 
    // the fetch is performed
    return {
        balance: fetchBalance(user),
        substractTaxesToBalance,
        validateBalance
    };
}
 
// you are doing two things in order to get 
// the inital balance
const account = makeBankAccount();
const balance = account.balance;
balance = account.substractTaxesToBalance(balance);

// other example of doing to step in this case
// to set the balance value
const newBalance = 200;
if(account.validateBalance(balance)) {
    account.balance = newBalance;
};
