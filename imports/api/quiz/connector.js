import { Mongo } from 'meteor/mongo'

export const Quizzes = new Mongo.Collection('quizzes')
export const Questions = new Mongo.Collection('questions')
export const Results = new Mongo.Collection('results')
export const Sections = new Mongo.Collection('sections')
