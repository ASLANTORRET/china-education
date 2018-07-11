import React from 'react'

import FrontLayout from '/imports/ui/layouts/front'

import QuizIndex from '/imports/ui/components/front/quizzes'
import TextPage from '/imports/ui/components/front/text-page'

class Quizzes extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    console.log('quizzes')

    return (
      <FrontLayout language={ language }>
        <div className="row">
          <div className="small-12 columns">
            <TextPage page='quizzes' language={ language }/>
            <QuizIndex language={ language } />
          </div>
        </div>
      </FrontLayout>
    )
  }
}

export default Quizzes
