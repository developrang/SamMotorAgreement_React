import React, { Component } from 'react';




class AddVendors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-people"></i> New Vendor
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Add Vendor</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default AddVendors;
