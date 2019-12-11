function renderClients() {
    const clients = fetchClients();
    return renderUsers(clients);

}

function renderAdmins() {
    const admins = fetchAdmins();
    return renderUsers(admins);

}


function renderUsers(users) {
    return users.map((user) => {
        return `
            <div>${user.name}</div>
            <div>${user.surname}</div>
        `
    });
}