import React,{ useState } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

export default function App() {
  const components =[<AboutMe/>, <Projects/>, <Contact/>, <Resume/>]
  const [page, setPage]= useState(components[0])
  return (
    <div className="App">
      <Header setPage= {setPage} components = {components}/>
      {page}
      <Footer/>
    </div>
     
    
  );
}

 