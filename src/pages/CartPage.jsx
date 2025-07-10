import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import PaymentModal from '../components/PaymentModal';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  if (!isLoggedIn) return <div className="cart-empty">Debes iniciar sesión para ver el carrito.</div>;
  if (!cart.length) return <div className="cart-empty">Tu carrito está vacío.</div>;

  const total = cart.reduce((sum, book) => sum + (parseFloat(book.precio) || 9.99), 0).toFixed(2);

  const handlePaymentSuccess = (orderId) => {
    console.log('Payment successful! Order ID:', orderId);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      <div className="cart-list">
        {cart.map(book => (
          <div key={book.id} className="cart-item">
            <img 
              src={book.imagen || 'https://via.placeholder.com/70x100?text=No+Image'} 
              alt={book.titulo} 
              className="cart-cover"
            />
            <div className="cart-info">
              <Link to={`/book/${book.id}`} className="cart-book-title">{book.titulo}</Link>
              <p className="cart-author">
                {book.autores && book.autores.length ? book.autores.join(', ') : 'Autor desconocido'}
              </p>
            </div>
            <div>${book.precio || '9.99'}</div>
            <button onClick={() => removeFromCart(book.id)} className="remove-btn">Quitar</button>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${total}</div>
      <div className="cart-actions">
        <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
        <button 
          onClick={() => setShowPaymentModal(true)} 
          className="checkout-btn"
        >
          Proceder al Pago
        </button>
      </div>
      
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CartPage;
