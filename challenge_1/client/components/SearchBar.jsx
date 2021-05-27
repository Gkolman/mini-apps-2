import React from 'react';
// import $ from 'jquery'

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search : '',
      date: new Date(),
    };
    this.updateSearchBar = this.updateSearchBar.bind(this);
  }

  updateSearchBar(e) {
    this.props.updateSearchBar(e.target.value)
  }

  render() {
    return (
    <div>
      <form>
        <input type="text" onChange={(e) =>{this.updateSearchBar(e)}}/>
      </form>
    </div>)
  }
}

export default SearchBar