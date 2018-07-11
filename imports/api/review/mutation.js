import { Reviews } from './connector'
import { HTTP } from 'meteor/http'

export default ReviewMutation = {
  reviewCreate(root, args, context) {
    const { title, body, name, email, i18n, recaptcha } = args.review
    const createdAt = new Date()
    HTTP.post('https://www.google.com/recaptcha/api/siteverify', { params: { secret: '6LeLlSkUAAAAAKdc90zPP5Jj4TuQ9VSlBrcVm4yZ', response: recaptcha } }, (err, res) => {
      if (res.data.success) {
        const _id = Reviews.insert({ title, body, name, email, createdAt, i18n })
        return Reviews.findOne({ _id })
      } else {
        return res.data['error-codes']
      }
    })
  },
  // reviewUpdate(root, args, context) {
  //   const { _id, title, body, name, email, i18n } = args.review
  //   const updatedAt = new Date()
  //   Reviews.update({ _id }, { $set: { title, body, name, email, i18n, updatedAt } })
  //   return Reviews.findOne({ _id })
  // },
  // reviewDelete(root, args, context) {
  //   const { _id } = args.review
  //   const deletedAt = new Date()
  //   const result = Reviews.remove({ _id })
  //   // const result = Reviews.update({ _id }, { $set: { deletedAt } })
  //   console.log(result)
  // },
}
