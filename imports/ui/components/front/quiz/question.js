import React from 'react'
import HtmlContent from '/imports/modules/html-content'

const Question = ({ index, question, answerQuestion, answer }) => {
  const _answer = answer
  return (
    <div className="row callout">
      <div className="medium-1 columns">{ index + 1 }</div>
      <div className="medium-11 columns">
        <div className="row">

          { question.body && question.body.length
            ? <div className="medium-6 columns">
                <HtmlContent html={ question.body }/>
              </div>
            : null }

          <div className={ `${ question.body && question.body.length ? "medium-6" : "medium-12" } columns`}>
            <div className="row">
              { question.answers.map((answer, index) => (
                // <div className="row" key={ index }>
                <div className={`medium-${Math.ceil(12/question.answers.length)} columns`} key={ answer._id }>
                  {/* <input type={question.type === 'multi' ? 'checkbox' : 'radio'} id={`${question._id}_${index}`} name={ question._id } onChange={ () => { answerQuestion(question._id, answer.body) } } checked={_answer === answer.body}/> */}
                  <input type={ question.type === 'multi' ? 'checkbox' : 'radio' } id={ `${answer._id}` } name={ question._id } onChange={ () => { answerQuestion(question._id, answer._id) } } checked={ _answer === answer._id }/>
                    {/* <label htmlFor={`${question._id}_${index}`}> */}
                    <label htmlFor={`${ answer._id }`}>
                      {/* { answer.body } */}
                      <HtmlContent html={ answer.body }/>
                      {/* <img src={`http://lorempixel.com/200/200/${index}`}/> */}
                      {/* <img src={ answer.image }/> */}
                    </label>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Question
