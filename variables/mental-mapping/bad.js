const users = ['userA', 'userB', 'userC'];

users.forEach(u => {
    // some code...

    u.info = getUserInfo(u.id);

    //more code...

    if(u.info.map) {
        // more code...
    }

   // more code...

   user.family = fetchFamily(user.id);
   if(hasForbiddenAccess(user.family)){
       // more code...
       return;
   }

    // at this points of the function you may already
    // be wondering whats is u.
    addGlobalMembers(u.family.memebers); 
});