import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

// import App from './App'
import Routes from './routes'

const languages = ['ru', 'en', 'kk', 'zh', 'ar']

const checkLanguage = () => {
  let language = localStorage.getItem('language')
  if (languages.indexOf(language) === -1) {
    language = languages[0]
  }

  return language
}

const L = () => {
  return <Redirect to={`/${checkLanguage()}`}/>
}

const Language = () => {
  return <div>
    <Route exact path="/" component={L}/>
    <Route path="/:language" render={props=> {
      const { match: { params: { language } } } = props
      if(language && languages.indexOf(language) !== -1) {
        localStorage.setItem('language', language)
        TAPi18n.setLanguage(language)
        return <Routes language={language}/>
      } else {
        return <L/>
      }
    }} />
  </div>
}

// class Language extends React.Component {
//   render() {
//
//     <Router>
//       <Route exact={true} path="/" component={L}/>
//       <Route path="/:language" component={App}/>
//     </Router>
//   }
// }


export default Language
