import React, { Component } from 'react';

class AddVehicles extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-plane"></i> New Vehicle
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Add Vehicle</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default AddVehicles;
