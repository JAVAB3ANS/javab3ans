import React, { Component } from "react"; 
import { Document } from 'react-pdf';
 
export default class Resume extends Component {     
  render () {
    return (  
      <div className="resume-root">
        <Document
          file={"./jason-vu-resume.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        />
      </div>
    ); 
  }
} 