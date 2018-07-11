import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import PageForm from './form'

class PageEdit extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  onSave(page) {
    page._id = this.props.data.page._id
    this.props.mutate({
      variables: { page }
    })
  }
  render () {
    const { page } = this.props.data
    if ( ! page ) {
      return <div>loading</div>
    } else {
      return (
        <div>
          <PageForm page={ page } onSave={this.onSave}/>
          {/* <input value={ this.state.page.alias } onChange={(e) => {this.setState({ 'page.alias': e.target.value })}}/> */}
          {/* <Trumbowyg value={ this.state.page.body } onChange={(e) => {this.setState({ 'page.body': e.target.value })}}/> */}
          {/* <button onClick={ this.onSubmit }>Save</button> */}
        </div>
      )
    }
  }
}

const query = gql`
  query page ($id: String!) {
    page ( _id: $id ) {
      _id
      body (isOriginal: true)
      alias
      i18n {
        title {
          ru
          en
          zh
        }
        body {
          ru
          en
          zh
        }
      }
    }
  }
`

const pageUpdate = gql`
  mutation pageUpdate($page: PageInput!) {
    pageUpdate(page: $page) {
      _id
      body
      alias
    }
  }
`
const withDataMutations = compose(
  graphql(query, {
    options ({ match: { params: { id } } }) {
      return ({ variables: { id } })
    },
    // props ()
  }),
  graphql(pageUpdate),
)

export default withDataMutations(PageEdit)
