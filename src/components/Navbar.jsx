import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const handleNavigation = (id, e) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="nav-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}>Doppio</Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    <li><a href="#hero" className="nav-link" onClick={(e) => handleNavigation('hero', e)}>Início</a></li>
                    <li><Link to="/about" className="nav-link">Quem Somos</Link></li>
                    <li><a href="#products" className="nav-link" onClick={(e) => handleNavigation('products', e)}>Produtos</a></li>
                    <li><Link to="/contact" className="nav-link">Contato</Link></li>
                </ul>

                {/* Hamburger Button */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#hero" className="mobile-nav-link" onClick={(e) => handleNavigation('hero', e)}>Início</a></li>
                    <li><Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>Quem Somos</Link></li>
                    <li><a href="#products" className="mobile-nav-link" onClick={(e) => handleNavigation('products', e)}>Produtos</a></li>
                    <li><Link to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>Contato</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;

