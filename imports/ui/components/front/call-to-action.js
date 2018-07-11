import React from 'react'
import { Link } from 'react-router-dom'
const CallToAction = ({ language }) => {
  return (
    <div className="call-to-action">
       <div className="row">
            <div className="medium-10 small-12 columns">
                <h2><i className="fa fa-phone" aria-hidden="true"></i> Есть вопросы? <span>+7 (705) 220 31 03</span></h2>
            </div>
            <div className="medium-2 small-12 columns">
                {/* <a href="#" className="button secondary">Appointment</a> */}
                <Link to={`/${language}/enroll`} className="button secondary">Записаться на курс</Link>
            </div>
       </div>
     </div>
  )
}

export default CallToAction
