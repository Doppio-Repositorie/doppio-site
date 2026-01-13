import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Linkedin } from 'lucide-react';

const MayssaContact = ({ lang }) => {
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
                        href="https://www.linkedin.com/in/mayssa-lameu-de-azevedo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            background: 'var(--mayssa-bg-card)',
                            borderRadius: '16px',
                            minWidth: '150px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <Linkedin size={32} color="#0077b5" />
                        <span>{t.linkedin}</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '2rem',
                        color: 'var(--mayssa-text-secondary)',
                        fontSize: '0.9rem'
                    }}
                >
                    <p>{t.footer}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default MayssaContact;
