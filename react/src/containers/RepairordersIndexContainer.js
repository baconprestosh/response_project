import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import RepairordersIndexTile from '../components/RepairordersIndexTile';
import RepairorderFormContainer from './RepairorderFormContainer';

class RepairordersIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repairorders: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRepairorders = this.getRepairorders.bind(this);
  }

  getRepairorders() {
    fetch('/api/v1/repairorders', {
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
       repairorders: body.repairorders
     });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getRepairorders();
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/repairorders/new');
  }

  render() {

    let repairorders = this.state.repairorders.map((repairorder) => {
      return(
        <RepairordersIndexTile
          key={repairorder.id}
          id={repairorder.id}
          bodyHours={repairorder.body_hours}
          paintHours={repairorder.paint_hours}
          reassemblyHours={repairorder.reassembly_hours}
        />
      )
    })

    let button = <Link to={`/repairorders/new`} className='custom-button' id='add-new-repairorder-button'>Create New Repair Order</Link>

    return(
      <div>
        <div>
          {repairorders}
        </div>
        <div>
          {button}
        </div>
      </div>
    )
  }
}
export default RepairordersIndexContainer;
