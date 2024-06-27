import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar__logo">DoctorCare</div>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#departments">Departamentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <button className="navbar__button">Agende sua consulta</button>
    </nav>
  );
};

export default Navbar;
