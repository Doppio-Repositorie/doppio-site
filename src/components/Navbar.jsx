import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const handleNavigation = (id, e) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // We are already on home, just scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We are not on home, navigate then scroll
            navigate('/');
            // Small timeout to allow Home to mount
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Doppio</Link>
            <ul className="nav-links">
                <li><a href="#hero" className="nav-link" onClick={(e) => handleNavigation('hero', e)}>Início</a></li>
                <li><Link to="/about" className="nav-link">Quem Somos</Link></li>
                <li><a href="#products" className="nav-link" onClick={(e) => handleNavigation('products', e)}>Produtos</a></li>
                <li><Link to="/contact" className="nav-link">Contato</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
