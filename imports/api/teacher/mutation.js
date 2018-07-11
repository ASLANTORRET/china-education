import { Teachers } from './connector'

export default TeacherMutation = {
  teacherCreate(root, args, context) {
    const { name, brief, i18n, photoUrl } = args.teacher
    const createdAt = new Date()
    const _id = Teachers.insert({ name, brief, photoUrl, createdAt, i18n })
    return Teachers.findOne({ _id })
  },
  teacherUpdate(root, args, context) {
    const { _id, name, brief, i18n, photoUrl } = args.teacher
    const updatedAt = new Date()
    Teachers.update({ _id }, { $set: { name, brief, photoUrl, i18n, updatedAt } })
    return Teachers.findOne({ _id })
  },
  teacherDelete(root, args, context) {
    const { _id } = args.teacher
    const deletedAt = new Date()
    const result = Teachers.remove({ _id })
    // const result = Teachers.update({ _id }, { $set: { deletedAt } })
    console.log(result)
  },
}
