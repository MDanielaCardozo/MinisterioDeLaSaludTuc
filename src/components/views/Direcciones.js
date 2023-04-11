import React from "react";
import "./Direcciones.css";
import { Link } from "react-router-dom";

const Direcciones = () => {
  return (
    <div className="bgColor direcSec">
      <section className="container">
        <div className="my-5">
          <h1>Direcciones Generales y Departamentos</h1>
        </div>
        <Link to={"/direcciones/direccionGeneralEnfermeria"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center pt-4">
            <h4>Dirección General de Enfermería</h4>
          </div>
        </Link>
        <Link to={"/direcciones/direccionGeneralSaludAmbiental"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General de Salud Ambiental</h4>
          </div>
        </Link>
        <Link to={"/direcciones/direccionGeneralRedDeServicios"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General de Red de Servicios</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General de Programa Integrado de Salud</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General Fiscalización Sanitaria</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General Recursos Humanos en Salud</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General de Gestión de Tecnología Médica</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección General de Salud Mental y Adicciones</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección Epidemiología</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Dirección de Investigación en Salud</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Departamento de Informática</h4>
          </div>
        </Link>
        <Link to={"/"} className="text-decoration-none text-light">
          <div className="cardDir text-light text-center my-4 pt-4">
            <h4>Departamento Bioquímico - Laboratorio de Salud Pública</h4>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Direcciones;
