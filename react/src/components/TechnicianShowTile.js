import React from 'react';
import { Link } from 'react-router';

const TechnicianShowTile = props => {

  return(
    <div className='tech-details'>
      <Link to={`/technicians/${props.id}/edit`} className='custom-button edit-button'>Edit</Link>
      <h3>{props.firstName} {props.lastName}</h3>
      <h5>Employee Id: {props.id}</h5>
      <hr/>
    </div>
  )
}

export default TechnicianShowTile;
