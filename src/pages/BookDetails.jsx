import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`https://bibliotecav2.onrender.com/api/libros/${id}`)
      .then(res => setBook(res.data))
      .catch(() => setError('Error al cargar detalles del libro.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{textAlign: 'center'}}>Cargando detalles...</p>;
  if (error) return <p style={{color: 'red', textAlign: 'center'}}>{error}</p>;
  if (!book) return null;

  return (
    <div className="details-container">
      <div>
        <img 
          src={book.imagen || 'https://via.placeholder.com/200x300?text=No+Image'} 
          alt={book.titulo} 
          className="details-cover"
        />
      </div>
      <div className="details-info">
        <h2 className="details-title">{book.titulo}</h2>
        <p className="details-author">
          {book.autores && book.autores.length ? book.autores.join(', ') : 'Autor desconocido'}
        </p>
        <div className="details-meta">
          {book.fecha_publicacion && <div><b>Fecha de publicación:</b> {book.fecha_publicacion}</div>}
          {book.editorial && <div><b>Editorial:</b> {book.editorial}</div>}
          {book.paginas ? <div><b>Páginas:</b> {book.paginas}</div> : null}
          {book.categorias && book.categorias.length > 0 && (
            <div><b>Categorías:</b> {book.categorias.join(', ')}</div>
          )}
        </div>
        <p className="details-desc">{book.descripcion}</p>
        
        {/* PDF Link from admin */}
        {book.pdf_url && (
          <div style={{marginTop: '1rem'}}>
            <a 
              href={book.pdf_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-link"
              style={{
                background: '#34c759',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '500',
                marginRight: '1rem'
              }}
            >
              📖 Leer PDF
            </a>
          </div>
        )}
        
        {/* Original download links */}
        {book.disponible_para_descarga && (
          <div style={{marginTop: '1rem'}}>
            <b>Descargar:</b>
            {book.download_links.pdf && (
              <a 
                href={book.download_links.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-link"
              >
                PDF
              </a>
            )}
            {book.download_links.epub && (
              <a 
                href={book.download_links.epub} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-link"
              >
                EPUB
              </a>
            )}
          </div>
        )}
        <div style={{marginTop: '2rem'}}>
          <b>Precio:</b> ${book.precio || '9.99'}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
