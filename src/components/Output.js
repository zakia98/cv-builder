import './Output.css';
import React, { Component } from 'react';
import { capitalise } from '../helper';

class Output extends Component {
    constructor(props) {
        super(props)
        this.cvData = this.props.cvData
        
    }

    getName(personalInfo) {
        let name = capitalise(personalInfo.title) + ' ' 
            + capitalise(personalInfo.firstName) + ' '  + capitalise(personalInfo.lastName)
        return name
    }
    
    buildExperience() {
        const experienceChildrenArray = []
        const experienceData = this.cvData.experience
        const keys = Object.keys(experienceData)
        keys.forEach(key => {
            experienceChildrenArray.push(
                <div key={key}>
                    <h2>{`Position: ${experienceData[key].position || ''} `}</h2>
                    <h2>{`Company: ${experienceData[key].company || ''} `}</h2>
                    <h2>{`City: ${experienceData[key].city || ''} `}</h2>
                    <h2>{`To: ${experienceData[key].to || ''} `}</h2>
                    <h2>{`From: ${experienceData[key].from || ''} `}</h2>
                </div>
            )
        })

        return experienceChildrenArray
    }

    buildEducation() {
        const educationChildrenArray = [];
        const educationData = this.cvData.education
        const keys = Object.keys(educationData);
        keys.forEach(key => {
            educationChildrenArray.push(
                <div key={key}>
                    <h2>{`University: ${educationData[key].universityName}`}</h2>
                    <h2>{`City: ${educationData[key].city}`}</h2>
                    <h2>{`Degree Subject: ${educationData[key].degreeSubject}`}</h2>
                    <h2>{`From: ${educationData[key].from}`}</h2>
                    <h2>{`To: ${educationData[key].universityName}`}</h2>
                </div>
            )
        })
        universityName:'',
        city:'',
        degreeSubject:'',
        from:'',
        to:''
    }

    render() {
        const personalInfo = this.cvData.personal
        const headerInfo = {
            name: this.getName(personalInfo),
            phoneNumber: personalInfo.phoneNumber,
            address: personalInfo.address,
            email: personalInfo.email,
        }  

        const experienceSection = this.buildExperience();
        const educationSection = this.buildEduction();
        return(
            <div className='output'>
                <header className='header'>
                    <h1 className='fullName'>{headerInfo.name}</h1>
                    <h2 className='address'>{headerInfo.address}</h2>
                    <h3 className='phoneNumber'>{headerInfo.phoneNumber}</h3>
                    <h3 className='email'>{headerInfo.email}</h3>
                </header>
                <div className="experience">
                    Experience:
                    {experienceSection}
                </div>
                <div className='education'>
                    Education:
                    {educationSection}
                </div>
            </div>
        )
    }
}

export default Output