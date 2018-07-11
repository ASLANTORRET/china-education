import Quiz from './quiz'
import User from './user'
import Page from './page'
import Review from './review'
import Teacher from './teacher'
import Certificate from './certificate'
import Enrollment from './enrollment'

import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolvers = {
  Query: Object.assign({}, Quiz.Query, User.Resolver, Page.Query, Teacher.Query, Review.Query, Certificate.Query),
  Mutation: Object.assign({}, Quiz.Mutation, Page.Mutation, Teacher.Mutation, Review.Mutation, Enrollment.Mutation),
  // Quiz: {
  //   questions(...args) {
  //     console.log(args)
  //   }
  // },
  ... Quiz.Resolver,
  ... Page.Resolver,
  ... Teacher.Resolver,
  ... Review.Resolver,
  ... Certificate.Resolver,
  ... Enrollment.Resolver,

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
}
