// there is no need on re-inforcing
// concepts. it is redundant.
const user = {
    userName: '',
    userSurname: '',
    userCountryId: undefined
}

function createUser(user) {
    return putUser(user.userName, user.userSurname, user.userCountryId);
}