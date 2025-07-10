import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
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
      const res = await axios.post('https://bibliotecav2.onrender.com/api/iniciar_sesion', { email, password });
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
      setError(err.response?.data?.error || 'Error al iniciar sesión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Iniciar sesión</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="auth-input"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
      {error && <div className="auth-error">{error}</div>}
    </div>
  );
};

export default Login;
