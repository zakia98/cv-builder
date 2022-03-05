import React, { Component } from 'react';

class PersonalInfoForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName:'',
            title:'',
            address:'',
            phoneNumber:'',
            email:'',
            description:''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault()
        const value = e.target.value
        this.setState({
            [e.target.name]:value
        })
        console.log(this.state)
    }

    render() {

        const index = null
        return(
            <div className='formSection' owner='personal' index={index}>
                <label>Personal Information</label>
                <input type='text' name='firstName' placeholder='First Name' onChange={this.props.handleChange} ></input>
                <input type='text' name='lastName' placeholder='Last Name' onChange={this.props.handleChange} ></input>
                <input type='text' name='title' placeholder='Title' onChange={this.props.handleChange} ></input>
                <input type='text' name='address' placeholder='Address' onChange={this.props.handleChange} ></input>
                <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={this.props.handleChange} ></input>
                <input type='text' name='email' placeholder='email' onChange={this.props.handleChange} ></input>
                <input type='text' name='description' placeholder='description' onChange={this.props.handleChange} ></input>
                <input type='file' name='firstName' accept="image/png, image/jpeg" ></input>
            </div >
        )
    }
}

export default PersonalInfoForm