const Type = `
  type Certificate {
    _id: String
    caption: String
    file: String
  }
  type CertificateI18n {
    title: I18n
    body: I18n
  }
  input CertificateInput {
    _id: String
    caption: String
    file: String
    i18n: CertificateI18nInput
  }
  input CertificateI18nInput {
    title: I18nInput
    body: I18nInput
  }
`
export default Type
