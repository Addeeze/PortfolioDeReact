import React from "react";
import {
  MDBNavbarBrand,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBIcon
} from "mdbreact";

export default function NavBar(props) {
  return (

    <MDBNavbar
      color=" grey darken-5"
      dark
      expand="md"
      style={{ width: "100%", height: "100px" }}

    >
      <MDBNavbarBrand />

      <strong style={{ fontSize: "30px" }} className="white-text">Nicholas S. Veen</strong>

      <MDBNavbarNav  right absolute>

        <MDBNavItem>
          <strong className="white-text">
            <ul className= "nav-ul">
              
              <li style={{ fontSize: "30px", marginRight: "30px", color: "blue"}} className= "nav-li" onClick={() => props.setPage(props.components[0])}>
                About Me
              </li>
              
              <li style={{ fontSize: "30px", marginRight: "30px", color: "Orange"}} className= "nav-li" onClick={() => props.setPage(props.components[1])}>
                Projects
              </li>
              
              <li style={{ fontSize: "30px", marginRight: "30px", color: "purple"}} className= "nav-li" onClick={() => props.setPage(props.components[2])}>
                Contact
              </li>
             
              
              <li style={{ fontSize: "30px", marginRight: "30px", color: "green"}} className= "nav-li" onClick={() => props.setPage(props.components[3])}>
                Resume
              </li>
            </ul>
          </strong>

        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  )
}
