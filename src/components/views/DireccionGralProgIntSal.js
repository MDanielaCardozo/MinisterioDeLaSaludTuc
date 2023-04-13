import React, { useState } from "react";
import { Accordion, Dropdown } from "react-bootstrap";
import OrganPri from "../../img/OrganigramaPRI.jpg";
import { Collapse, Button } from "react-bootstrap";
import Redes from "../../img/redes.jpg";
import RedesNacion from "../../img/redes-nacion.jpg";
import Proteger from "../../img/proteger.jpg";
import { Link } from "react-router-dom";

const DireccionGralProgIntSal = () => {
  const [open, setOpen] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const [boton, setBoton] = useState(false);
  const [sumar, setSumar] = useState(false);
  const [remediar, setRemediar] = useState(false);
  const [proteger, setProteger] = useState(false);
  const [municipio, setMunicipio] = useState(false);
  const [equipo, setEquipo] = useState(false);
  const [autoridades, setAutoridades] = useState(false);
  const [creacion, setCreacion] = useState(false);
  const [objetivo, setObjetivo] = useState(false);
  const [mision, setMision] = useState(false);

  return (
    <div className="bgColorEnf">
      <section className="container">
        <h1>Dirección General de Programa Integrado de Salud</h1>
        <div className="my-4">
          <p>
            La Dirección General del Programa Integrado de Salud, creada en
            2005, coordina los programas sanitarios de manera que se potenciarán
            unos con otros, utilizando eficazmente los recursos para
            focalizarlos en las prioridades de salud y gestionar los recursos
            provinciales y nacionales, a través de una administración contable y
            financiera única para todos los programas.
            <br /> Se plantea como visión concentrar los recursos
            institucionales existentes en el Sistema Provincial de Salud desde
            cada uno de los programas en un Programa Integrado de Salud cuya
            visión objetivo será el cuidado primordial de la familia, ejecutando
            actividades de promoción de la salud y participación social,
            prevención de las patologías por grupos poblacionales abarcando a
            todos, atendiéndolos y rehabilitándolos en su ambiente y dando
            cobertura con calidad a toda la provincia.
            <br /> La misión permite asegurar la atención integral de la salud
            de las personas y de las familias, orientando los recursos del
            Ministerio de Salud Pública y de la comunidad. Persigue concientizar
            en el autocuidado a fin de mejorar su calidad de vida y generar un
            cambio con resultados en la salud de la población. Además, permite
            reconocer las prioridades sanitarias con criterio epidemiológico,
            definiendo el “qué hacer” de los servicios de salud: Desde el
            Departamento de Maternidad e Infancia se realizaron acciones que
            contribuyeron al descenso de las tasas de mortalidad infantil y
            materna, a partir del desarrollo e implementación de acciones
            coordinadas y ejecutadas por la Red Perinatal de la provincia.
          </p>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Acciones Emprendidas</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Se mejoró la calidad de atención neonatal de alta complejidad,
                  con un trabajo conjunto entre nuestros servicios con el
                  Hospital Garrahan de Buenos Aires, basado en incorporación de
                  protocolos actualizados y en la incorporación de recursos
                  humanos especializados. A su vez, se aseguró el traslado
                  adecuado de los recién nacidos en ambulancias equipadas con
                  médico y enfermera capacitados. En consecuencia, aumentó la
                  sobrevida de los prematuros extremos, en especial de los
                  nacidos entre 1000 a 1500 grs.
                </li>
                <li>
                  Se creó el Programa de Seguimiento de Prematuros que brinda
                  atención adecuada a estos niños, aplicándoseles vacunas
                  especiales a los niños y al grupo familiar, como así también
                  anticuerpos monoclonales para prevenir infección por virus
                  sincitial respiratorio. La disminución de retinopatía del
                  prematuro también es un indicador de calidad de atención
                  neonatal efectuada.
                </li>
                <li>
                  Se implementó el Programa de Maternidades Seguras capacitando
                  al equipo de salud en la atención del parto.
                  Complementariamente, el Comité de Mortalidad Materna e
                  Infantil audita las muertes, lo que permite reorientar
                  conductas que eviten desenlaces fatales.
                </li>
                <li>
                  Se fortalecieron los nodos obstétricos y la derivación
                  obstétrica de emergencia en ambulancias con médico, partera y
                  equipamiento adecuado, previniendo así la atención del parto
                  en establecimientos no habilitados. Se capacitó en todos los
                  niveles de atención en la atención de emergencia, ya sea
                  obstétrica como en el manejo de las complicaciones
                  puerperales. De forma adicional se trabaja con el Programa de
                  atención bucal de la embarazada.
                </li>
                <li>
                  A los niños menores de 6 años se logró nominalizarlos en una
                  base de datos única, en donde se registran los controles
                  mensuales de peso y talla, como así también la vacunación y
                  entrega de leche, si corresponde. En relación al estado
                  nutricional, se implementó una única curva de referencia para
                  la valoración nutricional y antropométrica, según pautas de la
                  Organización Mundial de la Salud (OMS). Los niños que
                  presentan riesgo nutricional o con desnutrición instalada
                  ingresan al Programa Focalizado de Rehabilitación Nutricional,
                  para contar con apoyo económico nutricional y seguimiento
                  específico del grupo familiar.
                </li>
                <li>
                  Se creó la Mesa Provincial de Nutrición, junto con los
                  Ministerios de Desarrollo Social, Educación y la Universidad
                  Nacional de Tucumán, para definir los aportes nutricionales
                  que se brindan desde los diferentes ministerios.
                </li>
                <li>
                  Bajo normativas del Programa Nacional de Sanidad Escolar
                  (PROSANE) se creó el Programa Provincial de Salud Escolar para
                  detectar y resolver las patologías que afectan el desempeño
                  escolar, detectar factores de riesgo y promover hábitos
                  saludables. A modo de ejemplo, en niños diagnosticados se
                  entregaron anteojos para mejorar su visión y rendimiento
                  escolar.
                </li>
                <li>
                  Para jerarquizar el trabajo que se ejecuta en la prevención y
                  atención de las enfermedades respiratorias, se creó la
                  División Salud Respiratoria dentro del Programa Infecciones
                  Respiratorias Agudas. Durante la denominada Campaña de
                  Invierno se refuerzan con insumos y recursos humanos los
                  diferentes niveles de atención, aumentando la capacidad
                  resolutiva de las salas de internación abreviada y evitando
                  internaciones innecesarias. Estas acciones, entre otras,
                  trajeron como consecuencia una disminución en el componente
                  respiratorio entre las causas de mortalidad infantil.
                </li>
                <li>
                  Con respecto a la prevención de tuberculosis, el programa
                  provincial correspondiente trabajó para mejorar el diagnóstico
                  precoz y asegurar el tratamiento de los pacientes. También se
                  garantizó el tratamiento de aquellos con infección
                  multiresistente.
                </li>
                <li>
                  Se aseguró el tratamiento a los pacientes con VIH, como así
                  también la oferta para la realización de testeos voluntarios
                  para el diagnóstico de dicha enfermedad.
                </li>
                <li>
                  Por otra parte, el Programa de Inmunizaciones tiene como
                  objetivo alcanzar y mantener coberturas útiles de todas las
                  vacunas incluidas en el calendario de vacunación obligatorio,
                  para disminuir la morbimortalidad producida por enfermedades
                  inmunoprevenibles. En los últimos años se incrementó la
                  cobertura, acompañando al aumento en la cantidad de vacunas
                  incluidas en el Calendario Nacional Obligatorio. En 2010 se
                  inició la nominalización de los usuarios que son vacunados,
                  tanto en el subsistema público como en el privado, lo cual
                  permite conocer mejor el nivel de cobertura y posibilita que
                  cada usuario pueda consultar su carnet a través de la página
                  Web del Ministerio.
                </li>
                <li>
                  La prevalencia de las enfermedades crónicas y no transmisibles
                  (ECNT) llevó a que desde la Dirección se planifiquen y
                  ejecuten diferentes programas. Los mismos cuentan con
                  población nominalizada en el sistema informático único, con
                  cobertura explícita a través de chequeras con las prestaciones
                  que debe recibir cada paciente, redes de atención y
                  tratamiento garantizado.
                </li>
                <li>
                  Para prevenir las ECNT se trabaja en promocionar hábitos
                  saludables y auto cuidado a través de tres grandes pilares:
                  prevención del tabaquismo, alimentación saludable y actividad
                  física. En conjunto con la Legislatura, IPLA (Instituto
                  Provincial de Lucha contra el Alcoholismo) y otras
                  organizaciones, se garantizó el 100% de espacios públicos
                  libres de humo. Se certificaron más de 50 espacios libres de
                  humo cada año. Para esto fue de gran importancia la Ley anti
                  tabaco 7575.
                </li>
                <li>
                  En relación a la promoción de alimentación saludable se
                  trabajó en diferentes estrategias, como “Menos sal más vida”
                  en las panaderías de la provincia, “Eliminación grasas trans”,
                  promoción de consumo de frutas y verduras, entre otras. Se
                  informa a la población mediante campañas, ferias de salud,
                  trabajo con escolares y en conjunto con el Mercofrut. Al mismo
                  tiempo, se avanzó en el proyecto kioscos escolares saludables,
                  en un trabajo conjunto con el Ministerio de Educación y
                  Desarrollo Social. Se formaron multiplicadores de Educación
                  Alimentaria Nutricional (docentes y agentes del sistema de
                  salud) en conjunto con el Ministerio de Salud de Nación.
                </li>
                <li>
                  Con respecto a la actividad física se ofrece a la comunidad,
                  espacios de actividad física libre y gratuita en diferentes
                  plazas de la provincia. Junto con el Programa Anímate se
                  realizan pausas activas en los lugares de trabajo y en
                  diferentes eventos.
                </li>
                <li>
                  Desde la División Oncología se nominalizaron a los pacientes
                  con patologías oncológicas y se les garantizó el tratamiento
                  adecuado según protocolo. En este sentido se agilizó el
                  proceso de compra y dispensa, desde el origen del pedido de la
                  droga hasta la administración al paciente, logrando un
                  circuito más ágil y eficiente. Se les brindó la medicación
                  adecuada a un promedio de 2.000 pacientes por año.
                  Recientemente se creó el programa para la prevención del
                  cáncer de colon.
                </li>
                <li>
                  En julio del 2011 se habilita el Centro Único de Lectura
                  Mamográfica, con el objetivo de concentrar la lectura de
                  mamografías provenientes de los mamógrafos instalados en la
                  provincia, en tiempos adecuados. Cuenta con equipamiento de
                  avanzada y profesionales imagenólogos de primer nivel. Esto
                  permite lograr una alta calidad diagnóstica, doble lectura en
                  los casos que lo requieran, y la referencia -
                  contrarreferencia con los centros de salud. Su visión es
                  convertirse en una unidad de referencia en lectura,
                  interpretación, diagnóstico, seguimiento y estadísticas de la
                  patología mamaria en la provincia de Tucumán.
                </li>
                <li>
                  El 83% de los centros de realización de mamografías se
                  encuentra en un área de influencia de un hospital, no mayor de
                  15 km de los mismos, y han sido distribuidos estratégicamente
                  en diversas instituciones de salud de 1°, 2° Y 3° nivel, lo
                  que permite asegurar la accesibilidad a los mismos.
                  Actualmente Tucumán cuenta con 14 mamógrafos.
                </li>
                <li>
                  Además, es la segunda provincia en incorporar el tamizaje por
                  test de VPH (Virus Papiloma Humano) para la detección de
                  cáncer de cuello de útero. Se utiliza de manera conjunta con
                  el estudio de PAP. Las pacientes detectadas son seguidas y
                  controladas por el equipo de salud.
                </li>
                <li>
                  El Programa Provincial para la Prevención, Diagnóstico y
                  Tratamiento de Diabetes protocolizó el tratamiento del
                  paciente; se confeccionaron chequeras prestacionales
                  nominalizadas (garantía explícita de cobertura de salud). Se
                  garantizó también el acceso a medicación de todos los
                  pacientes incluidos en el programa. La informatización del
                  programa brinda la posibilidad de realizar un monitoreo del
                  impacto del mismo en la población en tiempos reducidos.
                </li>
                <li>
                  Se creó el Programa Provincial de Enfermedad Celíaca con la
                  finalidad de realizar promoción, diagnóstico temprano de la
                  enfermedad y seguimiento adecuado. También se crearon los
                  Programas de Epilepsia, Enfermedades reumatológicas
                  autoinmunes, Obesidad, Emergencias Cardiovasculares, entre
                  otros.
                </li>
                <li>
                  Se fortalecieron los procesos tendientes a garantizar la
                  recuperación, rehabilitación y reinserción de las personas:
                  Programa Baja Visión, que permitió la creación del Centro de
                  baja Visión; Programa de Seguimiento de Prematuros y Programa
                  de Hipoacusia.
                </li>
                <li>
                  Con el objeto de brindar cobertura a los pacientes privados de
                  libertad se creó el Programa de salud en contexto de encierro,
                  que busca asegurar la atención de salud de manera
                  interdisciplinaria.
                </li>
                <li>
                  El Banco Central de Sangre se constituyó como nodo
                  independiente de los servicios de transfusión hospitalarios.
                  En el mismo se llevan a cabo los procesos de donación,
                  producción de componentes sanguíneos, tamizaje de infecciones
                  transmitidas por transfusiones centralizando los estudios
                  serológicos e inmunohematológicos de las unidades de sangre.
                  Se intercambia plasma excedente con plantas fraccionadoras por
                  hemoderivados como Albumina humana, gamma globulina
                  intravenosa, sueros testigos, etc. En los últimos años se
                  aumentaron las donaciones y disminuyó el porcentaje de
                  positividad de serología reactiva de los donantes.
                </li>
                <li>
                  Se desarrollaron estrategias de comunicación social enfocadas
                  en la prevención de los problemas prioritarios y promoción de
                  vida saludable mediante el trabajo en conjunto entre la
                  División Educación Sanitaria con el resto de los programas,
                  del sistema sanitario y trabajo intersectorial, haciendo de la
                  promoción y prevención el eje de las acciones de salud.
                </li>
                <li>
                  El Programa de Lactancia Materna avanza en la estrategia del
                  “Hospital o Centro de Atención amigo de la madre y el niño”.
                </li>
                <li>
                  El Programa de prevención de Enfermedades Transmitidas por
                  Vectores trabajó para lograr el status de “Provincia Libre de
                  Transmisión Vectorial y transfusional de Chagas”, con
                  certificación internacional por parte de expertos de OPS. Este
                  programa también trabaja activamente en la prevención de
                  enfermedades trasmitidas por mosquitos
                </li>
                <li>
                  La División Zoonosis trabaja en la vacunación antirábica y en
                  la tenencia responsable de mascotas. Con la incorporación de
                  los quirófanos móviles, se realiza la castración a perros y
                  gatos en conjunto con otros programas.
                </li>
                <li>
                  En Salud Mental se avanzó en la prevención de la conducta
                  suicida y la atención de las adicciones, trastornos mentales
                  severos, trastornos de la alimentación, de violencia y salud
                  mental infanto-juvenil.
                </li>
                <li>
                  Con la finalidad de garantizar la accesibilidad de la
                  población a una medicación segura y de calidad, reducir
                  intermediarios, se implementó el programa Botiquines, que
                  consiste en la compra centralizada de medicamentos,
                  preparación de botiquines y distribución directa por un
                  operador logístico al CAPS u hospital de segundo nivel.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Organigrama</Accordion.Header>
            <Accordion.Body>
              <h2 className="my-3">Provinciales</h2>
              <h3 className="text-secondary">Programa Integrado de Salud</h3>
              <div className="my-4 w-100">
                <Dropdown className="my-3">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Departamento de Enfermedades Transmisibles
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      División Tuberculosis
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      División Zoonosis
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Control de Enfermedades Transmitidas por Vectores
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Unidad Coordinadora y Ejecutora Provincial VIH/SIDA y ETS
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Animales Ponzoñosos
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="my-3">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Departamento Materno Infanto Juvenil
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Programa Perinatal
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Programa Neonatal
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Detección Precoz y Tratamiento de las Hipoacusias
                      Neonatales
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Provincial de Salud Integral del Adolescente
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Lactancia Materna
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Crecimiento y Desarrollo
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Abordaje de Nutrición
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Salud Sexual y Reproductiva
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="my-3">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Departamento de Enfermedades No Transmisibles
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Programa Provincial de Atención Integral del Adulto Mayor
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Programa de Prevención y Detección Temprana del Cáncer
                      Colorrectal
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Prevención, Detección y Tratamiento de la
                      Diabetes Mellitus
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Provincial de Prevención de Enfermedades
                      Cardiovasculares
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Prevención y Control del Cáncer de Mama
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Control y Prevención del Cáncer de Cuello de
                      Útero
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Unidad de Salud Renal Provincial Programa de Salud Renal
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa Provincial de Lucha Antitabáquica
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Atención al Paciente Epiléptico
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Centro de Rehabilitación para Personas con Baja Visión
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Atención Integral de Obesidad (PAIO)
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Salud en Contexto de Encierro
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Programa de Atención Integral del Paciente con
                      Enfermedades Reumatológicas Autoinmunes
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="mb-3 d-flex"
                >
                  CEPTA (Centro Provincial de Transtornos Alimentarios)
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="m-5">
                    <h3>
                      Centro de Referencia en Obesidad Mórbida en Tucumán.
                    </h3>
                    <h4>
                      Actividad principal: ASISTENCIAL en pacientes con Obesidad
                      Mórbida
                    </h4>
                    <p>Otras actividades:</p>
                    <ol>
                      <li>
                        Coordinación del equipo Móvil Bariátrico y de las dos
                        unidades móviles bariátricas.
                      </li>
                      <li>
                        Actividades de Investigación exclusivamente con
                        pacientes de la institución.
                      </li>
                      <li>
                        Talleres de educación destinados a pacientes bariatricos
                        de la institución.
                      </li>
                      <li>
                        Coordinación de la actividad asistencial de los
                        cirujanos bariátricos, organizar ateneos y coordinar la
                        gestión de insumos relacionados a la cirugía bariatrica.
                      </li>
                      <li>
                        Coordinación de traslados de pacientes desde domicilio
                        hacia la sede y/o centros asistenciales.
                      </li>
                      <br />
                    </ol>
                    <p>
                      <strong>NOTA:</strong>Toda las actividades enunciadas son
                      <strong>supervisadas</strong> por el
                      <strong>
                        Programa de Atención Integral de Obesidad (PAIO)
                      </strong>
                      , el cual <strong>creó CEPTA</strong> en el año 2017 , por
                      decisión de la Sra. Ministra de Salud Pública de la
                      Provincia. Dra. Rossana Chahla, la cual propuso al Dr.
                      Francisco D´Onofrio dicha gestión.
                      <br />
                      La actual directora del CEPTA es la Dra. Alejandra Caram.
                      Equipo interdisciplinario para el diagnóstico, tratamiento
                      y rehabilitación del paciente con obesidad mórbida.
                    </p>
                    <h6>CRITERIOS DE ADMISION EN CEPTA</h6>
                    <h6>Solamente por derivación de AREA OPERATIVA</h6>
                    <h6>Área Infanto juvenil (sin obra social)</h6>
                    <ol>
                      <li>
                        PACIENTES OBESOS: PERCENTILO &lt; 97: con escasa o nula
                        adherencia al tratamiento o QUE NO DISPONEN EQUIPO
                        ESPECIALIZADO EN EL CAPS U HOSPITAL CERCANO A SU
                        DOMICILIO.
                      </li>
                      <li>
                        PACIENTE CON SOBREPESO CON COMORBILIDADES sin respuesta
                        al tratamiento en nivel 1 y 2.
                      </li>
                    </ol>
                    <h6>Área Adultos (pacientes sin obra social)</h6>
                    <ol>
                      <li>
                        PACIENTES OBESOS CON IMC MAYOR DE 40 con comorbilidades
                        graves (apnea severa del sueño, artrosis con dificultad
                        en la movilidad, diabetes mal controlada, HTA
                        descontrolada, cardiopatía isquémica, depresión severa)
                      </li>
                      <li>
                        PACIENTE CON MALA ADHERENCIA AL TRATAMIENTO O QUE NO
                        DISPONEN EQUIPO ESPECIALIZADO EN EL CAPS U HOSPITAL
                        CERCANO A SU DOMICILIO
                      </li>
                      <li>
                        PACIENTES HIPEROBESOS DE RECIENTE DIAGNOSTICO (IMC MAYOR
                        DE 50)
                      </li>
                      <li>
                        Pacientes Obesos mórbidos con vulnerabilidad del punto
                        de vista socioeconómico.
                      </li>
                    </ol>
                    <p>
                      <strong>Domicilio:</strong>Lamadrid 623 .SMT.
                      <br />
                      <strong>Tel:</strong> 4203055 <br />
                      <strong>Horarios:</strong> 7:00HS A 17:00 HS
                    </p>
                  </div>
                </Collapse>
                <Button
                  onClick={() => setAbrir(!abrir)}
                  aria-controls="example-collapse-texto"
                  aria-expanded={abrir}
                  className="mb-3 d-flex"
                >
                  DIVISIÓN ODONTOLOGIA
                </Button>
                <Collapse in={abrir}>
                  <div id="example-collapse-texto" className="m-5">
                    <h3>
                      MISIONES Y FUNCIONES DE DIVISIÓN DE ODONTOLOGÍA Res.
                      1172/2005
                    </h3>
                    <h4>Misión</h4>
                    <p>
                      Planificar, organizar, capacitar, asesorar, supervisar y
                      evaluar el proceso de atención de odontología en los
                      servicios de salud que se desarrollen en el ámbito de
                      competencia del Sistema Provincial de Salud de Tucumán, en
                      el marco de las legislaciones vigentes.
                    </p>
                    <h4>Funciones</h4>
                    <ul>
                      <li>Normativa</li>
                      <li>Supervisora</li>
                      <li>Capacitadora</li>
                      <li>Gestión</li>
                      <br />
                    </ul>
                    <h4>Marco Normativo</h4>
                    <ul>
                      <li>
                        Ley 5652/84 Creación del Sistema Provincial de Salud
                      </li>
                      <li>
                        302-SPS/2017 Dirección Estratégica de Programas para
                        Prevención y cuidados de Salud
                      </li>

                      <li>
                        1172 SPS/2005 Misión y funciones de División de
                        Odontología
                      </li>
                      <li>
                        Ley provincial 5542/83 del ejercicio de la profesión
                        odontológica.
                      </li>
                      <li>
                        Ley provincial 7451/04 del ejercicio de Técnico
                        Protésico Dental de Laboratorio.
                      </li>
                      <li>
                        1106/CPS/00 Plan Nacional de Salud Bucal a la paciente
                        embarazada
                      </li>
                      <li>
                        845/CPS/93 Programa Nacional de Salud Bucal del Escolar
                      </li>
                      <br />
                    </ul>
                    <h4>Funciones</h4>
                    <ul>
                      <li>
                        Elaborar y actualizar normas de atención relacionadas
                        con salud bucal.
                      </li>
                      <li>
                        Informatizar el registro de los datos de servicios
                        odontológicos.
                      </li>
                      <li>
                        Evaluar los datos estadísticos que reflejen indicadores
                        de salud y producción.
                      </li>
                      <li>
                        Supervisar y capacitar periódicamente los servicios
                        odontológicos de las distintas Áreas Programáticas,
                        consultorios escolares y Hospitales de Tercer nivel.
                      </li>
                      <li>
                        Coordinar, actualizar y monitorear los programas de
                        salud bucal.
                      </li>
                      <li>
                        Coordinar y supervisar las actividades de consultorios
                        odontológicos escolares.
                      </li>
                      <li>
                        Formular proyectos de prevención de la Salud Bucal y
                        atención odontológica basadas en las necesidades de la
                        comunidad.
                      </li>
                      <li>
                        Promover y cooperar en las tareas de investigación que
                        lleven a cabo los profesionales odontólogos del Sistema
                        Provincial de Salud.
                      </li>
                      <li>
                        Organizar módulos de formación continua destinados al
                        Recurso Humano del Sistema.
                        <ul>
                          <li>
                            Coordinar el curso de formación de asistente
                            dentales.
                          </li>
                          <li>
                            Participar del examen de competencia para la
                            obtención de la matrícula profesional habilitante de
                            Técnico Protésicos dentales.
                          </li>
                          <li>Coordinar acciones con distintas disciplinas.</li>
                          <li>
                            Coordinar acciones Interinstitucionales e
                            Intersectoriales.
                          </li>
                          <li>
                            Coordinar acciones con Programas nacionales
                            (PRO.SA.NE -SUMAR -Médicos Comunitario).
                          </li>
                          <li>
                            Gestionar la adquisición de insumos y bienes de
                            capital
                          </li>
                        </ul>
                      </li>
                      <br />
                    </ul>
                    <p>
                      <strong>Programas a cargo:</strong>
                      <br />
                      <br />
                      <strong>
                        Programa de Salud Bucal del escolar: Res. N° 845/CPS-93
                        y Res. 562/CPS-94:
                      </strong>
                      <br />
                      <br />
                      Objetivo general: reducir la prevalencia e incidencia de
                      patologías bucodentales que presenta la población escolar,
                      implementando acciones que fortalezcan el autocuidado,
                      como así también medidas de prevención y protección
                      específica. Cubrir preventiva y asistencialmente, desde el
                      punto de vista odontológico a alumnos de establecimientos
                      escolares provinciales de primero a sexto grado. Consta de
                      3 etapas:
                      <br />
                    </p>
                    <ol>
                      <li>Educación para la salud</li>
                      <li>Fichado y Determinación de CPOD</li>
                      <li>
                        Tratamiento Odontológico (se deriva al CAPS más cercano
                        a su Domicilio)
                      </li>
                    </ol>
                    <p>
                      El programa se lleva a cabo en la escuela más cercana al
                      CAPS.
                    </p>
                    <h6>Programa de Salud Bucal de la paciente embarazada:</h6>
                    <p>
                      Res. 1106/CPS-2000. Objetivo general: Abordaje de la
                      paciente embarazada mediante trabajo interdisciplinario e
                      intersectorial, con el equipo de salud del CAPS y
                      Hospitales del Sistema en Promoción de la Salud y
                      Prevención de enfermedades bucales.
                    </p>
                    <h6>Programa Sonrisa de Mamá:</h6>
                    <p>
                      Res. 138/SEM-2007. Objetivo general: devolver función y
                      estética a embarazada y puérperas con NBI. Incluye a
                      pacientes de la Maternidad Ntra. Sra. De las Mercedes y
                      derivadas de CAPS.
                    </p>
                    <p>
                      <strong>Domicilio: </strong>Las Piedras N° 626- 2° Piso
                      .SMT.
                      <br />
                      <strong>Tel:</strong> (0381) 4308444- Int. 320-321 <br />
                      <strong>Email:</strong> divodontologia@hotmail.com
                    </p>
                  </div>
                </Collapse>
                <Button
                  onClick={() => setBoton(!boton)}
                  aria-controls="example-collapse-textos"
                  aria-expanded={boton}
                  className="mb-3 d-flex"
                >
                  DIVISIÓN DE ENFERMERIA
                </Button>
                <Collapse in={boton}>
                  <div id="example-collapse-textos" className="m-5">
                    <h5>Integrantes:</h5>
                    <p>Jefe de División: Lic. Juan Carlos Flores</p>
                    <ul>
                      <li>Inés Beatriz Díaz</li>
                      <li>Elizabeth Alejandra Gallo</li>
                      <li>María Alicia Ledesma</li>
                      <li>Stella Marys Ruiz</li>
                      <li>Rafael Alberto Urquía</li>
                      <br />
                    </ul>
                    <h5>División Enfermería</h5>
                    <p>
                      La división de enfermería es una organización integrada
                      por un grupo de profesionales unidos por una visión
                      transformadora basándose en principios morales y éticos
                      alineados con las políticas vigentes del Ministerio de
                      Salud Pública de la Provincia de Tucumán.
                    </p>
                    <h5>Misión</h5>
                    <p>
                      Lograr un óptimo estado de salud de la población de la
                      provincia, ofreciendo una atención de enfermería de
                      calidad, mediante el uso eficaz de los recursos humanos y
                      tecnológicos en los distintos niveles de complejidad.
                    </p>
                    <h5>Visión</h5>
                    <p>
                      Ser una división organizada con control y liderazgo
                      transformador impulsando cuidados humanizados y solidarios
                      con los pacientes, familia y comunidad incentivando la
                      promoción de la salud, prevención de la enfermedad,
                      recuperación y rehabilitación con asistencia de calidad
                    </p>
                    <h5>Objetivos</h5>
                    <ul>
                      <li>
                        Asegurar la atención integral de enfermería a la
                        comunidad en sus tres niveles de complejidad.
                      </li>
                      <li>
                        Cumplir y hacer cumplir las normas y/o disposiciones
                        vigentes, emitidas por el Ministerio de Salud Pública de
                        la Provincia.
                      </li>
                    </ul>
                    <h5>Funciones:</h5>
                    <ol>
                      <li>
                        Establecer las normas, métodos, estrategias y
                        supervisiones para la organización y funcionamiento de
                        los servicios de atención a los agentes dependientes de
                        esta División
                      </li>
                      <li>
                        Regular el ejercicio de las prácticas y de las técnicas
                        profesionales de los distintos agentes que pertenecen a
                        esta División
                      </li>
                      <li>
                        Establecer pautas de atención y conducir la capacitación
                        continua a los agentes dependientes de esta División
                      </li>
                      <li>
                        Intervenir en casos de incidencia relacionados con los
                        agentes
                      </li>
                      <li>
                        Definir los procesos asistenciales que brindan los
                        distintos servicios que dependen de esta División
                      </li>
                      <li>
                        Supervisar los procesos de atención de los servicios
                        dependientes
                      </li>
                      <li>
                        Participar activamente con las demás áreas en la
                        planificación y organización de los recursos humanos
                        para satisfacer las necesidades de los distintos
                        servicios de salud
                      </li>
                      <li>
                        Dictar normas y elaborar planes y proyectos en
                        patologías epidemiológicas
                      </li>
                      <li>
                        Establecer la reubicación del personal con cargo
                        jerárquico una vez finalizada su gestión
                      </li>
                      <li>
                        Participar del diseño curricular de las distintas
                        carreras que pertenecen a esta dependencia
                      </li>
                      <li>
                        Participar en la planificación estratégica de la
                        formación de los recursos humanos.
                      </li>
                    </ol>
                    <h5>Líneas de acción</h5>
                    <ul>
                      <li>
                        Fortalecer la aplicación del Proceso de Atención de
                        Enfermería en todas las áreas
                      </li>
                      <li>
                        Favorecer la interrelación del personal con
                        profesionales de otras disciplinas
                      </li>
                      <li>
                        Promover la capacitación y participación en
                        investigaciones de campo a todos los agentes de esta
                        División
                      </li>
                      <li>
                        Trabajar en forma mancomunada con los distintos
                        departamentos de conducción en la detección del
                        ausentismo del personal.
                      </li>
                    </ul>
                    <p>
                      <strong>Domicilio: </strong>Las Piedras 1111 – San Miguel
                      de Tucumán
                      <br />
                      <strong>Tel:</strong> 0381-154441242
                      <br />
                      <strong>Email:</strong> Enfermeria@msptucuman.gov.ar
                    </p>
                  </div>
                </Collapse>
              </div>
              <h2 className="my-4">Nacionales</h2>
              <Button
                onClick={() => setSumar(!sumar)}
                aria-controls="example-collapse-textoSumar"
                aria-expanded={sumar}
                className="mb-3 d-flex"
              >
                Programa<strong> Sumar</strong>
              </Button>
              <Collapse in={sumar}>
                <div id="example-collapse-textoSumar" className="m-5">
                  <h5>¿Qué es el Programa SUMAR?</h5>
                  <p>
                    El Programa SUMAR es una política pública del Ministerio de
                    Salud de la Nación que promueve un acceso equitativo y de
                    calidad a los servicios de salud para toda la población que
                    no posee cobertura formal en salud.
                    <br />
                    <br />
                    SUMAR tiene como antecedente al Plan Nacer que se inició en
                    2004 en las provincias del norte argentino y en 2007 se
                    extendió al resto del país para brindar cobertura de salud a
                    la población materno-infantil sin obra social.
                    <br />
                    <br />
                    En el año 2010 se incorporó el financiamiento de las
                    cirugías de cardiopatías congénitas en niños y niñas hasta
                    los 6 años para luego ampliarla a los adolescentes. Entre el
                    2012 y el 2015 el Programa SUMAR fue ampliando la cobertura,
                    logrando incorporar a toda la población hasta los 64 años de
                    edad y brindando prestaciones específicas para el cuidado
                    del embarazo, la primera infancia, la adolescencia y la
                    adultez.
                    <br />
                    <br />
                    En términos poblacionales, este proceso culmina en el 2020
                    con la reciente incorporación de las personas mayores,
                    consiguiendo que el universo total de la población que no
                    tiene obra social esté cubierta por el Programa SUMAR.
                    Además de extender la ampliación para toda la población de
                    la cobertura de intervenciones quirúrgicas para pacientes
                    que sufren una cardiopatía congénita.
                    <br />
                    <br />
                    La estrategia de nominalización del Programa SUMAR permite
                    el cuidado y seguimiento de la población por parte del
                    sistema sanitario, explicitando los servicios que conforman
                    su derecho a la salud, asignándole contenido y alcance
                    preciso.
                    <br />
                    <br />
                    De esta forma, por cada persona bajo Programa y por cada
                    consulta y control que se realice, el hospital o centro de
                    salud recibe recursos para fortalecer al equipo de salud y
                    mejorar los servicios brindados a toda la comunidad.
                    <br />
                    <br />
                    El Gobierno Nacional, en conjunto con las jurisdicciones,
                    avanza en la búsqueda de mejorar la calidad de la atención y
                    profundizar el acceso y el ejercicio de los derechos a la
                    salud de toda la población
                  </p>
                  <h5>Programa Sumar en Tucumán</h5>
                  <p>
                    El programa está a cargo de la Dirección de Financiamiento
                    Complementario por Desempeño -Dirección de General de
                    Recursos Financieros.
                  </p>
                  <p>
                    <strong>Domicilio: </strong>Santiago 652 – San Miguel de
                    Tucumán – CP: 4000
                    <br />
                    <strong>Tel:</strong> Tel: (0381) 4526581 – 4526582 –
                    4526583
                    <br />
                    <strong>Email:</strong>{" "}
                    comunicacionycapacitacionsumar@gmail.com
                  </p>
                </div>
              </Collapse>
              <Button
                onClick={() => setRemediar(!remediar)}
                aria-controls="example-collapse-textoRemediar"
                aria-expanded={remediar}
                className="mb-3 d-flex"
              >
                Programa<strong> Remediar + Redes (Feaps)</strong>
              </Button>
              <Collapse in={remediar}>
                <div id="example-collapse-textoRemediar" className="m-5">
                  <div className="d-flex justify-content-center">
                    <img src={Redes} alt="" className="fluid w-75" />
                  </div>
                  <p className="my-3">
                    El Ministerio de Salud de la Nación tiene entre sus
                    competencias garantizar la equidad, calidad y accesibilidad
                    a los servicios de salud, y también promover la calidad de
                    los procesos en salud.
                    <br />
                    <br />
                    En este sentido, desde el año 2009, Redes trabaja para
                    fortalecer la calidad de los procesos de la salud, a través
                    del fortalecimiento y la consolidación de las redes
                    provinciales de servicios de salud. Para ello, adopta el
                    concepto de las{" "}
                    <strong>Redes Integradas de Servicios de Salud</strong>
                    -RISS-, una de las principales expresiones operativas para
                    contrarrestar la fragmentación de los sistemas de salud,
                    contribuyendo a concretar varios de sus elementos esenciales
                    tales como la cobertura y el acceso universal, el primer
                    contacto, la atención integral, integrada y continua, el
                    cuidado apropiado, la organización y gestión óptimas,
                    orientación a la acción intersectorial, entre otros
                  </p>
                  <h3>Líneas Estratégicas de Acción</h3>
                  <p>Redes promueve 3 líneas estratégicas de acción:</p>
                  <h5>El fortalecimiento de las redes de servicios de salud</h5>
                  <p>
                    Se materializa a través de la implementación de proyectos
                    provinciales que se proponen avanzar en el desarrollo y
                    coordinación entre los distintos actores de la red, al
                    tiempo que contribuye a la prevención de las enfermedades
                    cardiovasculares mediante la atención integral e integrada
                    de las personas que incluye un diagnóstico precoz, un
                    tratamiento oportuno y el seguimiento adecuado. Para ello,
                    concentran sus esfuerzos en definir circuitos de referencia
                    y contra referencia; implementar sistemas de turnos
                    programados y turnos protegidos; desarrollar sistemas de
                    información para la red; normalizar los procesos de atención
                    mediante guías de práctica clínica; reorganizar la atención
                    especializada en espacios extra hospitalarios; realizar
                    acciones de prevención, promoción y búsqueda activa de
                    personas con vulnerabilidades; y fortalecer la capacidad
                    resolutiva del PNA.
                  </p>
                  <h5>
                    El fortalecimiento de las competencias de los equipos de
                    salud
                  </h5>
                  <p>
                    Se concreta en acciones coordinadas de capacitación
                    destinadas a diferentes actores del PNA y articuladas con
                    las jurisdicciones. Esta línea estratégica se sustenta en
                    que los recursos humanos son el capital más importante que
                    posee una RISS. Las competencias, la cantidad y su
                    distribución, se traducen directamente en la disponibilidad
                    de servicios apropiados para cubrir las necesidades de la
                    población.
                  </p>
                  <h5>
                    El acompañamiento y supervisión de los procesos de gestión
                    clínica
                  </h5>
                  <p>
                    En el PNA encuentra su fundamento en la importancia de la
                    utilización coordinada de los recursos intelectuales,
                    humanos, tecnológicos y organizativos en función de un mejor
                    cuidado de las personas. Para ello, Redes forma equipos de
                    apoyo a la Microgestión para motivar la implementación de
                    procesos de mejora continua de la calidad, contribuir a la
                    construcción de un espacio de educación y aprendizaje en
                    servicio, promover y facilitar la resolución de problemas
                    concretos en la prestación de los servicios, vehiculizar una
                    mejor utilización de los recursos disponibles y procurar una
                    comunicación horizontal, favoreciendo la solución conjunta y
                    participativa de los problemas, entre otros aspectos.
                  </p>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Proyecto Provincial de Tucumán
                  </a>
                  <div className="d-flex justify-content-center">
                    <img src={RedesNacion} alt="" className="fluid w-75" />
                  </div>
                </div>
              </Collapse>
              <Button
                onClick={() => setProteger(!proteger)}
                aria-controls="example-collapse-textoProt"
                aria-expanded={proteger}
                className="mb-3 d-flex"
              >
                Programa
                <strong>
                  {" "}
                  Proteger - Protección de la Población Vulnerable
                </strong>
              </Button>
              <Collapse in={proteger}>
                <div id="example-collapse-textoProt" className="m-5">
                  <h3>Protección de la Población Vulnerable</h3>
                  <div>
                    <img src={Proteger} alt="" />
                  </div>
                  <p>
                    FORTALECIENDO LA ESTRATEGIA NACIONAL DE PREVENCIÓN Y CONTROL
                    DE ENFERMEDADES NO TRANSMISIBLES:
                    <br />
                    <i>
                      “Proyecto de Protección de la población vulnerable contra
                      las enfermedades crónicas no transmisibles”
                    </i>
                    <br /> <br />
                    El “Proyecto de Protección de la población vulnerable contra
                    las enfermedades crónicas no transmisibles”, con
                    financiamiento del Banco Mundial, supone un apoyo financiero
                    para fortalecer las actividades que actualmente se llevan a
                    cabo en el marco de la dicha estrategia y profundizar el
                    alcance de la misma, mediante otras actividades que
                    actualmente no se están desarrollando
                  </p>
                  <h5>El Proyecto tiene dos objetivos:</h5>
                  <ol>
                    <li>
                      <i>
                        <strong>
                          Mejorar las condiciones de los centros públicos de
                          atención ambulatoria para brindar servicios de alta
                          calidad en las ENT para los grupos de población
                          vulnerable, expandiendo el alcance de servicios
                          seleccionados
                        </strong>
                      </i>
                    </li>
                    <li>
                      <i>
                        <strong>
                          Proteger a los grupos de población vulnerable de los
                          factores de riesgo para las Enfermedades Crónicas No
                          Transmisibles de mayor prevalencia.
                        </strong>
                      </i>
                    </li>
                  </ol>
                  <h5>
                    Está conformado por tres componentes que acompañan la
                    Estrategia Nacional:
                  </h5>
                  <p>
                    <strong>Componente 1: </strong>Mejorar las condiciones de
                    los centros de atención primaria de la salud públicos para
                    proveer servicios de mayor calidad para Enfermedades No
                    Transmisibles a los grupos vulnerables, y expandir el
                    alcance de los servicios seleccionados.
                    <br />
                    Se trabajará en los CAPS públicos que concentran el 70% de
                    las consultas de cada provincia con el objetivo de
                    fortalecer los servicios de salud para que puedan proveer
                    cuidados continuos y programados a personas con ENT y/o sus
                    factores de riesgo.
                    <br />
                    <br />
                    <strong>Componente 2: </strong>Protección de los grupos de
                    población vulnerable contra los factores de riesgo de
                    Enfermedades Crónicas No Transmisibles de mayor prevalencia.
                    <br />
                    Su objetivo fundamental es consolidar las unidades de ENT
                    provinciales para implementar, a nivel provincial y
                    municipal, intervenciones de base poblacional focalizadas en
                    la promoción de estilos de vida saludables, mediante
                    estrategias de promoción de actividad física; de hábitos de
                    alimentación saludables; y de ambientes 100% libres de humo
                    de tabaco.
                    <br />
                    <br />
                    <strong>Componente 3: </strong>Apoyo a los Ministerios de
                    Salud Nacional y Provinciales a mejorar la vigilancia, el
                    monitoreo, la promoción, la prevención y el control de las
                    Enfermedades Crónicas No Transmisibles, lesiones y sus
                    factores de riesgo.
                    <br />
                    Su objetivo es mejorar las capacidades del Ministerio de
                    Salud de la Nación, el Instituto Nacional de Alimentos
                    (INAL), el Instituto Nacional de Cáncer (INC), y los
                    Ministerios de Salud Provinciales en la vigilancia, el
                    monitoreo, la promoción, la prevención y el control de las
                    Enfermedades Crónicas No Transmisibles, lesiones y sus
                    factores de riesgo.
                    <br />
                    Al finalizar el “Proyecto de Protección de la población
                    vulnerable contra las enfermedades crónicas no
                    transmisibles” se espera haber contribuido a incrementar las
                    capacidades del Ministerio de Salud de la Nación y los
                    Ministerios de Salud de las provincias en el desarrollo de
                    políticas sanitarias que:
                    <br />
                    <ol>
                      <li>
                        Incrementen las capacidades para reducir la exposición
                        de la población a factores de riesgo de ENT.
                      </li>
                      <li>
                        Mejoren los sistemas de vigilancia epidemiológica de ENT
                        y sus factores de riesgo; y los sistemas de evaluación
                        de las estrategias implementadas.
                      </li>
                      <li>
                        Contribuyan a la mejora de las capacidades de los
                        servicios de salud en atención, prevención y control de
                        ENT.
                      </li>
                    </ol>
                  </p>
                </div>
              </Collapse>
              <Button
                onClick={() => setMunicipio(!municipio)}
                aria-controls="example-collapse-textoMunicipio"
                aria-expanded={municipio}
                className="mb-3 d-flex"
              >
                Programa<strong> Municipios y Comunidades Saludables</strong>
              </Button>
              <Collapse in={municipio}>
                <div id="example-collapse-textoMunicipio" className="m-5">
                  <h4>Objetivo del programa</h4>
                  <p>
                    Abordar integralmente los determinantes y condicionantes de
                    la salud que son:
                  </p>
                  <ul>
                    <li>
                      Estilos de vida, Socio economico, Medio ambiental y
                      Asistencial.
                    </li>
                    <li>Desarrollar y fortalecer la intersectorialidad.</li>
                    <li>Desarrollar capacidades institucionales.</li>
                  </ul>
                  <h4>Propósito</h4>
                  <p>
                    Promover y fortalecer en los municipios el desarrollo de
                    políticas públicas que aborden de manera integral los
                    determinantes y condicionantes de la salud
                  </p>
                  <h4>Foco Estratégico</h4>
                  <p>
                    Los determinantes y condicionantes de la salud en las
                    variables: modos de vida, sistemas y servicios de salud,
                    socioeconómicos y ambientales. Historia del Programa
                    Nacional.
                    <br />
                    <br />
                    Desde el año 2001, la estrategia Municipios y Comunidades
                    Saludables (MCS) comienza a crecer entre los gobiernos
                    locales, siendo alentada desde el Gobierno Nacional como
                    forma de profundizar el compromiso con el desarrollo de
                    políticas públicas saludables a través de proyectos locales
                    participativos de promoción de la salud.
                    <br />
                    <br />
                    Dicha estrategia se expande a través de la modalidad de Red
                    interinstitucional de Municipios visualizando la necesidad
                    de profundizar el compromiso rector del Estado Nacional en
                    dicho proceso.
                    <br />
                    <br />
                    La República Argentina adhiere entonces a la iniciativa
                    impulsada por la Organización Mundial de la Salud (OMS) y la
                    Organización Panamericana de la Salud (OPS) con relación al
                    movimiento Municipios y Comunidades Saludables a través del
                    Ministerio de Salud de la Nación (MSN). En el año 2003 se
                    crea la Coordinación Operativa de la Red Argentina de
                    Municipios y Comunidades Saludables, a través de la
                    Resolución 246/03.
                    <br />
                    <br />
                    Esta decisión mostró avances significativos en la
                    instalación de la estrategia MCS al generarse de manera
                    efectiva distintas iniciativas orientadas, particularmente,
                    a la promoción de hábitos de vida saludables.
                    <br />
                    <br />
                    Hacia el mes de diciembre del año 2007, 387 municipios
                    formaban parte de la Red, 258 en carácter de Adherentes y
                    129 en carácter de Titulares.
                    <br />
                    <br />
                    Este desarrollo suponía una importante extensión territorial
                    de la Red y la consolidación de la identidad “Municipios y
                    Comunidades Saludables”. No obstante estas fortalezas, se
                    enfrentaba al desafío de profundizar los procesos en el
                    nivel local fortaleciendo el desarrollo de capacidades
                    institucionales en los municipios para “promover salud”,
                    mejorando la articulación con el nivel provincial.
                    <br />
                    <br />
                    De acuerdo con lo antes mencionado, resulta necesario
                    avanzar en abordajes más comprensivos e integrales de los
                    problemas de la salud. En línea con los desarrollos teórico
                    políticos más recientes se crea, en la estructura
                    organizacional del Ministerio de Salud de la Nación, la
                    Secretaría de Determinantes de la Salud y Relaciones
                    Sanitarias.
                    <br />
                    <br />
                    Tributaria de los principios de “Salud para Todos” y de
                    “Atención Primaria de Salud” contenidos en la Declaración de
                    Alma Ata y en la Carta de Ottawa para la promoción de la
                    salud, se busca promover el desarrollo de intervenciones
                    que, basadas en la evidencia disponible, mejoren la salud y
                    disminuyan las inequidades sanitarias.
                    <br />
                    <br />
                    Con esta finalidad y reconociendo el carácter estratégico
                    que adquiere el espacio local para el diseño y gestión de
                    políticas públicas que articulen sectores, programas y
                    jurisdicciones en función de las necesidades y demandas de
                    cada territorio, tal como estaba previsto, se creó el
                    Programa Nacional Municipios y Comunas Saludables.
                  </p>
                  <Link to={"."} className="">
                    <p>Estatuto</p>
                  </Link>
                  <a
                    href="https://www.argentina.gob.ar/salud/municipios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver el sitio oficial de la Red
                  </a>
                </div>
              </Collapse>
              <Button
                onClick={() => setEquipo(!equipo)}
                aria-controls="example-collapse-textoEquipo"
                aria-expanded={equipo}
                className="mb-3 d-flex"
              >
                Programa <strong> Equipos Comunitarios</strong>
              </Button>
              <Collapse in={equipo}>
                <div id="example-collapse-textoEquipo" className="m-5">
                  <p>
                    El Programa de Equipos Comunitarios (PEC) busca integrar los
                    equipos de salud del primer nivel de atención los cuales
                    están constituidos por agentes comunitarios de diversas
                    disciplinas; para reforzar así el abordaje
                    interdisciplinario que el Programa desarrolla desde hace
                    años.
                    <br />
                    <br />
                    Fortaleciendo así al RRHH en el primer nivel de atención con
                    el propósito de la consolidación de los sistemas de salud
                    locales, los Comunitarios por ello se convierten en
                    protagonistas del proceso de cambio del modelo de atención.
                    <br />
                    <br />
                    El objetivo es reconocer y atender las necesidades
                    sanitarias de la población e implementar prácticas de
                    prevención y promoción de la salud.
                    <br />
                    <br />
                    Son quienes, en definitiva, encabezan el proceso de
                    fortalecimiento de la estrategia de Atención Primaria.
                  </p>
                  <h4>Lineamientos estratégicos</h4>
                  <ul>
                    <li>Promoción de la participación comunitaria</li>
                    <li>Desarrollo de redes locales</li>
                    <li>
                      Implementación de prácticas de prevención y promoción de
                      la salud
                    </li>
                    <li>Trabajo en equipo interdisciplinario</li>
                  </ul>
                  <h4>Líneas de Capacitación PEC</h4>
                  <ul>
                    <li>
                      <strong>Posgrado en Salud Social y Comunitaria -</strong>
                      (Duración: 2 años. Destinatarios: Profesionales).
                    </li>
                    <li>
                      <strong>Curso en Salud Social y Comunitaria -</strong>
                      (Duración: 1 año. Destinatarios: Agentes Sanitarios;
                      Agentes Sanitarios Indígenas, Auxiliares de Enfermería,
                      Promotores de Salud)
                    </li>
                    <li>
                      <strong>Capacitación Permanente en Servicio -</strong>
                      Permite afianzar el trabajo en equipo; consolidar la
                      capacitación; acompañar los procesos de trabajo; y
                      promover la reflexión sobre sus prácticas; siempre
                      teniendo en cuenta la realidad socio sanitaria local y las
                      problemáticas de salud prevalentes y emergentes.
                    </li>
                  </ul>
                  <Button
                    onClick={() => setAutoridades(!autoridades)}
                    aria-controls="example-collapse-textoAutoridades"
                    aria-expanded={autoridades}
                    className="mb-3 d-flex"
                    variant="outline-primary"
                  >
                    Autoridades
                  </Button>
                  <Collapse in={autoridades}>
                    <div id="example-collapse-textoAutoridades" className="m-2">
                      <h4>Autoridades</h4>
                      <h5>Ministra de la Salud de Nación</h5>
                      <ul>
                        <li>Dra. Carla Vizzotti</li>
                      </ul>
                      <h5>Referente Nacional</h5>
                      <ul>
                        <li>Dra. Verónica Michur</li>
                      </ul>
                      <h5>Ministro de Salud de la Provincia</h5>
                      <ul>
                        <li>Dr. Luis Medina Ruiz</li>
                      </ul>
                      <h5>Referente Provincial</h5>
                      <ul>
                        <li>Farm. Luis Zelada</li>
                      </ul>
                    </div>
                  </Collapse>
                  <Button
                    onClick={() => setCreacion(!creacion)}
                    aria-controls="example-collapse-textoCreacion"
                    aria-expanded={creacion}
                    className="mb-3 d-flex"
                    variant="outline-primary"
                  >
                    Creación
                  </Button>
                  <Collapse in={creacion}>
                    <div id="example-collapse-textoCreacion" className="m-2">
                      <h4>Creación</h4>
                      <p>
                        El Programa fue creado a través de un convenio entre el
                        Ministerio de Salud de la Nación y el Ministerio de
                        Salud Pública de la provincia de Tucumán, para el
                        desarrollo del programa de equipos
                        comunitarios-cobertura universal de salud, en cuya
                        Resolución Nro. 915/2004 manifiesta:
                      </p>
                      <ul>
                        <li>
                          Que el presente Convenio sigue los lineamientos del
                          Programa Médicos Comunitarios
                        </li>
                        <li>
                          Que el mentado Programa ha sido legalmente creado a
                          través de la Resolución Nro. 915/2004 del Ministerio
                          de Salud de la Nación.
                        </li>
                        <li>
                          Que bajo la Resolución N° 439 del año 2011, se
                          modificó su nombre por el de “Programa Médicos
                          Comunitarios - Equipos de Salud del Primer Nivel de
                          Atención”.
                        </li>
                        <li>
                          Equipos Comunitarios - Cobertura Universal de Salud”,
                          en adelante el Programa.
                        </li>
                        <li>
                          Que la resolución Nro. 915/2004, sus modificatorias y
                          sus complementarias. Resolución Nro. 1077/2004,
                          Resolución Nro. 118/2009, Resolución Nro. 250/2009,
                          Resolución Nro. 439/2011, constituyen el marco legal
                          aplicable respecto del mismo.
                        </li>
                      </ul>
                      <p className="text-center text-info">
                        Que la denominación del Programa, a partir de la
                        Resolución Nro. N° 1653-E/2016 con su publicación en el
                        Boletín Oficial, el Programa Médicos Comunitarios pasó a
                        denominarse “Programa de Equipos Comunitarios –
                        Cobertura Universal de Salud”.
                      </p>
                    </div>
                  </Collapse>
                  <Button
                    onClick={() => setObjetivo(!objetivo)}
                    aria-controls="example-collapse-textoObjetivo"
                    aria-expanded={objetivo}
                    className="mb-3 d-flex"
                    variant="outline-primary"
                  >
                    Objetivo
                  </Button>
                  <Collapse in={objetivo}>
                    <div id="example-collapse-textoObjetivo" className="m-2">
                      <p>
                        El objeto es asegurar, en el marco de la Cobertura
                        Universal de Salud (Decreto N° 908/16 y Resolución del
                        Ministerio de Salud de la Nación N° 475/16), el
                        fortalecimiento del Primer Nivel de Atención a través de
                        los Equipos de Comunitarios financiados por el
                        MINISTERIO y capacitados por universidades y/o el
                        MINISTERIO mediante la realización de capacitaciones en
                        Salud Social y Comunitaria y en Atención Primaria de la
                        Salud y Fortalecimiento del Primer Nivel de Atención.
                        <br />
                        Se entiende por “Comunitarios” a los profesionales y no
                        profesionales de distintas disciplinas financiados y
                        capacitados por el MINISTERIO.
                      </p>
                      <h5>
                        Objetivos específicos - Cobertura Universal de Salud
                      </h5>
                      <ul>
                        <li>
                          Desarrollar las actividades propias del Programa, las
                          cuales estarán a cargo de los Comunitarios.
                        </li>
                        <li>
                          Articular acciones territoriales con los programas
                          nacionales en el marco de la Cobertura Universal de
                          Salud.
                        </li>
                        <li>
                          Fortalecer a los Comunitarios del Primer Nivel de
                          Atención en los Sistemas de Salud Jurisdiccionales, a
                          través del financiamiento y formación de Equipos en
                          Salud, social y comunitaria, y de capacitaciones sobre
                          herramientas de gestión, planificación y problemas de
                          salud prevalentes y emergentes.
                        </li>
                        <li>
                          Llevar a cabo acciones de prevención y promoción de la
                          salud en el Primer Nivel de Atención, garantizando la
                          accesibilidad, integralidad y calidad en la relación
                          salud-enfermedad-atención.
                        </li>
                        <li>
                          Asegurar la optimización de todos los recursos
                          disponibles, articulando los programas de salud
                          nacionales, provinciales y municipales en el Efector
                          de Salud.
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                  <Button
                    onClick={() => setMision(!mision)}
                    aria-controls="example-collapse-textoMision"
                    aria-expanded={mision}
                    className="mb-3 d-flex"
                    variant="outline-primary"
                  >
                    Misión y Visión
                  </Button>
                  <Collapse in={mision}>
                    <div id="example-collapse-textoMision" className="m-2">
                      <h5>Misión</h5>
                      <p>
                        Fortalecer los Equipos de Salud del Primer Nivel de
                        Atención, que están integrados por agentes comunitarios
                        de diversas disciplinas, para el abordaje
                        interdisciplinario, el desarrollo de acciones de
                        protección, promoción y prevención en sus actividades en
                        el marco de la Cobertura Universal de Salud, con activa
                        participación de la Comunidad.
                      </p>
                      <h5>Visión</h5>
                      <p>
                        Fortalecer la participación de la comunidad para el
                        logro de una ciudadanía activa, impulsando y
                        fortaleciendo el trabajo intersectorial y la
                        construcción de redes comunitarias para dar respuesta a
                        los problemas de salud de mayor complejidad.
                      </p>
                    </div>
                  </Collapse>
                  <h4>Ejes temáticos de los comunitarios</h4>
                  <ul>
                    <li>
                      Los Comunitarios deberán incorporarse a los Efectores de
                      Salud para desarrollar las actividades de asistencia,
                      prevención y promoción de la salud, eligiendo alguna de
                      las modalidades propuestas a continuación y cuya
                      retribución se detalla en el ANEXO I del presente
                      Convenio, el cual podrá ser objeto de actualización a
                      criterio del MINISTERIO.
                    </li>
                  </ul>
                  <h4>Modalidades</h4>
                  <p>
                    La distribución de las horas en asistenciales y actividades
                    extramuros se acordará entre el MINISTERIO y la
                    JURISDICCIÓN.
                  </p>
                  <ul>
                    <li>
                      <strong>Modalidad 1:30 hs.:</strong>20 hs son
                      asistenciales - 10 hs en Terreno para trabajo comunitario
                    </li>
                    <li>
                      <strong>Modalidad 2:15 hs.:</strong>10 hs son
                      asistenciales - 5 hs en Terreno para trabajo comunitario
                    </li>
                    <li>
                      <strong>Horas semanales de Lunes a Viernes</strong>
                      programadas de acuerdo a las necesidades de la Comunidad y
                      del Servicio
                    </li>
                  </ul>
                  <p>
                    Una vez seleccionada la modalidad, los Comunitarios deberán
                    presentar a la JURISDICCIÓN la declaración jurada de
                    horarios que se detalla en ANEXO II, la cual deberá
                    actualizarse en caso de presentarse modificaciones. La
                    JURISDICCIÓN.
                    <br />
                    <br />
                    Cambios de horarios los mismos deben ser consensuados entre
                    los Directores de Áreas Programáticas, Operativas, Jefe del
                    servicio y el Becario, cuyo visado será de pertinencia, de
                    esta Coordinación provincial para su No Objeción, debiendo
                    remitir la nueva Declaración Jurada de horarios
                  </p>
                  <ul>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Archivos de Interés</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Links de Interés</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Bibliografía</a></li>
                  </ul>
                </div>
              </Collapse>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="d-flex m-5">
          <img src={OrganPri} alt="Organigrama PRI" className="w-100" />
        </div>
      </section>
    </div>
  );
};

export default DireccionGralProgIntSal;
