import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from "graphql-tag";
import ClassNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

class Launch extends Component {

  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        {/* The "variables" property uses double "{}" because the value is an Object */}
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {
            ({ loading, error, data }) => {
              if(loading) return <h4>Loading...</h4>;
              if(error) return console.log(error);

              const { flight_number, mission_name, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

              return(
                <div className="container">
                  <h1 className="display-4 my-3">
                    <span className="text-dark">Mission:</span>{' '} { mission_name }
                  </h1>
                  <h4 className="mb-3">Launch Details</h4>
                  <ul className="list-group">
                    <li
                      className="list-group-item"
                      key={ flight_number }>
                      Flight Number: { flight_number }
                    </li>
                    <li
                      className="list-group-item"
                      key={ launch_year }>
                      Launch Year: { launch_year }
                    </li>
                    <li
                      className="list-group-item"
                      key={ launch_success }>
                      Launch Successful:{' '}
                      <span
                        className={ ClassNames({
                          'text-success': launch_success,
                          'text-danger': !launch_success
                        }) }>
                        { launch_success ? 'Yes' : 'No' }
                      </span>
                    </li>
                  </ul>
                  <h4 className="my-3">Rocket Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rocket ID: { rocket_id }
                    </li>
                    <li className="list-group-item">
                      Rocket Name: { rocket_name }
                    </li>
                    <li className="list-group-item">
                      Rocket Type: { rocket_type }
                    </li>
                  </ul>
                  <hr/>
                  <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
              )
            }
          }
        </Query>
      </Fragment>
    );
  }

}

export default Launch;
