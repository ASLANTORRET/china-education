import { Pages } from './connector'

export default PageMutation = {
  pageCreate(root, args, context) {
    const { body, alias, i18n } = args.page
    const createdAt = new Date()
    const _id = Pages.insert({ body, alias, createdAt, i18n })
    return Pages.findOne({ _id })
  },
  pageUpdate(root, args, context) {
    const { _id, body, alias, i18n } = args.page
    const updatedAt = new Date()
    Pages.update({ _id }, { $set: { body, alias, i18n, updatedAt } })
    return Pages.findOne({ _id })
  },
  pageDelete(root, args, context) {
    const { _id } = args.page
    const deletedAt = new Date()
    const result = Pages.remove({ _id })
    // const result = Pages.update({ _id }, { $set: { deletedAt } })
    console.log(result)
  },
}
