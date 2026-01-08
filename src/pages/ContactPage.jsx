import React, { useEffect } from 'react';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            padding: '120px 20px',
            background: 'linear-gradient(to bottom, #05020a, #1a0b2e)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <div style={{
                textAlign: 'center',
                marginBottom: '4rem',
                animation: 'fadeUp 0.8s ease forwards'
            }}>
                <h1 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '3.5rem',
                    color: '#FFFF00',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    textShadow: '0 0 20px rgba(255, 255, 0, 0.3)'
                }}>
                    Vamos Construir o Futuro
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#00f3ff',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Tem uma ideia disruptiva? A Doppio é o parceiro certo para torná-la realidade.
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4rem',
                maxWidth: '1200px',
                width: '100%',
                justifyContent: 'center'
            }}>
                {/* Contact Info Card */}
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    padding: '3rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 0, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Canais Oficiais</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>E-mail</p>
                        <a href="mailto:doppio.designtech@gmail.com" style={{ fontSize: '1.5rem', color: '#FFFF00', textDecoration: 'none', fontWeight: 'bold' }}>
                            doppio.designtech@gmail.com
                        </a>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <p style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Redes Sociais</p>
                        <a href="https://www.instagram.com/doppio.codesign?igsh=dnNua2FuOWNyZGZo" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 20px',
                            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                            borderRadius: '50px',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.695 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 2.1769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.585 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.404 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z" fill="white" />
                            </svg>
                            Siga no Instagram
                        </a>
                    </div>

                    <p style={{ borderLeft: '3px solid #00f3ff', paddingLeft: '1rem', color: '#ccc', fontStyle: 'italic' }}>
                        "Design não é apenas o que se vê e o que se sente. O design é como funciona." — Steve Jobs
                    </p>
                </div>

                {/* Visual Form */}
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    padding: '2rem'
                }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#00f3ff' }}>Inicie um Projeto</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <input type="text" placeholder="Seu Nome" style={{
                            background: 'transparent', border: 'none', borderBottom: '2px solid #333',
                            padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none'
                        }} />
                        <input type="email" placeholder="Seu E-mail" style={{
                            background: 'transparent', border: 'none', borderBottom: '2px solid #333',
                            padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none'
                        }} />
                        <select style={{
                            background: '#05020a', border: 'none', borderBottom: '2px solid #333',
                            padding: '1rem', color: '#aaa', fontSize: '1rem', outline: 'none'
                        }}>
                            <option>Tipo de Projeto</option>
                            <option>Aplicativo Mobile</option>
                            <option>Web Design</option>
                            <option>Branding</option>
                            <option>Consultoria</option>
                        </select>
                        <textarea placeholder="Conte sobre sua ideia..." rows="4" style={{
                            background: 'transparent', border: 'none', borderBottom: '2px solid #333',
                            padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'none'
                        }}></textarea>

                        <button type="button" style={{
                            marginTop: '1rem',
                            padding: '1.2rem',
                            background: '#FFFF00',
                            color: '#000',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.4)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            onClick={() => window.location.href = 'mailto:doppio.designtech@gmail.com'}
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;
