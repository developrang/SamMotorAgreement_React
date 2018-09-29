import React, { Component } from 'react';

class Vehicles extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-plane"></i> All Vehicles
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Vehicles</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Vehicles;
