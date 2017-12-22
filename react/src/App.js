import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import VehiclesIndexContainer from './containers/VehiclesIndexContainer';
import VehicleShowContainer from './containers/VehicleShowContainer';
import VehicleFormContainer from './containers/VehicleFormContainer';
import TechniciansIndexContainer from './containers/TechniciansIndexContainer';
import TechnicianShowContainer from './containers/TechnicianShowContainer';
import TechnicianFormContainer from './containers/TechnicianFormContainer';
import RepairordersIndexContainer from './containers/RepairordersIndexContainer';
import RepairorderShowContainer from './containers/RepairorderShowContainer';
import RepairorderFormContainer from './containers/RepairorderFormContainer';
import DashboardContainer from './containers/DashboardContainer';


const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard}>
          <IndexRoute component={DashboardContainer}/>
          <Route path='/vehicles' component={VehiclesIndexContainer}/>
          <Route path='/vehicles/new' component={VehicleFormContainer}/>
          <Route path='/vehicles/:id' component={VehicleShowContainer}/>
          <Route path='/vehicles/:id/edit' component={VehicleFormContainer}/>
          <Route path='/technicians' component={TechniciansIndexContainer}/>
          <Route path='/technicians/new' component={TechnicianFormContainer}/>
          <Route path='/technicians/:id' component={TechnicianShowContainer}/>
          <Route path='/technicians/:id/edit' component={TechnicianFormContainer}/>
          <Route path='/repairorders' component={RepairordersIndexContainer}/>
          <Route path='/repairorders/new' component={RepairorderFormContainer}/>
          <Route path='/repairorders/:id' component={RepairorderShowContainer}/>
          <Route path='/repairorders/:id/edit' component={RepairorderFormContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
