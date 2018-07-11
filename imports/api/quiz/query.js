import { Quizzes, Results } from './connector'

export default QuizQuery = {
  quiz (root, args, context) {
    const { _id } = args
    return Quizzes.findOne({ _id })
  },
  quizzes (root, args, context ) {
  // quizzes (...args) {
    return Quizzes.find().fetch()
  },
  result (root, args, context ) {
    const { _id } = args
    return Results.findOne({ _id })
  }
}
