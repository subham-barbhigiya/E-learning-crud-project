import React from "react";

import Home from "./Home";
import AddCourse from "./AddCourse";
import AllCourse from "./AllCourse";
import About from "./About";
import Contact from "./Contact";
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const MenuList=()=>{

    return(
    
        <ListGroup className="my-2">
        <ListGroupItem tag={Link} to="/" action>Home</ListGroupItem>
        <ListGroupItem tag={Link} to="/add-course" action>Add Course</ListGroupItem>
        <ListGroupItem tag={Link} to="/view-course" action>View Course</ListGroupItem>
        <ListGroupItem tag={Link} to="/about" action>About</ListGroupItem>
        <ListGroupItem tag={Link} to="contact" action>Contact</ListGroupItem>
        </ListGroup>
       
    );
};
export default MenuList;