import React from 'react';
import { Link } from 'react-router-dom';
import './FitYouSwimPage.css';

// Import images
import fyLogo from '/portfolio-matheus/fy-logo.png';
import fy1 from '/portfolio-matheus/fy-1.jpg';
import fy2 from '/portfolio-matheus/fy-2.jpg';
import fy3 from '/portfolio-matheus/fy-3.jpg';
import fy4 from '/portfolio-matheus/fy-4.jpg';
import fy5 from '/portfolio-matheus/fy-5.jpg';
import fy6 from '/portfolio-matheus/fy-6.jpg';
import fy7 from '/portfolio-matheus/fy-7.jpg';

const FitYouSwimPage = () => {
    return (
        <div className="fityouswim-page">
            {/* Hero Section */}
            <section className="fys-hero">
                <div className="fys-hero-content">
                    <div className="fys-logo-container">
                        <img src={fyLogo} alt="Fit You Swim Logo" />
                    </div>
                    <h1 className="fys-title">Fit You Swim</h1>
                    <p className="fys-tagline">Gestão Completa para Escolas de Natação</p>
                    <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#b0c4de', fontSize: '1.1rem' }}>
                        Acompanhe a evolução dos seus alunos, gerencie turmas e automatize a comunicação com os pais.
                    </p>
                    <a href="#features" className="fys-download-btn">Conheça as Funcionalidades</a>
                </div>
            </section>

            {/* Features List */}
            <div id="features" className="fys-features">

                {/* Feature 1: Avaliação de Alunos */}
                <div className="fys-feature-block">
                    <div className="fys-feature-text">
                        <h2 className="fys-feature-title">Avaliação de Alunos</h2>
                        <p className="fys-feature-description">
                            Sistema completo de avaliação que permite acompanhar o progresso de cada aluno
                            individualmente. Registre habilidades, dificuldades e evolução ao longo do tempo
                            com relatórios detalhados e visuais.
                        </p>
                        <ul className="fys-feature-list">
                            <li>Registro de habilidades por nível</li>
                            <li>Histórico completo de avaliações</li>
                            <li>Indicadores visuais de progresso</li>
                        </ul>
                    </div>
                    <div className="fys-feature-image-container">
                        <div className="fys-mobile-frame">
                            <img src={fy1} alt="Tela de Avaliação" />
                        </div>
                    </div>
                </div>

                {/* Feature 2: Sistema de Toucas */}
                <div className="fys-feature-block reverse">
                    <div className="fys-feature-text">
                        <h2 className="fys-feature-title">Sistema de Toucas</h2>
                        <p className="fys-feature-description">
                            Gerencie o nível de evolução dos alunos através do sistema de troca de toucas.
                            Cada cor representa um estágio de aprendizado, facilitando a organização das
                            turmas e o acompanhamento visual do progresso.
                        </p>
                        <ul className="fys-feature-list">
                            <li>Níveis por cores de touca</li>
                            <li>Critérios de promoção automáticos</li>
                            <li>Notificação de mudança de nível</li>
                        </ul>
                    </div>
                    <div className="fys-feature-image-container">
                        <div className="fys-mobile-frame">
                            <img src={fy2} alt="Sistema de Toucas" />
                        </div>
                        <div className="fys-mobile-frame">
                            <img src={fy3} alt="Níveis de Touca" />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Acompanhamento pelos Pais */}
                <div className="fys-feature-block">
                    <div className="fys-feature-text">
                        <h2 className="fys-feature-title">Portal para Pais</h2>
                        <p className="fys-feature-description">
                            Os pais podem acompanhar o progresso dos filhos em tempo real através de um
                            portal exclusivo. Visualize avaliações, certificados conquistados e próximos
                            objetivos de aprendizado.
                        </p>
                        <ul className="fys-feature-list">
                            <li>Acesso em tempo real ao progresso</li>
                            <li>Visualização de certificados</li>
                            <li>Comunicação direta com professores</li>
                        </ul>
                    </div>
                    <div className="fys-feature-image-container">
                        <div className="fys-mobile-frame">
                            <img src={fy4} alt="Portal para Pais" />
                        </div>
                    </div>
                </div>

                {/* Feature 4: Certificados Automáticos */}
                <div className="fys-feature-block reverse">
                    <div className="fys-feature-text">
                        <h2 className="fys-feature-title">Certificados Automáticos</h2>
                        <p className="fys-feature-description">
                            O sistema gera automaticamente certificados personalizados quando o aluno
                            atinge marcos importantes. Celebre cada conquista com documentos profissionais
                            que podem ser impressos ou compartilhados digitalmente.
                        </p>
                        <ul className="fys-feature-list">
                            <li>Geração automática de certificados</li>
                            <li>Design personalizado por escola</li>
                            <li>Compartilhamento digital</li>
                        </ul>
                    </div>
                    <div className="fys-feature-image-container">
                        <div className="fys-mobile-frame">
                            <img src={fy5} alt="Certificados" />
                        </div>
                    </div>
                </div>

                {/* Feature 5: Multi-usuário */}
                <div className="fys-feature-block">
                    <div className="fys-feature-text">
                        <h2 className="fys-feature-title">Controle Multi-Usuário</h2>
                        <p className="fys-feature-description">
                            Sistema de permissões baseado em cargos permite que diferentes professores
                            e coordenadores tenham acessos específicos. Mantenha a segurança dos dados
                            enquanto permite colaboração eficiente.
                        </p>
                        <ul className="fys-feature-list">
                            <li>Permissões por cargo</li>
                            <li>Múltiplos professores por turma</li>
                            <li>Auditoria de alterações</li>
                        </ul>
                    </div>
                    <div className="fys-feature-image-container">
                        <div className="fys-mobile-frame">
                            <img src={fy6} alt="Multi-usuário" />
                        </div>
                        <div className="fys-mobile-frame">
                            <img src={fy7} alt="Gestão de Turmas" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FitYouSwimPage;
