import React from 'react';
import { Link } from 'react-router';
import TechniciansIndexContainer from './TechniciansIndexContainer';
import VehiclesIndexContainer from './VehiclesIndexContainer';
import RepairordersIndexContainer from './RepairordersIndexContainer';

const DashboardContainer = props => {
  return(
      <div id='main-container'>
        <div className='row'>
          <div className='four columns'>
            <TechniciansIndexContainer />
          </div>
          <div className='four columns'>
            <RepairordersIndexContainer />
          </div>
          <div className='four columns'>
            <VehiclesIndexContainer />
          </div>
        </div>
      </div>
  )
}

export default DashboardContainer;
