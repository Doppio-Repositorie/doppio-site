import React from 'react';
import { Link } from 'react-router-dom';
import mascot from '../assets/doppio-mascot.jpg';

const NotFound = () => {
    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
            background: 'linear-gradient(to bottom, #05020a, #1a0b2e)' // Ensure dark background matches Home
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #00f3ff', // Doppio Cyan
                boxShadow: '0 0 30px rgba(188, 19, 254, 0.5)', // Doppio Purple Glow
                marginBottom: '2rem',
                animation: 'float 6s ease-in-out infinite'
            }}>
                <img src={mascot} alt="Doppio Mascot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h1 style={{
                fontSize: '4rem',
                color: '#fff',
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: '1rem',
                textShadow: '2px 2px 0px #bc13fe' // Purple shadow
            }}>404</h1>

            <h2 style={{
                fontSize: '2rem',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#00f3ff' // Cyan Text
            }}>Sinal Perdido...</h2>

            <p style={{
                maxWidth: '500px',
                color: '#ccc',
                marginBottom: '2.5rem',
                lineHeight: '1.6',
                fontFamily: "'Outfit', sans-serif"
            }}>
                Parece que você se aventurou muito fundo no ciberespaço.
                Essa página não existe ou foi movida.
            </p>

            <Link to="/" style={{
                padding: '1rem 3rem',
                background: 'transparent',
                border: '2px solid #00f3ff', // Cyan Border
                color: '#00f3ff',
                textDecoration: 'none',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                letterSpacing: '1px',
                borderRadius: '50px' // Rounded like Home buttons
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.background = '#00f3ff';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#00f3ff';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                Voltar ao Início
            </Link>
        </div>
    );
};

export default NotFound;
