import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            {/* Mission / Vision Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '4rem'
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
            </div>

            {/* Values Section */}
            <h2 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: '#fff',
                marginBottom: '3rem',
                textAlign: 'center',
                textTransform: 'uppercase'
            }}>Nossos Valores</h2>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '6rem'
            }}>
                {[
                    { title: 'Criatividade', desc: 'Exploramos ideias originais e soluções diferenciadas.', color: '#00f3ff' },
                    { title: 'Excelência', desc: 'Buscamos qualidade em cada detalhe do nosso trabalho.', color: '#bc13fe' },
                    { title: 'Compromisso', desc: 'Sua meta é nossa prioridade.', color: '#FFFF00' },
                    { title: 'Transparência', desc: 'Processos claros e comunicação aberta.', color: '#00f3ff' },
                    { title: 'Resultados', desc: 'Trabalhamos para impactar positivamente seu negócio.', color: '#bc13fe' }
                ].map((value, index) => (
                    <div key={index} style={{
                        flex: '1 1 300px',
                        maxWidth: '350px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${value.color}`,
                        padding: '2rem',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h4 style={{ color: value.color, fontSize: '1.5rem', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif" }}>{value.title}</h4>
                        <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem' }}>{value.desc}</p>
                    </div>
                ))}
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
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Designer responsável pela identidade visual, UX/UI e estratégia estética dos projetos. Atua na criação de experiências visuais que comunicam propósito, fortalecem marcas e aumentam a percepção de valor no digital.
                    </p>
                    <Link to="/mayssa" style={{
                        display: 'inline-block',
                        padding: '0.8rem 1.5rem',
                        background: 'transparent',
                        border: '2px solid #bc13fe',
                        borderRadius: '8px',
                        color: '#bc13fe',
                        textDecoration: 'none',
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        marginTop: 'auto'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = '#bc13fe';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#bc13fe';
                        }}
                    >
                        Veja nosso portfólio
                    </Link>
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
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Desenvolvedor responsável pela idealização, construção e deployment dos apps e sites da Doppio. Atua nas modelagens de banco de dados, construção de backend robusto e orientado a objetos, e nos serviços de cloud e infraestrutura.
                    </p>
                    <Link to="/matheus" style={{
                        display: 'inline-block',
                        padding: '0.8rem 1.5rem',
                        background: 'transparent',
                        border: '2px solid #00f3ff',
                        borderRadius: '8px',
                        color: '#00f3ff',
                        textDecoration: 'none',
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        marginTop: 'auto'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = '#00f3ff';
                            e.currentTarget.style.color = '#05020a';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#00f3ff';
                        }}
                    >
                        Veja nosso portfólio
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
