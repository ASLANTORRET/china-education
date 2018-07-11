import { Pages } from './connector'

export default PageQuery = {
  page (root, args, context) {
    const { _id } = args
    return Pages.findOne({ $or: [{ _id }, { alias: _id }] })
  },
  pages (root, args, context ) {
    console.log('pages')
    return Pages.find().fetch()
  },
}
