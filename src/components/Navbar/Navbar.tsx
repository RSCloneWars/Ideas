import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Icon from '@/assets/svg/004-hat.svg';

const NaviBar: React.FC = () => (
  <div className="bg-light">
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand>RSCook</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Main page
          </Link>
          <Link className="nav-link" to="/search">
            Let's search
          </Link>
          <Link className="nav-link" to="/ingrsearch">
            Lets's look in fridge
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/profile">
            Your kitchen
            <Icon />
        </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NaviBar;
