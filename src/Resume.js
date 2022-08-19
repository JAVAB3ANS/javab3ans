import React, { Component, useState } from "react"; 
import { Document, pdfjs } from 'react-pdf';
 
export default class Resume extends Component {     
  render () {
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [setNumPages] = useState(null);
    const [setPageNumber] = useState(1); 
      
    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }

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