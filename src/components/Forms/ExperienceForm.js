import React, { Component } from 'react';


function ExperienceForm(props) {
    
    
    return(
        <div className='formSection' owner='experience' index={props.index}>
            <label>Experience</label>
            <input type='text' name='position' placeholder='Position'   onChange={props.handleChange}></input>
            <input type='text' name='company' placeholder='Company'  onChange={props.handleChange}></input>
            <input type='text' name='city' placeholder='City'  onChange={props.handleChange}></input>
            <input type='text' name='from' placeholder='From'  onChange={props.handleChange}></input>
            <input type='text' name='to' placeholder='To'  onChange={props.handleChange}></input>
            <textarea name='description' placeholder='Description of Role' onChange={props.handleChange} ></textarea>
            <button onClick={props.addExperienceBtn}  onChange={props.handleChange}>Add another</button>
            <button onClick={props.deleteSection}  name={props.name} index={props.index}>Delete</button>
        </div>
    )

}


export default ExperienceForm