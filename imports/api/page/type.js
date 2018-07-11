const PageType = `
  type Page {
    _id: String
    body (isOriginal: Boolean): String
    title: String
    alias: String
    i18n: PageI18n
  }
  type PageI18n {
    title: I18n
    body: I18n
  }
  input PageInput {
    _id: String
    body: String
    alias: String
    i18n: PageI18nInput
  }
  input PageI18nInput {
    title: I18nInput
    body: I18nInput
  }
`
export default PageType
