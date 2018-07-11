import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import 'foundation-sites/dist/css/foundation.min.css'

class TeacherIndex extends React.Component {
  onDelete(_id) {
    const teacher = { _id }
    this.props.mutate({
      variables: { teacher }
    })
  }
  render () {
    const { data: { teachers } } = this.props
    if (!teachers) {
      return null
    }
    return (
      <div>
        <ul>
          { teachers.map(teacher => <li key={ teacher._id }><Link to={`/ru/admin/teacher/${teacher._id}/edit`}>{teacher.name}</Link><button onClick={() => {this.onDelete(teacher._id)}}>delete</button></li>)}
        </ul>
      </div>
    )
  }
}

const query = gql`
  query teachers {
    teachers {
      _id
      name (isOriginal: true)
    }
  }
`
const mutation = gql`
  mutation teacherDelete ($teacher: TeacherInput!) {
    teacherDelete (teacher: $teacher) {
      _id
    }
  }
`
const withData = compose(
  graphql(query),
  graphql(mutation),
)(TeacherIndex)

export default withData
