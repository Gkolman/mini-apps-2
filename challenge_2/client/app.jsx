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
        <h1> this is the client side  </h1>
        <Graph/>
      </div>
    )
  }
}

var root = document.getElementById('root');
ReactDOM.render(<App/>, root)

