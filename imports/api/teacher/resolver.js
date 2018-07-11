import { Teachers } from './connector'
import _ from 'lodash'
export default TeacherResolver = {
  Teacher: {
    name (root, args, context, info) {
      if (args.isOriginal) {
        return root.name
      }
      const { language } = info.variableValues
      return root.i18n && root.i18n.name ? root.i18n.name[language] : ''
    },
    brief (root, args, context, info) {
      if (args.isOriginal) {
        return root.brief
      }
      const { language } = info.variableValues
      return root.i18n && root.i18n.brief ? root.i18n.brief[language] : ''
    },
    // title (root, args, context, info) {
    //   const { language } = info.variableValues
    //   return root.i18n.title[language]
    // },
    // body (root, args, context, info) {
    //   const { language } = info.variableValues
    //   return root.i18n.body[language]
    // },
  },
}
