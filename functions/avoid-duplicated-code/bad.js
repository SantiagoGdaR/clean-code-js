// this is one of the most painfull issues.
// repetead code should be abstracted always if posible.
// the consecuences are many the main one is 
// maintanance (more than one place to update and change the code)
function renderClients() {
    const clients = fetchClients();
    return clients.map((client) => {
        return `
            <div>${client.name}</div>
            <div>${client.surname}</div>
        `
    });

}

function renderAdmins() {
    const admins = fetchAdmins();
    return admins.map((admin) => {
        return `
            <div>${admin.name}</div>
            <div>${admin.surname}</div>
        `
    });
}