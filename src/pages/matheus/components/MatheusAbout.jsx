import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Code2, Smartphone, Brain, Briefcase, Cloud, Terminal } from 'lucide-react';

const MatheusAbout = ({ lang }) => {
    const t = translations[lang].about;

    const skills = [
        { name: 'Python / ML', icon: <Brain size={20} />, color: '#3776AB' },
        { name: 'Flutter', icon: <Smartphone size={20} />, color: '#02569B' },
        { name: 'Automation', icon: <Terminal size={20} />, color: '#FF6B00' },
        { name: 'DevOps (Azure/GCP)', icon: <Cloud size={20} />, color: '#007396' },
        { name: 'C#', icon: <Code2 size={20} />, color: '#239120' },
        { name: 'Java', icon: <Code2 size={20} />, color: '#f89820' },
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--matheus-bg-secondary)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                }}>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                            {t.title}
                        </h2>
                        <p style={{
                            color: 'var(--matheus-text-secondary)',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: 1.8,
                            maxWidth: '800px'
                        }}>
                            {t.bio}
                        </p>
                    </motion.div>

                    {/* Doppio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.05) 0%, rgba(0,0,0,0) 100%)',
                            border: '1px solid rgba(255, 107, 0, 0.1)',
                            borderRadius: '20px',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    background: 'var(--matheus-accent)',
                                    padding: '0.8rem',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Briefcase size={24} color="#fff" />
                                </div>
                                <h3 style={{ fontSize: '1.8rem' }}>{t.doppioTitle}</h3>
                            </div>

                            <p style={{
                                color: 'var(--matheus-text-secondary)',
                                fontSize: '1.1rem',
                                lineHeight: 1.8
                            }}>
                                {t.doppioStory}
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 style={{ marginBottom: '2rem' }}>{t.skillsTitle}</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem'
                        }}>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, background: 'var(--matheus-bg-card)' }}
                                    style={{
                                        padding: '1.5rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ color: skill.color }}>{skill.icon}</div>
                                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MatheusAbout;
