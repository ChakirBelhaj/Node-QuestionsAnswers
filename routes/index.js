var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController.js");
var question = require("../controllers/QuestionController.js");
var answer = require("../controllers/AnswerController.js");
var fs = require('fs');

/* routes */

router.get('/register'          , user.register);
router.post('/register'         , user.create);

router.get('/login'             , user.show);
router.post('/login'            , user.showindex);

router.get('/'                  , question.show);
router.post('/'                 , question.show);

router.get('/addquestions'      , question.addquestion);
router.post('/addquestions'     , question.create);

router.get('/formeditquestion'  , question.editform);
router.get('/editquestion'      , question.edit);
router.get('/deletequestion'    , question.delete);
router.get('/upvote'            , question.upvote);
router.get('/downvote'          , question.downvote);

router.get('/index'             , question.show);
router.get('/question/:id'      , question.getQuestionOnId);
router.get('/formeditanswer'    , answer.editform);
router.get('/editanswer'        , answer.edit);
router.get('/deleteanswer'      , answer.delete);
router.post('/addanswer'        , answer.add);

module.exports = router;
