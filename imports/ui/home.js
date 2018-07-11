import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Home = ({ match: { params: { language } }, user }) => {
  // const { params: { language } } = match
  // const language = localStorage.getItem('language')
  return (
    <div>
      
    </div>
  )
}

export default Home
