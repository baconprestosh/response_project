import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HeaderScreen from './HeaderScreen';

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={HeaderScreen}>
          <IndexRoute component={VenuesIndexContainer}/>
          <Route path='/venues' component={VenuesIndexContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
