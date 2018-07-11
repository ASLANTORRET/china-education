import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import 'foundation-sites/dist/css/foundation.min.css'

class PageIndex extends React.Component {
  onDelete(_id) {
    const page = { _id }
    this.props.mutate({
      variables: { page }
    })
  }
  render () {
    const { data: { pages } } = this.props
    if (!pages) {
      return null
    }
    return (
      <div>
        <ul>
          { pages.map(page => <li key={ page._id }><Link to={`/ru/admin/page/${page._id}/edit`}>{page.alias}</Link><button onClick={() => {this.onDelete(page._id)}}>delete</button></li>)}
        </ul>
      </div>
    )
  }
}

const query = gql`
  query pages {
    pages {
      _id
      alias
    }
  }
`
const mutation = gql`
  mutation pageDelete ($page: PageInput!) {
    pageDelete (page: $page) {
      _id
    }
  }
`
const withData = compose(
  graphql(query),
  graphql(mutation),
)(PageIndex)

export default withData
