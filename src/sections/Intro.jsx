import '../styles/intro.css';

const Intro = () => { 
    return (
    <div id="intro" className="section-div-dotted-right">
        <div className="intro__container">
            <div className="intro__title-container">
                <h2 className="intro__title">A BRIEF</h2>
                <h2 className="intro__title"> {"<"}<span className='text-green'>INTRO</span>/<span className='text-green'>{">"}</span></h2>
            </div>
            <div className='intro__bottom'>
                <p className="intro__description">I am based in <span className='text-green'>Geneva</span>, Switzerland. I studied full-stack web development and am continuing my studies in computer science while seeking my <span className='text-green'>first role</span> as I transition into the <span className='text-green'>tech</span> business.</p>
                <img className="rick-image" src="src\assets\rick.png" alt="me" />
            </div>
        </div>
    </div>
    )
}
export default Intro;

