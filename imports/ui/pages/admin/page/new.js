import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import PageForm from './form'

class PageNew extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  onSave(page) {
    this.props.mutate({
      variables: { page }
    })
  }
  render () {
    const page = { body: '', alias: '', i18n: { title: '', body: '' } }
    return (
      <div>
        <PageForm page={ page } onSave={ this.onSave }/>
      </div>
    )
  }
}

const pageCreate = gql`
  mutation pageCreate($page: PageInput!) {
    pageCreate(page: $page) {
      _id
      body
      # i18n
    }
  }
`
const withMutation = compose(
  graphql(pageCreate),
)

export default withMutation(PageNew)
