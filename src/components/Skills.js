import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p> <h4>" MERN STACK " - Reactjs , Express, MongoDB, Node,</h4><br></br>
                <h4>Languages: Javascript, Java ,TypeScript </h4>  <br></br>
                <h4>Deployment: Heroku, Netlify,AWS </h4>  <br></br>
                <h4>Others: HTML/CSS, GIT-Github,Nestjs,Nextjs,React Native,etc</h4>
              </p>
              {/* Some Of My Key Skills are ..., */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>NodeJS/Express </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Nextjs</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React Native</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
