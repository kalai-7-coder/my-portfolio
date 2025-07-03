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
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kalaiyamuthan-rammohanraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/kalai-7-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="icon"
            />
          </a>
          <p>Please click the icons to connect with me on Social Media</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;