import React, { Component } from 'react';

class Vendors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-people"></i> All Vendors
          </div>
          <div className="card-body">
          <div className="row">             
              <div className="mb-4">
                <div className="text-success" >Vendors</div>                
              </div>                        
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Vendors;
