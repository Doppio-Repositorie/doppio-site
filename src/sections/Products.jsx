import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import cappSplash from '../assets/capp/splash.jpg';
import fyLogo from '/portfolio-matheus/fy-logo.png';
import dmLogo from '/portfolio-matheus/delicias-da-may-v3.png';
import kcLogo from '/portfolio-matheus/k-collect-logo.jpg';

const products = [
    {
        name: 'CAPP',
        status: 'Live',
        link: '/capp',
        bgImage: cappSplash,
        themeColor: '#4e4376',
        glowColor: 'rgba(78, 67, 118, 0.5)'
    },
    {
        name: 'K-Collect',
        status: 'Live',
        link: '/k-collect',
        bgImage: kcLogo,
        themeColor: '#764ba2',
        glowColor: 'rgba(118, 75, 162, 0.5)'
    },
    {
        name: 'Fit You Swim',
        status: 'Live',
        link: '/fityouswim',
        bgImage: fyLogo,
        themeColor: '#00B4D8',
        glowColor: 'rgba(0, 180, 216, 0.5)'
    },
    {
        name: 'Delícias da May',
        status: 'Live',
        link: '/delicias',
        bgImage: dmLogo,
        themeColor: '#FF4081',
        glowColor: 'rgba(255, 64, 129, 0.5)'
    },
    {
        name: 'Zya Flow',
        status: 'Dev',
        link: '#',
        bgImage: null,
        themeColor: '#00f3ff',
        glowColor: 'rgba(0, 243, 255, 0.5)'
    },
];

const Products = () => {
    return (
        <section id="products" className="products-section">
            <div className="products-header">
                <h2 className="products-title">Nossos Produtos</h2>
                <p className="products-subtitle">Soluções que transformam mercados</p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <Link
                        to={product.link}
                        className="product-card"
                        key={index}
                        style={{
                            '--theme-color': product.themeColor,
                            '--glow-color': product.glowColor
                        }}
                    >
                        {/* Background Image Container */}
                        {product.bgImage && (
                            <div
                                className="product-card-bg"
                                style={{ backgroundImage: `url(${product.bgImage})` }}
                            ></div>
                        )}

                        {product.status === 'Dev' && <span className="coming-soon">Em Breve</span>}

                        <div className="product-content">
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-indicator"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Products;
