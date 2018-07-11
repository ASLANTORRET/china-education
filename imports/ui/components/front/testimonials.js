import React from 'react'

class Testimonials extends React.Component {
  componentDidMount() {
    $(".testimonials").owlCarousel({
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
  				items:2,
  				nav:true,
  				navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  				loop:true
  			}
  		}
  	});
  }
  render() {
    return (
      <div className="testimonials-wrapper side-controls module">
        <div className="section-title-wrapper">
              <div className="section-title">
                  <h2>Our Testimonials</h2>
                  <p>What Parent's Say About Us?</p>
              </div>
          </div>

          <div className="row">

            <div className="testimonials owl-carousel">

                  <div className="testimonial">
                      <div className="testimonial-thumb">
                          <img src="images/help/first_testimonial.jpg" alt="John Doe" />
                      </div>
                      <div className="testimonial-detail">
                          <h4>Very happy to find this institute!</h4>
                          <p>After graduation we were very worried about our children what he will do as he does not have any work experience but when he joined this abc institute this he became so professional!</p>
                          <cite>Maria Doe</cite>
                      </div>
                      <div className="clearfix"></div>
                   </div>

                  <div className="testimonial">
                      <div className="testimonial-thumb">
                          <img src="images/help/first_testimonial2.jpg" alt="John Doe" />
                      </div>
                      <div className="testimonial-detail">
                          <h4>Very happy to find this institute!</h4>
                          <p>After graduation we were very worried about our children what he will do as he does not have any work experience but when he joined this abc institute this he became so professional!</p>
                          <cite>Maria Doe</cite>
                      </div>
                      <div className="clearfix"></div>
                   </div>

              </div>

          </div>

      </div>
    )
  }
}

export default Testimonials
