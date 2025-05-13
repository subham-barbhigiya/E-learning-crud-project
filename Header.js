

import react from "react";
import { Card, CardBody } from "reactstrap";


function Header (){
    return(
        <div>
            <Card className=" bg-primary">
                <CardBody >
                <h1 className="text-center my-0.5">E-Learning Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}
export default Header;