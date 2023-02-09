import React from 'react'
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

const Experience = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className=" skill experience" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        <div className="skill-bx wow zoomIn">
                            <h2 className='my-5 mt-0'> Experience</h2>
                            <div className='Exp_list'>
                                <div className="col-8 ">
                                    <h4>Full Time Software Developer Intern</h4>
                                    <p >

                                        <h6 className='Role'>BITCS || Jan 2022 - Oct 2022 | 10 Months</h6>
                                        <br></br>
                                        I have worked on React and Nextjs for implementing Figma design,solving Bugs, Implementing functionality
                                        <br></br>
                                        Technology Used: Reactjs,Nextjs,Scss,
                                        Typescript,Gitlab,Figma,etc
                                    </p>
                                </div>
                                <div className="col-8 " >
                                    <h4 >Full Stack Developer Intern</h4>
                                    <p >
                                        <h6 className='Role'>KnockOnce | Dec 2021 - jan 2022 | 2 Months</h6><br></br>
                                        I have worked on building fullStack E-commerce kind of Application for saloon services. Implemented both FrontEnd in React and Backend in Express/Node
                                        <br></br>
                                        Technology Used: Reactjs,MongoDB,Express,css,
                                        Bootstrap,etc
                                    </p>
                                </div>

                                <div className="col-8 ">
                                    <h4>React Developer Intern</h4>
                                    <p >
                                        <h6 className='Role'>DigitalFlow | Jul 2021 - Oct 2022 | 3 Months</h6>
                                        <br></br>
                                        I have worked on React for implementing Figma design,solving Bugs, Implementing functionality,API Integration, Work Distribution
                                        <br></br>
                                        Technology Used: Reactjs,Figma,CSS,BootStrap,MaterialUI,etc
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Experience