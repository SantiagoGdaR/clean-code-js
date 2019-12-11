// this function has more than one responsability
// as a result the function is harder that what it shoud be.
// is also hard to define a proper name that indicates all
// of what the function is doing.
function saveUser({name, surname, password}) {
    const  user = fetchUser(name);
    if(user) {
        return;
    }

    const regexName = /ab+c/; 
    const regexSurname = /ab+cd/;
    if(!regexName.test(name) || !regexSurname.test(surname)) {
        return;
    }

    if(password.length > 6) {
        return;
    }

    postUser({name, surname, password});
} 