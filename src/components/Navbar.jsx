import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserInfo, UserName, LogoutBtn } from './styles';
import Logo from './Logo';

const Navbar = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout, isAdmin, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
      <div className="nav-links">
        <Link to="/explore" className="nav-link">Explorar</Link>
        {isLoggedIn && (
          <Link to="/cart" className="nav-link cart-link">
            Carrito
            <span className="cart-badge">{cart.length}</span>
          </Link>
        )}
        {isLoggedIn && isAdmin() && (
          <Link to="/admin" className="nav-link">Admin</Link>
        )}
        {!isLoggedIn && <Link to="/login" className="nav-link">Iniciar sesión</Link>}
        {!isLoggedIn && <Link to="/register" className="nav-link">Registrarse</Link>}
        {isLoggedIn && (
          <UserInfo>
            <UserName>
              {userData?.nombre} {userData?.apellido}
            </UserName>
            <LogoutBtn onClick={handleLogout}>
              Cerrar sesión
            </LogoutBtn>
          </UserInfo>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
