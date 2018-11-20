import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './HeaderNav.css';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
  render() {
    return (
      <header className="Main-Header">
        <Navbar color="dark" dark>
          <NavbarBrand href="#">
            <img className="Brand-Logo"
              src="/logo.png"
              alt="Logo"
            >
            </img> &nbsp; CarApp
          </NavbarBrand>
          <Link to="/NewCar" color="success">Nuevo Auto</Link>
          <Link to="/CarBrowse" color="success">Listado</Link>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNav;