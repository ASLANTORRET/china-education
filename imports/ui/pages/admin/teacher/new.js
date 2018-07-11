import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import TeacherForm from './form'

class TeacherNew extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  onSave(teacher) {
    this.props.mutate({
      variables: { teacher }
    })
  }
  render () {
    const teacher = { brief: '', alias: '', photoUrl: '', i18n: { name: '', brief: '' } }
    return (
      <div>
        <TeacherForm teacher={ teacher } onSave={ this.onSave }/>
      </div>
    )
  }
}

const teacherCreate = gql`
  mutation teacherCreate($teacher: TeacherInput!) {
    teacherCreate(teacher: $teacher) {
      _id
      name
      # i18n
    }
  }
`
const withMutation = compose(
  graphql(teacherCreate),
)

export default withMutation(TeacherNew)
