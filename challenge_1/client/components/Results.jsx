import React from 'react';
import SearchBar from './SearchBar';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      date: new Date()
    };
    this.parseData = this.parseData.bind(this)
  }

  parseData(data) {
    return data.map((record) => {
      return <div>{JSON.stringify(record)}</div>
    })
  }

  render() {
    if (this.props.data) {
      return (<div>{this.parseData(this.props.data)}</div>)
    } else {
      return (<div>loading</div>)
    }
  }
}

export default Results