import { Pages } from './connector'
import _ from 'lodash'
export default PageResolver = {
  Page: {
    title (root, args, context, info) {
      if (args.isOriginal) {
        return root.title
      }
      const { language } = info.variableValues
      return root.i18n && root.i18n.title ? root.i18n.title[language] : ''
    },
    body (root, args, context, info) {
      if (args.isOriginal) {
        return root.body
      }
      const { language } = info.variableValues
      return root.i18n && root.i18n.body ? root.i18n.body[language] : ''
    },
  },
}
