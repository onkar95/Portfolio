import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {


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
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="backmage" />
    </section>
  )
}
