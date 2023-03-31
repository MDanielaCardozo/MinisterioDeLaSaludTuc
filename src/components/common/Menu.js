import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Menu.css";
import Logo from '../../img/logo-msp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
    return (
        <Navbar collapseOnSelect className='mt-0 py-3 colorNav' expand='lg' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            alt='Logo gobierno de Tucumán'
                            src={Logo}
                            width='240px'
                            className='logo'
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="Logo gobierno de Tucumán" width='380px' height='auto' className='logoResponsive'/>
                        </Link>
                    </div>
                    <Nav className='ms-auto'>
                        <NavLink to='/' className='nav-item nav-link hovMenu'><FontAwesomeIcon icon={faHouse} /></NavLink>
                        <NavLink to='/ministerio' className='nav-item nav-link hovMenu'>MINISTERIO</NavLink>
                        <NavLink to='/direcciones' className='nav-item nav-link hovMenu'>DIRECCIONES</NavLink>
                        <NavLink to='/hospitales' className='nav-item nav-link hovMenu'>HOSPITALES</NavLink>
                        <NavLink to='/noticias' className='nav-item nav-link hovMenu'>NOTICIAS</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;