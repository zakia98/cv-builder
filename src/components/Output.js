import './Output.css';
import React, { Component, useEffect } from 'react';
import { capitalise } from '../helper';

function Output(props) {
    
    const personalInfo = props.cvData.personal
    const getName = function(personalInfo) {
        let name = capitalise(personalInfo.title) + ' ' 
            + capitalise(personalInfo.firstName) + ' '  + capitalise(personalInfo.lastName)
        return name
    }
    const headerInfo = {
        name: getName(personalInfo),
        phoneNumber: personalInfo.phoneNumber,
        address: personalInfo.address,
        email: personalInfo.email,
        description:personalInfo.description
    }  

    const buildExperience = function() {
        const experienceChildrenArray = []
        const experienceData = props.cvData.experience
        const keys = Object.keys(experienceData)
        keys.forEach(key => {
            experienceChildrenArray.push(
                <div key={key} className='item'>
                    <div className='main'>
                        <h2>{`Position: ${experienceData[key].position || ''} `}</h2>
                        <p>{`Company: ${experienceData[key].company || ''} `}</p>
                        <p>{`City: ${experienceData[key].city || ''} `}</p>
                        <p>{experienceData[key].description}</p>
                    </div>
                    <div className='side'>
                        <p>{`To: ${experienceData[key].to || ''} `}</p>
                        <p>{`From: ${experienceData[key].from || ''} `}</p>
                    </div>
                </div>
            )
        })

        return experienceChildrenArray
    }

    const buildEducation = function() {
        const educationChildrenArray = [];
        const educationData = props.cvData.education
        const keys = Object.keys(educationData);
        keys.forEach(key => {
            educationChildrenArray.push(
                <div key={key} className='item'>
                    <div className='main'>
                        <h2>{`University: ${educationData[key].universityName}`}</h2>
                        <p>{`City: ${educationData[key].city}`}</p>
                        <p>{`Degree Subject: ${educationData[key].degreeSubject}`}</p>
                    </div>
                    <div className='side'>
                        <p>{`From: ${educationData[key].from}`}</p>
                        <p>{`From: ${educationData[key].from}`}</p>
                    </div>
                </div>
            )
        })
        return educationChildrenArray
    }

    const experienceSection = buildExperience();
    const educationSection = buildEducation();
    
    return(
        <div className='output'>
            <header className='header'>
                <h1 className='fullName'>{headerInfo.name}</h1>
                <div className='contact-info'>
                    <h2 className='address'>Address: {headerInfo.address}</h2>
                    <h3 className='phoneNumber'>Phone Number: {headerInfo.phoneNumber}</h3>
                    <h3 className='email'>Email: {headerInfo.email}</h3>
                </div>
            </header>
            <p className="description">{headerInfo.description}</p>
            <div className="section experience">
                Experience:
                {experienceSection}
            </div>
            <div className='section education'>
                Education:
                {educationSection}
            </div>
        </div>

    )
}

export default Output