import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/git2.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a className="social_icon_a" href="https://www.linkedin.com/in/onkar-kotule-564608178/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
              <a className="social_icon_a github" href="https://github.com/onkar95" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a className="social_icon_a" href="https://www.instagram.com/onkar_95_/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
