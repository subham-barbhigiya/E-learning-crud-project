
import React, { useEffect } from "react";
import { Container } from "reactstrap";

function Contact() {
// ------------------------------------------------------------------------------------------------------------------
useEffect(()=>{
  document.title="Contact || Learn Code with Subham";
});






// ------------------------------------------------------------------------------------------------------------------

 return (
    <>
    <Container className="mt-2">
      <h2 className="bg-danger text-center">Contact Us</h2>
      <p>Hi Frinds You Wants to contact me please email me your query ! </p>
      <h5>📧 Email</h5>
      <p>subhambarbhigiya@gmail.com</p>
      <h5>📞 Phone</h5>
      <p>+91 7061344723</p>
      <h5>📍  Permanent Address</h5>
      <p>Near-BSNL Telephone Exchange </p>
      <p>Janakpur Manpur Gaya Bihar 823003 </p>

    </Container>
    </>
  );
}

export default Contact;
