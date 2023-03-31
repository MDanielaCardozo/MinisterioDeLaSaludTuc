import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import Logo from "../../img/logo-msp.png";
import Contacto from "../../img/footerCel.png";
import Telef from "../../img/footerTel.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer">
      <div className="container p-5">
        <Row className="d-flex flex-wrap ">
          <Col sm={12} md={12} lg={4} className="d-flex justify-content-center pt-3 border-end-lg footerCol border-end">
            <Link to="/">
              <img
                alt="Logo gobierno de Tucumán"
                src={Logo}
                width="380px"
                className="logoFooter"
              />
            </Link>
          </Col>
          <Col sm={12} md={12} lg={4} className="d-flex justify-content-center border-end">
          <Link to="/">
              <img
                alt="Logo gobierno de Tucumán"
                src={Contacto}
                width="320px"
                className="footerColDos"
              />
            </Link></Col>
          <Col sm={12} md={12} lg={4} className="d-flex justify-content-center">
          <Link to="/">
              <img
                alt="Logo gobierno de Tucumán"
                src={Telef}
                width="270px"
                className="footerColTres"
              />
            </Link></Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
