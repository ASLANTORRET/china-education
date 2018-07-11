const Type = `
  type Review {
    _id: String
    body (isOriginal: Boolean): String
    name: String
    email: String
    title: String
    i18n: ReviewI18n
    image: String
  }
  type ReviewI18n {
    title: I18n
    body: I18n
  }
  input ReviewInput {
    _id: String
    title: String
    body: String
    name: String
    email: String
    i18n: ReviewI18nInput
    recaptcha: String
    image: String
  }
  input ReviewI18nInput {
    title: I18nInput
    body: I18nInput
  }
`
export default Type
