import React from 'react';
import './Course.css';
const Course = (props) => {
    const {name,course_details,price,credit_hour,image}=props.course;
    return (
        <div className='course-item-container'>
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <p>{course_details}</p>
            <div>
                <h4>Price: {price}</h4>
                <h4>Credit: {credit_hour}hr</h4>
            </div>
            <button onClick={()=>{props.handleCart(props.course)}}>Add</button>
        </div>
    );
};

export default Course;