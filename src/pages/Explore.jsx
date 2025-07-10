import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const Explore = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBooks = (search) => {
    setLoading(true);
    setError('');
    const url = search
      ? `https://bibliotecav2.onrender.com/api/buscar_libros?query=${encodeURIComponent(search)}`
      : 'https://bibliotecav2.onrender.com/api/libros';
    axios.get(url)
      .then(res => setBooks(res.data.resultados || []))
      .catch(() => setError('Error al cargar libros.'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBooks('');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <div className="explore-container">
      <h2>Explorar libros</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título, autor..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
      {loading && <p style={{textAlign: 'center'}}>Cargando libros...</p>}
      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
      {!loading && !error && (
        <div className="explore-grid">
          {books.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
