import React from 'react'

import FrontLayout from '/imports/ui/layouts/front'

import Quiz from '/imports/ui/components/front/quiz'

class QuizPage extends React.Component {
  render() {
    const { match: { params: { language, id } } } = this.props
    return (
      <FrontLayout language={ language }>
        <div className="row">
          <div className="small-12 columns">
            <Quiz language={ language } id={id}/>
          </div>
        </div>
      </FrontLayout>
    )
  }
}

export default QuizPage
