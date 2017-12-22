import React from 'react';
import { Link } from 'react-router';

const RepairordersIndexTile = props => {

  return(
    <div className='ro-tile'>
      <Link to={`/repairorders/${props.id}`}><h6>{props.id}</h6></Link>
    </div>
  )
}

export default RepairordersIndexTile;
