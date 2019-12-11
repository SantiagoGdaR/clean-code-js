// use an object as param but using destructuring
// the get linting on which params are being use and which ones are not.
function saveUser({name, surname, password, address, tel}) {
    // save user code
}

const user = {
    name,
    surname,
    password,
    address,
    tel
};

saveUser(user);