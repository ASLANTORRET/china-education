import React from 'react'

// const ReviewForm = ({ createReview, refetch }) => {
class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    const { createReview, refetch } = this.props
    if (this.state.done) {
      return (
        <div className="widget">
          <h2>Отзыв отправлен</h2>
        </div>
      )
    }
    if (document.getElementById('recaptcha') && document.getElementById('recaptcha').innerHTML === '') {
      // grecaptcha.reset()
      grecaptcha.render('recaptcha', {
        'sitekey' : '6LeLlSkUAAAAABz2PXZwCDc7PBgKUPE0Y1CqEaQV'
      })
    }
    return (
      <div className="widget">
        <h2>{TAPi18n.__('Submit Review')}</h2>

        <div className="widget-content">
          <form id="review-form" onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const fields = $(form).serializeArray()
            const review = {}
            fields.forEach(field => {
              if (field.name !== 'g-recaptcha-response') {
                review[field.name] = field.value
              } else {
                review['recaptcha'] = field.value
              }
            })
            // console.log(review)
            if (review.recaptcha) {
              createReview({ variables: { review } }).then((...args) => {
                refetch()
                console.log(...args)
                this.setState({ done: true })
                form.reset()
              }).catch((...args) => {
                console.log(args)
              })
            }
          }}>
            <input type="text" placeholder="Имя" name="name" required/>
            <input type="email" placeholder="E-mail" name="email" required/>

            {/* <input type="text" placeholder="Отзыв" name="title" required/> */}
            <textarea placeholder="Отзыв" rows="2" name="body" required/>
            {/* <div className="g-recaptcha" id="recaptcha" data-sitekey="6LeLlSkUAAAAABz2PXZwCDc7PBgKUPE0Y1CqEaQV"></div> */}
            <div id="recaptcha"></div>
            <button type="submit" className="button primary">Отправить</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm
