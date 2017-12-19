import React from 'react';
import { Link } from 'react-router';

const VehicleShowTile = props => {

  return(
    <div className='vehicle-details'>
      <Link to={`/vehicles/${props.id}/edit`} className='custom-button edit-button'>Edit</Link>
      <h1>Repair Order Number</h1>
      <h1 className='title-show clearfix'>{props.modelYear} {props.vehicleMake} {props.vehicleModel}</h1>
      <hr/>
    </div>
  )
}

export default VehicleShowTile;
