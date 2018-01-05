import React from 'react';
import { Link } from 'react-router';
import TechniciansIndexContainer from './TechniciansIndexContainer';
import VehiclesIndexContainer from './VehiclesIndexContainer';
import RepairordersIndexContainer from './RepairordersIndexContainer';
import ReactTimelineContainer from './ReactTimelineContainer';

const DashboardContainer = props => {
  return(
      <div id='main-container'>
        <div className='row'>
          <ReactTimelineContainer />
        </div>
        <div>
          <Link to={`/vehicles/new`} className='show-button' id='add-new-vehicle-button'>Submit A New Vehicle</Link>
          <Link to={`/technicians/new`} className='show-button' id='add-new-technician-button'>Add A New Tech</Link>
          <Link to={`/repairorders/new`} className='show-button' id='add-new-repairorder-button'>Create New Repair Order</Link>
        </div>
      </div>
  )
}

export default DashboardContainer;
