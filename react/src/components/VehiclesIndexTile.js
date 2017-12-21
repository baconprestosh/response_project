import React from 'react';
import { Link } from 'react-router';

const VehiclesIndexTile = props => {

  return(
    <div className='vehicle-tile'>
      <Link to={`/vehicles/${props.id}`}><h6>Repair Order# {props.id}</h6></Link>
    </div>
  )
}

export default VehiclesIndexTile;
