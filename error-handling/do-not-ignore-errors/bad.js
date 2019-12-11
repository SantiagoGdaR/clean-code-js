// in this case if an error happends you have
// nothing to help you resolve it.
updateUser(user);

// just logging the error is not going to be
// a great help either in order to resolve it.
// also you are not doing anything handle it.
try {
    updateUser(user);
} catch (error) {
    console.log(error);
}