import React from 'react';

class NotFound extends React.Component {

  renderCardContent() {
    return (
      <div>
        <span className="card-title">Not Found</span>
        <p>This URL points to no available resource.</p>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              {this.renderCardContent()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
