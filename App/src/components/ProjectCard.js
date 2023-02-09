import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  // Navigate
  // const handelCLick = () => {
  //   return
  // }
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        {link ?
          <a style={{ textDecoration: "none", color: "white" }} rel="noreferrer" className="proj-txtx" href={link} target="_blank">
            <h4>{title}</h4>
            <span>{description}</span>
          </a> :
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        }
      </div>
    </Col>
  )
}
