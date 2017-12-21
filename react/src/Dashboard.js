import React from 'react';
import { Link } from 'react-router';
import BackButton from './components/BackButton';

const Dashboard = props =>{
  return(
    <div>
      <div>
        <h1><Link to={`/`} style={{ textDecoration: 'none', color: '#FFF' }}>Body Shop Scheduling Solutions</Link></h1>
      </div>
      <div>
        <BackButton />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Dashboard;
