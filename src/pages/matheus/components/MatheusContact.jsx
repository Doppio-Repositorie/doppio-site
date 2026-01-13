import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Linkedin, Github } from 'lucide-react';

const MatheusContact = ({ lang }) => {
    const t = translations[lang].contact;

    return (
        <section id="contact" className="section-padding" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '3rem' }}
                >
                    {t.title}
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '6rem' }}>
                    <motion.a
                        href="https://www.linkedin.com/in/matheus-felipe-camarinha-duarte-524b6026a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            background: 'var(--matheus-bg-card)',
                            borderRadius: '16px',
                            minWidth: '150px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <Linkedin size={32} color="#0077b5" />
                        <span>{t.linkedin}</span>
                    </motion.a>

                    <motion.a
                        href="https://github.com/MatheusFelipeDuarte?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            background: 'var(--matheus-bg-card)',
                            borderRadius: '16px',
                            minWidth: '150px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <Github size={32} color="#fff" />
                        <span>{t.github}</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '2rem',
                        color: 'var(--matheus-text-secondary)',
                        fontSize: '0.9rem'
                    }}
                >
                    <p>{t.footer}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default MatheusContact;
