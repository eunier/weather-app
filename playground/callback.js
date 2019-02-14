var geteUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(() => {
        callback(user);
    }, 3000)
};


geteUser(31, (user) => {
    console.log(user);
});
