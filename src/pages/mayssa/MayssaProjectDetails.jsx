import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { translations } from './translations';
import { ArrowLeft } from 'lucide-react';
import './mayssa.css';

const MayssaProjectDetails = () => {
    const { id } = useParams();
    const lang = 'pt';
    const t = translations[lang].details;
    const tProjects = translations[lang].projects;

    const projectsData = {
        'candy-orders': {
            title: "Delícias da May",
            category: tProjects.tags.branding,
            description: {
                pt: "O Delícias da May é uma solução completa desenvolvida para otimizar a rotina de confeiteiras e boleiras. O design do aplicativo foi pensado para ser visualmente agradável e funcional, centralizando toda a gestão do negócio.\n\nPrincipais entregas de design:\n• Interface intuitiva com calendário visual para histórico de pedidos\n• Dashboard de controle financeiro com visualização clara de dados\n• Sistema de cores e tipografia que transmite doçura e profissionalismo\n• Ícones personalizados e ilustrações temáticas",
                en: "Delícias da May is a complete solution developed to optimize the routine of confectioners and cake makers. The app design was created to be visually pleasing and functional, centralizing all business management.\n\nKey design deliverables:\n• Intuitive interface with visual calendar for order history\n• Financial control dashboard with clear data visualization\n• Color system and typography that conveys sweetness and professionalism\n• Custom icons and themed illustrations"
            },
            gradient: "linear-gradient(135deg, #FF80AB 0%, #FF4081 100%)",
            image: "/portfolio-matheus/delicias-da-may-v3.png",
            banner: "/portfolio-matheus/delicias-banner-v2.png",
            tech: ["Figma", "Adobe Illustrator", "UI/UX Design"],
            gallery: [
                "/portfolio-matheus/delicias-1.jpg",
                "/portfolio-matheus/delicias-2.jpg",
                "/portfolio-matheus/delicias-3.jpg",
                "/portfolio-matheus/delicias-5.jpg"
            ]
        },
        'swimming-students': {
            title: "Fit You Swim",
            category: tProjects.tags.uiux,
            description: {
                pt: "Design de interface completo para sistema de gestão de escolas de natação. O projeto focou em criar uma experiência acessível tanto para professores quanto para pais acompanharem o progresso dos alunos.\n\nDestaques do design:\n• Sistema de cores baseado em água e movimento\n• Dashboard multi-usuário com diferentes níveis de acesso\n• Visualização de progresso com indicadores visuais intuitivos\n• Design responsivo para uso em tablets à beira da piscina",
                en: "Complete interface design for swimming school management system. The project focused on creating an accessible experience for both teachers and parents to track student progress.\n\nDesign highlights:\n• Color system based on water and movement\n• Multi-user dashboard with different access levels\n• Progress visualization with intuitive visual indicators\n• Responsive design for tablet use poolside"
            },
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            image: "/portfolio-matheus/fy-logo.png",
            tech: ["Figma", "Prototyping", "User Research"],
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
            category: tProjects.tags.uiux,
            description: {
                pt: "Design de interface para aplicativo exclusivo de colecionadores de K-Pop. O foco foi criar uma experiência visual que honrasse a estética vibrante do universo K-Pop.\n\nEntregas de design:\n• Sistema de organização visual por álbuns e artistas\n• Paleta de cores vibrante e moderna\n• Animações sutis para feedback de interações\n• Modo escuro elegante para visualização confortável",
                en: "Interface design for exclusive K-Pop collector app. The focus was creating a visual experience that honored the vibrant aesthetic of the K-Pop universe.\n\nDesign deliverables:\n• Visual organization system by albums and artists\n• Vibrant and modern color palette\n• Subtle animations for interaction feedback\n• Elegant dark mode for comfortable viewing"
            },
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "/portfolio-matheus/k-collect-logo.jpg",
            tech: ["Figma", "Adobe Photoshop", "Motion Design"],
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
                pt: "Design de site institucional para a clínica Espaço Pés. O projeto equilibrou elegância profissional com acessibilidade para pacientes de todas as idades.\n\nElementos de design:\n• Paleta de cores em tons de verde transmitindo saúde e bem-estar\n• Tipografia clara e legível para todas as idades\n• Layout responsivo com foco em agendamento rápido\n• Seções destacando tratamentos especializados",
                en: "Institutional website design for the Espaço Pés clinic. The project balanced professional elegance with accessibility for patients of all ages.\n\nDesign elements:\n• Green color palette conveying health and wellness\n• Clear, readable typography for all ages\n• Responsive layout focused on quick scheduling\n• Sections highlighting specialized treatments"
            },
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            image: "/portfolio-matheus/podo-preview.png",
            tech: ["Figma", "Web Design", "Responsive Design"],
            gallery: [
                "/portfolio-matheus/podo-1.png",
                "/portfolio-matheus/podo-2.png"
            ]
        },
        'rpg-sheets': {
            title: "C.A.A.P.",
            category: "In Progress",
            description: {
                pt: "Design de interface para o gerenciador oficial de fichas do sistema de RPG Cyberpunk 'Condenados ao Poder'. O visual busca transmitir a atmosfera distópica e tecnológica do universo do jogo.\n\nDireção criativa:\n• Estética cyberpunk com neons e elementos industriais\n• Interface escura e imersiva\n• Tipografia futurista e iconografia temática\n• Animações que reforçam a ambientação",
                en: "Interface design for the official character sheet manager for 'Condenados ao Poder' Cyberpunk RPG system. The visual aims to convey the dystopian, technological atmosphere of the game universe.\n\nCreative direction:\n• Cyberpunk aesthetic with neons and industrial elements\n• Dark, immersive interface\n• Futuristic typography and themed iconography\n• Animations that reinforce the setting"
            },
            gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
            image: "/portfolio-matheus/caap-preview.png",
            tech: ["Figma", "Concept Art", "UI Design"],
            gallery: ['?', '?', '?'],
            isDark: true
        }
    };

    const project = projectsData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return (
        <div className="mayssa-portfolio" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>Projeto não encontrado</h1>
                <Link to="/mayssa" style={{ color: 'var(--mayssa-accent)', marginTop: '2rem', display: 'inline-block' }}>
                    ← Voltar ao portfólio
                </Link>
            </div>
        </div>
    );

    const theme = project.customTheme || {
        bg: 'var(--mayssa-bg-primary)',
        text: 'var(--mayssa-text-primary)',
        textSecondary: 'var(--mayssa-text-secondary)',
        cardBg: 'var(--mayssa-bg-card)',
        cardBorder: 'rgba(255,255,255,0.05)',
        accent: 'var(--mayssa-accent)',
        tagBg: 'rgba(188, 19, 254, 0.1)',
        tagText: '#d8a9ff'
    };

    return (
        <div className="mayssa-portfolio" style={{ minHeight: '100vh', background: theme.bg, color: theme.text, transition: 'background 0.5s ease' }}>
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
                    <Link to="/mayssa" style={{
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
                                    background: 'rgba(188, 19, 254, 0.2)',
                                    backdropFilter: 'blur(5px)',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: '#fff',
                                    fontWeight: '500',
                                    border: '1px solid rgba(188, 19, 254, 0.3)'
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
                                const container = document.getElementById('gallery-carousel-mayssa');
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
                                const container = document.getElementById('gallery-carousel-mayssa');
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
                            id="gallery-carousel-mayssa"
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

export default MayssaProjectDetails;
