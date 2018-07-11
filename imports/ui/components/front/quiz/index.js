import React from 'react'
import { Redirect } from 'react-router'
import { gql, graphql, compose } from 'react-apollo'
import HtmlContent from '/imports/modules/html-content'
// import Question from './question'
import Section from './section'
import Timer from './timer'
import _ from 'lodash'

import 'foundation-sites/dist/css/foundation.min.css'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: {},
      isStarted: false,
      isCompleted: false,
      section: 0,
      isAnswered: false,
      startIndex: 0,
      audio: false,
      audioEnded: false
    }
  }

  componentDidMount() {
    $(document).foundation()
    this.initAudio()
  }

  componentDidUpdate() {
    this.initAudio()
  }
  componentWillUnmount(){
    this.state.audio.pause()
    // this.state.audio.currentTime = 0;
  }

  initAudio () {
    const { data: { quiz } } = this.props
    if (quiz) {
      // const quiz = quizzes[0]

      let audio = this.state.audio
      if (! audio) {
        audio = new Audio(quiz.audio)

        if (navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
        ) {
          this.setState({audio})
          // this.startButton.onclick(()=>{
          //   audio.play()
          // })
        } else {
          audio.oncanplaythrough = () => {
            this.setState({ audio })
          }
        }
        audio.onended = () => {
          this.setState({ audioEnded: true })
        }
      }
    }
  }
  answerQuestion(questionId, answer) {
    const answers = this.state.answers
    answers[questionId] = answer
    // console.log(answer)
    this.setState({ answers })
    this.checkAnsweredSection()
  }
  checkAnsweredSection() {
    const { data: { quiz } } = this.props
    // const quiz = quizzes[0]
    const { answers } = this.state
    const isAnswered = quiz.sections[this.state.section].questions.every((question) => {
      return answers[question._id]
    })

    this.setState({ isAnswered })
  }
  // onSubmit(e) {
  //   e.preventDefault()
  // }
  onStart(e) {
    let { audio, isStarted } = this.state
    isStarted = true
    audio.play()
    // this.initTimer()
    this.setState({ isStarted })
  }
  onPrev(e) {
    let { section, startIndex} = this.state
    const { data: { quiz } } = this.props
    // const quiz = quizzes[0]
  }
  onNext(e) {
    let { section, startIndex} = this.state
    const { data: { quiz } } = this.props
    // const quiz = quizzes[0]
    if (section < quiz.sections.length-1) {
      startIndex += quiz.sections[section].questions.length
      section += 1
      const isAnswered = false
      this.setState({section, startIndex, isAnswered})
    } else {
      this.onComplete()
    }
  }
  onComplete() {
    const { data: { quiz } } = this.props
    // const quiz = quizzes[0]

    let { isCompleted, audio, answers } = this.state

    this.setState({ isCompleted: true })
    audio.pause()
    const answersIds = Object.keys(answers).map(questionId => ({
      questionId, answerId: answers[questionId]
    }))
    this.props.mutate({
      variables: { result: { answersIds, quizId: quiz._id }}
    }).then(({ data: { resultSave: { _id } } }) => {
      this.setState({resultId: _id})
      // console.log(data)
    })
  }
  render () {
    const { language, data: { quiz } } = this.props
    if (!quiz) {
      return null
    }
    // const quiz = quizzes[0]

    if (this.state.isCompleted) {
      if (this.state.resultId) {
        return (
          <Redirect to={`/${language}/result/${this.state.resultId}`}/>
        )
      } else {
        return (
          <div>Completed</div>
        )
      }
    } else if (this.state.isStarted) {
      return (
        <div className="quiz row">
          <div className="medium-12 columns">
            {/* <form onSubmit={this.onSubmit.bind(this)}> */}
              <HtmlContent html={ quiz.body }/>
              <Timer time={ quiz.time } onDeadline={ this.onComplete }/>

              <Section section={quiz.sections[this.state.section]} answerQuestion={this.answerQuestion.bind(this)} answers={this.state.answers} startIndex={this.state.startIndex} />
                {/* { quiz.questions.map((question, index) =>
                  <Question index={ index } question={ question } key={ index }
                    answerQuestion={ this.answerQuestion.bind(this) }
                    answer={ this.state.questions[question._id] }
                />)} */}
                { this.state.isAnswered
                  ? ((this.state.section + 1) < quiz.sectionsWithAudio) || this.state.audioEnded
                    ? <button className="button" type="button" onClick={this.onNext.bind(this)}>next</button>
                    : <div>wait for audio ended</div>
                  : <div>answer all questions</div>
                }
              <button className="button" type="button" onClick={()=>{this.onComplete()}}>force complete</button>
            {/* </form> */}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          { this.state.audio ?<button className="button" type="button" onClick={this.onStart.bind(this)} ref={(element) => {this.startButton = element}}>Start</button>: "loading"}
        </div>
      )
    }
  }
}

const query = gql`
  query quiz ($id: String!) {
    quiz(_id: $id) {
      _id
      body
      audio
      time
      sectionsWithAudio
      sections {
        body
        image
        type
        questions {
          _id
          body
          image
          type
          answers {
            _id
            body
            image
          }
        }
      }
    }
  }
`
const mutation = gql`
  mutation resultSave ($result: ResultInput) {
    resultSave(result: $result) {
      _id
      createdAt
    }
  }
`
// const mutation = gql`
//   mutation resultSave ($quizId: String, $answersIds: [ AnswerInput ]) {
//     resultSave(answersIds: $answersIds) {
//       createdAt
//     }
//   }
// `

// const withData = graphql(query)(Quiz)
// export default withData
const withDataMutations = compose(
  graphql(query, {
    options({id}) {
      return { variables: { id }}
    }
  }),
  // graphql(mutation, { name:'resultMutation' })
  graphql(mutation, {
    // options: {
    //   return {
    //     update: (proxy, data: {resultSave}) => {
    //       console.log(args)
    //     },
    //   }
    // }
  })
)(Quiz)

export default withDataMutations
