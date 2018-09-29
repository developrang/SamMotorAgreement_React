import React, { Component } from 'react';

class DeleteAgreements extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-layers"></i> Delete Agreements
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Delete Agreements</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default DeleteAgreements;
