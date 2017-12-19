import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import VehiclesIndexTile from '../components/VehiclesIndexTile';
import VehicleFormContainer from './VehicleFormContainer';

class VehiclesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getVehicles = this.getVehicles.bind(this);
  }

  getVehicles() {
    fetch('/api/v1/vehicles', {
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
       vehicles: body.vehicles
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getVehicles();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/vehicles/new');
  }

  render() {

    let vehicles = this.state.vehicles.map((vehicle) => {
      return(
        <VehiclesIndexTile
          key={vehicle.id}
          id={vehicle.id}
          modelYear={vehicle.model_year}
          vehicleMake={vehicle.vehicle_make}
          vehicleModel={vehicle.vehicle_model}
        />
      )
    })

    let button = <Link to={`/vehicles/new`} className='custom-button' id='add-new-vehicle-button'>Submit A New Vehicle</Link>

    return(
      <div>
        <div>
          {vehicles}
        </div>
        <div>
          {button}
        </div>
      </div>
    )
  }
}
export default VehiclesIndexContainer;
