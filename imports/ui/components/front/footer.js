import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ language }) => {
  return (
    <div className="footer">
        <div className="footerTop">

            <div className="row">

                <div className="large-3 medium-6 small-12 columns footer-widget">
                    <h2>О нас</h2>
                    <div className="tx-div"></div>
                    <p>Китайские университеты с каждым годом привлекают все больше абитуриентов из разных стран мира, в том числе и Казахстана. Есть только одно серьезное препятствие на пути к качественному образованию – незнание китайского языка.</p>
                </div>

                <div className="large-3 medium-6 small-12 columns footer-widget quick-links">
                    <h2>{TAPi18n.__('Company')}</h2>
                    <div className="tx-div"></div>
                    <ul className="menu vertical">
                        <li>
                          <Link to={`/${language}/about`}>{TAPi18n.__('About')}</Link>
                        </li>
                        <li>
                          <Link to={`/${language}/teachers`}>{TAPi18n.__('Teachers')}</Link>
                        </li>
                        <li>
                          <Link to={`/${language}/benefits`}>{TAPi18n.__('Benefits')}</Link>
                        </li>
                        <li>
                          <Link to={`/${language}/partners`}>{TAPi18n.__('Partners')}</Link>
                        </li>
                        <li>
                          <Link to={`/${language}/certificates`}>{TAPi18n.__('Certificates')}</Link>
                        </li>
                    </ul>
                </div>

                <div className="large-3 medium-6 small-12 columns footer-widget">
                    <h2>{TAPi18n.__('Classes')}</h2>
                    <div className="tx-div"></div>
                    <ul className="vertical">
                      <li>
                        <Link to={`/${language}/classes`}>{TAPi18n.__('Class comparison')}</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/easychinese`}>Easy Chinese</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/realchinese`}>Real Chinese</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/excellentinchinese`}>Excellent in Chinese</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/intensivecourse`}>Intensive course</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/businesschinese`}>Business Chinese</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/hsktraining`}>{TAPi18n.__('HSK training')}</Link>
                      </li>
                      <li>
                        <Link to={`/${language}/reviews`}>{TAPi18n.__('Reviews')}</Link>
                      </li>
                    </ul>
                </div>

                <div className="large-3 medium-6 small-12 columns footer-widget">
                <div className="textwidget">
                    <ul className="address">
                       <li>
                            <i className="fa fa-home"></i>
                            <h4>{TAPi18n.__('Адрес')}:</h4>
                            <p>Радостовца 152-к , офис2,</p>
                        </li>
                        <li>
                            <i className="fa fa-mobile"></i>
                            <h4>{TAPi18n.__('Телефон')}:</h4>
                            <p>+7 (705) 220 31 03, +7 (727) 274 90 09</p>

                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@tiancai.kz</p>
                        </li>
                    </ul>
                    <hr />
                    <div className="socialicons">
                        Следите за нами:
                        <a href="https://www.facebook.com/%D0%AF%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9-%D1%86%D0%B5%D0%BD%D1%82%D1%80-Tiancai-333863520360898/?fref=ts"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.isnstagram.com/Tiancai_almaty"><i className="fa fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>
                <div className="clearfix"></div>

            </div>

        </div>

        <div className="footerbottom">

            <div className="row">

                <div className="medium-6 small-12 columns">
                    <div className="copyrightinfo">2016 &copy; <a href="#">Tian Cai</a> Алматинская школа Китайского языка.</div>
                </div>
                {/* <div className="medium-6 small-12 columns hide-for-small-only">
                    <div className="pull-right">
                        <ul className="menu">
                            <li><a href="index-2.html">Home</a></li>
                            <li><a href="about-us.html">About</a></li>
                            <li><a href="blog1.html">News</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div> */}

            </div>

        </div>
    </div>
  )
}

export default Footer
