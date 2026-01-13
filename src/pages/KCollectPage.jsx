import React from 'react';
import { Link } from 'react-router-dom';
import './KCollectPage.css';

// Import images
import kcLogo from '/portfolio-matheus/k-collect-logo.jpg';
import kc1 from '/portfolio-matheus/kc-1.jpg';
import kc2 from '/portfolio-matheus/kc-2.jpg';
import kc3 from '/portfolio-matheus/kc-3.jpg';
import kc4 from '/portfolio-matheus/kc-4.jpg';
import kc5 from '/portfolio-matheus/kc-5.jpg';

const KCollectPage = () => {
    return (
        <div className="kcollect-page">
            {/* Hero Section */}
            <section className="kc-hero">
                {/* Sparkle decorations */}
                <span className="kc-sparkle">✨</span>
                <span className="kc-sparkle">💫</span>
                <span className="kc-sparkle">⭐</span>
                <span className="kc-sparkle">✨</span>

                <div className="kc-hero-content">
                    <div className="kc-logo-container">
                        <img src={kcLogo} alt="K-Collect Logo" />
                    </div>
                    <h1 className="kc-title">K-Collect</h1>
                    <p className="kc-tagline">Organize sua Coleção de K-Pop</p>
                    <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#b8a4cc', fontSize: '1.1rem' }}>
                        A ferramenta exclusiva para colecionadores exigentes. Catalogue, organize e proteja seus photocards preciosos.
                    </p>
                    <a href="#features" className="kc-download-btn">Conheça as Funcionalidades</a>
                </div>
            </section>

            {/* Features List */}
            <div id="features" className="kc-features">

                {/* Feature 1: Catálogo Organizado */}
                <div className="kc-feature-block">
                    <div className="kc-feature-text">
                        <h2 className="kc-feature-title">Catálogo Visual</h2>
                        <p className="kc-feature-description">
                            Sistema robusto de organização que permite catalogar seus photocards por álbuns,
                            versões e artistas. Visualize sua coleção de forma elegante e encontre qualquer
                            card em segundos.
                        </p>
                        <ul className="kc-feature-list">
                            <li>Organização por álbuns e versões</li>
                            <li>Filtros por artista e grupo</li>
                            <li>Visualização em grade elegante</li>
                        </ul>
                    </div>
                    <div className="kc-feature-image-container">
                        <div className="kc-mobile-frame">
                            <img src={kc1} alt="Catálogo Visual" />
                        </div>
                    </div>
                </div>

                {/* Feature 2: Controle de Coleção */}
                <div className="kc-feature-block reverse">
                    <div className="kc-feature-text">
                        <h2 className="kc-feature-title">Controle de Coleção</h2>
                        <p className="kc-feature-description">
                            Marque quais photocards você já possui, quais estão faltando e quais são
                            seus favoritos. Acompanhe o progresso da sua coleção com estatísticas
                            detalhadas e metas personalizadas.
                        </p>
                        <ul className="kc-feature-list">
                            <li>Status de posse/falta</li>
                            <li>Lista de favoritos</li>
                            <li>Estatísticas de coleção</li>
                        </ul>
                    </div>
                    <div className="kc-feature-image-container">
                        <div className="kc-mobile-frame">
                            <img src={kc2} alt="Controle de Coleção" />
                        </div>
                        <div className="kc-mobile-frame">
                            <img src={kc3} alt="Estatísticas" />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Backup Seguro */}
                <div className="kc-feature-block">
                    <div className="kc-feature-text">
                        <h2 className="kc-feature-title">Backup Seguro</h2>
                        <p className="kc-feature-description">
                            Exporte e importe backups completos da sua coleção em formatos compactados (.zip).
                            Garanta a segurança e portabilidade do seu catálogo precioso. Nunca perca
                            seus dados, mesmo trocando de dispositivo.
                        </p>
                        <ul className="kc-feature-list">
                            <li>Exportação em formato .zip</li>
                            <li>Importação de backups</li>
                            <li>Dados offline seguros</li>
                        </ul>
                    </div>
                    <div className="kc-feature-image-container">
                        <div className="kc-mobile-frame">
                            <img src={kc4} alt="Backup e Exportação" />
                        </div>
                    </div>
                </div>

                {/* Feature 4: Modo Escuro */}
                <div className="kc-feature-block reverse">
                    <div className="kc-feature-text">
                        <h2 className="kc-feature-title">Experiência Visual</h2>
                        <p className="kc-feature-description">
                            Interface elegante com modo escuro que honra a estética vibrante do universo K-Pop.
                            Paleta de cores cuidadosamente selecionada para visualização confortável
                            em qualquer ambiente.
                        </p>
                        <ul className="kc-feature-list">
                            <li>Modo escuro elegante</li>
                            <li>Paleta K-Pop vibrante</li>
                            <li>Animações suaves</li>
                        </ul>
                    </div>
                    <div className="kc-feature-image-container">
                        <div className="kc-mobile-frame">
                            <img src={kc5} alt="Interface Visual" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KCollectPage;
