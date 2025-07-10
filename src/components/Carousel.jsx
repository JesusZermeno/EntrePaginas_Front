import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BookCard from './BookCard';

const Carousel = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://bibliotecav2.onrender.com/api/libros')
      .then(res => {
        setBooks(res.data.resultados || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{textAlign: 'center'}}>Cargando libros...</p>;
  if (!books.length) return <p style={{textAlign: 'center'}}>No se encontraron libros.</p>;

  return (
    <div className="carousel-container">
      <Swiper spaceBetween={24} slidesPerView={4} breakpoints={{
        320: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }}>
        {books.map(book => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
