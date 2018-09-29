import React, { Component } from 'react';

class DeleteVehicles extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-plane"></i> Delete Vehicles
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Delete Vehicles</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default DeleteVehicles;
