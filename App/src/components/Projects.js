import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/projects/chatapp.png";
import projImg2 from "../assets/projects/E-commerce.png";
import projImg3 from "../assets/projects/Rentbike.png";

import ft1 from "../assets/projects/Frnt-gym.png";
import ft4 from "../assets/projects/gritchen.png";
import ft2 from "../assets/projects/openai.png";
import ft3 from "../assets/projects/youtubeCln.png";

import bk3 from "../assets/projects/BackBike.png";
import bk1 from "../assets/projects/backEcom.png";
import bk2 from "../assets/projects/BackSocial.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const FrontEnd = [
    {
      title: "EVO-GYM",
      description: "Landing Page",
      imgUrl: ft1,
      link: "https://evogym-landing-page.netlify.app"
    },
    {
      title: "OpenAI",
      description: "About OpenAI",
      imgUrl: ft2,
      link: "https://lighthearted-zabaione-18e64a.netlify.app"
    },
    {
      title: "My Media",
      description: "Youtube Clone ",
      imgUrl: ft3,
    },
    {
      title: "Gritchen",
      description: "Restuarant LandingPage",
      imgUrl: ft4,
      link: "https://amazing-halva-ec1b73.netlify.app/"
    }
  ];
  const Backend = [
    {
      title: "E-Commerce",
      description: "Server for E-commerce",
      imgUrl: bk1,
      link: "https://github.com/onkar95/MERN_E-com"


    },
    {
      title: "Social-Media server",
      description: "Nodejs/Express server for social media app",
      imgUrl: bk2,
      link: "https://github.com/onkar95/social-media-backend"

    },
    {
      title: "Rent-A-Bike",
      description: "Nodejs/Express server ",
      imgUrl: bk3,
      link: "https://github.com/onkar95/bike-Backend"

    }
  ];
  const fullStack = [
    {
      title: "Talke-Tive",
      description: "Chatting Application",
      imgUrl: projImg1,
      link: "https://main--glittery-horse-e41e99.netlify.app"

    },
    {
      title: "E-Commerce",
      description: "Online Store",
      imgUrl: projImg2,
      link: "https://main--scintillating-brigadeiros-f08220.netlify.app"

    },
    {
      title: "Rent-A-Bike",
      description: "Bike Rental Platform",
      imgUrl: projImg3,
      link: "https://github.com/onkar95/Bike-reservation-front/tree/updated-f"

    }
    // {
    //   title: "Chat-GPT Clone",
    //   description: "OpenAI ",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "AI-Image Generation",
    //   description: "OpenAI image api",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Majority of my work is based on MERN STACK I have completed many projects like Realtime-ChatAPP, E-Commerce Site,Social-Media,Bike-Rental platform,Blog Site, Various Landing Pages,Third Party API Integration like RapiAPI,etc   .</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Backend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            fullStack.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            FrontEnd?.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            Backend.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
