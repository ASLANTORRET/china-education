import { Certificates } from './connector'

export default Query = {
  // certificate (root, args, context) {
  //   const { _id } = args
  //   return Certificates.findOne({ $or: [{ _id }, { alias: _id }] })
  // },
  certificates (root, args, context ) {
    return Certificates.find({}, { sort: { createdAt: -1 } }).fetch()
  },
}
