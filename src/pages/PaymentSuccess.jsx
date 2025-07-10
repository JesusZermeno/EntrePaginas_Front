import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'N/A';

  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <div className="success-icon">✅</div>
        <h1>¡Pago Exitoso!</h1>
        <p>Tu pedido ha sido procesado correctamente.</p>
        
        <div className="order-details">
          <h3>Detalles del Pedido</h3>
          <p><strong>Número de Orden:</strong> {orderId}</p>
          <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="next-steps">
          <h3>Próximos Pasos</h3>
          <ul>
            <li>Recibirás un email de confirmación con los detalles de tu compra</li>
            <li>Los libros estarán disponibles para descarga en tu cuenta</li>
            <li>Puedes acceder a tus libros desde la sección "Mis Libros"</li>
          </ul>
        </div>

        <div className="success-actions">
          <Link to="/" className="home-btn">
            Volver al Inicio
          </Link>
          <Link to="/explore" className="explore-btn">
            Explorar Más Libros
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 