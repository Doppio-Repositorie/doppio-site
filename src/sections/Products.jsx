import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import cappSplash from '../assets/capp/splash.jpg'; // Import CAPP splash image

const products = [
    { name: 'CAPP', status: 'Live', link: '/capp', bgImage: cappSplash },
    { name: 'K-Collect', status: 'Live', link: '#', bgImage: null },
    { name: 'Fit Swin', status: 'Live', link: '#', bgImage: null },
    { name: 'Delícias da May', status: 'Live', link: '#', bgImage: null },
    { name: 'Zya Flow', status: 'Dev', link: '#', bgImage: null },
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
                    <Link to={product.link} className="product-card" key={index}>
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
