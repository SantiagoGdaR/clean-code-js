function saveUser({name, surname, password}) {
    if(!isValidUser({name, surname, password})) {
        return;
    }

    postUser({name, surname, password});
}


function isValidUser({name, surname, password}) {
    if(userAlreadyExists(name)
        || !isUserNameValid(name) 
        || !isUserSurnameValid(surname)
        || !isUserPasswordValid(password)) {
        return false;
    }
    return true;
    
}

function userAlreadyExists(name) {
    return fetchUser(name);
}

function isUserNameValid(name) {
    const regex = /ab+c/;
    return regex.test(name);
}

function isUserSurnameValid(surname) {
    const regex = /ab+cd/;
    return regex.test(surname);
}

function isUserPasswordValid(password) {
    return password.length > 6;
}

