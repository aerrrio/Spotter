import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
        <h1 id="app-title">{this.props.children}</h1>
    );
  }
};

export default Header;