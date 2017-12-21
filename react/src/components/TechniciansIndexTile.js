import React from 'react';
import { Link } from 'react-router';

const TechniciansIndexTile = props => {

  return(
    <div className='tech-tile'>
      <Link to={`/technicians/${props.id}`}><h6>{props.firstName}</h6></Link>
    </div>
  )
}

export default TechniciansIndexTile;
