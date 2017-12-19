import React, { Component } from 'react';
import { Link } from 'react-router';
import VehicleShowTile from '../components/VehicleShowTile';

class VehicleShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
    };
  }

  getVehicle() {
    let vehicleId = this.props.params.id;

    fetch(`/api/v1/vehicles/${vehicleId}`)
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
       vehicle: body
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getVehicle();
  }

  render() {
    return(
      <div>
        <VehicleShowTile
          key={this.state.vehicle.id}
          id={this.state.vehicle.id}
          modelYear={this.state.vehicle.model_year}
          vehicleMake={this.state.vehicle.vehicle_make}
          vehicleModel={this.state.vehicle.vehicle_model}
        />
      </div>
    );
  }
}
export default VehicleShowContainer;
