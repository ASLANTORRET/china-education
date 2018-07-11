import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { typeDefs } from '/imports/api/schema'
import { resolvers } from '/imports/api/resolvers'

import { mocks } from '/imports/api/mocks'
import '/imports/startup/server/fixtures'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// addMockFunctionsToSchema({ schema, mocks })

import cors from 'cors'

var whitelist = [
  'http://localhost:3002',
  'http://tian-cai.kz',
  'http://tiancai.kz',
  'http://www.tian-cai.kz',
  'http://www.tiancai.kz',
]

var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
}


createApolloServer({
  schema,
  // context (...args) {
  // }
},{configServer: expressServer => expressServer.use(cors(corsOptions))})