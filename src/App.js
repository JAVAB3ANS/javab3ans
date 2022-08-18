import React, { Component } from "react";
import './App.css';    
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import AboutMe from './components/AboutMe' ;
import Projects from './components/Projects';
import Skills from './components/Skills' ;
import Footer from './components/Footer' ;
 
export default class App extends Component {     
  render () {
    return (  
      <div className="App">    
        <Header />
        <HomeScreen />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer /> 
      </div>
    ); 
  }
} 