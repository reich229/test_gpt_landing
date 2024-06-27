import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Assistência médica simplificada para todos</h1>
        <p>Os melhores médicos do Brasil estão aqui para cuidar de você.</p>
        <button className="home__button">Agende sua consulta</button>
      </div>
    </section>
  );
};

export default Home;
