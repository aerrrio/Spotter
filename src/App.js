import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import Header from './components/Header';
import Footer from './components/Footer';
import { Yelp } from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.Yelp = this.searchYelp.bind(this);
  }
  
  /* Seaches Yelp and supplies this.state.businesses with information */
  searchYelp(term, location, sortBy) {
    Yelp(term, location, sortBy).then(businesses => {
      this.setState ({ 
        businesses: businesses
      })
    });
  }

  render() {
    return (
      <div className="app">
        <Header>Spotter</Header>
        <SearchBar searchYelp={ this.searchYelp } />
        <BusinessList businesses={ this.state.businesses } />
        <p>Paragraph item. The quick fox jumped over the lazy dog.</p>
        <Footer />
      </div>
    );
  }
}

export default App;
