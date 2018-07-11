import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import Breadcrumbs from '/imports/ui/components/front/breadcrumbs'
import HtmlContent from '/imports/modules/html-content'
import { Redirect } from 'react-router-dom'

class TextPage extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.data.loading !== nextProps.data.loading
  }

  render () {
    // const { page, loading, error } = this.props
    const { data: {page, loading, error } } = this.props
    if (loading) {
      return null
    }
    if (! page ){
      return <Redirect to={`/ru/404`}/>
    } else {
      return (<div>
        <Breadcrumbs title={ page.title } breadcrumbs={[{url:'/ru', title:<i className="fa fa-home"></i>}, { url:`/ru/${ page.alias }`, title:page.title }]} />
        <HtmlContent html={ page.body }/>
      </div>)
    }
  }
}

const query = gql`
  query page ($id: String!, $language: String) {
    page (_id: $id, language: $language) {
      _id
      body
      title
      alias
    }
  }
`
const withData = compose (
  graphql(query, {
    options ({ page, language }) {
      return ({ variables: { id: page, language }})
    },
    // props: ({ data: { error, loading, page, refetch } }) => {
    //
    //   if (loading) return { loading };
    //   if (error) return { error };
    //
    //   return {
    //     page,
    //     refetch,
    //   }
    //
    //   if ( ! page ){
    //
    //   }
    //   return { page }
    // },
 })
)(TextPage)

export default withData
