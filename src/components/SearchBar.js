import React, { Component } from 'react';

class SearchBar extends React.Component  {
  constructor(props) {
    super(props); 
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
      error: ''
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSearch(e) {
    if(this.state.term == '' || this.state.location == '') {
      this.setState({error: 'Please fill in both fields.'});
    } else {
      this.setState({error: ''});
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault(); 
    }
  }

  handleEnterKey(e) {
    if(e.key === 'Enter') {
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div className="search-bar-container">
        <span className="search-bar-fields">
          <input 
            placeholder="I'm looking for..." 
            onChange={ this.handleTermChange }
            onKeyPress={ this.handleEnterKey } />
          <input 
            placeholder="Near..." 
            onChange={ this.handleLocationChange }
            onKeyPress={ this.handleEnterKey } 
            />
          <span 
            className="search-bar-submit" 
            onClick={ this.handleSearch }>
              <a>Search</a>
          </span>
          <span id="error">{" " + this.state.error}</span>
        </span>
      </div>
    );
  };
}

export default SearchBar;