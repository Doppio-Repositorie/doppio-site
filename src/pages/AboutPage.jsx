import React, { useEffect } from 'react';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            padding: '120px 20px',
            background: 'linear-gradient(to bottom, #05020a, #1a0b2e)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Outfit', sans-serif"
        }}>

            {/* Header Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '5rem',
                maxWidth: '900px',
                animation: 'fadeIn 0.8s ease forwards'
            }}>
                <h1 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '3.5rem',
                    color: '#00f3ff',
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    textShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
                }}>
                    Somos a Doppio
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#e0e0e0',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem'
                }}>
                    Na Doppio, acreditamos que uma presença digital forte é essencial para qualquer negócio que deseja crescer, se destacar e gerar conexão com seu público.
                </p>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#aaa',
                    lineHeight: '1.8'
                }}>
                    Nossa expertise está em transformar ideias em experiências digitais impactantes. Trabalhamos com desenvolvimento de sites, branding, identidade visual, design digital e estratégias de comunicação, oferecendo soluções personalizadas que aliam estética, usabilidade e desempenho. Cada projeto que entregamos é pensado para gerar resultados reais e mensuráveis para nossos clientes.
                </p>
            </div>

            {/* Mission / Vision / Values */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '6rem'
            }}>
                {/* Missão */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 243, 255, 0.2)',
                    padding: '2rem',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h3 style={{ color: '#FFFF00', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif" }}>Nossa Missão</h3>
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>Conectar marcas ao seu público de forma significativa por meio de design e tecnologia, promovendo crescimento sustentável e experiências memoráveis.</p>
                </div>

                {/* Visão */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(188, 19, 254, 0.2)',
                    padding: '2rem',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h3 style={{ color: '#bc13fe', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif" }}>Nossa Visão</h3>
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>Ser referência no mercado de design e tecnologia como agência que une criatividade, inovação e estratégia com foco total em resultados.</p>
                </div>

                {/* Valores */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif" }}>Nossos Valores</h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', lineHeight: '1.8' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#00f3ff' }}>Criatividade:</strong> exploramos ideias originais e soluções diferenciadas.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#00f3ff' }}>Excelência:</strong> buscamos qualidade em cada detalhe do nosso trabalho.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#00f3ff' }}>Compromisso:</strong> sua meta é nossa prioridade.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#00f3ff' }}>Transparência:</strong> processos claros e comunicação aberta.</li>
                        <li><strong style={{ color: '#00f3ff' }}>Resultados:</strong> trabalhamos para impactar positivamente seu negócio.</li>
                    </ul>
                </div>
            </div>

            {/* Partners Section */}
            <h2 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: '#fff',
                marginBottom: '3rem',
                textAlign: 'center',
                textTransform: 'uppercase'
            }}>Liderança</h2>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3rem',
                maxWidth: '1000px',
                justifyContent: 'center'
            }}>
                {/* May */}
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    background: 'linear-gradient(145deg, rgba(5,2,10,0.8), rgba(20,10,30,0.8))',
                    border: '1px solid #bc13fe',
                    borderRadius: '20px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(188, 19, 254, 0.15)'
                }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '2rem', color: '#bc13fe', fontFamily: "'Orbitron', sans-serif" }}>May</h3>
                        <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px' }}>Designer Digital & Direção Criativa</p>
                    </div>
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                        Designer responsável pela identidade visual, UX/UI e estratégia estética dos projetos. Atua na criação de experiências visuais que comunicam propósito, fortalecem marcas e aumentam a percepção de valor no digital.
                    </p>
                </div>

                {/* Matheus */}
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    background: 'linear-gradient(145deg, rgba(5,2,10,0.8), rgba(20,10,30,0.8))',
                    border: '1px solid #00f3ff',
                    borderRadius: '20px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(0, 243, 255, 0.15)'
                }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '2rem', color: '#00f3ff', fontFamily: "'Orbitron', sans-serif" }}>Matheus</h3>
                        <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px' }}>Fullstack Developer & DevOps Architect</p>
                    </div>
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                        Desenvolvedor responsável pela idealização, construção e deployment dos apps e sites da Doppio. Atua nas modelagens de banco de dados, construção de backend robusto e orientado a objetos, e nos serviços de cloud e infraestrutura.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
