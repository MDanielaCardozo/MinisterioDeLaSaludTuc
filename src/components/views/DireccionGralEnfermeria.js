import React from "react";
import "./DireccionGralEnfermeria.css";
import { Accordion } from "react-bootstrap";
import Organigrama from "../../img/enferOrganigrama.png";

const DireccionGralEnfermeria = () => {
  return (
    <div className="bgColorEnf">
      <section className="container">
        <h1>Dirección General de Enfermería</h1>
        <p>
          <b>Domicilio: Gral Paz 555 5 Piso B - San Miguel de Tucumán</b>
        </p>
        <p>
          <b>E-mail: Enfermeria@msptucuman.gov.ar</b>
        </p>
        <p>
          <b>Integrantes:</b>
        </p>
        <ul>
          <li>Lic Norma Iglesias Directora</li>
          <li>Lic. Stella Marys Ruiz</li>
          <li>Lic. Liliana Valdez</li>
          <li>Lic. Patricia Chacana</li>
          <li>Lic. Ricardo Romano</li>
          <li>Lic.Javier Barrera</li>
          <li>Cynthia Castillo</li>
          <li>Eliana Segovia</li>
        </ul>
        <p>
          <b>Antecedentes: </b>Antes de su creación existía de División de
          enfermería cuya dependencia directa era del programa integrado de
          salud.
          <br /> <br /> El 15 de abril del año 2019 con la finalidad de
          jerarquizar la profesión por iniciativa del ministerio de salud se
          realiza el pase de rango a Dirección de enfermería bajo la dependencia
          directa de la secretaria ejecutiva medica. Resolución 146/SPS.
        </p>
      </section>
      <section className="container mt-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mision</Accordion.Header>
            <Accordion.Body>
              La Direccion de Enfermeria tiene como mision desarrollar las
              funciones de planificacion, organizacion, y gestion general, de
              las actividades asistenciales de enfermeria en todos los efectores
              de salud pertenecientes al SI.PRO.SA, como los servicios que
              trabajanpor convenio colaborativo.
              <br /> Impulsar la aplicacion de normas, programas de Normas,
              programas, planes y actividades relacionadas al proceso
              asistencial, dentro de los lineaminetos establecidos por el MSP.
              En asegurar la conduccion de la gestion de calidad, equidad,
              eficiencia, eficacia, oportunidad y transparencia, dando
              respuestas a las necesidades de la poblacion con afectividad o con
              una practica humanizada.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Actividades</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Gestión</li>
                <li>Planificación</li>
                <li>Prevención</li>
                <li>Revisión</li>
                <li>Capacitación</li>
                <li>Coordinación</li>
                <li>Docencia e Investigación</li>
                <li>Relevamiento de RRHH</li>
                <li>Recabar datos estadísticos</li>
                <li>Epidemiológicos y de producción</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Funciones</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Garantizar el desarrollo de la actividad asistencial de
                  enfermería de acuerdo a los lineamientos del MSP.
                </li>
                <li>
                  Planificar, organizar, dirigir y controlar el funcionamiento
                  continuo de los servicios de enfermería de todos los efectores
                  de salud.
                </li>
                <li>Desarrollar programas de capacitación continua.</li>
                <li>
                  Establecer relaciones funcionales con otras áreas y/o
                  dependencias e instituciones.
                </li>
                <li>
                  Elevar propuestas e iniciativas tendientes al
                  perfeccionamiento y mayor eficacia de todos los servicios de
                  enfermería pertenecientes al sector publico.
                </li>
                <li>
                  Expedir informes técnicos que le sean solicitado por el MSP.
                </li>
                <li>
                  Elevar informe de gestión mensual y anual con metas para el
                  año próximo.
                </li>
                <li>
                  Asesorar sobre la reubicación del personal considerando las
                  necesidades de los efectores de salud.
                </li>
                <li>
                  Comunicar en todas las medidas y actividades a realizar a la
                  secretaria ejecutiva medica como así también otras actividades
                  inherentes a la misión.
                </li>
                <li>
                  Integrar y participar en comités sobre desastres, emergencias
                  y contingencias.
                </li>
                <li>Medir producción de enfermería del sector publico.</li>
                <li>
                  Participación en el asesoramiento de actividades de
                  organización y reorganización de servicios de enfermería.
                </li>
                <li>
                  Mantener reuniones frecuentes con directores de hospitales y
                  la red general de servicios con el fin de coordinar
                  actividades en procura de evaluar y mejorar los modelos
                  operativos.
                </li>
                <li>
                  Promover condiciones de trabajo favorables para el personal.
                </li>
                <li>
                  Participar en evaluaciones de desempeño y en concursos de
                  cargos.
                </li>
                <li>
                  Capacitar al personal de enfermería para brindar atención de
                  calidad y cuidados humanizas de enfermería al individuo,
                  familia y comunidad.
                </li>
                <li>Trabajar de manera participativa con los ASS.</li>
                <li>
                  Identificar prevalencias de enfermedades y realizar el
                  seguimiento de los pacientes.
                </li>
                <li>Promover el trabajo de enfermería en APS.</li>
                <li>
                  Colaborar con el sistema de vigilancia epidemiológica en las
                  unidades cerradas.
                </li>
                <li>
                  Generar, cumplir y hacer cumplir las normas de guías de
                  practicas clínicas y protocolos de funcionamiento en las áreas
                  criticas.
                </li>
                <li>
                  Establecer sistemas de información adecuados, confiables,
                  oportunos y útiles.
                </li>
                <li>
                  Mantener actualizado el observatorio provincial de enfermería.
                </li>
                <li>
                  Trabajar de manera articulada con las direcciones de
                  epidemiologia y estadísticas.
                </li>
                <li>Propiciar la docencia y la investigación.</li>
                <li>
                  Instruir al profesional de enfermería sobre la responsabilidad
                  en la atención de casos de infección o colonización por
                  microorganismos multiresistentes, el seguimiento del proceso
                  para su eliminación y además del control de la aparición de
                  nuevos brotes epidémicos.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Organigrama:</Accordion.Header>
            <Accordion.Body className="d-flex justify-content-center">
                <img src={Organigrama} alt="Organmigrama Enfermería" className="w-100"/> 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};

export default DireccionGralEnfermeria;
