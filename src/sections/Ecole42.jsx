import '../styles/ecole42.css'

const Ecole42 = () => { 
    return (
    <div id="ecole42" className="section-div-dotted-left">
        <div className="ecole42-container">
            <h2 className="ecole42-title">{"{ ECOLE"}<span className="text-green">42</span> {" }"}</h2>
            <div className="ecole42-top">
                <h3 className="ecole42-subtitle">SHARPENING MY <span className='text-green'>SKILLS</span> IN A <span className='text-green'>UNIQUE</span> ENVIRONMENT</h3>
                <img src="src\assets\ecole42_logo.png" alt="ecole42_logo" />
            </div>
            <div className="ecole42-middle">
                <p className="ecole42-text">
                    Next up on my journey is Ecole 
                    <span className="text-purple"> 42 Lausanne</span> – 
                    a game-changing coding school with no teachers, 
                    no lectures, and no set courses. The focus is on 
                    learning by doing, collaborating with peers, 
                    and tackling real-world challenges. It's all about building 
                    <span className="text-green"> independence, adaptability, 
                    and problem-solving</span> skills in a truly hands-on 
                    environment.</p>
                <img src="src\assets\campus42.jpeg" alt="ecole42_campus" />
            </div>
            <div className="ecole42-bottom">
                <img src="src\assets\blackhole.png" alt="ecole42_black_hole" />
                <p className="ecole42-text">
                    I'll be working on some really exciting projects, 
                    allowing me to sharpen 
                    my <span className="text-green">problem-solving </span>and 
                    development skills while collaborating with a team. 
                    It's going to be a valuable, hands-on 
                    <span className="text-green"> experience </span>
                    that will push me to grow and prepare for the 
                    challenges the industry has in store!</p>
            </div>
        </div>
    </div>
    )
}
export default Ecole42;