import Stack from "../layouts/BootcampStack";
import Skills from "../layouts/BootcampSkills";
import '../styles/bootcamp.css'

const Bootcamp = () => {    
    return (
        <div id="bootcamp" className="section-div-dotted-left">
            <div className="bootcamp-top">
                <h2 className="bootcamp-title">{"{ "}<span className="text-green">THE</span> {"BRIDGE }"}</h2>
                <p className="bootcamp-data"><span className="text-green">BOOTCAMP 2024 - 2025</span></p>
            </div>
            <div className="bootcamp-mid">
                <div className="bootcamp-text-container">
                    <p className="bootcamp-text">I completed an <span className="text-green">intensive</span> web development bootcamp at The Bridge Madrid, where the approach was all about learning by doing—figuring things out first, then improving with feedback. It pushed me to be <span className="text-green">resourceful</span>, think on my feet, and learn how to learn, which is key in tech.</p>
                    <p className="bootcamp-text">Through hands-on projects, I built a solid foundation in <span className="text-green">full-stack development</span>, working with modern technologies and developing the <span className="text-green">problem-solving mindset</span> needed to grow in the industry.</p>
                </div>
                <Stack />
            </div>
            <div className="bootcamp-bottom">
                <Skills />
            </div>
        </div>
    );
}

export default Bootcamp;