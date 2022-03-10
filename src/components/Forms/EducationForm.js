import React, { Component } from 'react';

function EducationForm(props) {

    return(
        <div className='formSection' owner='education' index={props.index}>
            <label>Education</label>
            <input type='text' name='universityName' placeholder='University Name'  onChange={props.handleChange}></input>
            <input type='text' name='city' placeholder='City' onChange={props.handleChange} ></input>
            <input type='text' name='degreeSubject' placeholder='Degree Subject' onChange={props.handleChange} ></input>
            <input type='text' name='from' placeholder='From' onChange={props.handleChange} ></input>
            <input type='text' name='to'placeholder='To' onChange={props.handleChange} ></input>                
            <button onClick={props.addEducationBtn} >Add another</button>
            <button name={props.name} index={props.index} onClick={props.deleteSection} >Delete</button>
        </div>
    )

}


export default EducationForm