import "../styles/hello.css";

const Hello = () => { 
    return (
    <div id="hello" className="section-div">
        <div className="hello__container">
            <h1 className="font-playfair"><span className="font-playfair-italic">Hello,</span> I am <span className="text-green">Riccardo</span>!</h1>
            <p className="fullstack">Full stack developer</p>
            <p className="in-the-making">(In the <span className="text-green">Making</span>)</p>
            <div className="scroll-container">
                <img className="arrow-left" src="src\assets\icons\arrow.png" alt="arrow" />
                <p className="know-me">Get to know me</p>
                <img className="arrow-right" src="src\assets\icons\arrow.png" alt="arrow" />
            </div>
        </div>
    </div>
    )
}
export default Hello;