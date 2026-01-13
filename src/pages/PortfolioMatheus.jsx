import { useState } from 'react';
import MatheusHero from './matheus/components/MatheusHero';
import MatheusAbout from './matheus/components/MatheusAbout';
import MatheusProjects from './matheus/components/MatheusProjects';
import MatheusContact from './matheus/components/MatheusContact';
import './matheus/matheus.css';

const PortfolioMatheus = () => {
    const [lang] = useState('pt'); // Default to Portuguese

    return (
        <div className="matheus-portfolio">
            <MatheusHero lang={lang} />
            <MatheusAbout lang={lang} />
            <MatheusProjects lang={lang} />
            <MatheusContact lang={lang} />
        </div>
    );
};

export default PortfolioMatheus;
