import { Teachers } from './connector'

export default TeacherQuery = {
  teacher (root, args, context) {
    const { _id } = args
    return Teachers.findOne({ $or: [{ _id }, { alias: _id }] })
  },
  teachers (root, args, context ) {
    return Teachers.find().fetch()
  },
}
