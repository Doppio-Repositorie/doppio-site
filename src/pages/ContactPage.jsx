import React, { useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">

            <div className="contact-header">
                <h1 className="contact-title">Vamos Construir o Futuro</h1>
                <p className="contact-subtitle">
                    Tem uma ideia disruptiva? A Doppio é o parceiro certo para torná-la realidade.
                </p>
            </div>

            <div className="contact-container">
                {/* Contact Info Card */}
                <div className="contact-info-card">
                    <h2>Canais Oficiais</h2>

                    <div className="contact-item">
                        <p className="contact-label">E-mail</p>
                        <a href="mailto:doppio.designtech@gmail.com" className="contact-email">
                            doppio.designtech@gmail.com
                        </a>
                    </div>

                    <div className="contact-item">
                        <p className="contact-label">Redes Sociais</p>
                        <a href="https://www.instagram.com/doppio.codesign?igsh=dnNua2FuOWNyZGZo" target="_blank" rel="noopener noreferrer" className="instagram-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.695 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.585 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.404 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z" fill="white" />
                            </svg>
                            Siga no Instagram
                        </a>
                    </div>

                    <p className="contact-quote">
                        "Design não é apenas o que se vê e o que se sente. O design é como funciona." — Steve Jobs
                    </p>
                </div>

                {/* Visual Form */}
                <div className="contact-form-section">
                    <h2>Inicie um Projeto</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Seu Nome" className="form-input" />
                        <input type="email" placeholder="Seu E-mail" className="form-input" />
                        <select className="form-select">
                            <option>Tipo de Projeto</option>
                            <option>Aplicativo Mobile</option>
                            <option>Web Design</option>
                            <option>Branding</option>
                            <option>Consultoria</option>
                        </select>
                        <textarea placeholder="Conte sobre sua ideia..." rows="4" className="form-textarea"></textarea>

                        <button
                            type="button"
                            className="submit-btn"
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
