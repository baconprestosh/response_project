import React, { Component } from 'react';
import { Link } from 'react-router';
import TechnicianShowTile from '../components/TechnicianShowTile';

class TechnicianShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technician: {},
    };
  }

  getTechnician() {
    let technicianId = this.props.params.id;

    fetch(`/api/v1/technicians/${technicianId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       technician: body
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getTechnician();
  }

  render() {
    return(
      <div>
        <TechnicianShowTile
          key={this.state.technician.id}
          id={this.state.technician.id}
          firstName={this.state.technician.first_name}
          lastName={this.state.technician.last_name}
        />
      </div>
    );
  }
}
export default TechnicianShowContainer;
