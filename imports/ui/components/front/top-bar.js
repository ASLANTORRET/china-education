import React from 'react'

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="row">

        <div className="large-6 medium-6 small-12 columns left-side">
          <p>Есть вопросы?  <i className="fa fa-phone"></i> +7 (705) 220 31 03</p>
        </div>

        <div className="large-6 medium-6 small-12 columns">
          <ul className="menu text-right">
            <li><i className="fa fa-envelope"></i>info@tiancai.kz</li>
            <li><i className="fa fa-clock-o"></i> Пн.- Пт: 09:00 - 18:00</li>
            <li className="first-social social"><a target="_blank" href="https://www.facebook.com/%D0%AF%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9-%D1%86%D0%B5%D0%BD%D1%82%D1%80-Tiancai-333863520360898/?fref=ts"><i className="fa fa-facebook"></i></a></li>
            <li className="social"><a target="_blank" href="https://www.isnstagram.com/Tiancai_almaty"><i className="fa fa-instagram"></i></a></li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default TopBar
