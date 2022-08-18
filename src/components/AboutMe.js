import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="heading"><FontAwesomeIcon icon={faUser} /> About Me</h2> 
                        </div>
                        <div className="col-md-8" id="about-desc">
                            <p>I'm a Web Design and Engineering major with interests in full-stack development, information technology, and human-computer interface design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default AboutMe; 