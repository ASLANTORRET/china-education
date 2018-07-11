import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'owl.carousel'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'

class Teachers extends React.Component {
  initCarousel() {
    $(".teachers-wrapper").owlCarousel({
      loop:true,
      margin:40,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        },
        600:{
          items:3,
          nav:false,
          navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        },
        1000:{
          items:4,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          loop:true
        }
      }
    });
  }
  componentDidMount() {
    this.initCarousel()
  }
  componentDidUpdate() {
    this.initCarousel()
  }
  render () {
    const { teachers, loading, language } = this.props
    if (loading) {
      return null
    }
    return (
      <div className="our-teachers module" id="teachers">
        <div className="row">
          <div className="section-title-wrapper">
            <div className="section-title">
              <h2>{TAPi18n.__('Our teachers')}</h2>
              <p>Команда профессионалов с большим опытом преподавания!</p>
            </div>
          </div>

          <div className="teachers-wrapper owl-carousel">
            { teachers.map(teacher => (
              <div className="teacher" key={teacher._id}>
                <div className="teacher-thumb">
                  <img src={ teacher.photoUrl } alt={ teacher.name } />
                    <div className="teacher-links menu-centered">
                      <ul className="menu">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                      <Link to={`/${language}/teachers#${teacher._id}`} className="small-button">Подробнее &raquo;</Link>
                    </div>
                  </div>
                  <div className="teacher-meta">
                    <h3><a href="#">{ teacher.name }</a></h3>
                    <HtmlContent html={ teacher.brief }/>
                    {/* <p>Highly Educated Punjab University Professor</p> */}
                  </div>
              </div>
            )) }

          </div>

        </div>
      </div>
    )
  }
}

const query = gql`
  query teachers ($language: String!) {
    teachers (language: $language) {
      _id
      name
      brief
      photoUrl
    }
  }
`

const withData = compose(
  graphql(query, {
    options ({ language }) {
      return { variables: { language } }
    },
    props({ ownProps: { language }, data: { teachers, loading, error, refetch } }) {
      return { teachers, loading, error, refetch, language }
    },
  })
) (Teachers)

export default withData
// export default Teachers
