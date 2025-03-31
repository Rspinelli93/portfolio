import React from 'react';
import Bootcamp from '../sections/Bootcamp';
import Contact from '../sections/Contact';
import Ecole42 from '../sections/Ecole42';
import Intro from '../sections/Intro';
import Hello from '../sections/Hello';
import AboutMe from '../sections/Aboutme';
import Interlude1 from '../sections/Interlude1'
import Interlude2 from '../sections/Interlude2'

const Home = () => {
    return (
        <div>
            <section id="hello">
                <Hello />
            </section>
            <section id="intro">
                <Intro />
            </section>
            <section id="bootcamp">
                <Bootcamp />
            </section>
            <section id="interlude1">
                <Interlude1 />
            </section>
            <section id="ecole42">
                <Ecole42 />
            </section>
            <section id="interlude2">
                <Interlude2 />
            </section>
            <section id="aboutme">
                <AboutMe />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Home;
