// good descriptive naming
function addUser({name, password}) {
    const user = findUser(name);
    const internalCode = generateInternalCode(name);

    // tip! always use ===
    if(user.internalCode === internalCode) {
        return;
    }   
    postUser(name, password);
}

function fetchUser(name) {
    const user = fetchUser(name);
    user.fetchDate =new Date().now,
    user.originCountry = countries.fetch(user.countryId);
    return user;
}