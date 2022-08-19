import React from "react"   
import ReactPDF from "@react-pdf/renderer"

function Resume() {
    return (
        <ReactPDF
            file={{
                url: "./jason-vu-resume.pdf",
            }}
        />
    )
}

export default Resume;