import React, { Component } from 'react';

class EducationForm extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            universityName:'',
            city:'',
            degreeSubject:'',
            from:'',
            to:''
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
        return(
            <div className='formSection' owner='education' index={this.props.index}>
                <label>Education</label>
                <input type='text' name='universityName' placeholder='University Name'  onChange={this.props.handleChange}></input>
                <input type='text' name='city' placeholder='City' onChange={this.props.handleChange} ></input>
                <input type='text' name='degreeSubject' placeholder='Degree Subject' onChange={this.props.handleChange} ></input>
                <input type='text' name='from' placeholder='From' onChange={this.props.handleChange} ></input>
                <input type='text' name='to'placeholder='To' onChange={this.props.handleChange} ></input>
                <button onClick={this.props.addEducationBtn} >Add a section</button>
                <button name={this.props.name} index={this.props.index} onClick={this.props.deleteSection} >Delete</button>
            </div>
        )
    }
}

export default EducationForm