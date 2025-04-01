import { motion } from "framer-motion";
import "../styles/hello.css";

const Hello = () => {
    return (
        <div id="hello" className="section-div">
            <div className="hello-container">
                <motion.h1 
                    className="font-playfair"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-playfair-italic">Hello,</span> I am <span className="text-green">Riccardo</span>!
                </motion.h1>
                <motion.p 
                    className="fullstack"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Full stack developer
                </motion.p>
                <motion.p 
                    className="in-the-making"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    (In the <span className="text-green">Making</span>)
                </motion.p>
                <div className="scroll-container">
                    <img className="arrow-left" src="src\assets\icons\arrow.png" alt="arrow" />
                    <motion.p 
                        className="know-me"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Get to know me
                    </motion.p>
                    <img className="arrow-right" src="src\assets\icons\arrow.png" alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default Hello;