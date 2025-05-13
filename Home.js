import React, { useEffect } from "react"

import {jumbotron,Container,Button, CardBody} from "reactstrap"
// ------------------------------------------------------------------------------------------------------------------

const Home=()=>{
// -----------------------------------------------------------------------------------------------------------------
useEffect(()=>{
    document.title="Home || Learn Code with Subham";
},[]);




// ----------------------------------------------------------------------------------------------------------------
    return(
        <div>
            <jumbotron className="text-center my-2 ">
            <h1>Learn Code with Subham</h1>
            <p>Subham Kumar Qualified <strong>MCA</strong> From Princeton Pg College Of Information Technology </p>
            <p>Osmaniya University - Hyderabad</p>
                <Container>
                    <Button color ="primary my-2">Click-Me-More</Button>
                </Container>
            </jumbotron>

           
        </div>
    )
}
export default Home;
