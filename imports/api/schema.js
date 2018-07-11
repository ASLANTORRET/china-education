import Quiz from './quiz'
import Page from './page'
import User from './user'
import Teacher from './teacher'
import Review from './review'
import Certificate from './certificate'

import Enrollment from './enrollment'

export const typeDefs = [
  `
  scalar Date
  type I18n {
    ru: String
    en: String
    zh: String
  }
  input I18nInput {
    ru: String
    en: String
    zh: String
  }
  type Query {
    quizzes: [ Quiz ]
    quiz ( _id: String! ) : Quiz
    user: User
    result ( _id: String! ) : Result
    results: [ Result ]
    page ( _id: String!, language: String ) : Page
    pages: [ Page ]
    teacher ( _id: String!, language: String ) : Teacher
    teachers (language: String): [ Teacher ]
    reviews (language: String): [ Review ]
    certificates: [ Certificate ]
  }
  type Mutation {
    quizCreate( text: String ): Quiz
    quizUpdate( quiz: QuizInput ): Quiz
    sectionUpdate( section: SectionInput ): Section
    resultSave( result: ResultInput ): Result
    pageCreate( page: PageInput ): Page
    pageUpdate( page: PageInput ): Page
    pageDelete( page: PageInput ): Page
    teacherCreate ( teacher: TeacherInput ) : Teacher
    teacherUpdate ( teacher: TeacherInput ) : Teacher
    teacherDelete ( teacher: TeacherInput ) : Teacher
    reviewCreate ( review: ReviewInput ) : Review
    enrollmentCreate ( enrollment: EnrollmentInput ): Enrollment
  }
  `,
  Quiz.Type,
  User.Type,
  Page.Type,
  Teacher.Type,
  Review.Type,
  Certificate.Type,
  Enrollment.Type
];
