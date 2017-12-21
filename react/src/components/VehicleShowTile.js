import React from 'react';
import { Link } from 'react-router';

const VehicleShowTile = props => {

  return(
    <div className='vehicle-details'>
      <Link to={`/vehicles/${props.id}/edit`} className='custom-button edit-button'>Edit</Link>
      <h2>Repair Order# {props.id}</h2>
      <h2>{props.modelYear} {props.vehicleMake} {props.vehicleModel}</h2>
      <hr/>
    </div>
  )
}

export default VehicleShowTile;
