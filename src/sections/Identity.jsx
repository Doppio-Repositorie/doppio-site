import React from 'react';
import { Link } from 'react-router-dom';
import './Identity.css';

const Identity = () => {
    return (
        <section id="about" className="identity-section">
            <div className="identity-header">
                <h2 className="identity-title">Quem Somos</h2>
                <p className="identity-intro">
                    A Doppio é uma união de design estratégico e tecnologia. Transformamos ideias abstratas em produtos digitais concretos, unindo a visão empreendedora à execução técnica de excelência.
                </p>
            </div>

            <div className="values-grid">
                <div className="value-card">
                    <div className="card-title">Missão</div>
                    <p className="card-text">
                        Criar soluções digitais acessíveis, inovadoras e visualmente sofisticadas, ajudando empreendedores e empresas a crescerem através de tecnologia e design de alto padrão.
                    </p>
                </div>

                <div className="value-card">
                    <div className="card-title">Visão</div>
                    <p className="card-text">
                        Ser reconhecida como referência em design e tecnologia, oferecendo produtos digitais completos que unam estética, funcionalidade e inovação.
                    </p>
                </div>

                <div className="value-card">
                    <div className="card-title">Valores</div>
                    <ul className="value-list">
                        <li>Criatividade com propósito</li>
                        <li>Transparência e comunicação</li>
                        <li>Modernidade e inovação</li>
                        <li>Foco no cliente</li>
                        <li>Qualidade técnica</li>
                    </ul>
                </div>
            </div>

            <div className="identity-cta">
                <Link to="/about" className="founders-button">
                    Conheça os fundadores
                </Link>
            </div>
        </section>
    );
};

export default Identity;
