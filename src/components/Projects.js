import React from "react";
import GitGoin from "../assets/Images/GitGoin.png";
import NRKGame from "../assets/Images/NRKGame.png";
import WorkDaySchedule from "../assets/Images/WorkDaySchedule.png";
import WeatherDashboard from "../assets/Images/WeatherDashboard.png";


import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,

} from "mdbreact"
export default function Projects() {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <img src={GitGoin} style={{ width: "485px" }} alt="GitGoin" top className="img-fluid" />
          <h4>GitGoin</h4>
          <MDBCardText>
            This is a browser based Crypto research website. It will allow you to compare real
            time prices and you can also add cryptos to your watchlist.
          </MDBCardText>
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={NRKGame} style={{ width: "485px" }} alt="NRKGame" top className="img-fluid" />
          <h4>NRKGame</h4>
          <MDBCardBody>
          <MDBCardText>
            This is a browser based game that you collect the watermelons without getting hit with 
            the bombs in order to get your score on the high score sheet.
          </MDBCardText>
          
          </MDBCardBody> 
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={WorkDaySchedule} style={{ width: "485px" }} alt="WorkdayScheduler" top className="img-fluid" />
          <h4>WorkDay Scheduler</h4>
          <MDBCardText>
            This application allows users to input daily activities in a work day calendar.
          </MDBCardText>
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={WeatherDashboard} style={{ width: "485px" }} alt="WeatherDashboard" top className="img-fluid" />
          <h4>WeatherDashboard</h4>
          <MDBCardText>
            This application allows users to see current weather from all over the world just by inputting a zip code
            or city.
          </MDBCardText>
        </MDBCard>
      </MDBCardGroup>

    </MDBContainer>

  )

}