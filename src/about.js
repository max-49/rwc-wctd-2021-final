import anika from './anika.jpg'
import max from './max.jpg'
import chichi from './chichi.jpeg'

function About() {
    return (
        <div>
            <div className="parallaxbefore"></div>
            <div className="abouthome">
                <hr />
                <h1>Meet The Team</h1>
                <p><i>Meet the wonderful people who helped to make this idea a reality</i></p>
                <hr />
            </div>
            <div className="parallaxbefore"></div>
            <div className="header">
                    <img src={anika} height="300px" className="aboutimg" alt=""/>
                    <h3>Anika Mahesh</h3>
                    <p>Anika Mahesh, A website programmer and media specialist, built our blog page, managed our social presence, and led the process of designing our 3-Dimensional Prototype.</p>
            </div>
            <div className="parallax"></div>
            <div className="header">
                    <img src={max} height="300px" className="aboutimg" alt=""/>
                    <h3>Massimo Marino</h3>
                    <p>Massimo is a sophomore at John F. Kennedy High School. His main role in this project was bringing all parts of the website together into one website and managing design across the entire website. He led the process of designing the front page and making other look uniform</p>
            </div>
            <div className="parallax"></div>
            <div className="header">
                    <img src={chichi} className="aboutimg" height="300px" alt=""/>
                    <h3>Chigozirim Ifebi</h3>
                    <p>Chigozirim is a sophomore at Elmont Memorial High School. She partook in programming the webpage, more specifically  the "About us" page and the footer design. She also assisted with the company's graphic design as the illustrator of the company's logo.</p>
            </div>
        </div>
    )
}

export default About;