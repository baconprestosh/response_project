import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import TechniciansIndexTile from '../components/TechniciansIndexTile';
import TechnicianFormContainer from './TechnicianFormContainer';

class TechniciansIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technicians: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getTechnicians = this.getTechnicians.bind(this);
  }

  getTechnicians() {
    fetch('/api/v1/technicians', {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       technicians: body.technicians
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getTechnicians();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/technicians/new');
  }

  render() {

    let technicians = this.state.technicians.map((technician) => {
      return(
        <TechniciansIndexTile
          key={technician.id}
          id={technician.id}
          firstName={technician.first_name}
          lastName={technician.last_name}
        />
      )
    })

    let button = <Link to={`/technicians/new`} className='custom-button' id='add-new-technician-button'>Add A New Tech</Link>

    return(
      <div>
        <div>
          {technicians}
        </div>
        <div>
          {button}
        </div>
      </div>
    )
  }
}
export default TechniciansIndexContainer;
