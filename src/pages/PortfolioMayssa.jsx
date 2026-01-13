import { useState } from 'react';
import MayssaHero from './mayssa/components/MayssaHero';
import MayssaAbout from './mayssa/components/MayssaAbout';
import MayssaProjects from './mayssa/components/MayssaProjects';
import MayssaContact from './mayssa/components/MayssaContact';
import './mayssa/mayssa.css';

const PortfolioMayssa = () => {
    const [lang] = useState('pt'); // Default to Portuguese

    return (
        <div className="mayssa-portfolio">
            <MayssaHero lang={lang} />
            <MayssaAbout lang={lang} />
            <MayssaProjects lang={lang} />
            <MayssaContact lang={lang} />
        </div>
    );
};

export default PortfolioMayssa;
