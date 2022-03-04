import React, { Component } from 'react';

class InfoEntry extends Component {
    constructor(props) {
        super() 


    }

    render() {
        return (
            <div>
                <form>
                    <label>Personal Information</label>
                    <input type='text' placeholder='First Name'></input>
                    <input type='text' placeholder='Last Name'></input>
                    <input type='text' placeholder='Title'></input>
                    <input type='text' placeholder='Address'></input>
                    <input type='text' placeholder='Phone Number'></input>
                    <input type='text' placeholder='email'></input>
                    <input type='text' placeholder='description'></input>
                </form>
                <form>
                    <label>Experience</label>
                    <input type='text' placeholder='Position'></input>
                    <input type='text' placeholder='Company'></input>
                    <input type='text' placeholder='City'></input>
                    <input type='text' placeholder='From'></input>
                    <input type='text' placeholder='To'></input>
                </form>
                <form>
                    <label>Education</label>
                    <input type='text' placeholder='University Name'></input>
                    <input type='text' placeholder='City'></input>
                    <input type='text' placeholder='Degree Subject'></input>
                    <input type='text' placeholder='From'></input>
                    <input type='text' placeholder='To'></input>
                </form>
            </div>
        )
    }
}

export default InfoEntry