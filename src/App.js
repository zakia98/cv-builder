import './App.css';
import React, { Component } from 'react';
import InfoEntry from './components/InfoEntry';
import Output from './components/Output.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      personal:{
        firstName: 'John',
        lastName:'Doe',
        title:'Mr.',
        address:'123 Fake Street',
        phoneNumber:'0771487928',
        email:'johndoe98@fakemail.com',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisi in auctor porta. Donec faucibus dui at neque sodales, vitae facilisis tortor bibendum. Vivamus dolor metus, venenatis vitae eleifend hendrerit, blandit at nunc. Mauris condimentum dolor id purus vulputate sodales. Suspendisse sed ullamcorper felis, et iaculis ligula. Nunc pellentesque, nisl vitae cursus finibus, ipsum libero viverra purus, sit amet tristique ex quam et nibh. Mauris euismod hendrerit nisi, in convallis nunc finibus ut Proin elementum, neque et rhoncus suscipit, purus sem tristique velit, non consequat lectus turpis sed justo. Ut ut magna augue. Nam tempor rutrum fringilla. Duis id.'
      },
      experience: {

      },
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
  }



  submitData() {

  }

  render() {

    const infoEntry = <InfoEntry className='form' submitData={this.submitData} handleChange={this.handleChange}/>
    const cvData =  Object.assign({}, this.state)
    return(
      <div className="app">
        <header className='appHeader'>CV Builder</header>
        {infoEntry}
        <Output cvData={cvData}></Output>
      </div>
    )
  }
}
export default App;
