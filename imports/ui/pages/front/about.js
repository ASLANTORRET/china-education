import React from 'react'
import FrontLayout from '/imports/ui/layouts/front'
import TextPage from '/imports/ui/components/front/text-page'
import Teachers from '/imports/ui/components/front/teachers'

class About extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <FrontLayout language={ language }>
        <TextPage page='about' language={ language }/>
        <Teachers language={ language }/>
      </FrontLayout>
    )
  }
}

export default About
