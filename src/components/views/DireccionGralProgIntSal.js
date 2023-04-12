import React, { useState } from "react";
import { Accordion, Dropdown } from "react-bootstrap";
import OrganPri from "../../img/OrganigramaPRI.jpg";
import { Collapse, Button } from "react-bootstrap";

const DireccionGralProgIntSal = () => {
  const [open, setOpen] = useState(false);

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
                  <div id="example-collapse-text" className="my-4">
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
                      <strong>NOTA:</strong>Toda las actividades enunciadas son{" "}
                      <strong>supervisadas</strong> por el{" "}
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
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="mb-3 d-flex"
                >
                  DIVISIÓN ODONTOLOGIA
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="my-4">
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
                      <strong>NOTA:</strong>Toda las actividades enunciadas son{" "}
                      <strong>supervisadas</strong> por el{" "}
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
              </div>
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
