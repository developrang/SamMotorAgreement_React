import React, { Component } from 'react';

class AddAgreements extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-layers"></i> New Agreement
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Add Agreement</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default AddAgreements;
