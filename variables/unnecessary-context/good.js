const user = {
    name: '',
    surname: '',
    countryId: undefined
}

function createUser(user) {
    return putUser(user.name, user.surname, user.countryId);
}