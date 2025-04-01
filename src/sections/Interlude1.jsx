import '../styles/interlude.css'
const Interlude1 = () => {    
    return (
        <div id="interlude1" className="section-div-dotted-right">
            <div className="interlude1-container">
                <div className="interlude1-left">
                    <h2 className="interlude1-text"><span className='font-playfair-italic'>LEARNING</span></h2>
                    <img src="src\assets\coding1.jpg" alt="coding_img_1" />
                    <h2 className="interlude1-text"><span className='text-purple'>GROWING</span></h2>
                </div>
                <div className="interlude1-right">
                    <h2 className="interlude1-text"><span className='text-green'>BUILDING</span></h2>
                    <img src="src\assets\coding2.jpg" alt="coding_img_2" />
                    <h2 className="interlude1-text"><span className='font-playfair-italic '>EVERY DAY</span></h2>
                </div>
            </div>
            <div className="centered-box1" ></div>
        </div>
    );
}

export default Interlude1;