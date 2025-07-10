import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SessionTimeout = () => {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds countdown
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // Activity tracking
  const resetTimer = () => {
    // Clear existing timers
    if (window.sessionTimeout) {
      clearTimeout(window.sessionTimeout);
    }
    if (window.sessionModalTimeout) {
      clearInterval(window.sessionModalTimeout);
    }

    if (showModal) {
      // If modal is showing, reset the countdown
      setTimeLeft(10);
      
      // Start new countdown
      const countdown = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      window.sessionModalTimeout = countdown;
    } else {
      // If modal is not showing, set new 10-second timer
      window.sessionTimeout = setTimeout(() => {
        setShowModal(true);
        setTimeLeft(10);
        
        // Start countdown
        const countdown = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(countdown);
              handleLogout();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        window.sessionModalTimeout = countdown;
      }, 10000); // 10 seconds
    }
  };

  const handleKeepSession = () => {
    setShowModal(false);
    setTimeLeft(10);
    if (window.sessionModalTimeout) {
      clearInterval(window.sessionModalTimeout);
    }
    resetTimer();
  };

  const handleLogout = () => {
    setShowModal(false);
    logout();
    navigate('/');
  };

  // Set up activity listeners
  useEffect(() => {
    if (!isLoggedIn) return;

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      resetTimer();
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Initial timer
    resetTimer();

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      if (window.sessionTimeout) {
        clearTimeout(window.sessionTimeout);
      }
      if (window.sessionModalTimeout) {
        clearInterval(window.sessionModalTimeout);
      }
    };
  }, [isLoggedIn, showModal]);

  if (!isLoggedIn || !showModal) return null;

  return (
    <div className="session-modal-overlay">
      <div className="session-modal">
        <div className="session-modal-content">
          <h3>Tiempo de inactivad expirado</h3>
          <p>Has estado inactivo durante 10 segundos. Tu sesión expirará en {timeLeft} segundos.</p>
          <div className="session-modal-buttons">
            <button 
              className="session-keep-btn" 
              onClick={handleKeepSession}
            >
              Mantener Sesión
            </button>
            <button 
              className="session-logout-btn" 
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeout; 