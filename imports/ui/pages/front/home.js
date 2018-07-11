import React from 'react'

import FrontLayout from '/imports/ui/layouts/front'

import Teachers from '/imports/ui/components/front/teachers'
import Testimonials from '/imports/ui/components/front/testimonials'
import Brands from '/imports/ui/components/front/brands'
import Courses from '/imports/ui/components/front/courses'
import MainBanner from '/imports/ui/components/front/main-banner'
import Gallery from '/imports/ui/components/front/gallery'
import Events from '/imports/ui/components/front/events'
import Information from '/imports/ui/components/front/information'
import News from '/imports/ui/components/front/news'
import Welcome from '/imports/ui/components/front/welcome'
import OurProcess from '/imports/ui/components/front/our-process'

class Home extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <FrontLayout language={ language }>
        <MainBanner />

        <Information />

        <Welcome />

        <Courses />

        <Teachers language={language}/>

        {/* <Events /> */}

        <Gallery />

        <OurProcess />

        {/* <Testimonials /> */}

        {/* <News /> */}

        <Brands />
      </FrontLayout>
    )
  }
}

export default Home
