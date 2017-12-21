import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TextField from '../components/TextField';

class TechnicianFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
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

  addNewTechnician(newTechnician) {
    fetch('/api/v1/technicians', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newTechnician),
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
      browserHistory.push(`/technicians`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateTechnician(newTechnician) {
    fetch(`/api/v1/technicians/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newTechnician),
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
      browserHistory.push(`/technicians`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    if(this.props.params.id){
      fetch(`/api/v1/technicians/${this.props.params.id}`)
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
          firstName: body.first_name,
          lastName: body.last_name
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      first_name: this.state.firstName,
      last_name: this.state.lastName
    };
    if(this.props.params.id){
      this.updateTechnician(formPayload);
    } else {
      this.addNewTechnician(formPayload);
    }
    this.handleClearForm(event);
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: ''
    });
  }

  render() {
    return(
      <div className='technician-form'>
        <form className="new-technician-form callout" onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <div className="six columns">
              <TextField
                content={this.state.firstName}
                label="First Name*"
                name="firstName"
                onChange={this.handleChange}
              />
              <TextField
                content={this.state.lastName}
                label="Last Name*"
                name="lastName"
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
export default TechnicianFormContainer;
