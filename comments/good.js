
function renderClients() {
    const clients = fetchClients();
    return renderUsers(clients);

}

function renderAdmins() {
    const admins = fetchAdmins();
    return renderUsers(admins);

}

// this function generates an interal id
// that is the identifier for our API
function createInternalIdentifier({name, surname}) {
    return `ID-INT:${name}-${surname}`;
}

function renderUsers(users) {
    return users.map((user) => {
        return `
            <div>${user.name}</div>
            <div>${user.surname}</div>
            <div>${createInternalIdentifier(user)}</div>
        `
    });
}