import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBolt, faA, faClipboard, faFlask, faCogs, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faPython, faGoogle, faLinux, faGithub, faNodeJs, faJava, faJsSquare, faHtml5, faCss3, faVuejs, faReact, faPhp, faBootstrap, faFigma } from "@fortawesome/free-brands-svg-icons";

function Skills() {
    return ( 
        <div id="skills">
            <h2 className="heading"><FontAwesomeIcon icon={faClipboard} /> Skills</h2>
            <ul>
                <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3} />  CSS</li>
                <li><FontAwesomeIcon icon={faJsSquare} />  JavaScript</li> 
                <li><FontAwesomeIcon icon={faPython} /> Python</li>
                <li><FontAwesomeIcon icon={faPhp} /> PHP</li>   
                <li><FontAwesomeIcon icon={faJava} /> Java</li>
                <li><FontAwesomeIcon icon={faCoffee} /> C</li> 
                <li><FontAwesomeIcon icon={faBolt} /> Verilog</li>  
                <li><FontAwesomeIcon icon={faVuejs} /> Vue JS</li>
                <li><FontAwesomeIcon icon={faReact} /> React JS</li>
                <li><FontAwesomeIcon icon={faFlask} /> Flask</li>
                <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>  
                <li><FontAwesomeIcon icon={faNodeJs} /> Node JS</li> 
                <li><FontAwesomeIcon icon={faGithub} /> Git/GitHub</li> 
                <li><FontAwesomeIcon icon={faScrewdriverWrench} /> Selenium</li>
                <li><FontAwesomeIcon icon={faCogs} /> RESTful APIs</li> 
                <li><FontAwesomeIcon icon={faGithub} /> GitHub Actions</li>
                <li><FontAwesomeIcon icon={faGoogle} /> Google Cloud / App Engine</li>
                <li><FontAwesomeIcon icon={faLinux} /> Linux</li> 
                <li><FontAwesomeIcon icon={faA} /> Adobe Photoshop</li>
                <li><FontAwesomeIcon icon={faA} /> Adobe Illustrator</li>
                <li><FontAwesomeIcon icon={faA} /> Adobe InDesign</li>
                <li><FontAwesomeIcon icon={faFigma} /> Figma</li>
            </ul>
        </div> 
    )
}

export default Skills;