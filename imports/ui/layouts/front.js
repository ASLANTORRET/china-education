import React from 'react'
import { Link } from 'react-router-dom'
import 'jquery'
import foundation from 'foundation-sites'
// import { Carousel } from 'owl.carousel'
// import 'imports?jQuery=jquery!owl.carousel'

import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'foundation-sites/dist/css/foundation.min.css'
import { Carousel } from 'owl.carousel'

import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

import lightbox from 'lightbox2'
import 'lightbox2/dist/css/lightbox.min.css'

import TopBar from '/imports/ui/components/front/top-bar'
import Header from '/imports/ui/components/front/header'
import Nav from '/imports/ui/components/front/nav'
import CallToAction from '/imports/ui/components/front/call-to-action'
import Footer from '/imports/ui/components/front/footer'

class FrontLayout extends React.Component {
  componentDidMount() {
    $(document).foundation()
    //scroll effect
    $("#top").on("click",function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    $("#top").on("click",function (event) {
      event.stopPropagation();
      var idTo = $(this).attr("data-atr");
      var Position = $("[id='" + idTo + "']").offset();
      $("html, body").animate({ scrollTop: Position }, "slow");
      return false;
    });

    $(window).on("scroll",function() {
      if($(this).scrollTop() > 1000) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    });
  }
  render () {
    const { children, language } = this.props
    return (
      <div>
        {/* <link rel="stylesheet" type="text/css" href="/owl.carousel.css" media="all" /> */}
        <link rel="stylesheet" type="text/css" href="/style.css" media="all" />
        <link rel="stylesheet" type="text/css" href="/custom.css" media="all" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif%7CLato:400,700%7CMontserrat:400,700%7CRoboto+Slab:400%7CRoboto:900,700" rel="stylesheet" type="text/css" />
        <link href="http://alternate.kz/china-education.css" rel="stylesheet"/>

        <div className="main-container">
          <TopBar />
          <div className="sticky-container" data-sticky-container>
            <div className="sticky header-wrap" data-sticky data-options="marginTop:0;">
              <Header language={language}/>
              <Nav language={language}/>
            </div>
          </div>
          { children }
          <footer>
            <CallToAction language={language}/>
            <Footer language={language}/>
          </footer>
        </div>

        <a href="#top" id="top" className="animated fadeInUp start-anim"><i className="fa fa-angle-up"></i></a>
        <div className="fixed">
          <Link to={`/${language}/enroll`}><i className="fa fa-angle-up"></i></Link>
          {/* <a href="#"><i className="fa fa-angle-up"></i></a> */}
          <a href="#"><i className="fa fa-angle-up"></i></a>
        </div>
      </div>
    )
  }
}
export default FrontLayout
