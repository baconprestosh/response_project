import React from 'react';
import { Link } from 'react-router';
import BackButton from './components/BackButton';

const HeaderScreen = props =>{
  return(
    <div>
      <div>
        <BackButton />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default HeaderScreen;
