import React from "react"   
import ReactPDF from "@react-pdf/renderer"

function PDF() {
    return (
        <ReactPDF
            file={{
                url: "./jason-vu-resume.pdf",
            }}
        />
    )
}

export default PDF;