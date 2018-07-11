import React from 'react'
import Question from './question'
import HtmlContent from '/imports/modules/html-content'

const Section = ({ section, answerQuestion, answers, startIndex }) => {
  return (
    <div className="medium-12 columns">
      { section.body && section.body.length ? <div className="row"><HtmlContent html={ section.body }/></div> : null }
      { section.questions.map((question, index) =>
        <Question index={ index + startIndex } question={ question } key={ index }
          answerQuestion={ answerQuestion.bind(this) }
          answer={ answers[question._id] }
          type={ section.type }
        />
      )}
    </div>
  )
}


export default Section
