const users = ['userA', 'userB', 'userC'];

users.forEach(user => {
    // some code...

    user.info = getUserInfo(user.id);

    //more code...

    if(user.info.map) {
        // more code...
    }

    // more code

    user.family = fetchFamily(user.id);
    if(hasForbiddenAccess(user.family)){
        // more code...
        return;
    }
    
    addGlobalMembers(user.family.memebers); 
});