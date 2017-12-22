import React from 'react';
import { Link } from 'react-router';

const RepairorderShowTile = props => {

  return(
    <div className='ro-details'>
      <Link to={`/repairorders/${props.id}/edit`} className='custom-button edit-button'>Edit</Link>
      <h3>{props.body_hours} {props.paint_hours} {props.reassembly_hours}</h3>
      <h5>Assigned Employee(s): {props.first_name}</h5>
      <hr/>
    </div>
  )
}

export default RepairorderShowTile;
