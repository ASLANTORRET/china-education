import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'
import _ from 'lodash'

class Result extends React.Component {
  render () {
    const { result } = this.props.data
    let audioScore = 0
    let readScore = 0
    if (result){
      const { quiz } = result
      return (
        <div className="result">
          result { result.score }
          <div>
            { quiz.body }
          </div>
          { quiz.sections.map( (section, index) => <div key={ section._id }>
              {/* <HtmlContent html={ section.body }/> */}
              { section.questions.map( question => {
                const userAnswer = _.find(result.answersIds, { questionId: question._id })
                let answer
                if (userAnswer) {
                  answer = _.find(question.answers, { _id: userAnswer.answerId })
                  if (answer.isCorrect) {
                    if (index < quiz.sectionsWithAudio) {
                      audioScore ++
                    } else {
                      readScore ++
                    }
                  }
                }
                return (
                  <div key={question._id}>
                    <HtmlContent html={ question.body }/>
                    { answer
                      ? <div className={ `label ${answer.isCorrect ? 'success' : 'alert'}`}>
                          <HtmlContent html={ answer.body }/>
                        </div>
                      : null
                    }
                  </div>
                )
              })}
            </div>
          )}
          <div>audio: { audioScore }</div>
          <div>read: { readScore }</div>
        </div>
      )
    } else {
      return (
        <div>result</div>
      )
    }
  }
}

const query = gql`
  query result ($id: String!){
    result (_id: $id){
      _id
      score
      answersIds {
        questionId
        answerId
      }
      quiz {
        _id
        sectionsWithAudio
        sections {
          _id
          body
          image
          type
          questions {
            _id
            body
            image
            type
            answers {
              _id
              body
              isCorrect
              image
            }
          }
        }
      }
    }
  }
`

// const withData = graphql(query)(Quiz)
// export default withData
const withData = compose(
  graphql(query, {
    options ({ id }) {
      return ({ variables: { id } })
    }
  })
)(Result)

export default withData
