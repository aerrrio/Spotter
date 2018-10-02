import React, { Component, StyleSheet } from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p id="created-by">
          created by 
          <a className="link" href="http://aerrr.io" target="_window"> aerrr.io </a>
        </p>
      </div>
    );
  }
};

export default Footer;