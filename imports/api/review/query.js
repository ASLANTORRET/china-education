import { Reviews } from './connector'

export default Query = {
  // review (root, args, context) {
  //   const { _id } = args
  //   return Reviews.findOne({ $or: [{ _id }, { alias: _id }] })
  // },
  reviews (root, args, context ) {
    return Reviews.find({}, { sort: { createdAt: -1 } }).fetch()
  },
}
