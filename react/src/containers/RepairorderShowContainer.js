import React, { Component } from 'react';
import { Link } from 'react-router';
import RepairorderShowTile from '../components/RepairorderShowTile';

class RepairorderShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repairorder: {},
    };
  }

  getRepairorder() {
    let repairOrderId = this.props.params.id;

    fetch(`/api/v1/technicians/${repairOrderId}`)
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
       repairorder: body
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getRepairorder();
  }

  render() {
    return(
      <div>
        <RepairorderShowTile
          key={this.state.repairorder.id}
          id={this.state.repairorder.id}
          bodyHours={this.state.repairorder.body_hours}
          paintHours={this.state.repairorder.paint_hours}
          reassemblyHours={this.state.repairorder.reassembly_hours}
        />
      </div>
    );
  }
}
export default RepairorderShowContainer;
