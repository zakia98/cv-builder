import React, { Component } from 'react';

function PersonalInfoForm(props) {
    const index = null
    return(
        <div className='formSection' owner='personal' index={index}>
            <label>Personal Information</label>
            <input type='text' name='firstName' placeholder='First Name' onChange={props.handleChange} ></input>
            <input type='text' name='lastName' placeholder='Last Name' onChange={props.handleChange} ></input>
            <input type='text' name='title' placeholder='Title' onChange={props.handleChange} ></input>
            <input type='text' name='address' placeholder='Address' onChange={props.handleChange} ></input>
            <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={props.handleChange} ></input>
            <input type='text' name='email' placeholder='email' onChange={props.handleChange} ></input>
            <input type='text' name='description' placeholder='description' onChange={props.handleChange} ></input>
            <input type='file' name='image' accept="image/png, image/jpeg" onChange={props.handleChange}></input>
        </div >
    )
}

export default PersonalInfoForm