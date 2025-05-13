import React, { useEffect } from "react";
import { Container } from "reactstrap";

function About() {

// -------------------------------------------------------------------------------------------------------
useEffect(()=>{
  document.title="About || Learn Code with Subham";
},[]);





// ------------------------------------------------------------------------------------------------------
  return (
    <>
    <Container className="mt-2">
      <h2 className="bg-success  text-center">About Us</h2>
      <p>
        Welcome to <strong>Learn Code With Subham</strong>, your go-to platform for learning!  
        Our application provides a seamless way to explore, add, and manage courses.
      </p>
      <h4> Think ? Why Choose Us ?</h4>
      <ul>
        <li>📚 Wide range of courses</li>
        <li>🖥️ User-friendly interface</li>
        <li>⏳ Track your learning progress</li>
        <li>💡 Learn at your own pace</li>
      </ul>
      <strong>FrontEnd</strong>
      <p>
        Built with FrontEnd as<strong> React, Reactstrap, React Router, React Axios, React Toastify </strong>, this app ensures smooth navigation and an engaging learning experience.
      </p>
      <strong>BackEnd</strong>
      <p>
        Built with Backend as<strong> Java, Spring & SpringBoot, MVC Architecture, Spring Data JPA(Hibernate ORM), Restful APIs, Database MySql(db-name :: E_learnin) </strong>, this app ensures smooth navigation and an engaging learning experience.
      </p>
    </Container>
    </>
  );
}

export default About;