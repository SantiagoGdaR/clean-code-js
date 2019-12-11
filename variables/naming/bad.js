// bad descriptive names are going to 
// make the code hard to understand and read
function addUser({name, password}) {
    const a = findUser(name);
    const ic = generateInternalCode(name);
    if(a.i === ic) {
        return;
    }   
    postUser(name, password);
}

function fetchUser(name) {
    const a = fetchUser(name);
    user.b = new Date().now,
    user.c = countries.fetch(user.countryId);
    return a;
}