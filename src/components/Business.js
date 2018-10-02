import React, { Component } from 'react';

export class Business extends React.Component {
  render() {
    return (
      <div className="business-container">
        <div className="image-container">
          <img src={this.props.business.imageSRC} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="business-details">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.zipCode}</p>
            <h3>{console.log(this.props.business.name + " " + this.props.business.category)}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount}</p>
        </div>
      </div>
    );
  }
};