import React from 'react'

import FrontLayout from '/imports/ui/layouts/front'

import Result from '/imports/ui/components/front/result'

class ResultPage extends React.Component {
  render() {
    const { match: { params: { language, id } } } = this.props
    return (
      <FrontLayout language={ language }>
        <div className="row">
          <div className="small-12 columns">
            <Result language={ language } id={id}/>
          </div>
        </div>
      </FrontLayout>
    )
  }
}

export default ResultPage
