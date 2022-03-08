import React, { Component } from 'react';
import './InfoEntry.css'
import PersonalInfoForm from './Forms/PersonalInfoForm';
import ExperienceForm from './Forms/ExperienceForm';
import EducationForm from './Forms/EducationForm';
import uniqid from 'uniqid'


class InfoEntry extends Component {
    constructor(props) {
        super() 
        this.state = {
            educationChildren:[

            ],
            experienceChildren:[

            ]
        }
        this.addExperienceSection = this.addExperienceSection.bind(this)
        this.addEducationSection = this.addEducationSection.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteSection = this.deleteSection.bind(this)
        this.uniqid = uniqid
        this.educationChildren = []

    }

    addExperienceSection(e) {
        e.preventDefault()
        const uniqid = this.uniqid()
        const newArray = this.state.experienceChildren.concat(<ExperienceForm name='experienceChildren' key={uniqid} index={uniqid} addExperienceBtn={this.addExperienceSection}
        deleteSection={this.deleteSection} handleChange={this.props.handleChange}></ExperienceForm>)
        this.setState(
            {
                experienceChildren:newArray
            }
        )
    }

    addEducationSection(e) {
        e.preventDefault()
        const uniqid = this.uniqid()
        const newArray = this.state.educationChildren.concat(<EducationForm name='educationChildren' key={uniqid} index={uniqid} addEducationBtn={this.addEducationSection}
        deleteSection={this.deleteSection} handleChange={this.props.handleChange}></EducationForm>)
        this.setState(
            {
                educationChildren:newArray
            }
        )
    }

    deleteSection(e) {
        const targetArray = e.target.getAttribute('name')
        const targetIndex = e.target.getAttribute('index')
        const oldArray = this.state[targetArray].slice()
        const newArray = oldArray.filter(elem => elem.props.index !== targetIndex)
        this.setState({
                [targetArray]:newArray
        })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="infoForm">
                <PersonalInfoForm handleChange={this.props.handleChange}/>
                {this.state.experienceChildren}
                {this.state.educationChildren}
                <div className='buttons'>
                    <button className='button' onClick={this.addEducationSection}>Add Education Section</button>
                    <button className='button' onClick={this.addExperienceSection}>Add Experience Section</button>
                    <button className='button' onClick={this.props.generateFakeCV}>Generate a mock CV</button>
                </div>
            </form>
        )
    }
}

export default InfoEntry