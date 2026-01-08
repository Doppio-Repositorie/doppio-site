import React from 'react';
import './Products.css';

const products = [
    { name: 'CAPP', status: 'Live' },
    { name: 'K-Collect', status: 'Live' },
    { name: 'Fit Swin', status: 'Live' },
    { name: 'Delícias da May', status: 'Live' },
    { name: 'Zya Flow', status: 'Dev' },
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
                    <div className="product-card" key={index}>
                        {product.status === 'Dev' && <span className="coming-soon">Em Breve</span>}
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-indicator"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
