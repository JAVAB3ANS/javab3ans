import React from "react"; 
import { Document, Page } from "react-pdf"
 
export default class Resume  {    
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render () {  
    const { pageNumber, numPages } = this.state;

    return (  
      <div className="resume-root">
        <Document
          file="./jason-vu-resume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    ); 
  }
} 