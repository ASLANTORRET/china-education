const Type = `
  type Enrollment {
    _id: String
    name: String
    age: String
    email: String
    phone: String
    time: String
    to_china: String
    hsk: String
    type: String
    course: String
  }
  input EnrollmentInput {
    _id: String
    name: String
    age: String
    email: String
    phone: String
    time: String
    to_china: String
    hsk: String
    type: String
    course: String
    recaptcha: String
  }
`
export default Type
