import React, { Component } from 'react';

class DeleteVendors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-people"></i> Delete Vendors
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Delete Vendors</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default DeleteVendors;
