const UserType = `
  type Email {
    address: String
    verified: Boolean
  }
  type User {
    emails: [Email]
    profile: Profile
    randomString: String
    _id: String
  }
  type Profile {
    name: Name
    username: String
  }
  type Name {
    first: String
    last: String
  }
`
export default UserType
