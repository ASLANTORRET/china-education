import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ language }) => {
  return (
    <div className="navigation-style-two">
      <div className="row nav-wrap">
        <div className="top-bar">
          <div className="top-bar-title">
            <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
              <a data-toggle="">
                <span className="menu-icon dark float-left"></span>
              </a>
            </span>
          </div>

          <nav id="responsive-menu">
            <ul className="menu vertical medium-horizontal" data-responsive-menu="accordion medium-dropdown">
              <li className="home" role="menuitem">
                <Link to={`/${language}`}><i className="fa fa-home"></i></Link>
              </li>
              <li className="single-sub parent-nav">
                <Link to={`/${language}/about`}>
                  {TAPi18n.__('Company')}
                </Link>
                <ul className="child-nav menu vertical">
                  <li>
                    <Link to={`/${language}/about`}>{TAPi18n.__('About')}</Link>
                  </li>
                  <li>
                    <Link to={`/${language}/teachers`}>{TAPi18n.__('Teachers')}</Link>
                  </li>
                  {/* <li>
                    <Link to={`/${language}/benefits`}>{TAPi18n.__('Benefits')}</Link>
                  </li> */}
                  <li>
                    <Link to={`/${language}/partners`}>{TAPi18n.__('Partners')}</Link>
                  </li>
                </ul>
              </li>
              <li className="single-sub parent-nav">
                <Link to={`/${language}/classes`}>{TAPi18n.__('Classes')}</Link>
                <ul className="child-nav menu vertical" style={{minWidth: '250px'}}>
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
                    <Link to={`/${language}/chineseforkids`}>{TAPi18n.__('Chinese for Kids')}</Link>
                  </li>
                  <li>
                    <Link to={`/${language}/improveyourchinese`}>{TAPi18n.__('Improve your Chinese')}</Link>
                  </li>
                  <li>
                    <Link to={`/${language}/practiceinchinese`}>{TAPi18n.__('Practice in Chinese')}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/${language}/prices`}>{TAPi18n.__('Prices')}</Link>
              </li>
              <li>
                <Link to={`/${language}/certificates`}>{TAPi18n.__('Certificates')}</Link>
              </li>
              <li>
                <Link to={`/${language}/reviews`}>{TAPi18n.__('Reviews')}</Link>
              </li>
              {/* <li className="single-sub parent-nav">
                <a href="our-staff.html">Обучение за рубежом</a>
                <ul className="child-nav menu vertical">
                  <li>
                    <a href="our-staff.html">Общая информация</a>
                  </li>
                  <li>
                    <a href="single-teacher.html">Информация по городам</a>
                  </li>
                  <li>
                    <a href="single-teacher.html">Отзывы</a>
                  </li>
                </ul>
              </li>
              <li className="single-sub parent-nav">
                <a href="events.html">Полезная информация (для студентов)</a>
                <ul className="child-nav menu vertical">
                  <li>
                    <a href="events.html">Тест на определение уровня </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="search-wrap float-right">
            <a href="#" className="search-icon-toggle" data-toggle="search-dropdown" aria-controls="search-dropdown" data-is-focus="false" data-yeti-box="search-dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => {e.preventDefault()}}><i className="fa fa-search"></i></a>
        </div>
        <div className="dropdown-pane left" id="search-dropdown" data-dropdown="qs5nje-dropdown" data-auto-focus="true" aria-hidden="true" data-yeti-box="search-dropdown" data-resize="search-dropdown" aria-labelledby="l6hl3a-dd-anchor" data-events="resize">
          <input type="text" placeholder="Enter keyword and press enter .... "/>
        </div>
      </div>
		</div>
  )

}

export default Nav
