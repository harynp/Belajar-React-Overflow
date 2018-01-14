const Question = require('../models/questionModel')

const findAll = (req,res) => {
  Question.find()
  .populate('author')
  .populate('AnswerID')
  .then(question => {
    res.send(question)
  })
  .catch(err => {
    res.send(err)
  })
}

const createQuestion = (req,res) => {
    Question.create({
      author      : req.decoded.id,
      title       : req.body.title,
      content     : req.body.content
    })
    .then(newQuestion => {
      res.send(newQuestion)
    })
    .catch(err => {
      res.send(err)
    })
}

const deleteQuestion = (req,res) => {
  Question.findByIdAndRemove({_id: req.params.id})
  .then(deleteQuestion => {
    res.send({
      message: 'Question Success Deleted !',
      deleteQuestion: deleteQuestion
    })
  })
  .catch(err => {
    res.send(err)
  })
}

const editQuestion = (req,res) => {
  Question.update(req.params.id, req.body)
  .then(editQuestion => {
    res.send(editQuestion)
  })
  .catch(err => {
    res.send(err)
  })
}

const Likes = (req,res) => {
  Question.findByIdAndUpdate(req.params.id, {
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
  Question.findByIdAndUpdate(req.params.id, {
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

const findById = (req,res) => {
  Question.findById(req.params.id)
  .then(questionById => {
    res.send(questionById)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAll,
  createQuestion,
  deleteQuestion,
  editQuestion,
  findById,
  Likes,
  Dislikes
}
