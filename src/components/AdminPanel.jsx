import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { isAdmin } = useAuth();
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [nuevoLibro, setNuevoLibro] = useState({
    id: '',
    titulo: '',
    autores: '',
    descripcion: '',
    imagen: '',
    precio: '',
    pdf_url: ''
  });

  useEffect(() => {
    if (isAdmin()) {
      cargarLibros();
    }
  }, [isAdmin]);

  const cargarLibros = async () => {
    try {
      const response = await axios.get('https://bibliotecav2.onrender.com/api/admin/libros');
      setLibros(response.data.libros || []);
    } catch (err) {
      setError('Error al cargar libros');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoLibro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const libroData = {
        ...nuevoLibro,
        autores: nuevoLibro.autores.split(',').map(a => a.trim())
      };
      
      const response = await axios.post('https://bibliotecav2.onrender.com/api/admin/libros', libroData);
      
      // Check if the request was successful
      if (response.status === 201 || response.status === 200) {
        setSuccess('Libro agregado exitosamente');
        setNuevoLibro({
          id: '',
          titulo: '',
          autores: '',
          descripcion: '',
          imagen: '',
          precio: '',
          pdf_url: ''
        });
        // Reload the books list
        await cargarLibros();
      } else {
        setError('Error al agregar libro');
      }
    } catch (err) {
      console.error('Error details:', err);
      if (err.response) {
        // Server responded with error status
        setError(err.response.data?.error || 'Error al agregar libro');
      } else if (err.request) {
        // Network error
        setError('Error de conexión. Verifica tu conexión a internet.');
      } else {
        // Other error
        setError('Error al agregar libro');
      }
    }
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      try {
        await axios.delete(`https://bibliotecav2.onrender.com/api/admin/libros/${id}`);
        setSuccess('Libro eliminado exitosamente');
        cargarLibros();
      } catch (err) {
        setError('Error al eliminar libro');
        console.error(err);
      }
    }
  };

  if (!isAdmin()) {
    return (
      <div className="admin-container">
        <div className="admin-error">
          <h2>Acceso Denegado</h2>
          <p>No tienes permisos de administrador para acceder a esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Administración</h1>
      
      <section className="admin-section">
        <h2>Agregar Nuevo Libro</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID del Libro:</label>
            <input
              type="text"
              name="id"
              value={nuevoLibro.id}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>
          
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={nuevoLibro.titulo}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>
          
          <div className="form-group">
            <label>Autores (separados por comas):</label>
            <input
              type="text"
              name="autores"
              value={nuevoLibro.autores}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>
          
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={nuevoLibro.descripcion}
              onChange={handleInputChange}
              required
              className="admin-textarea"
            />
          </div>
          
          <div className="form-group">
            <label>URL de la Imagen:</label>
            <input
              type="url"
              name="imagen"
              value={nuevoLibro.imagen}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>
          
          <div className="form-group">
            <label>Precio:</label>
            <input
              type="text"
              name="precio"
              value={nuevoLibro.precio}
              onChange={handleInputChange}
              required
              className="admin-input"
            />
          </div>
          
          <div className="form-group">
            <label>URL del PDF (opcional):</label>
            <input
              type="url"
              name="pdf_url"
              value={nuevoLibro.pdf_url}
              onChange={handleInputChange}
              placeholder="https://ejemplo.com/libro.pdf"
              className="admin-input"
            />
            <small style={{ color: '#86868b', fontSize: '0.8rem' }}>
              URL donde los usuarios pueden leer el libro en PDF
            </small>
          </div>
          
          <button type="submit" className="admin-button">
            Agregar Libro
          </button>
        </form>
      </section>

      <section className="admin-section">
        <h2>Libros Administrados</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="admin-books-grid">
            {libros.map((libro) => (
              <div key={libro.id} className="admin-book-card">
                <img 
                  src={libro.imagen} 
                  alt={libro.titulo}
                  className="admin-book-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x200?text=No+Image';
                  }}
                />
                <div className="admin-book-info">
                  <h3>{libro.titulo}</h3>
                  <p><strong>Autores:</strong> {libro.autores?.join(', ')}</p>
                  <p><strong>Precio:</strong> {libro.precio}</p>
                  {libro.pdf_url && (
                    <p><strong>PDF:</strong> <a href={libro.pdf_url} target="_blank" rel="noopener noreferrer" style={{ color: '#007aff', textDecoration: 'underline' }}>Ver PDF</a></p>
                  )}
                  <button
                    onClick={() => handleEliminar(libro.id)}
                    className="admin-delete-button"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {error && <div className="admin-error">{error}</div>}
      {success && <div className="admin-success">{success}</div>}
    </div>
  );
};

export default AdminPanel; 