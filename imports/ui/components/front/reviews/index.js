import React from 'react'
import ReviewForm from './form'
import { gql, graphql, compose } from 'react-apollo'
import Breadcrumbs from '/imports/ui/components/front/breadcrumbs'

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: []
    }
  }
  render () {
    const { data: { reviews, refetch, loading, error }, mutate } = this.props
    return (
      <div>
        <Breadcrumbs title={ TAPi18n.__('Reviews') } breadcrumbs={[{url:'/ru', title:<i className="fa fa-home"></i>}, { url:`/ru/reviews`, title:TAPi18n.__('Reviews') }]} />

        <div className="content-section space-section module testimonial-page">

            <div className="row">

                <div className="medium-9 small-12 columns test-wrap">
                  { reviews && reviews.length
                    ? reviews.map((review, index) => {
                        return (
                          <div className="medium-12 small-12 columns" key={review._id}>
                            <div className={`testimonial ${this.state.expanded.indexOf(index)!== -1 ? 'expanded' : 'shrinked'}`}
                              onClick={()=>{
                                let { expanded } = this.state
                                const current = expanded.indexOf(index)
                                if (current !== -1) {
                                  expanded = [...expanded.slice(0, current), ...expanded.slice(current+1)]
                                } else {
                                  expanded.push(index)
                                }
                                this.setState({expanded})
                              }}
                            >
                                <div className="testimonial-thumb">
                                    <img src={review.image} alt={review.name} />
                                </div>
                                <div className="testimonial-detail">
                                    <h4>{ review.title }</h4>
                                    <p>{ review.body }</p>
                                    <cite>{ review.name }</cite>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                          </div>
                        )
                      })
                    : <div>{ TAPi18n.__("First review") }</div>
                  }
                </div>

                <div className="medium-3 small-12 columns sidebar">
                  <ReviewForm createReview={ mutate } refetch={ refetch } />
              </div>

            </div>

        </div>


      </div>
    )
  }
}

// export default ReviewIndex

const query = gql`
  query reviews {
    reviews {
      _id
      title
      body
      name
      image
    }
  }
`

const mutation = gql`
  mutation reviewCreate($review: ReviewInput!) {
    reviewCreate(review: $review) {
      _id
    }
  }
`

const withData = compose(
  graphql(query),
  graphql(mutation)
) (ReviewIndex)

export default withData
