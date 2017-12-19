import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TextField from '../components/TextField';

class VehicleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelYear: '',
      vehicleMake: '',
      vehicleModel: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let newKey = event.target.name;
    let newValue = event.target.value;
    this.setState({
      [newKey]: newValue
    });
  }

  addNewVehicle(newVehicle) {
    fetch('/api/v1/vehicles', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newVehicle),
      headers: {'Content-Type': 'application/json'}
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
      browserHistory.push(`/vehicles`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateVehicle(newVehicle) {
    fetch(`/api/v1/vehicles/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newVehicle),
      headers: {'Content-Type': 'application/json'}
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
      browserHistory.push(`/vehicles`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    if(this.props.params.id){
      fetch(`/api/v1/vehicles/${this.props.params.id}`)
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
          modelYear: body.model_year,
          vehicleMake: body.vehicle_make,
          vehicleModel: body.vehicle_model
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      model_year: this.state.modelYear,
      vehicle_make: this.state.vehicleMake,
      vehicle_model: this.state.vehicleModel
    };
    if(this.props.params.id){
      this.updateVehicle(formPayload);
    } else {
      this.addNewVehicle(formPayload);
    }
    this.handleClearForm(event);
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      modelYear: '',
      vehicleMake: '',
      vehicleModel: ''
    });
  }

  render() {
    return(
      <div className='vehicle-form'>
        <form className="new-vehicle-form callout" onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <div className="six columns">
              <TextField
                content={this.state.modelYear}
                label="Vehicle Year*"
                name="modelYear"
                onChange={this.handleChange}
              />
              <TextField
                content={this.state.vehicleMake}
                label="Make*"
                name="vehicleMake"
                onChange={this.handleChange}
              />
              <TextField
                content={this.state.vehicleModel}
                label="Model*"
                name="vehicleModel"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="button-group row">
            <button className="custom-button" onClick={this.handleClearForm} >Clear</button>
            <input className="custom-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
export default VehicleFormContainer;
