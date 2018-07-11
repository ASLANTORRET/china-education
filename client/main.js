import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '/imports/ui/App';
// import Language from '/imports/ui/language';

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      {/* <Language /> */}
      <App />
    </ApolloProvider>,
    document.getElementById('app')
  );
});
