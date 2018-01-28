var user = {};

// Show list of user
user.list = function(req, res) {
};

// Show user by id
user.show = function(req, res) {
    res.render('login', { title: 'Log in' });
}

user.showindex = function(req, res) {
    res.redirect('/index');
};

// show new user form
user.create = function(req, res) {
    var username  = req.body.username;
    var password  = req.body.password;
    var role      = req.body.role;
    var user = {
        username: username,
        role: role,
        password: password
    };
    'use strict';

    const fs = require('fs');

    fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var obj = JSON.parse(data); //convert json to object
            obj.table.push(user); //add some data
            var json = JSON.stringify(obj, null, 2); //convert it back to json
            fs.writeFileSync('users.json', json, 'utf8'); // write it back
        }});
    console.log('added');

    res.redirect('/login');
};

// Save new user
user.register = function(req, res) {
    res.render('register', { title: 'Register' });
};

// Edit an user
user.edit = function(req, res) {
};

// Update an user
user.update = function(req, res) {
};

// Delete an user
user.delete = function(req, res) {
    res.send('deleted question');
};

module.exports = user;
