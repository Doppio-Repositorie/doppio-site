import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Doppio</h2>
                    <p>Transformando ideias em realidade digital com design estratégico e tecnologia de ponta.</p>
                </div>

                <div>
                    <h3 className="footer-heading">Links Rápidos</h3>
                    <ul className="footer-links">
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#products">Produtos</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-heading">Contato</h3>
                    <ul className="footer-links">
                        <li>contato@doppio.com.br</li>
                        <li>São Paulo, SP</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Doppio. Todos os direitos reservados.</p>
                <div className="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
