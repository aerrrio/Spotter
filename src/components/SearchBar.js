import React, { Component } from 'react';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rating': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component  {
  constructor(props) {
    super(props); 
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange} key={sortByOptionValue}>
        {sortByOption}
      </li>;
    });
  }

  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption.target.value });
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSearch(e) {
    if(this.state.term == '' || this.state.location == '') {
      console.log("Please fill in search paremeters.");
    } else {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault(); 
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input placeholder="I'm looking for..." onChange={ this.handleTermChange } />
        <input placeholder="Near..." onChange={ this.handleLocationChange } />
        <div className="search-bar-submit" onClick={ this.handleSearch }>
          <a>Search</a>
        </div>
      </div>
    );
  };
}

export default SearchBar;

/*

        <ul>
          {this.renderSortByOptions()}
        </ul>

*/