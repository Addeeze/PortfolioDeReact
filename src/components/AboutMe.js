import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Picture from "../assets/Images/Joel.png"
export default function AboutMe() {
    return (
      <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          
          <img
            style={{ height: "285px" }}
            src={Picture}
            class="float-left pr-4 pb-3 img-fluid"
            alt="Nicholas S. Veen"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Nick Veen, and i am a recent graduate from the UCI Bootcamp for
            full stack development. I am from Orange County California, and i hope to combine
            my knowledge of Finance with my new knowledge of web development in order to start
            a career in between my two professional careers.
          </p>
          <p style={{ fontSize: "27px",  textAlign: "center"}}>
            The languages and tech that I used and am familiar with are: 
            <ul >
                <li className= "technology-li">HTML/CSS</li>
                <li className= "technology-li">SQL and Sequelize</li>
                <li className= "technology-li">Javascript</li>
                <li className= "technology-li">Mongodb</li>
                <li className= "technology-li">Node.js</li>
                <li className= "technology-li">React.js</li>
            </ul>
          </p>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
    )
}