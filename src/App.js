import './App.css';
import React, { Component } from 'react';
import InfoEntry from './components/InfoEntry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      personal:{},
      experience: {},
      education: {}
    }
    this.submitData = this.submitData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const value = e.target.value
    const details = {
      owner:e.target.parentElement.getAttribute('owner'),
      key:e.target.parentElement.getAttribute('index')
    };
    let newState
    switch(details.owner) {
      case 'personal':
        newState = Object.assign({}, this.state)
        newState.personal[e.target.name] = value
        this.setState({
          personal:newState.personal,
          experience:newState.experience,
          education:newState.education
        })
        break
      case 'experience':
        newState = Object.assign({}, this.state)
        if (newState.experience[details.key]) {
          newState.experience[details.key][e.target.name] = value
        }
        else {
          newState.experience[details.key] = {[e.target.name]:value}
        }
        this.setState({
          personal:newState.personal,
          experience:newState.experience,
          education:newState.education
        })
        break
      case 'education':
        newState = Object.assign({}, this.state)
        if (newState.education[details.key]) {
          newState.education[details.key][e.target.name] = value
        }
        else {
          newState.education[details.key] = {[e.target.name]:value}
        }
        this.setState({
          personal:newState.personal,
          experience:newState.experience,
          education:newState.education
        })
        break
    }
    console.log(this.state)

  }

  submitData() {
    console.log(this)
  }

  render() {

    const infoEntry = <InfoEntry className='form' submitData={this.submitData} handleChange={this.handleChange}/>
    return(
      <div className="app">
        <header className='appHeader'>CV Builder</header>
        {infoEntry}
      </div>
    )
  }
}
export default App;
