import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#" className="nav-logo">Doppio</a>
            <ul className="nav-links">
                <li><a href="#hero" className="nav-link">Início</a></li>
                <li><a href="#about" className="nav-link">Sobre</a></li>
                <li><a href="#products" className="nav-link">Produtos</a></li>
                <li><a href="#contact" className="nav-link">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
