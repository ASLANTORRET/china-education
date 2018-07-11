import React from 'react'

import './slick-theme.css'

class MainBanner extends React.Component {
  componentDidMount () {
    $('.slick-carousel').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
  }
  render () {
    return (
      <div className="main-banner">
        <div className="slick-carousel">
          <div>
            <img src="/images/help/slide1.jpg"  alt="First Slide"/>
            <div className="caption">slide1</div>
          </div>
          <div>
            <img src="/images/help/slide2.jpg"  alt=""/>
            <div className="caption">slide2</div>
          </div>
          <div>
            <img src="/images/help/slide3.jpg"  alt=""/>
            <div className="caption">slide3</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainBanner
