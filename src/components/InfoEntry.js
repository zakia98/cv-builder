import React, { Component, useEffect, useState } from 'react';
import './InfoEntry.css'
import PersonalInfoForm from './Forms/PersonalInfoForm';
import ExperienceForm from './Forms/ExperienceForm';
import EducationForm from './Forms/EducationForm';
import uniqid from 'uniqid'


function InfoEntry(props) {
    const uniqidgen = uniqid
    const [experienceChildren, setExperienceChildren] = useState([])
    const [educationChildren, setEducationChildren] = useState([])

    const deleteSection = function(e) {
        e.preventDefault()
        const targetArray = e.target.getAttribute('name');
        const targetIndex = e.target.getAttribute('index');
        switch(targetArray) {
            case 'educationChildren':
                console.log(targetIndex)
                setEducationChildren(educationChildren => educationChildren.filter(elem => elem.props.index !== targetIndex));
                break
            case 'experienceChildren':
                setExperienceChildren(experienceChildren => experienceChildren.filter(elem => elem.props.index !== targetIndex))
                break
        }
    }

    const addExperienceSection = function(e) {
        e.preventDefault()
        const uniqid = uniqidgen()
        props.addExperienceObj(uniqid)
        const newItem = <ExperienceForm name='experienceChildren' key={uniqid} index={uniqid} addExperienceBtn={addExperienceSection}
        deleteSection={deleteSection} handleChange={props.handleChange}></ExperienceForm>
        setExperienceChildren(experienceChildren.concat(newItem))
    }

    const addEducationSection = function(e) {
        e.preventDefault()
        const uniqid = uniqidgen()
        props.addEducationObj(uniqid)
        const newItem = <EducationForm name='educationChildren' key={uniqid} index={uniqid} addEducationBtn={addEducationSection}
        deleteSection={deleteSection} handleChange={props.handleChange}></EducationForm>
        setEducationChildren(educationChildren.concat(newItem))
    }

    const handleSubmit = function(e) {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit} className="infoForm">
            <PersonalInfoForm handleChange={props.handleChange}/>
            {experienceChildren}
            {educationChildren}
            <div className='buttons'>
                <button className='button' onClick={addEducationSection}>Add Education Section</button>
                <button className='button' onClick={addExperienceSection}>Add Experience Section</button>
                <button className='button' onClick={props.generateFakeCV}>Generate a mock CV</button>
            </div>
        </form>
    )
}

export default InfoEntry