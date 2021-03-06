import React from 'react'
import FrontLayout from '/imports/ui/layouts/front'
import CertificateIndex from '/imports/ui/components/front/certificates'
import Teachers from '/imports/ui/components/front/teachers'

class About extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <FrontLayout language={ language }>
        <CertificateIndex language={ language }/>
      </FrontLayout>
    )
  }
}

export default About
