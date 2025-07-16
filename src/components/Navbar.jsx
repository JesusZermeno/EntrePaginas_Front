import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const AppNavbar = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout, isAdmin, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg" >
      {/* fluid para usar el ancho completo */}
      <Container fluid className="px-3">
        {/* Brand full izquierda */}
        <Navbar.Brand as={Link} to="/" className="p-0">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapse full derecha */}
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/" className="mx-3">
              Inicio
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/explore">
              Explorar
            </Nav.Link>

            {isLoggedIn && (
              <Nav.Link
                as={Link}
                to="/cart"
                className="d-flex align-items-center mx-3"
              >
                Carrito
                <Badge bg="secondary" pill className="ms-1">
                  {cart.length}
                </Badge>
              </Nav.Link>
            )}

            {isLoggedIn && isAdmin() && (
              <Nav.Link className="mx-3" as={Link} to="/admin">
                Admin
              </Nav.Link>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link className="mx-3" as={Link} to="/login">
                  Iniciar sesión
                </Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/register">
                  Registrarse
                </Nav.Link>
              </>
            )}

            {isLoggedIn && (
              <NavDropdown
                title={`${userData?.nombre} ${userData?.apellido}`}
                id="user-nav-dropdown"
                align="end"
                className="mx-3"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
