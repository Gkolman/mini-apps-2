import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : Date.now()
    }
  }

  render() {
    return (
      <div>
        <h1 style={{'text-align':'center'}}> price points for bitcoin over the last 30 days </h1>
        <Graph/>
      </div>
    )
  }
}

var root = document.getElementById('root');
ReactDOM.render(<App/>, root)

