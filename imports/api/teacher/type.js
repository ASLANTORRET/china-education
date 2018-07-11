const TeacherType = `
  type Teacher {
    _id: String
    brief (isOriginal: Boolean): String
    name (isOriginal: Boolean): String
    photoUrl: String
    i18n: TeacherI18n
  }
  type TeacherI18n {
    name: I18n
    brief: I18n
  }
  input TeacherInput {
    _id: String
    name: String
    photoUrl: String
    brief: String
    i18n: TeacherI18nInput
  }
  input TeacherI18nInput {
    name: I18nInput
    brief: I18nInput
  }
`
export default TeacherType
