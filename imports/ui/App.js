import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Chart from 'chart.js';
// import Loading from './Loading';
// import LoginForm from './LoginForm';
//
// import Home from './home'
// import Front from './front'
// import Admin from './admin'
// import Manager from './manager'
// import Layout from './layout'
// import Quiz from './quiz'

import Language from './language'


// import $ from "jquery"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const App = ({ user, refetch, userLoading }) => (
  <BrowserRouter>
    <Language />
  </BrowserRouter>
);

// const App = ({ user, refetch, userLoading }) => (
//   <BrowserRouter>
//     <Layout>
//       <Route path="/:language" component={Front} exact={true}/>
//       {/* <Route path="/:language/login" component={LoginForm}/> */}
//       <Route path="/:language/login" component={() => <Accounts.ui.LoginForm />}/>
//       <Route path="/:language/admin" component={Admin}/>
//       <Route path="/:language/manager" component={ Manager }/>
//       <Route path="/:language/quiz" component={ Quiz }/>
//     </Layout>
//     {/* <div>
//       {userLoading
//         ? <Loading />
//         : <div className="App-content">
//             <LoginForm />
//             {user
//               ? <div>
//                 <Route exact path="/:language" component={Home}/>
//               </div>
//               : 'Please log in!'}
//           </div>}
//     </div> */}
//   </BrowserRouter>
// );

App.propTypes = {
  user: PropTypes.object,
  hasErrors: PropTypes.bool,
  refetch: PropTypes.func,
  userLoading: PropTypes.bool,
};

/*
 * We use `gql` from graphql-tag to parse GraphQL query strings into the standard GraphQL AST
 * See for more information: https://github.com/apollographql/graphql-tag
 */
const GET_USER_DATA = gql`
  query {
    user {
      emails {
        address
        verified
      }
      profile {
        name {
          first
          last
        }
        username
      }
      _id
    }
  }
`;

/*
 * We use the `graphql` higher order component to send the graphql query to our server
 * See for more information: http://dev.apollodata.com/react/
 */
// const withData = graphql(GET_USER_DATA, {
//   // destructure the default props to more explicit ones
//   props: ({ data: { error, loading, user, refetch } }) => {
//     if (loading) return { userLoading: true };
//     if (error) return { hasErrors: true };
//
//     return {
//       user,
//       refetch,
//     };
//   },
// });
//
// export default withData(App);
export default App;
