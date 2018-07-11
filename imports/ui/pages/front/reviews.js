import React from 'react'
import FrontLayout from '/imports/ui/layouts/front'
import ReviewIndex from '/imports/ui/components/front/reviews'

class Reviews extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <FrontLayout language={ language }>
        <ReviewIndex language={ language }/>
      </FrontLayout>
    )
  }
}

export default Reviews
