import React, { Fragment, useEffect } from "react";
import { Button, Card, CardBody, Container, FormGroup, Input } from "reactstrap";


const AddCourse=()=>{
// --------------------------------------------------------------------------------------------------------------------
useEffect(()=>{
    document.title="AddCourse || Learn Code with Subham";
})






// ---------------------------------------------------------------------------------------------------------------------
    return(
        <Fragment>
            <Card className="text-center mt-1">
            <CardBody>
            <form> 
            <h2 className="text-center bg-warning">ADD NEW COURSE</h2>
            <FormGroup>
                <lable for="courseId"><strong>Course Id</strong></lable>
                <Input type="text" placeholder="Enter here" name="id" id="courseId"></Input>
            </FormGroup>

            <FormGroup>
                <lable for="title"><strong>Course Title</strong></lable>
                <Input type="text" placeholder="Enter title here" name="title" id="title"></Input>
            </FormGroup>

            <FormGroup>
                <lable for="descreption"><strong>Course Descreption</strong></lable>
                <Input type="textarea" placeholder="Enter descreption here" 
                name="descreption" id="descreption" style={{height:100}}></Input>
            </FormGroup>
            <Container>
            <Button color="success"outline><strong className="my-2"> Added </strong></Button>
            <Button  color="warning"outline><strong className="mt-4"> Clear </strong></Button>
            </Container>
        </form>
        </CardBody>
        </Card>
        
        </Fragment>
    )
}


export default AddCourse;
