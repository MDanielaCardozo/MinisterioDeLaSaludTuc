import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import Logo from "../../img/logo-msp.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer">
      <div className="container">
        <Row className="">
          <Col>
            <Link to="/">
              <img
                alt="Logo gobierno de Tucumán"
                src={Logo}
                width="380px"
                className=""
              />
            </Link>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
