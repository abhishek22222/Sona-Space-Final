const router = require('express').Router();
let Answer = require('../models/answer_model');

router.route('/').get((req, res) => {
  Answer.find()
    .then(answers => res.json(answers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const answer = req.body.answer;
  const question_id = req.body.question_id;

  const newAnswer = new Answer({
    username,
    answer,
    question_id
  });

  newAnswer.save()
  .then(() => res.json('Answer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
