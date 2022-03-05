import React, { Component } from 'react';

class ExperienceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position:'',
            company:'',
            city:'',
            from:'',
            to:''
        }

        
    }

    

    render() {
        return(
            <div className='formSection' owner='experience' index={this.props.index}>
                <label>Experience</label>
                <input type='text' name='position' placeholder='Position'   onChange={this.props.handleChange}></input>
                <input type='text' name='company' placeholder='Company'  onChange={this.props.handleChange}></input>
                <input type='text' name='city' placeholder='City'  onChange={this.props.handleChange}></input>
                <input type='text' name='from' placeholder='From'  onChange={this.props.handleChange}></input>
                <input type='text' name='to' placeholder='To'  onChange={this.props.handleChange}></input>
                <button onClick={this.props.addExperienceBtn}  onChange={this.props.handleChange}>Add</button>
                <button onClick={this.props.deleteSection}  name={this.props.name} index={this.props.index}>Delete</button>
            </div>
        )
    }
}

export default ExperienceForm