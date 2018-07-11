import { Certificates } from './connector'
import { HTTP } from 'meteor/http'

export default CertificateMutation = {
  // certificateCreate(root, args, context) {
  //   const { title, body, name, email, i18n, recaptcha } = args.certificate
  //   const createdAt = new Date()
  //   HTTP.post('https://www.google.com/recaptcha/api/siteverify', { params: { secret: '6LeLlSkUAAAAAKdc90zPP5Jj4TuQ9VSlBrcVm4yZ', response: recaptcha } }, (err, res) => {
  //     if (res.data.success) {
  //       const _id = Certificates.insert({ title, body, name, email, createdAt, i18n })
  //       return Certificates.findOne({ _id })
  //     } else {
  //       return res.data['error-codes']
  //     }
  //   })
  // },
  // certificateUpdate(root, args, context) {
  //   const { _id, title, body, name, email, i18n } = args.certificate
  //   const updatedAt = new Date()
  //   Certificates.update({ _id }, { $set: { title, body, name, email, i18n, updatedAt } })
  //   return Certificates.findOne({ _id })
  // },
  // certificateDelete(root, args, context) {
  //   const { _id } = args.certificate
  //   const deletedAt = new Date()
  //   const result = Certificates.remove({ _id })
  //   // const result = Certificates.update({ _id }, { $set: { deletedAt } })
  //   console.log(result)
  // },
}
