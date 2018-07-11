import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import Breadcrumbs from '/imports/ui/components/front/breadcrumbs'
import $ from 'jquery'
import '/imports/ui/layouts/fancybox/jquery.fancybox'
import '/imports/ui/layouts/fancybox/jquery.fancybox.css'

const CertificateIndex = ({ data: { certificates, refetch, loading, error } }) => {
  if (loading) {
    return null
  }
  // $(".fancybox").fancybox()
  return (
    <div>
      <Breadcrumbs title={ TAPi18n.__('Certificates') } breadcrumbs={[{url:'/ru', title:<i className="fa fa-home"></i>}, { url:`/ru/reviews`, title:TAPi18n.__('Certificates') }]} />

      <div className="content-section space-section module certificates-page">
        <div className="row">
          { certificates.map(certificate => {
            return (
              <div className="medium-3 columns" key={certificate._id}>
                <div className="course">
                    <div className="course-thumb">
                      <a href={`/upload/images/${certificate.file}`} className="fancybox" data-fancybox="gallery" data-caption={certificate.caption}>
                        <img src={`/upload/images/small/${certificate.file}`} alt={certificate.caption}/>
                        {/* <div className="teacher-name">John Doe.</div> */}
                        {/* <div className="price-tag">$28.55</div> */}
                      </a>
                    </div>
                    <h4>{certificate.caption}</h4>
                </div>
                {/* <a className="fancybox" href={`/upload/images/big/${certificate.file}`}>
                  <img src={`/upload/images/small/${certificate.file}`}/>
                </a> */}
              </div>
            )
          }) }
        </div>
      </div>


    </div>
  )
}

// export default CertificateIndex

const query = gql`
  query certificates {
    certificates {
      _id
      caption
      file
    }
  }
`

const withData = compose(
  graphql(query)
) (CertificateIndex)

export default withData
