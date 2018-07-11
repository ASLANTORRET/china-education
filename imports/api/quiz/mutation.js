import { Quizzes, Results, Sections } from './connector'

export default QuizMutation = {
  quizCreate(root, args, context) {
    console.log(args)
  },
  quizUpdate(root, args, context) {
    console.log(args)
  },
  sectionUpdate(root, args, context) {
    const { _id, body } = args.section
    Sections.update({ _id }, { $set: { body } })
  },
  resultSave(root, args, context) {
    const { answersIds, quizId } = args.result
    const createdAt = new Date()
    const _id = Results.insert({ quizId, answersIds, createdAt })
    return Results.findOne({ _id })
  },
}
