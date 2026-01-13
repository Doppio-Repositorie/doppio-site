import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { title: 'Criatividade', desc: 'Exploramos ideias originais e soluções diferenciadas.', color: '#00f3ff' },
        { title: 'Excelência', desc: 'Buscamos qualidade em cada detalhe do nosso trabalho.', color: '#bc13fe' },
        { title: 'Compromisso', desc: 'Sua meta é nossa prioridade.', color: '#FFFF00' },
        { title: 'Transparência', desc: 'Processos claros e comunicação aberta.', color: '#00f3ff' },
        { title: 'Resultados', desc: 'Trabalhamos para impactar positivamente seu negócio.', color: '#bc13fe' }
    ];

    return (
        <div className="about-page">

            {/* Header Section */}
            <div className="about-header">
                <h1 className="about-title">Somos a Doppio</h1>
                <p className="about-intro">
                    Na Doppio, acreditamos que uma presença digital forte é essencial para qualquer negócio que deseja crescer, se destacar e gerar conexão com seu público.
                </p>
                <p className="about-intro-secondary">
                    Nossa expertise está em transformar ideias em experiências digitais impactantes. Trabalhamos com desenvolvimento de sites, branding, identidade visual, design digital e estratégias de comunicação, oferecendo soluções personalizadas que aliam estética, usabilidade e desempenho. Cada projeto que entregamos é pensado para gerar resultados reais e mensuráveis para nossos clientes.
                </p>
            </div>

            {/* Mission / Vision Section */}
            <div className="mission-vision-grid">
                <div className="mission-card">
                    <h3>Nossa Missão</h3>
                    <p>Conectar marcas ao seu público de forma significativa por meio de design e tecnologia, promovendo crescimento sustentável e experiências memoráveis.</p>
                </div>

                <div className="vision-card">
                    <h3>Nossa Visão</h3>
                    <p>Ser referência no mercado de design e tecnologia como agência que une criatividade, inovação e estratégia com foco total em resultados.</p>
                </div>
            </div>

            {/* Values Section */}
            <h2 className="values-section-title">Nossos Valores</h2>

            <div className="values-flex-container">
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="value-item"
                        style={{ border: `1px solid ${value.color}` }}
                    >
                        <h4 style={{ color: value.color }}>{value.title}</h4>
                        <p>{value.desc}</p>
                    </div>
                ))}
            </div>

            {/* Partners Section */}
            <h2 className="leadership-title">Liderança</h2>

            <div className="leadership-container">
                {/* May */}
                <div className="leader-card may">
                    <div>
                        <h3>May</h3>
                        <p className="role">Designer Digital & Direção Criativa</p>
                    </div>
                    <p className="bio">
                        Designer responsável pela identidade visual, UX/UI e estratégia estética dos projetos. Atua na criação de experiências visuais que comunicam propósito, fortalecem marcas e aumentam a percepção de valor no digital.
                    </p>
                    <Link to="/mayssa" className="portfolio-btn">
                        Veja nosso portfólio
                    </Link>
                </div>

                {/* Matheus */}
                <div className="leader-card matheus">
                    <div>
                        <h3>Matheus</h3>
                        <p className="role">Fullstack Developer & DevOps Architect</p>
                    </div>
                    <p className="bio">
                        Desenvolvedor responsável pela idealização, construção e deployment dos apps e sites da Doppio. Atua nas modelagens de banco de dados, construção de backend robusto e orientado a objetos, e nos serviços de cloud e infraestrutura.
                    </p>
                    <Link to="/matheus" className="portfolio-btn">
                        Veja nosso portfólio
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
