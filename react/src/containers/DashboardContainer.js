import React from 'react';
import { Link } from 'react-router';
import TechniciansIndexContainer from './TechniciansIndexContainer';
import VehiclesIndexContainer from './VehiclesIndexContainer';

const DashboardContainer = props => {
  return(
    <div>
      <div id='tech-container'>
        <TechniciansIndexContainer />
      </div>
      <div id='vehicle-container'>
        <VehiclesIndexContainer />
      </div>
    </div>
  )
}

export default DashboardContainer;
