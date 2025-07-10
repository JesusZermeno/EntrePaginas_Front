import React from 'react';
import Carousel from '../components/Carousel';
import BookSlicer from '../components/BookSlicer';
import Footer from '../components/Footer';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Bienvenido a la Biblioteca Virtual</h1>
    <p className="home-desc">
      Explora, busca y descubre libros en español. Regístrate para guardar tus favoritos y utiliza el carrito para gestionar tus compras virtuales. ¡Disfruta de una experiencia moderna y minimalista!
    </p>
    <Carousel />
    <section style={{margin: '3rem 0'}}>
      <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Novedades y Recomendados</h2>
      <BookSlicer />
    </section>
    <section style={{margin: '3rem 0'}}>
      <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>¿Qué puedes hacer aquí?</h2>
      <ul style={{maxWidth: 700, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7}}>
        <li>Buscar y explorar una amplia colección de libros digitales en español.</li>
        <li>Ver detalles completos de cada libro, incluyendo autor, editorial y categorías.</li>
        <li>Registrarte para guardar tus libros favoritos y gestionar tu carrito de compras virtual.</li>
        <li>Descargar libros disponibles en formato PDF o EPUB.</li>
        <li>Disfrutar de una experiencia moderna, rápida y minimalista.</li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Home;
