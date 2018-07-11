import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import TeacherForm from './form'

class TeacherEdit extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  onSave(teacher) {
    teacher._id = this.props.data.teacher._id
    console.log(teacher)
    this.props.mutate({
      variables: { teacher }
    })
  }
  render () {
    const { teacher } = this.props.data
    if ( ! teacher ) {
      return <div>loading</div>
    } else {
      return (
        <div>
          <TeacherForm teacher={ teacher } onSave={this.onSave}/>
          {/* <input value={ this.state.teacher.alias } onChange={(e) => {this.setState({ 'teacher.alias': e.target.value })}}/> */}
          {/* <Trumbowyg value={ this.state.teacher.body } onChange={(e) => {this.setState({ 'teacher.body': e.target.value })}}/> */}
          {/* <button onClick={ this.onSubmit }>Save</button> */}
        </div>
      )
    }
  }
}

const query = gql`
  query teacher ($id: String!) {
    teacher ( _id: $id ) {
      _id
      name (isOriginal: true)
      photoUrl
      i18n {
        name {
          ru
          en
          zh
        }
        brief {
          ru
          en
          zh
        }
      }
    }
  }
`

const teacherUpdate = gql`
  mutation teacherUpdate($teacher: TeacherInput!) {
    teacherUpdate(teacher: $teacher) {
      _id
    }
  }
`
const withDataMutations = compose(
  graphql(query, {
    options ({ match: { params: { id } } }) {
      return ({ variables: { id } })
    },
    // props ()
  }),
  graphql(teacherUpdate),
)

export default withDataMutations(TeacherEdit)
