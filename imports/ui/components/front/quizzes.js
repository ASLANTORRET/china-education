import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'

const Quizzes = ({ language, data: { quizzes, loading, error, refetch } }) => {
  if (loading) {
    return null
  }
  return <div>
    { quizzes.map(quiz => {
      return <div key={quiz._id}>
        <Link to={`/${language}/quiz/${quiz._id}`} className="button">{quiz.name}</Link>
        {quiz.brief}
      </div>
    })}
  </div>
}

const query = gql`
  query quizzes {
    quizzes {
      _id
      name
      brief
    }
  }
`

const withData = compose(
  graphql(query)
) (Quizzes)

// export default Quizzes
export default withData
