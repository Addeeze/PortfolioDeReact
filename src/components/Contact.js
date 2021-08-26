import React from "react";
import Picture from "../assets/Images/Me.JPG"
import 
{
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBIcon
} from "mdbreact";

export default function Contact() {
    return (
      <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>Contact Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src= {Picture}
            class="float-left pr-4 pb-3 img-fluid"
            alt="Nicholas S. Veen"
          />
  
  {/* <hr className="hr-light w-25" /> */}
        <h3 className= "contact-sec"> Phone Number</h3>
        {/* <hr className="hr-dark w-25" /> */}
        <a className= "contact-sec" href="tel:562.745.7070">
          <MDBIcon icon="phone-alt" /> 562-745-7070
        </a>
        {/* <hr className="hr-light w-25" /> */}
        <h3 className= "contact-sec" >E-mail</h3>
        {/* <hr className="hr-dark w-25" /> */}
        <a className= "contact-sec" href="mailto:nicholassveen@gmail.com">
          <MDBIcon icon="envelope" /> nicholassveen@gmail.com
        </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}