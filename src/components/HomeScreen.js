import React from "react" 
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCopy } from '@fortawesome/free-solid-svg-icons'

function HomeScreen() {
    return (
        <>
            <div id="lead">
                <div id="lead-content">
                <h1>Jason Vu</h1>
                <h2>Aspiring Software Developer</h2><a aria-label="resume" draggable="false" href="https://javab3ans.github.io/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-rounded-white"><FontAwesomeIcon icon={faCopy}/> My Résumé!</a>
                </div>
                <div id="lead-overlay"></div>
                <div id="lead-down"> 
                    <Link rel="nofollow" to="about" spy={true} smooth={true}><span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                </div> 
            </div>
        </>
    ) 
}

export default HomeScreen;