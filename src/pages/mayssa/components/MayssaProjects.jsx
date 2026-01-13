import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { ExternalLink } from 'lucide-react';

const MayssaProjects = ({ lang }) => {
    const t = translations[lang].projects;

    const projects = [
        {
            id: 'photocard-collector',
            title: "K-Collect",
            category: t.tags.uiux,
            description: {
                pt: "Design de interface para app de gerenciamento de coleções de K-Pop com foco em organização visual e experiência do usuário.",
                en: "Interface design for K-Pop collection management app focused on visual organization and user experience."
            },
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "/portfolio-matheus/k-collect-logo.jpg",
            tags: ["UI/UX", "Mobile Design", "Figma"]
        },
        {
            id: 'swimming-students',
            title: "Fit You Swim",
            category: t.tags.uiux,
            description: {
                pt: "Interface completa para sistema de gestão de escolas de natação com foco em acessibilidade.",
                en: "Complete interface for swimming school management system focused on accessibility."
            },
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            image: "/portfolio-matheus/fy-logo.png",
            tags: ["UI/UX", "Mobile Design", "Dashboard"]
        },
        {
            id: 'candy-orders',
            title: "Delícias da May",
            category: t.tags.branding,
            description: {
                pt: "Identidade visual e design de interface para app de gestão de confeitaria.",
                en: "Visual identity and interface design for confectionery management app."
            },
            gradient: "linear-gradient(135deg, #FF80AB 0%, #FF4081 100%)",
            image: "/portfolio-matheus/delicias-da-may-v3.png",
            tags: ["Branding", "UI/UX", "Identidade Visual"]
        },
        {
            id: 'podiatrist-site',
            title: "Espaço Pés",
            category: t.tags.web,
            description: {
                pt: "Design de site institucional para clínica de podologia com foco em elegância e confiança.",
                en: "Institutional website design for podiatry clinic focused on elegance and trust."
            },
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            image: "/portfolio-matheus/podo-preview.png",
            tags: ["Web Design", "UI/UX", "Responsivo"],
            containImage: true
        },
        {
            id: 'rpg-sheets',
            title: "C.A.A.P.",
            category: "In Progress",
            description: {
                pt: "UI Design para gerenciador de fichas do RPG Cyberpunk 'Condenados ao Poder'.",
                en: "UI Design for character sheet manager for 'Condenados ao Poder' Cyberpunk RPG."
            },
            gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
            image: "/portfolio-matheus/caap-preview.png",
            tags: ["UI/UX", "Game Design", "Cyberpunk"],
            isDark: true
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    {t.title}
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1.5fr 1fr' : '1fr 1.5fr',
                                gap: '2rem',
                                alignItems: 'center',
                                direction: index % 2 === 0 ? 'ltr' : 'rtl'
                            }}
                            className="project-card"
                        >
                            {/* Image/Gradient Area */}
                            <div
                                style={{
                                    height: '400px',
                                    background: project.image ? (project.containImage ? project.gradient : 'transparent') : project.gradient,
                                    borderRadius: '20px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: project.containImage ? '80%' : '100%',
                                            height: project.containImage ? '80%' : '100%',
                                            objectFit: project.containImage ? 'contain' : 'cover',
                                            transition: 'transform 0.5s ease',
                                            borderRadius: project.containImage ? '12px' : '0'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                ) : (
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: project.isDark ? '#fff' : '#000',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        opacity: 0.7
                                    }}>
                                        {project.title} Preview
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div style={{ direction: 'ltr', padding: '2rem' }}>
                                <span style={{ color: 'var(--mayssa-accent)', fontWeight: '600', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--mayssa-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    {lang === 'pt' ? project.description.pt : project.description.en}
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(188, 19, 254, 0.1)',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            color: '#d8a9ff'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Link
                                        to={`/mayssa/${project.id}`}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--mayssa-accent)' }}
                                    >
                                        {t.viewProject} <ExternalLink size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MayssaProjects;
