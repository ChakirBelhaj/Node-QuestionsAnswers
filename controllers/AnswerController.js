var answer = {};

// Show list of answers
answer.list = function(req, res) {
};

// Show user by answers
answer.show = function(req, res) {
};

// show new user answers
answer.create = function(req, res) {
};

// Save new answers
answer.save = function(req, res) {
};

// Edit an answers
answer.edit = function(req, res) {
    res.send('edited')
};

answer.editform = function(req, res) {
    res.render('editanswer');
};

// Update an answers
answer.update = function(req, res) {
};

// Delete an answers
answer.delete = function(req, res) {
    res.send('deleted answer')
};

module.exports = answer;
