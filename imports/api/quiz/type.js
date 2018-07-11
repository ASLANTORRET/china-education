const QuizType = `
  type Quiz {
    _id: String
    name: String
    brief: String
    body: String
    time: Int
    sectionsWithAudio: Int
    text: String
    image: String
    audio: String
    sections: [ Section ]
    sectionIds: [ String ]
  }
  type Question {
    _id: String
    body: String
    image: String
    answers: [ Answer ]
    type: String
  }
  type Answer {
    _id: String
    body: String
    image: String
    isCorrect: Boolean
  }
  type Section {
    _id: String
    body: String
    text: String
    image: String
    type: String
    questions: [ Question ]
  }
  type Result {
    _id: String
    text: String
    userId: String
    quizId: String
    answers: [ Answer ]
    questions: [ Question ]
    createdAt: Date
    answersIds: [ AnswerID ]
    quiz: Quiz
    score: Int
  }
  type AnswerID {
    questionId: String
    answerId: String
  }
  input QuizInput {
    _id: String
    name: String
    brief: String
    body: String
    time: Int
    audio: String
    sections: [ SectionInput ]
  }
  input SectionInput {
    _id: String
    body: String
  }
  input AnswerInput {
    questionId: String
    answerId: String
  }
  input ResultInput {
    quizId: String
    answersIds: [ AnswerInput ]
  }
`
export default QuizType
