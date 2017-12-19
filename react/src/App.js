import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HeaderScreen from './HeaderScreen';
import VehiclesIndexContainer from './containers/VehiclesIndexContainer';
import VehicleShowContainer from './containers/VehicleShowContainer';
import VehicleFormContainer from './containers/VehicleFormContainer';

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={HeaderScreen}>
          <IndexRoute component={VehiclesIndexContainer}/>
          <Route path='/vehicles' component={VehiclesIndexContainer}/>
          <Route path='/vehicles/new' component={VehicleFormContainer}/>
          <Route path='/vehicles/:id/edit' component={VehicleFormContainer}/>
          <Route path='/vehicles/:id' component={VehicleShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
