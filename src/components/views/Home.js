import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faSuitcaseMedical,
  faHouseMedical,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Vac from "../../img/vcunartuc.jpeg";
import TucSal from "../../img/tucsalud.jpeg";
import Lab from "../../img/boton-nota-laboratorio-dengue-y-covid.jpg";
import IndAt from "../../img/indicad.jpeg";
import MapNut from "../../img/mapaEf.jpeg";
import Immca from "../../img/Immca.png";
import NodRs from "../../img/nodoRosa.jpeg";
import Deng from "../../img/dengue.jpeg";
import BolDig from "../../img/boletaDig.jpeg";
import CanCap from "../../img/canalCap.jpeg";
import SalSit from "../../img/salaSituac.jpeg";
import RegElec from "../../img/registroElect.jpeg";
import ResMed from "../../img/residMedic.jpeg";
import EstSal from "../../img/estrategSalud.jpeg";
import RecGraf from "../../img/recursosGraf.jpeg";

const Home = () => {
  return (
    <main className="backG">
      <section className="carousel">
        <Carousel>
          <Carousel.Item className="portadaUno">
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className="portadaDos">
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className="portadaTres">
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="container-fluid d-flex align-items-end flex-column  iconoRedes">
       <div className="bgIconosRed me-lg-4">
       <div className=" iconoRed my-5">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-2 text-light"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <div className="iconoRed mb-5">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-2 text-light"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="iconoRed mb-5">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-2 text-light"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
       </div>
      </section>
      <section className="iconos my-5">
        <div className="container text-center">
          <Row className="d-flex flex-wrap">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center my-3"
            >
              <div className="">
                <Link to={"/hospitales"}>
                  <div className="iconoBg rounded-5 fa-7x text-center text-success">
                    <FontAwesomeIcon icon={faHospital} />
                  </div>
                </Link>
                <div className="btnHosp">
                  <Link to={"/hospitales"} className="btn text-white">
                    <p className="h6 mt-1">HOSPITALES</p>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center my-3"
            >
              <div>
                <Link to={"/informacionSanitaria"}>
                  <div className="iconoBg rounded-5 fa-7x text-center text-info">
                    <FontAwesomeIcon icon={faUserDoctor} />
                  </div>
                </Link>
                <div className="btnSanit">
                  <Link to={"/informacionSanitaria"} className="text-white btn">
                    <p className="h6">INFORMACION SANITARIA</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center my-3"
            >
              <div>
                <Link to={"/direcciones/direccionGeneralProgramaIntegradoDeSalud"}>
                  <div className="iconoBg rounded-5 fa-7x text-center text-danger">
                    <FontAwesomeIcon icon={faSuitcaseMedical} />
                  </div>
                </Link>
                <div className="btnProg">
                  <Link to={"/programaDeSalud"} className="text-white btn">
                    <p className="h6">PROGRAMA DE SALUD</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center my-3"
            >
              <div>
                <Link to={"/centrosSanitarios"}>
                  <div className="iconoBg rounded-5 fa-7x text-center text-warning">
                    <FontAwesomeIcon icon={faHouseMedical} />
                  </div>
                </Link>
                <div className="btnCent">
                  <Link to={"/centrosSanitarios"} className="text-white btn">
                    <p className="h6">CENTROS SANITARIOS</p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="informativo">
        <div className="container pb-5">
          <Row className="d-flex flex-wrap">
            <Col sm={12} lg={12} className="d-flex justify-content-center">
              <Card className="w-75 my-3 cardInfo">
                <Link to={"/"}>
                  <Card.Img variant="top" src={Vac} className="cardInfo" />
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap">
            <Col
              sm={12}
              lg={6}
              className="d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center"
            >
              <Card className="w-75 my-3 cardInfo cardTucSal">
                <Link to={"/"}>
                  <Card.Img variant="top" src={TucSal} className="cardInfo" />
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              lg={6}
              className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center"
            >
              <Card className="w-75 my-3 cardInfo cardTucSal">
                <Link to={"/"}>
                  <Card.Img variant="top" src={Lab} className="cardInfo" />
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section className="servicios py-5">
        <div className="container text-center">
          <Row className="d-flex flex-wrap">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={IndAt}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Indicadores de Atención
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={MapNut}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Mapa de Efectores con Nutricionistas
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={Immca}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Medicina Molecular y Celular Aplicada
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={NodRs}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">Nodo Rosa</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={Deng}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">Plan Dengue</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={BolDig}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Boleta Digital
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={CanCap}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Canal de Capacitación RRHH
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={SalSit}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Sala de Situación
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Link></Link>
          <Row className="d-flex flex-wrap">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={RegElec}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Registro Provincial de Electrodependientes
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={ResMed}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Residencias Médicas
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={EstSal}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Estratégias de Salud Pública
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="m-3 cardServ w-100">
                <Link to={"/"} className="text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={RecGraf}
                    className="cardImg m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light">
                      Rescursos gráficos y campañas
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section className="youtube container">
        <div className="my-5">
          <Row>
            <Col sm={12} lg={4} className="my-5">
              <div className="youtubeVideo">
                <iframe
                  width="560"
                  height="180"
                  src="https://www.youtube.com/embed/a173053uMCw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col sm={12} lg={4} className="my-5">
              <div className="youtubeVideo">
                <iframe
                  width="560"
                  height="180"
                  src="https://www.youtube.com/embed/J6nHv6WntYk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col sm={12} lg={4} className="my-5">
              <div className="youtubeVideo">
                <iframe
                  width="560"
                  height="180"
                  src="https://www.youtube.com/embed/6W7_T0pAarg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container d-flex justify-content-center py-3">
      <div className="bgIconosRed iconosFooter d-flex">
       <div className="mx-5">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-1 text-light"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <div className="mx-3">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-1 text-light"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="mx-5">
        <a href="http://" target="_blank" rel="noopener noreferrer" className="fs-1 text-light"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
       </div>
      </section>
    </main>
  );
};

export default Home;
