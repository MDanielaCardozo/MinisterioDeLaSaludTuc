import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "react-bootstrap";
import "../views/Hospitales.css";
import HospNi from "../../img/hospital-ninio.jpg";
import CentSal from "../../img/hosp-centro-salud.jpg";
import HospOb from "../../img/hosp-obarrio.jpg";
import HospCarm from "../../img/hosp-del-carmen.jpg";
import HospPad from "../../img/hosp-padilla.jpg";
import HospAv from "../../img/hosp-avellaneda.jpg";
import HospMat from "../../img/maternidad.jpg";
import HospEv from "../../img/hosp-eva-peron.jpg";
import HospConc from "../../img/concepcion.jpg";
import HospNest from "../../img/hosp-nk.jpg";
import HospMont from "../../img/montero.jpg";
import Moritas from "../../img/moritas.jpg";

const Hospitales = () => {
  return (
    <div className="bgColor">
      <section className="hospitales">
        <div className="container">
            <h1 className="my-4">Hospitales</h1>
          <Row>
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
                    src={HospNi}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital del Niño Jesús
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
                    src={CentSal}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital Centro de Salud Zenón J. Santillán
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
                    src={HospOb}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital Juan M. Obarrio
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
                    src={HospCarm}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital de Clínicas Nuestra Sra del Carmen
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
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
                    src={HospPad}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital Ángel C. Padilla
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
                    src={HospAv}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital de Clínicas Presidente Dr. Nicolás Avellaneda
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
                    src={HospMat}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Instituto de Maternidad y Ginecología Nuestra Señora de
                      Las Mercedes
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
                    src={HospEv}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital Eva Perón
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
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
                    src={HospConc}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital Regional de Concepción “Dr. Miguel Belascuain”
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
                    src={HospNest}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital de día Presidente Néstor C. Kirchner
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
                    src={HospMont}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Hospital General Lamadrid Monteros
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
                    src={Moritas}
                    className="cardImgHosp m-0 p-0"
                  />
                  <Card.Body>
                    <Card.Text className="h5 text-light text-center">
                      Centro las Moritas
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Hospitales;
