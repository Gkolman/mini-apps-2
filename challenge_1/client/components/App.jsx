import React from 'react';
import SearchBar from './SearchBar.jsx'
import Results from './Results.jsx'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      searchText: '',
      searchResults: null
    };
    this.updateText = this.updateText.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);

  }
  updateText(value) {
    console.log('value -> ', value)
    this.setState({searchText : value})
    this.getSearchResults(this.state.searchText)
  }
  getSearchResults(query) {
    $.ajax({
      url: `/events?_limit=10&q=${query}`,
      type: 'GET',
      success: (data) => {
        console.log('data from ajax -> ', data)
        this.setState({searchResults: data})
      },
      error: (err) => {console.log('error -> ', err)}
    })
  }
  render() {
    return (
    <div className="everything">
      <h1> Historical Events Finder</h1>
        <SearchBar updateSearchBar={this.updateText}/>
        <Results data={this.state.searchResults}/>
    </div>
    )
  }
}


export default App