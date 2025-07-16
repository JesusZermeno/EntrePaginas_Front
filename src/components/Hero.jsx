import React from 'react';

const Hero = () => {
  return (
    <header
      className=" d-flex align-items-center position-relative"
      style={{
        height: '85vh',
        backgroundImage: "url('/fondoHero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    > 
      <div className="position-absolute top-0 start-0 w-100 h-100 "></div>

      {/* Contenedor del texto con fondo semitransparente */}
      <div className="container position-relative d-flex justify-content-center align-items-center h-100">
        <div className="bg-dark bg-opacity-50 p-4 rounded text-center text-white">
          <h1 className="display-4 fw-bold mb-3">Bienvenido a la Biblioteca Virtual</h1>
          <p className="lead fw-bold">
            Explora, busca y descubre libros en español. Regístrate para guardar tus favoritos y utiliza el carrito para gestionar tus compras virtuales. ¡Disfruta de una experiencia moderna y minimalista!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
