import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BookSlicer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://bibliotecav2.onrender.com/api/libros')
      .then(res => setBooks(res.data.resultados || []))
      .catch(() => setError('Error al cargar libros.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{textAlign: 'center'}}>Cargando libros...</p>;
  if (error) return <p style={{color: 'red', textAlign: 'center'}}>{error}</p>;
  if (!books.length) return <p style={{textAlign: 'center'}}>No se encontraron libros.</p>;

  return (
    <div style={{width: '100%', maxWidth: 1000, margin: '0 auto', padding: '0.5rem 0'}}>
      <Swiper
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
      >
        {books.slice(0, 12).map(book => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlicer; 