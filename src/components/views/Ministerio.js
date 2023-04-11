import React from "react";
import { Card, Col, Row, Accordion } from "react-bootstrap";
import "./Ministerio.css";
import Ministro from "../../img/ministroSalud.jpeg";
import SecMin from "../../img/SecMinis.jpeg";
import { Link } from "react-router-dom";

const Ministerio = () => {
  return (
    <div className="bgColor">
      <section className="portadaMinisterio"></section>
      <section className="ministerio ">
        <div className="container">
          <Row className="d-flex flex-wrap">
            <Col sm={12} md={6} lg={6} className="cardMinisterio">
              <div className="boxUno text-center w-100">
                <h1 className="display-1 text-light text-center">Ministerio de Salud</h1>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="cardMinistro d-flex">
              
                <Card.Img src={Ministro} variant="right" className="ImgMinis" />
              
              <div className="text-center mt-5 text-light">
                <h1>Dr. Luis Medina Ruiz</h1>
                <p>Ministro</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container pb-5">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" className="acordion">
            <Accordion.Header>Misión</Accordion.Header>
            <Accordion.Body>
              La Misión del Ministerio de Salud Pública de Tucumán es garantizar
              el derecho a la salud como fundamental de la persona, a través de
              la promoción de la Salud, prevención de enfermedades y provisión
              de servicios de atención. Para ello debe profundizar la gobernanza
              de salud, a través de la rectoría, regulación, planificación,
              coordinación, con control y gestión de la Salud Pública,
              articulando a los actores del sistema.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="acordion">
            <Accordion.Header>Visión</Accordion.Header>
            <Accordion.Body>
              Las personas, familias y comunidades tendrán una vida más
              saludable, participarán activamente en la construcción de estilos
              de vida que favorezcan su desarrollo individual y colectivo y
              vivirán en ambientes sanitariamente protegidos. Tendrán acceso a
              una atención en salud oportuna, equitativa, integral, con calidez
              y de calidad; a través de una estructura institucional
              transparente y eficaz que contribuye a una mejor calidad de vida.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="acordion">
            <Accordion.Header>Funciones</Accordion.Header>
            <Accordion.Body>
              . Explicitar y proponer las políticas socio sanitarias que guiarán
              el desarrollo de la salud afianzando las bases consensuales
              mínimas que aseguran su sustentabilidad, manteniendo a todo nivel
              la mayor participación posible en la formulación, implementación y
              evaluación de las mismas.<br/> . Orientar a la población tucumana y a la
              sociedad en general hacia estilos de vida saludables, y al control
              de los determinantes que afecten la Salud Pública.<br/> . Perfeccionar
              los procesos y programas exitosos, en función de la mejora de los
              indicadores de salud y de bienestar de la población.<br/> . Ejercer y
              fortalecer el rol de rectoría del Ministerio de Salud Pública en
              el ámbito sanitario de la provincia.<br/> . Interpretar y adecuar las
              políticas y programas sanitarios nacionales para su aplicación en
              la provincia.<br/> . Participar en el fortalecimiento de las capacidades
              resolutivas regionales, en especial del NOA, para la más eficiente
              utilización de los recursos.<br/> . Mantener y profundizar las
              capacidades del sistema sanitario de monitoreo y análisis de la
              situación de salud para la toma de decisiones oportunas en sus
              distintos niveles.<br/> . Afianzar la red de vigilancia de riesgos y
              daños a la Salud Pública para su efectivo control.<br/> . Avanzar en el
              desarrollo de las condiciones culturales, regulatorias, legales y
              de participación para que la promoción de la salud sea efectiva.<br/> .
              Lograr la participación ciudadana en los distintos niveles de
              decisión.<br/> . Profundizar las capacidades de planificación en Salud
              Pública.<br/> . Fortalecer la capacidad regulatoria y de fiscalización.<br/> .
              Mantener el análisis permanente del acceso con equidad a los
              distintos servicios de salud en el ámbito provincial.<br/> . Avanzar en
              la capacidad de planificación de los recursos humanos y de la
              programación de su desarrollo técnico y científico.<br/> . Hacer de la
              calidad de los servicios el eje de la humanización de la salud,
              para que éstos sean dignos de los usuarios y motivo de orgullo
              para los trabajadores.<br/> . Continuar incentivando las investigaciones
              en los asuntos relacionados con las prioridades sanitarias de la
              región.<br/> . Profundizar el desarrollo institucional del sistema y
              funcionalmente a la sociedad, para la reducción del impacto de las
              emergencias sanitarias y de los desastres.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section className="container">
        <div className="cardSec d-flex justify-content-around">
          <div className="text-light mt-lg-5 mt-md-5 mt-sm-3">
            <h3>
            Secretario Ejecutivo Médico
            </h3>
            <p>Dr. Miguel Ferre Contreras</p>
          </div>
          <Card.Img src={SecMin} variant="right" className="SecMin"/>
        </div>
        <div className="cardTer mt-3 text-light text-center p-2">
          <h4>Secretario Ejecutivo Administrativo Contable</h4>
          <p>CPN José Antonio Gandur</p>
        </div>
        <div className="cardTer mt-3 text-light text-center p-2">
          <h4>Subsecretarias de Estado</h4>
          <p>° Dra. Cristina Majul ° Dra. Eliana Molina ° Dra. Lucía Mabel Cebe</p>
        </div>
        <div className="cardTer mt-3 text-light text-center p-2">
          <h4>Directora de Gestión Sanitaria</h4>
          <p>Dra. Alejandra Mattiacci</p>
        </div>
      </section>
      <section className="container mt-5">
        <h1 className="text-center">Legislacion</h1>
        <div className="cardLeg text-light text-center mb-3 pt-4">
          <Link to={'/'} className="text-decoration-none text-light">
          <h4>Decretos Reglamentarios-Salud</h4>
          </Link>
        </div>
        <div className="cardLeg text-light text-center mb-3 pt-4">
          <h4>Leyes Vigentes</h4>
        </div>
        <div className="cardLeg text-light text-center mb-3 pt-4">
          <h4>Resoluciones</h4>
        </div>
      </section>
    </div>
  );
};

export default Ministerio;
