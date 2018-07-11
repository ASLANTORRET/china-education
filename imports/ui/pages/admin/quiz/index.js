import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import 'foundation-sites/dist/css/foundation.min.css'

class QuizIndex extends React.Component {
  onDelete(_id) {
    const quiz = { _id }
    this.props.mutate({
      variables: { quiz }
    })
  }
  render () {
    const { data: { quizzes } } = this.props
    if (!quizzes) {
      return null
    }
    return (
      <div>
        <ul>
          { quizzes.map(quiz => <li key={ quiz._id }><Link to={`/ru/admin/quiz/${quiz._id}/edit`}>{quiz.name}</Link><button onClick={() => {this.onDelete(quiz._id)}}>delete</button></li>) }
        </ul>
      </div>
    )
  }
}

const query = gql`
  query quizzes {
    quizzes {
      _id
      name
    }
  }
`
const mutation = gql`
  mutation quizDelete ($quiz: TeacherInput!) {
    quizDelete (quiz: $quiz) {
      _id
    }
  }
`
const withData = compose(
  graphql(query),
  graphql(mutation),
)(QuizIndex)

export default withData
