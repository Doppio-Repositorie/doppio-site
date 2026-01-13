import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { ExternalLink } from 'lucide-react';

const MatheusProjects = ({ lang }) => {
    const t = translations[lang].projects;

    const projects = [
        {
            id: 'photocard-collector',
            title: "K-Collect",
            category: t.tags.flutter,
            description: {
                pt: "App para gerenciamento de coleções de K-Pop com backup e organização avançada.",
                en: "App for managing K-Pop collections with backup and advanced organization."
            },
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "/portfolio-matheus/k-collect-logo.jpg",
            tags: ["Flutter", "Native DB (SQLite)", "Zip Compression"]
        },
        {
            id: 'swimming-students',
            title: "Fit You Swim",
            category: t.tags.flutter,
            description: {
                pt: "Sistema de gestão para escolas de natação com avaliação de alunos e certificados.",
                en: "Management system for swimming schools with student evaluation and certificates."
            },
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            image: "/portfolio-matheus/fy-logo.png",
            tags: ["Flutter", "Firebase Auth", "Firebase Database"]
        },
        {
            id: 'candy-orders',
            title: "Delícias da May",
            category: t.tags.flutter,
            description: {
                pt: "App de gestão para confeiteiras com histórico de pedidos e controle financeiro.",
                en: "Management app for confectioners with order history and financial control."
            },
            gradient: "linear-gradient(135deg, #FF80AB 0%, #FF4081 100%)",
            image: "/portfolio-matheus/delicias-da-may-v3.png",
            tags: ["Flutter", "Firebase (DB)", "Data Charts"]
        },
        {
            id: 'podiatrist-site',
            title: "Espaço Pés",
            category: t.tags.web,
            description: {
                pt: "Site institucional e agendamento para clínica de podologia.",
                en: "Institutional website and scheduling for podiatry clinic."
            },
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            image: "/portfolio-matheus/podo-preview.png",
            tags: ["React", "Vite", "TailwindCSS"],
            containImage: true
        },
        {
            id: 'rpg-sheets',
            title: "C.A.A.P.",
            category: "In Progress",
            description: {
                pt: "Gerenciador de fichas para o RPG Cyberpunk 'Condenados ao Poder'.",
                en: "Character sheet manager for the 'Condenados ao Poder' Cyberpunk RPG."
            },
            gradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
            image: "/portfolio-matheus/caap-preview.png",
            tags: ["Flutter", "Cyberpunk System", "Automation"],
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
                                <span style={{ color: 'var(--matheus-accent)', fontWeight: '600', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--matheus-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    {lang === 'pt' ? project.description.pt : project.description.en}
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            color: '#ddd'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Link
                                        to={`/matheus/${project.id}`}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--matheus-accent)' }}
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

export default MatheusProjects;
