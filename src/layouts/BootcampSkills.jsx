import '../styles/bootcampBoxes.css'

const Skills = () => {
    return (
        <div className="skills-box">
            <div className="studies-subtitle">
                <h4>/* <span className="text-green">BEYOND</span> THE CODE */</h4>
            </div>
            <div className="studies-qualifications">
                <ul className="skill-list">
                    <li className="skills-items">
                        <img src="src/assets/icons/github.png" alt="github_logo" />
                        <p>VERSION CONTROL</p>
                    </li>
                    <li className="skills-items">
                        <img src="src/assets/icons/code.png" alt="coding_brackets" />
                        <p>CLEAN CODE</p>
                    </li>
                    <li className="skills-items">
                        <img src="src/assets/icons/bug.png" alt="bug" />
                        <p>PROBLEM-SOLVING</p>
                    </li>
                    <li className="skills-items">
                        <img src="src/assets/icons/handshake.png" alt="handshake" />
                        <p>TEAMWORK</p>
                    </li>
                    <li className="skills-items">
                        <img src="src/assets/icons/checked.png" alt="tick" />
                        <p>CODE REVIEWS</p>
                    </li>
                    <li>
                        <a href="https://thebridge.tech/" target="_blank" rel="noopener noreferrer"><img src="src\assets\bridge_logo.png" alt="bridge_logo" /></a>
                        <img className="arrow-bootcamp" src="src\assets\icons\arrow.png" alt="arrow" />
                        <p className="visit">Visit the School</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills