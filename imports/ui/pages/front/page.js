import React from 'react'
import FrontLayout from '/imports/ui/layouts/front'
import TextPage from '/imports/ui/components/front/text-page'

class Page extends React.Component {
  render() {
    const { match: { params: { language, page } } } = this.props
    return (
      <FrontLayout language={ language }>
        <TextPage page={ page } language={ language }/>
      </FrontLayout>
    )
  }
}

export default Page
