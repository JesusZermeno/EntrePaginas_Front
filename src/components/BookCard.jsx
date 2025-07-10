import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const BookCard = ({ id, imagen, titulo, autores, precio, pdf_url }) => {
  const { cart, addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const inCart = cart.some(item => item.id === id);
  
  return (
    <div className="book-card">
      <img 
        src={imagen || 'https://via.placeholder.com/100x150?text=No+Image'} 
        alt={titulo} 
        className="book-cover"
      />
      <h3 className="book-title">{titulo}</h3>
      <p className="book-author">
        {autores && autores.length ? autores.join(', ') : 'Autor desconocido'}
      </p>
      <div className="book-price">{precio || '9.99'}</div>
      <div className="button-group">
        <Link to={`/book/${id}`} className="details-button">Ver detalles</Link>
        {pdf_url && (
          <a 
            href={pdf_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-button"
            style={{
              background: '#34c759',
              color: '#fff',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: '500',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              width: '100%',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            📖 Leer PDF
          </a>
        )}
        <button
          className="add-button"
          onClick={() => addToCart({ id, imagen, titulo, autores, precio })}
          disabled={!isLoggedIn || inCart}
          title={isLoggedIn ? (inCart ? 'Ya en carrito' : 'Agregar al carrito') : 'Inicia sesión para agregar al carrito'}
        >
          {inCart ? 'En carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
