import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TextField from '../components/TextField';
import NumberField from '../components/NumberField';


class RepairorderFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyHours: '',
      paintHours: '',
      reassemblyHours: ''
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

  addNewRepairorder(newRepairorder) {
    fetch('/api/v1/repairorders', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newRepairorder),
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
      browserHistory.push(`/repairorders`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateRepairorder(newRepairorder) {
    fetch(`/api/v1/repairorders/${this.props.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(newRepairorder),
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
      browserHistory.push(`/repairorders`);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    if(this.props.params.id){
      fetch(`/api/v1/repairorders/${this.props.params.id}`)
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
          bodyHours: body.body_hours,
          paintHours: body.paint_hours,
          reassemblyHours: body.reassembly_hours
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body_hours: this.state.bodyHours,
      paint_hours: this.state.paintHours,
      reassembly_hours: this.state.reassemblyHours
    };
    if(this.props.params.id){
      this.updateRepairorder(formPayload);
    } else {
      this.addNewRepairorder(formPayload);
    }
    this.handleClearForm(event);
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      bodyHours: '',
      paintHours: '',
      reassemblyHours: ''
    });
  }

  render() {
    return(
      <div className='repairorder-form'>
        <form className="new-repairorder-form callout" onSubmit={this.handleFormSubmit}>
          <div className='row'>
            <div className="six columns" id="whatever">
              <NumberField
                content={this.state.bodyHours}
                label="Body Hours*"
                name="bodyHours"
                onChange={this.handleChange}
              />
              <NumberField
                content={this.state.paintHours}
                label="Paint Hours*"
                name="paintHours"
                onChange={this.handleChange}
              />
              <NumberField
                content={this.state.reassemblyHours}
                label="Reassembly Hours*"
                name="reassemblyHours"
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
export default RepairorderFormContainer;
