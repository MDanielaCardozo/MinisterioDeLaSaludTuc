import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import Direcciones from './components/views/Direcciones';
import Hospitales from './components/views/Hospitales';
import CentrosSanitarios from './components/views/CentrosSanitarios';
import InformacionSanitaria from './components/views/InformacionSanitaria';
import ProgramaDeSalud from './components/views/ProgramaDeSalud';
import Noticias from './components/views/Noticias';
import Footer from './components/common/Footer';
import Ministerio from './components/views/Ministerio';
import DireccionGralEnfermeria from './components/views/DireccionGralEnfermeria';
import DireccionGralSaludAmb from './components/views/DireccionGralSaludAmb';
import DireccionGralRedDeServ from './components/views/DireccionGralRedDeServ';
import DireccionGralProgIntSal from './components/views/DireccionGralProgIntSal';
import DireccionGralFiscSanit from './components/views/DireccionGralFiscSanit';
import DireccionGralRecursosHum from './components/views/DireccionGralRecursosHum';
import DireccionGralDeTecnoMedica from './components/views/DireccionGralDeTecnoMedica';
import DireccionGralDeSaludMentalAdic from './components/views/DireccionGralDeSaludMentalAdic';
import DireccionGralDeEpidemiologia from './components/views/DireccionGralDeEpidemiologia';
import DireccionDeInvestigSalud from './components/views/DireccionDeInvestigSalud';
import DepartamentoInformatica from './components/views/DepartamentoInformatica';
import DepartamentoBioquimico from './components/views/DepartamentoBioquimico';


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/ministerio" element={<Ministerio></Ministerio>}></Route>
        <Route exact path="/direcciones" element={<Direcciones></Direcciones>}></Route>
        <Route exact path="/direcciones/direccionGeneralEnfermeria" element={<DireccionGralEnfermeria></DireccionGralEnfermeria>}></Route>
        <Route exact path="/direcciones/direccionGeneralSaludAmbiental" element={<DireccionGralSaludAmb></DireccionGralSaludAmb>}></Route>
        <Route exact path="/direcciones/direccionGeneralRedDeServicios" element={<DireccionGralRedDeServ></DireccionGralRedDeServ>}></Route>
        <Route exact path="/direcciones/direccionGeneralProgramaIntegradoDeSalud" element={<DireccionGralProgIntSal></DireccionGralProgIntSal>}></Route>
        <Route exact path="/direcciones/direccionGeneralFiscalizacionSanitaria" element={<DireccionGralFiscSanit></DireccionGralFiscSanit>}></Route>
        <Route exact path="/direcciones/direccionGeneralDeRecursosHumanos" element={<DireccionGralRecursosHum></DireccionGralRecursosHum>}></Route>
        <Route exact path="/direcciones/direccionGeneralDeGestionTecnologicaMedica" element={<DireccionGralDeTecnoMedica></DireccionGralDeTecnoMedica>}></Route>
        <Route exact path="/direcciones/direccionGeneralDeSaludMentalYAdicciones" element={<DireccionGralDeSaludMentalAdic></DireccionGralDeSaludMentalAdic>}></Route>
        <Route exact path="/direcciones/direccionGeneralDeEpidemiologia" element={<DireccionGralDeEpidemiologia></DireccionGralDeEpidemiologia>}></Route>
        <Route exact path="/direcciones/direccionDeInvestigacionEnSalud" element={<DireccionDeInvestigSalud></DireccionDeInvestigSalud>}></Route>
        <Route exact path="/direcciones/departamentoInformatica" element={<DepartamentoInformatica></DepartamentoInformatica>}></Route>
        <Route exact path="/direcciones/departamentoBioquimico-LaboratorioDeSaludPublica" element={<DepartamentoBioquimico></DepartamentoBioquimico>}></Route>
        <Route exact path="/hospitales" element={<Hospitales></Hospitales>}></Route>
        <Route exact path="/centrosSanitarios" element={<CentrosSanitarios></CentrosSanitarios>}></Route>
        <Route exact path="/informacionSanitaria" element={<InformacionSanitaria></InformacionSanitaria>}></Route>
        <Route exact path="/programaDeSalud" element={<ProgramaDeSalud></ProgramaDeSalud>}></Route>
        <Route exact path="/noticias" element={<Noticias></Noticias>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
};

export default App;