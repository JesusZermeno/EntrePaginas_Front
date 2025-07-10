import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentModal = ({ isOpen, onClose, onSuccess }) => {
  const { cart, clearCart } = useCart();
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const total = cart.reduce((sum, book) => sum + (parseFloat(book.precio) || 9.99), 0).toFixed(2);

  useEffect(() => {
    if (userData) {
      setCardholderName(`${userData.nombre} ${userData.apellido}`);
    }
  }, [userData]);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const validateForm = () => {
    if (!cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      setError('Número de tarjeta inválido');
      return false;
    }
    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
      setError('Fecha de expiración inválida');
      return false;
    }
    if (!cvv.match(/^\d{3,4}$/)) {
      setError('CVV inválido');
      return false;
    }
    if (!cardholderName.trim()) {
      setError('Nombre del titular requerido');
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const orderData = {
        items: cart.map(book => ({
          id: book.id,
          titulo: book.titulo,
          precio: parseFloat(book.precio) || 9.99,
          imagen: book.imagen
        })),
        total: parseFloat(total),
        customerInfo: {
          nombre: userData?.nombre || '',
          apellido: userData?.apellido || '',
          email: userData?.gmail || ''
        },
        paymentInfo: {
          cardNumber: cardNumber.replace(/\s/g, ''),
          expiryDate,
          cvv,
          cardholderName
        }
      };

      const response = await axios.post('https://bibliotecav2.onrender.com/api/payment', orderData);
      
      if (response.data.success) {
        clearCart();
        onSuccess(response.data.orderId);
        onClose();
        navigate('/payment-success');
      } else {
        setError(response.data.error || 'Error en el procesamiento del pago');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error al procesar el pago. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="payment-modal-header">
          <h3>Procesar Pago</h3>
          <button onClick={onClose} className="payment-close-btn">&times;</button>
        </div>
        
        <div className="payment-modal-content">
          <div className="order-summary">
            <h4>Resumen del Pedido</h4>
            <div className="order-items">
              {cart.map(book => (
                <div key={book.id} className="order-item">
                  <img src={book.imagen || 'https://via.placeholder.com/50x70?text=No+Image'} alt={book.titulo} />
                  <div>
                    <p className="order-item-title">{book.titulo}</p>
                    <p className="order-item-price">${book.precio || '9.99'}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <strong>Total: ${total}</strong>
            </div>
          </div>

          <form onSubmit={handlePayment} className="payment-form">
            <div className="form-group">
              <label>Nombre del Titular</label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="Nombre como aparece en la tarjeta"
                required
              />
            </div>

            <div className="form-group">
              <label>Número de Tarjeta</label>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>

            <div className="card-details">
              <div className="form-group">
                <label>Fecha de Expiración</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  placeholder="123"
                  maxLength="4"
                  required
                />
              </div>
            </div>

            {error && <div className="payment-error">{error}</div>}

            <button 
              type="submit" 
              className="payment-submit-btn" 
              disabled={loading}
            >
              {loading ? 'Procesando...' : `Pagar $${total}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 