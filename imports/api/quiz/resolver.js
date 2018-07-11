import { Quizzes, Questions, Sections } from './connector'
import _ from 'lodash'
export default QuizResolver = {
  Question: {
    type(...args) {
      // console.log(args)
    }
  },
  Section: {
    questions (root, args, context ) {
      if (root && root.questionIds) {
        const data = Questions.find({_id: {$in: root.questionIds}}).fetch()
        const result = root.questionIds.map((_id) => _.find(data, { _id }))
        return result
      } else {
        return []
      }
    },
  },
  Result: {
    quiz (root, args, context) {
      return Quizzes.findOne({ _id: root.quizId })
    },
    score (root, args, context) {
      let result = 0
      if (root.answersIds && root.answersIds.length) {
        const questionIds = root.answersIds.map(answer => answer.questionId)
        const questions = Questions.find({ _id: { $in: questionIds } }).fetch()
        root.answersIds.forEach((answer) => {
          const question = _.find(questions, {_id: answer.questionId})
          if (question && question.answers && question.answers.length) {
            const correctAnswer = _.find(question.answers, {_id: answer.answerId, isCorrect: true})
            if (correctAnswer) {
              result ++
            }
          }
        })
      }
      return result
      // const quiz = Quizzes.findOne(root.quizId)
      // if (quiz && quiz.sectionIds) {
      //   const sections = Sections.find({ _id: }).fetch()
      //
      // }

    },
  },
  Quiz: {
    sections (root, args, context) {
      if (root && root.sectionIds) {
        const data = Sections.find({ _id: { $in: root.sectionIds } }).fetch()
        const result = root.sectionIds.map((_id) => _.find(data, { _id }))
        return result
      } else {
        return []
      }
    },
  }
}
