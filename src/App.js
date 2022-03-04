import './App.css';
import React, { Component } from 'react';
import InfoEntry from './components/InfoEntry';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <InfoEntry/>
      </div>
    )
  }
}
export default App;
