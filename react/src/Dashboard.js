import React from 'react';
import { Link } from 'react-router';
import BackButton from './components/BackButton';
import { browserHistory } from 'react-router';

const Dashboard = props =>{
  return(
    <div>
      <div className="header-main">
        <h1 onClick={browserHistory.goBack}>Body Shop Scheduling Solutions</h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Dashboard;
