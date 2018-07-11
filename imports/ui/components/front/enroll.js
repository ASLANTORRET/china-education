import React from 'react'
import { gql, graphql } from 'react-apollo'
import Breadcrumbs from './breadcrumbs'

// const EnrollForm = ({ language, data: { loading, courses } }) => {
//   if (loading) {
//     return <div>Loading...</div>
//   }
// const EnrollForm = ({ language, mutate }) => {
class EnrollForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    const { language, mutate } = this.props
    if (this.state.done) {
      return (
        <div className="widget">
          <h2>Заявка отправлена</h2>
        </div>
      )
    }
    const courses = [
      'Easy Chinese',
      'Real Chinese',
      'Excellent in Chinese',
      'Intensive course',
      'Business Chinese',
      'Подготовка к HSK',
      'Chinese for Kids',
      'Improve your Chinese',
      'Practice in Chinese',
    ]
    if (document.getElementById('recaptcha') && document.getElementById('recaptcha').innerHTML === '') {
      // grecaptcha.reset()
      grecaptcha.render('recaptcha', {
        'sitekey' : '6LeLlSkUAAAAABz2PXZwCDc7PBgKUPE0Y1CqEaQV'
      })
    }
    return (
      <div>
        <Breadcrumbs title="Записаться на курс" breadcrumbs={[{url:'/ru', title:<i className="fa fa-home"></i>}, { url:`/ru/book`, title:"Записаться на курс" }]} />
        
        <div className="content-section space-section module testimonial-page">
          <div className="row">
            <div className="medium-9 small-12 columns">
              <form id="book-form" onSubmit={(e) => {
                e.preventDefault()
                const form = e.target
                const fields = $(form).serializeArray()
                const enrollment = {}
                fields.forEach(field => {
                  if (field.name !== 'g-recaptcha-response') {
                    
                    if (!enrollment[field.name]) {
                      enrollment[field.name] = field.value
                    {/* } else if (typeof enrollment[field.name] === 'string') { */}
                      {/* const prevValue = enrollment[field.name] */}
                      {/* enrollment[field.name] = [prevValue, field.value] */}
                    } else {
                      {/* enrollment[field.name].push(field.value) */}
                      enrollment[field.name] += ', ' + field.value
                    }
                  } else {
                    enrollment['recaptcha'] = field.value
                  }
                })
                console.log(enrollment)
                if (enrollment.recaptcha) {
                  mutate({ variables: { enrollment } }).then((...args) => {
                    console.log(...args)
                    form.reset()
                    this.setState({done: true})
                  }).catch((...args) => {
                    console.log(args)
                  })
                }
              }}>
                <div className="row">
                  <div className="small-6 columns">
                    <input type="text" placeholder="ФИО" name="name" required/>
                  </div>
                  <div className="small-6 columns">
                    <input type="tel" placeholder="Телефон" name="phone" required/>
                  </div>
                </div>

                <div className="row">
                  <div className="small-6 columns">
                    <input type="number" placeholder="Возраст" name="age"/>
                  </div>
                  <div className="small-6 columns">
                    {/* Выбор курса из списка */}
                    <select name="course" required>
                      <option value="">Выбор курса из списка</option>
                      {courses.map((course, index) => {
                        return <option value={ course } key={index}>{ course }</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="small-6 columns inline">
                    Время занятий:
                    <label><input type="checkbox" name="time" value="утро"/>утро</label>
                  
                    <label><input type="checkbox" name="time" value="обед"/>обед</label>
                  
                    <label><input type="checkbox" name="time" value="вечер"/>вечер</label>
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 columns inline">
                    Тип занятий:
                    <label><input type="radio" name="type" value="индивидуально"/>индивидуально</label>
                    <label><input type="radio" name="type" value="в группе"/>в группе</label>
                  </div>
                </div>
                <label><input type="checkbox" name="to_china"/>Я готовлюсь поступить в ВУЗ Китая</label>
                <label><input type="checkbox" name="hsk"/>Я хочу сдать тест HSK</label>

                
                <div id="recaptcha"></div>
                <button type="submit" className="button primary">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default EnrollForm

// const query = gql`
//   query courses {
//     courses {
//       _id
//       name
//     }
//   }
// `

const mutation = gql`
  mutation createEnrollment($enrollment: EnrollmentInput){
    enrollmentCreate(enrollment: $enrollment) {
      _id
    }
  }
`

const withMutation = graphql(mutation)(EnrollForm)

export default withMutation

// const withData = graphql(query)(EnrollForm)

// export default withData