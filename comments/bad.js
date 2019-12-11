// unnecessary comments

// function to render clients
function renderClients() {
    // get the clients list
    const clients = fetchClients();
    return renderUsers(clients);

}

// missleading confusing comments

// function to render admins from 
// the service where we store
// some of the user data to later send it 
// to a batch job
function renderAdmins() {
    // get the admin list
    const admins = fetchAdmins();
    return renderUsers(admins);

}

// this function generates an interal id
// that is the identifier for our API
function createInternalIdentifier({name, surname}) {
    // commented code
    // return `ID-POST:${name}-${surname}`;
    return `ID-INT:${name}-${surname}`;
}

// render users 
function renderUsers(users) {
    // map the list to divs with the user info
    return users.map((user) => {
        return `
            <div>${user.name}</div>
            <div>${user.surname}</div>
            <div>${createInternalIdentifier(user)}</div>
        `
    });
}