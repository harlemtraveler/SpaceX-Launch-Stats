import React from 'react';

export default function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success  }
}) {
  return(
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: { mission_name }</h4>
          <p>Date: { launch_date_local }</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">
            Launch Details
          </button>
        </div>
      </div>
    </div>
  )
};

// <h4>{ flight_number }:</h4>
// <p>{ mission_name }</p>
// <p>{ launch_date_local }</p>
// <p>{ launch_success }</p>
