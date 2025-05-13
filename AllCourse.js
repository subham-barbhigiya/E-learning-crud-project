
import React, { useState,useEffect } from "react";
import Course from './Course';

import base_url from "../Api/bootapi";
import axios from "axios";

// ----------------------------------------------------------------------------------------------------------
const AllCourse=()=>{

// ------------------------------------------title-----------------------------------------------------------
useEffect(()=>{
    document.title="AllCourses || Learn Code with Subham";
},[]);
// ----------------------------------------------------------------------------------------------------------


// -------------------------------------function to call server----------------------------------------------
const GetAllCourseFromServer= async()=>{

    try {
        const response = await axios.get(`${base_url}/getallcourse`);
        console.log(response); // Logs successful response
    } catch (error) {
        console.error("Error fetching courses:", error); // Logs error if request fails
    }
// calling lloding course function
useEffect(()=>{
    GetAllCourseFromServer();
},[]);

    // axios.get(`${base_url}/getallcourse`).then(
    //     (response)=>{
    //     console.log(response);
    // },
    // (error)=>{
    //     console.log(response);
    // }
    // );
};


// ----------------------------------------------------------------------------------------------------------
const[courses,setCourses]=useState([{title:"PHP",descreption:"this is using for UI"},
    {title:"JAVA",descreption:"this is using for DB"},
    {title:"SQL",descreption:"this is using for devlopment"},
    {title:"PYTHON",descreption:"this is using for testing"},
    {title:"SELENIUM",descreption:"this is using for test"},
    {title:"AUTOMATION",descreption:"this is using for auto_testing"},
    {title:"AWS",descreption:"this is using for clouding"}

])
// ------------------------------------------------------------------------------------------------------------
    return(
        <div> 
            <div className="text-center bg-primary my-2">
            <h3>VIEW ALL COURSES </h3>
            <p>List of all couraes as you follow .</p>
            </div>
            {
                courses.length>0?courses.map(
                    (item,)=><Course key={item.Id} course={item} />):"No courses"
            }
        </div>
    )
}
export default AllCourse;