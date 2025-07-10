import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('https://bibliotecav2.onrender.com/api/registrarse', {
        nombre, apellido, gmail, password, tipo: 'normal'
      });
      if (res.data && res.data.uid) {
        // Fetch user data to get role information
        try {
          const userDataRes = await axios.get(`https://bibliotecav2.onrender.com/api/usuario/${res.data.uid}`);
          if (userDataRes.data) {
            login(userDataRes.data);
          } else {
            login(); // Fallback if user data fetch fails
          }
        } catch (userDataErr) {
          console.error('Error fetching user data:', userDataErr);
          login(); // Fallback
        }
        navigate('/');
      } else {
        setError(res.data.error || 'Error desconocido');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrarse.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Registrarse</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="auth-input"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          className="auth-input"
          placeholder="Apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
          required
        />
        <input
          type="email"
          className="auth-input"
          placeholder="Correo electrónico"
          value={gmail}
          onChange={e => setGmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="auth-input"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Cargando...' : 'Registrarse'}
        </button>
      </form>
      {error && <div className="auth-error">{error}</div>}
    </div>
  );
};

export default Register;
