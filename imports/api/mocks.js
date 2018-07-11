import casual from 'casual'
import { Random } from 'meteor/random'
import { MockList } from 'graphql-tools';

export const mocks = {
  Quiz: (root, args, context) => {
    return {
      _id: Random.id(),
      body: casual.text,
      questions: () => new MockList([3,10]),
    }
  },
  Question: () => ({
    _id: Random.id(),
    body: casual.sentence,
    type: 'radio',
    answers: () => new MockList([2,4]),
  }),
  Answer: () => ({
    _id: Random.id(),
    body: casual.string,
    image:`http://lorempixel.com/200/200/people/${casual.integer(0,10)}`,
  }),

}
