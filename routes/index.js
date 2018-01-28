var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController.js");
var question = require("../controllers/QuestionController.js");
var answer = require("../controllers/AnswerController.js");
var fs = require('fs');

/* routes */
router.get('/login', user.show);



router.get('/formeditanswer'    , answer.editform);
router.get('/editanswer'        , answer.edit);
router.get('/deleteanswer'      , answer.delete);

router.get('/formeditquestion'  ,  question.editform);
router.get('/editquestion'      ,  question.edit);
router.get('/deletequestion'    ,  question.delete);
router.get('/upvote'            ,  question.upvote);
router.get('/downvote'          ,  question.downvote);

router.post('/login', user.showindex);



router.post('/addanswer', function(req, res, next) {
    res.send('comment added');
});

router.get('/index', question.show);
router.get('/question/:id', question.getQuestionOnId);

router.get('/addquestions', function(req, res, next) {
    res.render('addquestions');
});
router.post('/addquestions', question.create);

router.get('/', question.show);
router.post('/', question.show);


router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/register', user.create);

module.exports = router;
