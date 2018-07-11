import React from 'react'

class Brands extends React.Component {
  componentDidMount() {
    $(".brand-carousel").owlCarousel({
  		loop:true,
  		margin:30,
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
  				items:5,
  				nav:true,
  				navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  				loop:true
  			}
  		}
  	});
  }
  render() {
    return (
      <div className="brands-wrap side-controls module">
        <div className="section-title-wrapper">
              <div className="section-title">
                  <h2>Наши партнеры</h2>
                  <p>Мы острудничаем с крупными университетами и компаниями Китая.</p>
              </div>
          </div>

          <div className="row">

              <div className="brand-carousel owl-carousel">

                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part1.jpg" className="thumbnail" /></a></div>
                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part2.jpg" className="thumbnail" /></a></div>
                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part3.jpg" className="thumbnail" /></a></div>
                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part4.jpg" className="thumbnail" /></a></div>
                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part5.jpg" className="thumbnail" /></a></div>
                  <div className="bran-logo"><a href="#"><img  alt="" src="images/help/part6.jpg" className="thumbnail" /></a></div>

              </div>

          </div>

      </div>
    )
  }
}

export default Brands
