import '../styles/contact.css'

const Contact = () => { 
    return (
    <div id="contact" className="section-div-dotted-right">
        <div className="contact-container">
            <div className="contact-left">
                <h3 className='contact-intro'>More than just <span className='text-purple'>good looks...</span></h3>
                <h2 className="contact-title"><span className="font-playfair">Ready to <span className="text-green">work together</span></span>?</h2>
                <ul className='contact-list'>
                    <li>
                        <img src="src\assets\icons\github.png" alt="github_logo" />
                        <a href="https://github.com/Rspinelli93" target="_blank">/rspinelli93</a>
                    </li>
                    <li>
                        <img src="src\assets\icons\linkedin.png" alt="linkedin_logo" />
                        <a href="www.linkedin.com/in/spinellir" target="_blank">/spinellir</a>
                    </li>
                    <li>
                        <img src="src\assets\icons\envelope.png" alt="envelope" />
                        <p>spinelli.rsr@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="contact-right">
                <img src="src\assets\not-just-a-happy-face.JPG" alt="pretty_face" />
            </div>
        </div>
    </div>
    )
}
export default Contact;