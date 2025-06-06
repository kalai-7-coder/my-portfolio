import React from 'react';
import './Hero.css';
import kalaiImg from '../assets/kalai.jpg'; 

function Hero() {
  return (
    <section className="hero">
      <img src={kalaiImg} alt="Kalaiyamuthan" className="hero-image" />
      <div className="hero-text">
        <h1>Hi, I am Kalaiyamuthan R</h1>
        <p>Welcome to my portfolio!</p>

      </div>
    </section>
  );
}

export default Hero;
