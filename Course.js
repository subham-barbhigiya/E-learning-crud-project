import React from "react";

import { Container,Button, Card, CardBody, CardSubtitle, CardText } from "reactstrap";



 const Course = ({course}) =>{
    return(
        <Card className="text-center my-2">
            <CardBody>
                
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.descreption}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>

    )
 }
 export default Course;