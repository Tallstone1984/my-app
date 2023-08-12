import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
      }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm ambitious and creative with an insatiable appetite for learning
                  and a deep passion for programming. From the intricate dance of code
                  to the thrill of solving complex problems, I find myself constantly 
                  immersed in the world of technology. I'm driven by the 
                  endless possibilities that programming offers.
                </p>
                <p>I thrive on challenges and view each coding conundrum as an 
                    opportunity to grow. My journey began with a single line 
                    of code, and since then, I've honed my skills through 
                    dedicated practice and continuous exploration. With a 
                    strong foundation in languages like Python and JavaScript, 
                    I'm always eager to embrace new languages and frameworks 
                    to expand my toolkit. Join me on this exciting venture 
                    as we transform imaginative ideas into tangible digital 
                    experiences.
                </p>
                <p>So, if you're seeking a passionate programmer who combines 
                    innovation with a tireless dedication to mastering the art 
                    of coding, you've come to the right place. Let's collaborate 
                    to bring your ideas to life, leveraging the power of technology 
                    to create solutions that inspire and captivate. Get in touch 
                    today, and let's embark on a journey to turn your visions into 
                    reality through the world of programming magic.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#fff" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About