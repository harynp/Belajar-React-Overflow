const Answer = require('../models/answerModel')

const findAll = (req,res) => {
  Answer.find()
  .then(answer => {
    res.send(answer)
  })
  .catch(err => {
    res.send(err)
  })
}

const createAnswer = (req,res) => {
  Answer.create(req.body)
  .then(createAnswer => {
    res.send(createAnswer)
  })
  .catch(err => {
    res.send(err)
  })
}

const deleteAnswer = (req,res) => {
  Answer.findByOneAndRemove({_id: req.params.id})
  .then(deleteAnswer => {
    res.send({
      message: 'Answer Success Deleted',
      deleteAnswer: deleteAnswer
    })
  })
}

const findByQuestionId = (req,res) => {
  Answer.find({ questionID : req.params.id})
  .populate('questionID')
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

const Likes = (req,res) => {
  Answer.findByIdAndUpdate(req.params.id, {
    $addToSet : {like: req.decoded.id},
    $pull     : {dislike: req.decoded.id}
  }, {new: true})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

const Dislikes = (req,res) => {
  Answer.findByIdAndUpdate(req.params.id, {
    $addToSet : {dislike: req.decoded.id},
    $pull     : {like: req.decoded.id}
  }, {new : true})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAll,
  createAnswer,
  deleteAnswer,
  findByQuestionId,
  Likes,
  Dislikes
}
