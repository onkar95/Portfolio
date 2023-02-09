import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

const Experience = () => {


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
            <img className="background-image-left" src={colorSharp} alt="backimgmage" />
        </section>
    )
}

export default Experience