import React from 'react'

const Events = () => {
  return (
    <div className="seminar-events module">
      <div className="row">
          <div className="section-title-wrapper light-title">
                <div className="section-title">
                    <h2>Upcoming Events</h2>
                    <p>Our Upcoming Seminars/Events Dont Miss Out!</p>
                </div>
            </div>

            <div className="events-wrapper">

                <div className="medium-6 small-12 columns">
                  <div className="event">
                    <div className="medium-8 small-12 columns event-data">
                          <h4><a href="single-event.html">PHP Developer December 2016 Seminar</a></h4>
                            <p>We are happy to announce that our next seminar for PHP classes will be held at our Lahore campus click link for details and further information ...</p>
                            <p><strong>Timinings:</strong> 17:00 - 18:00
                            <br /><strong>Date:</strong> 24, December 2016</p>
                            <a href="single-event.html" className="button primary bordered-dark">Join Event</a>
                        </div>
                        <div className="medium-4 small-12 columns event-thumb">
                          <img src="images/help/phpcourse.jpg" alt="PHP Course" />
                        </div>
                      <div className="clearfix"></div>
                    </div>
                </div>

                <div className="medium-6 small-12 columns">
                  <div className="event">
                    <div className="medium-8 small-12 columns event-data">
                          <h4><a href="#">Graphics Designer December 2016 Seminar</a></h4>
                            <p>We are happy to announce that our next seminar for PHP classes will be held at our Lahore campus click link for details and further information...</p>
                            <p><strong>Timinings:</strong> 17:00 - 18:00
                            <br /><strong>Date:</strong> 24, December 2016</p>
                            <a href="single-event.html" className="button primary bordered-dark">Join Event</a>
                        </div>
                        <div className="medium-4 small-12 columns event-thumb">
                          <img src="images/help/graphiccourse.jpg" alt="PHP Course" />
                        </div>
                      <div className="clearfix"></div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Events
