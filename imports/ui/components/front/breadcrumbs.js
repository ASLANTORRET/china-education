import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ title, breadcrumbs }) => {
  return (
    <div className="title-section module">
      <div className="row">
        <div className="small-12 columns">
          <h1>{ title }</h1>
        </div>
        <div className="small-12 columns">
          <ul className="breadcrumbs">
            { breadcrumbs.map(breadcrumb => <li key={ breadcrumb.url }><Link to={ breadcrumb.url }>{ breadcrumb.title }</Link></li>)}
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li className="disabled">Gene Splicing</li>
            <li><span className="show-for-sr">Current: </span> Cloning</li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
