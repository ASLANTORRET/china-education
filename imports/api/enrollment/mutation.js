import { Enrollments } from './connector'
import { HTTP } from 'meteor/http'

export default EnrollmentMutation = {
  enrollmentCreate(root, args, context) {
    const { name, age, email, phone, time, to_china, hsk, type, course, recaptcha } = args.enrollment
    const createdAt = new Date()
    HTTP.post('https://www.google.com/recaptcha/api/siteverify', { params: { secret: '6LeLlSkUAAAAAKdc90zPP5Jj4TuQ9VSlBrcVm4yZ', response: recaptcha } }, (err, res) => {
      if (res.data.success) {
        const enrollment = { name, age, email, phone, time, to_china, hsk, type, course, createdAt }
        const _id = Enrollments.insert(enrollment)

        SSR.compileTemplate('htmlEmail', Assets.getText('emailtemplates/enrollment.html'));
        Meteor.defer(function() {
          Email.send({
            to: 'info@tiancai.kz',
            from: 'site@tiancai.kz',
            subject: `[Tiancai.kz] запись на курсы ${ enrollment.name }`,
            html: SSR.render('htmlEmail', { enrollment: JSON.stringify(enrollment) }),
          });
        })

        return Enrollments.findOne({ _id })
      } else {
        return res.data['error-codes']
      }
    })
  },
  // enrollmentUpdate(root, args, context) {
  //   const { _id, title, body, name, email, i18n } = args.enrollment
  //   const updatedAt = new Date()
  //   Enrollments.update({ _id }, { $set: { title, body, name, email, i18n, updatedAt } })
  //   return Enrollments.findOne({ _id })
  // },
  // enrollmentDelete(root, args, context) {
  //   const { _id } = args.enrollment
  //   const deletedAt = new Date()
  //   const result = Enrollments.remove({ _id })
  //   // const result = Enrollments.update({ _id }, { $set: { deletedAt } })
  //   console.log(result)
  // },
}
