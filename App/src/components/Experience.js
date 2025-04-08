import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

const Experience = () => {

    // {
    //     title: "Full Time Software Developer Intern",
    //     info: "",
    //     desc: ""
    // },

    const experience = [
        {
            title: "Associate consultant",
            info: "Capgemini | July 2023 - current",
            desc: "Tech.: Mendix, Agile developement, Reactjs, Javascript, Azure cloud,etc"
        },
        {
            title: "Backend Developer",
            info: "CODEROOFS | FEB 2023 - MARCH 2023 | 2 months",
            desc: "Tech: Express, Postman, Nodejs, Embedded JavaScript, MongoDB, Reactjs."
        },
        {
            title: "Software Developer",
            info: "BITCS | Jan 2022 - Oct 2022 | 10 Months",
            desc: " Technology Used: Reactjs,Nextjs,Scss,Typescript,Gitlab,Figma,etc"
        },
        {
            title: "Full Stack Developer",
            info: "KnockOnce | Dec 2021 - jan 2022 | 2 Months",
            desc: "Technology Used: Reactjs,MongoDB,Express,css,Bootstrap,etc"
        },
        {
            title: "React Developer",
            info: "DigitalFlow | Jul 2021 - Oct 2022 | 4 Months",
            desc: "Technology Used: Reactjs,Figma,CSS,BootStrap,MaterialUI,etc"
        },
    ]
    return (
        <section className=" skill experience" id="experience">
            <div className="container">

                {/* <div className="row"> */}
                <div className="skill-bx wow zoomIn">

                    <h2 className='my-5 mt-0'> Experience</h2>
                    <div className='Exp_list'>

                        {
                            experience?.map((val, index) => (
                                <div >
                                    <h4>{val.title}</h4>
                                    <p >
                                        <h6 className='Role'>{val.info}
                                            <br></br>
                                            {val.desc}
                                        </h6>
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="backimgmage" />
        </section>
    )
}

export default Experience