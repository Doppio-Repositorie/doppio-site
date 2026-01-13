import React from 'react';
import { Link } from 'react-router-dom';
import './DeliciasDaMayPage.css';

// Import images
import dmLogo from '/portfolio-matheus/delicias-da-may-v3.png';
import dm1 from '/portfolio-matheus/delicias-1.jpg';
import dm2 from '/portfolio-matheus/delicias-2.jpg';
import dm3 from '/portfolio-matheus/delicias-3.jpg';
import dm5 from '/portfolio-matheus/delicias-5.jpg';

const DeliciasDaMayPage = () => {
    return (
        <div className="delicias-page">
            {/* Hero Section */}
            <section className="dm-hero">
                <div className="dm-hero-content">
                    <div className="dm-logo-container">
                        <img src={dmLogo} alt="Delícias da May Logo" />
                    </div>
                    <h1 className="dm-title">Delícias da May</h1>
                    <p className="dm-tagline">Gestão Completa para Confeiteiras</p>
                    <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#d4a5b0', fontSize: '1.1rem' }}>
                        Organize seus pedidos, controle suas finanças e encante seus clientes com muito mais praticidade.
                    </p>
                    <a href="#features" className="dm-download-btn">Conheça as Funcionalidades</a>
                </div>
            </section>

            {/* Features List */}
            <div id="features" className="dm-features">

                {/* Feature 1: Histórico de Pedidos */}
                <div className="dm-feature-block">
                    <div className="dm-feature-text">
                        <h2 className="dm-feature-title">Histórico de Pedidos</h2>
                        <p className="dm-feature-description">
                            Visualize todas as suas entregas do dia, semana e mês em um calendário intuitivo.
                            Nunca mais perca um pedido ou esqueça uma data importante. O sistema organiza
                            automaticamente suas encomendas por prazo de entrega.
                        </p>
                        <ul className="dm-feature-list">
                            <li>Calendário visual de entregas</li>
                            <li>Notificações de prazos</li>
                            <li>Filtros por período e status</li>
                        </ul>
                    </div>
                    <div className="dm-feature-image-container">
                        <div className="dm-mobile-frame">
                            <img src={dm1} alt="Calendário de Pedidos" />
                        </div>
                    </div>
                </div>

                {/* Feature 2: Gestão de Clientes */}
                <div className="dm-feature-block reverse">
                    <div className="dm-feature-text">
                        <h2 className="dm-feature-title">Gestão de Clientes</h2>
                        <p className="dm-feature-description">
                            Mantenha um banco de dados completo com preferências, restrições alimentares
                            e histórico de compras de cada cliente. Surpreenda seus clientes lembrando
                            de seus sabores favoritos e datas especiais.
                        </p>
                        <ul className="dm-feature-list">
                            <li>Perfil completo de cada cliente</li>
                            <li>Histórico de pedidos anteriores</li>
                            <li>Anotações de preferências</li>
                        </ul>
                    </div>
                    <div className="dm-feature-image-container">
                        <div className="dm-mobile-frame">
                            <img src={dm2} alt="Gestão de Clientes" />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Produtos Padrão */}
                <div className="dm-feature-block">
                    <div className="dm-feature-text">
                        <h2 className="dm-feature-title">Produtos Padrão</h2>
                        <p className="dm-feature-description">
                            Cadastre suas receitas e produtos mais vendidos para agilizar novos pedidos.
                            Defina preços, ingredientes e tempo de preparo. Crie pedidos em segundos
                            selecionando produtos já cadastrados.
                        </p>
                        <ul className="dm-feature-list">
                            <li>Catálogo de produtos recorrentes</li>
                            <li>Preços pré-definidos</li>
                            <li>Tempo de preparo estimado</li>
                        </ul>
                    </div>
                    <div className="dm-feature-image-container">
                        <div className="dm-mobile-frame">
                            <img src={dm3} alt="Produtos Padrão" />
                        </div>
                    </div>
                </div>

                {/* Feature 4: Controle Financeiro */}
                <div className="dm-feature-block reverse">
                    <div className="dm-feature-text">
                        <h2 className="dm-feature-title">Controle Financeiro</h2>
                        <p className="dm-feature-description">
                            Acompanhe entradas, saídas e lucro líquido em tempo real. Visualize relatórios
                            gráficos que mostram a saúde do seu negócio. Saiba exatamente quanto está
                            ganhando e onde pode melhorar.
                        </p>
                        <ul className="dm-feature-list">
                            <li>Dashboard financeiro em tempo real</li>
                            <li>Gráficos de receita e despesas</li>
                            <li>Relatórios mensais automáticos</li>
                        </ul>
                    </div>
                    <div className="dm-feature-image-container">
                        <div className="dm-mobile-frame">
                            <img src={dm5} alt="Controle Financeiro" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeliciasDaMayPage;
