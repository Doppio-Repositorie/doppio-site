import React from 'react';
import './Hero.css';
import mascotImage from '../assets/doppio-mascot.jpg'; // We'll move the uploaded image here

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">Design Estratégico & Tecnologia Avançada</p>
                    <h1 className="hero-title">
                        Transformamos Ideias em <br />
                        <span>Futuro Digital</span>
                    </h1>
                    <p className="hero-subtitle">
                        Unimos estética futurista e performance extrema para criar produtos digitais que colocam sua marca à frente do tempo.
                    </p>
                    <a href="#contact" className="hero-cta">Iniciar Missão</a>
                </div>

                <div className="hero-image-container">
                    {/* Using img tag directly since we don't know if the user wants it as background. Img is safer for mascot */}
                    <img src={mascotImage} alt="Doppio Mascot" className="hero-mascot" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
