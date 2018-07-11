import { Enrollments } from './connector'

export default Query = {
  enrollments (root, args, context ) {
    return Enrollments.find({}, { sort: { createdAt: -1 } }).fetch()
  },
}
