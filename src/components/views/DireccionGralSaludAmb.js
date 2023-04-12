import React from "react";
import OrgSalAmb from "../../img/organigramaSalAmb.jpg";

const DireccionGralSaludAmb = () => {
  return (
    <div className="bgColorEnf">
      <section className="container">
        <h1>Dirección General de Salud Ambiental</h1>
        <p>
          Comprometidos con el Medio Ambiente y su impacto en salud, la
          Dirección General de Salud Ambiental, introduce criterios de
          sustentabilidad, adoptando la Mejora Continua como pilar, a fin de
          reducir el Impacto Ambiental de todas las actividades que realiza,
          cumpliendo y haciendo cumplir toda legislación y reglamentación
          vigente en materia medioambiental con el fin de minimizar los efectos
          en la población; previniendo y controlando la contaminación, mediante
          procesos, prácticas, materiales y productos ambientalmente amigables.
        </p>
        <h3>Misiones</h3>
        <p>
          La Dirección General de Salud Ambiental y sus Departamentos de
          Prevención de Riesgos Ambientales y Saneamiento Básico, tienen como
          Misiones:
        </p>
        <ul>
          <li>
            Reducir los factores de riesgo y daño para la salud, relacionados
            con el medio ambiente, a través de un sistema de vigilancia y
            control ambiental.
          </li>
          <li>
            Promover el cuidado, la conservación y la protección del medio
            ambiente mediante la educación ambiental.
          </li>
          <li>
            Intervenir en la elaboración de normas y leyes ambientales,
            contemplando lo relacionado en materia de salud ambiental.
          </li>
          <li>
            Empoderar a los gobiernos locales en la detección y solución de los
            problemas ambientales que impliquen riesgo para la salud de las
            personas.
          </li>
          <li>
            Desarrollar la vigilancia epidemiológica de las enfermedades
            relacionadas con el ambiente.
          </li>
          <li>Controlar aguas potables y potenciales a potabilizar</li>
          <li>Controlar natatorios</li>
          <li>
            Luchar contra vectores, constituyendo brigadas que estarán a
            disposición del área ambiental y de cualquier otra área del sistema
            de salud
          </li>
          <li>
            Realizar controles físicos, químicos, y bacteriológicos de muestras
            de agua de distintos usos
          </li>
        </ul>
        <h3>Organigrama</h3>
        <div className="d-flex justify-content-center my-5">
          <img src={OrgSalAmb} alt="" srcset="" className="" />
        </div>
        <h2>Instructivo para muestra de agua</h2>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Toma de muestra 2022
            </a>
          </li>
        </ul>
        <h4>Solicitud y Requisitos para Habilitacion de Natatorios</h4>
        <ul>
          <li>
            <a href="https://" target="_blank" rel="noreferrer noopener">
              Solicitud de Habilitacion Temp 2022-2023 - Res. nº 508-SPS-2020
            </a>
          </li>
          <li>
            <a href="https://" target="_blank" rel="noreferrer noopener">
              Requisitos para habilitacion natatorios Res. 508-SPS-20
            </a>
          </li>
        </ul>
        <a
          target="_blank"
          className="new-tab pagina-adjunto adjunto-pdf"
          href="https://msptucuman.gov.ar/wordpress/wp-content/uploads/2020/12/archivo_287_20201229162120.pdf"
        >
          Resolución COE N°157
        </a>
        <a
          target="_blank"
          className="new-tab pagina-adjunto adjunto-pdf"
          href="https://msptucuman.gov.ar/wordpress/wp-content/uploads/2021/01/Resolucion-508-SPS-2020.pdf"
        >
          Resolución 508-SPS-2020
        </a>
      </section>
    </div>
  );
};

export default DireccionGralSaludAmb;
