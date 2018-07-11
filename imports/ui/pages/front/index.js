import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import NotFound from '/imports/ui/pages/front/not-found'
// import FrontLayout from '/imports/ui/layouts/front'
//
// import Teachers from '/imports/ui/components/front/teachers'
// import Testimonials from '/imports/ui/components/front/testimonials'
// import Brands from '/imports/ui/components/front/brands'
// import Courses from '/imports/ui/components/front/courses'
// import MainBanner from '/imports/ui/components/front/main-banner'
// import Gallery from '/imports/ui/components/front/gallery'
// import Events from '/imports/ui/components/front/events'
// import Information from '/imports/ui/components/front/information'
// import News from '/imports/ui/components/front/news'
// import Welcome from '/imports/ui/components/front/welcome'
// import OurProcess from '/imports/ui/components/front/our-process'

import Quiz from './quiz'
import Quizzes from './quizzes'
// import QuizEdit from '../quiz/edit'
import Result from './result'
import Page from './page'
import Reviews from './reviews'
import Certificates from './certificates'
import Enroll from './enroll'

class Front extends React.Component {
  render() {
    const { match: { params: { language } } } = this.props
    return (
      <Switch>
        <Route path="/:language" component={ Home } exact={true}/>
        <Route path="/:language/quizzes" component={ Quizzes }/>
        <Route path="/:language/quiz/:id" component={ Quiz }/>
        <Route path="/:language/result/:id" component={ Result }/>
        <Route path="/:language/about" component={ About } />
        <Route path="/:language/reviews" component={ Reviews } />
        <Route path="/:language/certificates" component={ Certificates } />
        <Route path="/:language/enroll" component={ Enroll } />
        <Route path="/:language/:page" component={ Page } />
        <Route path="/:language/*" component={ NotFound }/>
      </Switch>
    )
  }
}

export default Front
