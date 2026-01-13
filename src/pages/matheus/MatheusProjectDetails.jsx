import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { translations } from './translations';
import { ArrowLeft } from 'lucide-react';
import './matheus.css';

const MatheusProjectDetails = () => {
    const { id } = useParams();
    const lang = 'pt';
    const t = translations[lang].details;
    const tProjects = translations[lang].projects;

    const projectsData = {
        'candy-orders': {
            title: "Delícias da May",
            category: tProjects.tags.flutter,
            description: {
                pt: "O Delícias da May é uma solução completa desenvolvida para otimizar a rotina de confeiteiras e boleiras. O aplicativo centraliza toda a gestão do negócio, eliminando a necessidade de anotações em papel e planilhas complexas.\n\nPrincipais funcionalidades:\n• Histórico de Pedidos com Calendário: Visualização clara das entregas do dia, semana e mês.\n• Gestão de Clientes: Banco de dados com preferências e histórico de compras.\n• Produtos Padrão: Cadastro de receitas e produtos recorrentes para agilizar novos pedidos.\n• Controle Financeiro: Aba dedicada para acompanhar entradas, saídas e lucro líquido em tempo real.",
                en: "Delícias da May is a complete solution developed to optimize the routine of confectioners and cake makers. The application centralizes all business management, eliminating the need for paper notes and complex spreadsheets.\n\nKey features:\n• Order History with Calendar: Clear visualization of deliveries for the day, week, and month.\n• Client Management: Database with preferences and purchase history.\n• Standard Products: Registration of recipes and recurring products to speed up new orders.\n• Financial Control: Dedicated tab to track income, expenses, and net profit in real-time."
            },
            gradient: "linear-gradient(135deg, #FF80AB 0%, #FF4081 100%)",
            image: "/portfolio-matheus/delicias-da-may-v3.png",
            banner: "/portfolio-matheus/delicias-banner-v2.png",
            tech: ["Flutter", "Firebase (DB)", "Data Charts"],
            gallery: [
                "/portfolio-matheus/delicias-1.jpg",
                "/portfolio-matheus/delicias-2.jpg",
                "/portfolio-matheus/delicias-3.jpg",
                "/portfolio-matheus/delicias-5.jpg"
            ]
        },
        'swimming-students': {
            title: "Fit You Swim",
            category: tProjects.tags.flutter,
            description: {
                pt: "Sistema completo para gestão de escolas de natação. Permite avaliar alunos e gerenciar o nível de evolução (troca de toucas). Pais podem acompanhar o progresso dos filhos em tempo real e o app gera certificados automáticos. Possui controle de acesso multi-usuário para professores, com permissões baseadas em cargos.",
                en: "Complete management system for swimming schools. Allows student evaluation and evolution level management (cap tracking). Parents can track their children's progress in real-time, and the app generates automatic certificates. Features multi-user access for teachers with role-based permissions."
            },
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            image: "/portfolio-matheus/fy-logo.png",
            tech: ["Flutter", "Firebase Auth", "Firebase Database"],
            gallery: [
                "/portfolio-matheus/fy-1.jpg",
                "/portfolio-matheus/fy-2.jpg",
                "/portfolio-matheus/fy-3.jpg",
                "/portfolio-matheus/fy-4.jpg",
                "/portfolio-matheus/fy-5.jpg",
                "/portfolio-matheus/fy-6.jpg",
                "/portfolio-matheus/fy-7.jpg"
            ]
        },
        'photocard-collector': {
            title: "K-Collect",
            category: tProjects.tags.flutter,
            description: {
                pt: "K-Collect é uma ferramenta exclusiva desenvolvida sob medida para colecionadores exigentes de K-Pop. O aplicativo oferece um sistema robusto de organização, permitindo catalogar photocards por álbuns, versões e artistas. Seu diferencial é a capacidade avançada de gerenciamento de dados: os usuários podem exportar e importar backups completos de suas coleções em formatos compactados (.zip), garantindo a segurança e portabilidade de seus catálogos preciosos.",
                en: "K-Collect is an exclusive tool developed specifically for demanding K-Pop collectors. The app offers a robust organization system, allowing cataloging of photocards by albums, versions, and artists. Its key differentiator is advanced data management: users can export and import full backups of their collections in compressed formats (.zip), ensuring the safety and portability of their precious catalogs."
            },
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "/portfolio-matheus/k-collect-logo.jpg",
            tech: ["Flutter", "Native DB (SQLite)", "Zip Compression"],
            gallery: [
                "/portfolio-matheus/kc-1.jpg",
                "/portfolio-matheus/kc-2.jpg",
                "/portfolio-matheus/kc-3.jpg",
                "/portfolio-matheus/kc-4.jpg",
                "/portfolio-matheus/kc-5.jpg"
            ]
        },
        'podiatrist-site': {
            title: "Espaço Pés",
            category: tProjects.tags.web,
            description: {
                pt: "Site institucional e sistema de agendamento para a clínica Espaço Pés, liderada por Dayane Camarinha. O projeto destaca tratamentos especializados como Podoprofilaxia, Laserterapia e Reflexologia, com foco total na experiência do usuário e acessibilidade para pacientes de todas as idades.",
                en: "Institutional website and scheduling system for the Espaço Pés clinic, led by Dayane Camarinha. The project highlights specialized treatments such as Podoprophylaxis, Laser Therapy, and Reflexology, with a total focus on user experience and accessibility for patients of all ages."
            },
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            image: "/portfolio-matheus/podo-preview.png",
            tech: ["React", "Vite", "TailwindCSS"],
            gallery: [
                "/portfolio-matheus/podo-1.png",
                "/portfolio-matheus/podo-2.png"
            ]
        },
        'rpg-sheets': {
            title: "C.A.A.P.",
            category: "In Progress",
            description: {
                pt: "C.A.A.P. (Condenados ao Poder - App) é o gerenciador oficial de fichas para o sistema de RPG Cyberpunk 'Condenados ao Poder'. O aplicativo automatiza toda a matemática da criação de personagens, gerenciamento de inventário e rolagens de dados, permitindo que os jogadores foquem na narrativa e na sobrevivência em um futuro distópico.\n\nPrincipais funcionalidades:\n• Tutorial Interativo: Guia completo para criação de personagens passo-a-passo.\n• Gerenciamento de Atributos e Aptidões: Sistema automatizado de cálculos.\n• Inventário e Equipamentos: Controle total dos itens do personagem.\n• Rolagem de Dados: Sistema de dados integrado com regras do sistema.\n• Configurações Personalizáveis: Adapte a experiência às suas preferências.",
                en: "C.A.A.P. (Condenados ao Poder - App) is the official character sheet manager for the 'Condenados ao Poder' Cyberpunk RPG system. The app automates all the math behind character creation, inventory management, and dice rolls, allowing players to focus on the narrative and survival in a dystopian future.\n\nKey features:\n• Interactive Tutorial: Complete step-by-step character creation guide.\n• Attribute and Aptitude Management: Automated calculation system.\n• Inventory and Equipment: Full control of character items.\n• Dice Rolling: Integrated dice system with game rules.\n• Customizable Settings: Adapt the experience to your preferences."
            },
            gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
            image: "/portfolio-matheus/caap-preview.png",
            banner: "/capp/hero-banner.png",
            tech: ["Flutter", "SQLite", "Cyberpunk System", "Automation"],
            gallery: [
                "/capp/feat-tutorial-1.png",
                "/capp/feat-tutorial-2.jpg",
                "/capp/feat-attributes.jpg",
                "/capp/feat-aptitudes.jpg",
                "/capp/feat-status.jpg",
                "/capp/feat-capacities.jpg",
                "/capp/feat-equipment.jpg",
                "/capp/dice.jpg",
                "/capp/books.jpg",
                "/capp/config.jpg"
            ],
            isDark: true
        }
    };

    const project = projectsData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return (
        <div className="matheus-portfolio" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>Projeto não encontrado</h1>
                <Link to="/matheus" style={{ color: 'var(--matheus-accent)', marginTop: '2rem', display: 'inline-block' }}>
                    ← Voltar ao portfólio
                </Link>
            </div>
        </div>
    );

    const theme = project.customTheme || {
        bg: 'var(--matheus-bg-primary)',
        text: 'var(--matheus-text-primary)',
        textSecondary: 'var(--matheus-text-secondary)',
        cardBg: 'var(--matheus-bg-card)',
        cardBorder: 'rgba(255,255,255,0.05)',
        accent: 'var(--matheus-accent)',
        tagBg: 'rgba(255,255,255,0.05)',
        tagText: '#ddd'
    };

    return (
        <div className="matheus-portfolio" style={{ minHeight: '100vh', background: theme.bg, color: theme.text, transition: 'background 0.5s ease' }}>
            {/* Hero Image Area */}
            <div style={{
                height: '60vh',
                background: (project.banner || project.image) ? `url(${project.banner || project.image})` : project.gradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '4rem'
            }}>
                {/* Overlay for readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, ${theme.bg} 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 100%)`
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Link to="/matheus" style={{
                        position: 'fixed',
                        top: '100px',
                        left: '5%',
                        zIndex: 90,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '30px',
                        color: '#fff',
                        fontWeight: '500',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}>
                        <ArrowLeft size={20} /> {t.back}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span style={{
                            background: theme.accent,
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            {project.category}
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginTop: '1rem',
                            marginBottom: '1.5rem',
                            color: project.customTheme ? theme.text : '#fff',
                            textShadow: project.customTheme ? 'none' : '0 2px 10px rgba(0,0,0,0.5)'
                        }}>
                            {project.title}
                        </h1>

                        {/* Tech Stack in Hero */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {project.tech.map((tech, i) => (
                                <span key={i} style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(5px)',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: '#fff',
                                    fontWeight: '500',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container section-padding">
                {/* Single Column Layout */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    <h2 style={{ marginBottom: '1.5rem', color: theme.text }}>{t.aboutProject}</h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: theme.textSecondary,
                        marginBottom: '4rem',
                        whiteSpace: 'pre-line'
                    }}>
                        {lang === 'pt' ? project.description.pt : project.description.en}
                    </p>

                    <h3 style={{ marginBottom: '1.5rem', color: theme.text }}>{t.gallery}</h3>

                    {/* Carousel Container */}
                    <div style={{ position: 'relative' }}>
                        {/* Left Button */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('gallery-carousel');
                                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                            }}
                            style={{
                                position: 'absolute',
                                left: '-1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: theme.cardBg,
                                border: `1px solid ${theme.cardBorder}`,
                                color: theme.text,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                            }}
                        >
                            <ArrowLeft size={20} />
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('gallery-carousel');
                                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                            }}
                            style={{
                                position: 'absolute',
                                right: '-1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: theme.cardBg,
                                border: `1px solid ${theme.cardBorder}`,
                                color: theme.text,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                            }}
                        >
                            <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div
                            id="gallery-carousel"
                            style={{
                                display: 'flex',
                                overflowX: 'auto',
                                gap: '1.5rem',
                                paddingBottom: '2rem',
                                cursor: 'grab',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                scrollSnapType: 'x mandatory',
                                scrollBehavior: 'smooth'
                            }}
                            className="gallery-carousel"
                        >
                            {project.gallery.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        flex: '0 0 auto',
                                        height: '500px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        border: `1px solid ${theme.cardBorder}`,
                                        scrollSnapAlign: 'center'
                                    }}
                                >
                                    {item.includes('/') ? (
                                        <img
                                            src={item}
                                            alt={`Gallery ${index}`}
                                            style={{
                                                height: '100%',
                                                width: 'auto',
                                                display: 'block',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    ) : (
                                        <div style={{
                                            height: '100%',
                                            minWidth: '300px',
                                            background: 'rgba(128,128,128,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: theme.textSecondary,
                                            fontSize: '3rem',
                                            fontWeight: 'bold'
                                        }}>
                                            ?
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatheusProjectDetails;
