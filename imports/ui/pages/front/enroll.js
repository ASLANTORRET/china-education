import React from 'react'
import FrontLayout from '/imports/ui/layouts/front'
import EnrollForm from '/imports/ui/components/front/enroll'

class Enroll extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <FrontLayout language={ language }>
        <EnrollForm language={ language }/>
      </FrontLayout>
    )
  }
}

export default Enroll
