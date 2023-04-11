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


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/ministerio" element={<Ministerio></Ministerio>}></Route>
        <Route exact path="/direcciones" element={<Direcciones></Direcciones>}></Route>
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