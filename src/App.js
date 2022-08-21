import React from "react";
import './App.css';     
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import AboutMe from './components/AboutMe' ;
import Projects from './components/Projects';
import Skills from './components/Skills' ;
import Footer from './components/Footer' ;   
 
function App() {       
    return (  
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <HomeScreen />
        </div>
        <div>
          <AboutMe />
        </div>
        <div> 
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Footer />
        </div> 
      </div>
    );  
} 

export default App