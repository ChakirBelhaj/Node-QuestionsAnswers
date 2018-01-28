var question = {};

// Show list of questions
question.list = function(req, res) {
};

// Show questions
question.show = function(req, res) {
    'use strict';
    const fs = require('fs');

    fs.readFile('QuestionsAnswers.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var obj = JSON.parse(data); //now it an object
            // console.log(obj);
            res.render('index',{obj : obj});
        }});

};

// show new questions form
question.create = function(req, res) {
    res.redirect('/index');
};

// Save new questions
question.save = function(req, res) {
};

// Edit an questions
question.edit = function(req, res) {
    res.send('edited');
};

question.editform = function(req, res) {
    res.render('editquestion');
};

// Update an questions
question.update = function(req, res) {
};

// Delete an questions
question.delete = function(req, res) {
    res.send('deleted question')
};

// Save new questions
question.upvote = function(req, res) {
    res.send('upvoted')
};
question.downvote = function(req, res) {
    res.send('downvoted')
};

question.getQuestionOnId = function(req, res) {
    var id = req.params.id;
    var questions = JSON.parse(fs.readFileSync('QuestionsAnswers.json'));
    res.render('question', {question: questions['data']['cards'][id], id: id});
};

module.exports = question;
