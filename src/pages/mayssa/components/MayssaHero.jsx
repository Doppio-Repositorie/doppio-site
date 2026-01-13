import { motion } from 'framer-motion';
import { translations } from '../translations';
import { ArrowDown } from 'lucide-react';

const MayssaHero = ({ lang }) => {
    const t = translations[lang].hero;

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--mayssa-accent)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: '#9b4dca',
                filter: 'blur(120px)',
                opacity: 0.1,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: 'var(--mayssa-accent)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}
                >
                    {t.greeting}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}
                >
                    Mayssa Lameu
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="gradient-text"
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        marginBottom: '2rem',
                        fontWeight: '300'
                    }}
                >
                    {t.role}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ color: 'var(--mayssa-text-secondary)', marginBottom: '3rem' }}
                >
                    {t.subrole}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    <a
                        href="#projects"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            background: 'var(--mayssa-text-primary)',
                            color: 'var(--mayssa-bg-primary)',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}
                    >
                        {t.cta}
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--mayssa-text-secondary)'
                }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default MayssaHero;
