import React from 'react'
import { graphql, gql, compose } from 'react-apollo'
import Trumbowyg from '/imports/modules/trumbowyg'
import TextEdit from '/imports/modules/text-edit'

class QuizEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    // const { quiz } = this.props.data
    // console.log(quiz)
    // this.setState({ quiz })
  }
  shouldComponentUpdate(nextProps, nextState) {
    // const { quiz } = nextProps.data
    // return ! quiz
    const { quiz } = nextState
    return ! quiz

  }
  componentDidUpdate() {
    const { quiz } = this.props.data
    this.setState({ quiz })
  }
  onSubmit(e) {
    e.preventDefault()
    // const { quiz } = this.state
    const quiz = Object.assign({}, this.state.quiz)
    console.log(quiz)
    this.props.mutate({
      variables: { quiz }
    })
  }
  render () {
    const { quiz } = this.props.data
    console.log(this.props)
    if (!quiz) {
      return <div>loading</div>
    } else {
      return (
        <div>
          {/* <form onSubmit={this.onSubmit.bind(this)}> */}
            {/* <button type="submit">save</button> */}
            <textarea value={ quiz.body } onChange={(e) => { console.log(e.target.value) }} />
            {quiz.sections.map((section, index) => <div key={ index }>
              <TextEdit value={section.body} onSave={(value) => {
                const variables = {
                  section: {
                    _id: section._id,
                    body: value,
                  }
                }
                this.props.sectionUpdate({ variables })
              }}/>
              {/* <Trumbowyg value={ section.body } onChange={(e) => {
                console.log(e.target.value)
                this.props.sectionUpdate({variables:{section:{body:e.target.value, _id:section._id}}})
              }} /> */}
            </div>)}
          {/* </form> */}

        </div>
      )
    }
  }
}

const query = gql`
  query quiz ($id: String!) {
    quiz ( _id: $id ) {
      _id
      body
      audio
      time
      sections {
        _id
        body
      }
    }
  }
`

const quizUpdate = gql`
  mutation quizUpdate($quiz: QuizInput!) {
    quizUpdate(quiz: $quiz) {
      _id
      body
    }
  }
`
const sectionUpdate = gql`
  mutation sectionUpdate($section: SectionInput!) {
    sectionUpdate(section: $section) {
      _id
      body
    }
  }
`
const withDataMutations = compose(
  graphql(query, { options ({ match: { params: { id } } }) {
    return ({ variables: { id } })
  } }),
  graphql(quizUpdate, { name: 'quizUpdate' }),
  graphql(sectionUpdate, { name: 'sectionUpdate' }),
)

export default withDataMutations(QuizEdit)
