import React from 'react';
import { Link } from 'react-router-dom';
import './CappPage.css';

// Import assets
import heroBanner from '../assets/capp/hero-banner.png'; // Cyberpunk Banner restored
import tutImg1 from '../assets/capp/feat-tutorial-1.png';
import tutImg2 from '../assets/capp/feat-tutorial-2.jpg';
import statusImg from '../assets/capp/feat-status.jpg';
import attrImg from '../assets/capp/feat-attributes.jpg';
import aptImg from '../assets/capp/feat-aptitudes.jpg';
import capImg from '../assets/capp/feat-capacities.jpg';
import equipImg from '../assets/capp/feat-equipment.jpg';
import diceImg from '../assets/capp/dice.jpg';
import booksImg from '../assets/capp/books.jpg';
import configImg from '../assets/capp/config.jpg';

const CappPage = () => {
    return (
        <div className="capp-page">
            {/* Hero Section */}
            <section className="capp-hero" style={{ backgroundImage: `url(${heroBanner})` }}>
                <div className="capp-hero-content">
                    <h1 className="capp-logo">C.A.P.P.</h1>
                    <p className="capp-tagline">Protocolo Iniciado</p>
                    <p style={{ marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: '#ccc', fontSize: '1.2rem', textShadow: '0 2px 4px #000' }}>
                        A ferramenta definitiva para sua sobrevivência no Dark Future.
                    </p>
                    <a href="#" className="capp-download-btn">Acessar Sistema</a>
                </div>
            </section>

            {/* Features List */}
            <div className="capp-features">

                {/* Feature 1: Tutorial / Criação */}
                <div className="feature-block">
                    <div className="feature-text">
                        <h2 className="feature-title">Criação Guiada</h2>
                        <p className="feature-description">
                            Esqueça as horas perdidas folheando manuais complexos antes mesmo de começar a jogar.
                            O C.A.P.P. apresenta "Arthur Collins", seu guia interativo que transforma a burocracia
                            da criação de personagem em uma narrativa envolvente. Através de decisões dialogadas
                            e perguntas estratégicas, você molda a história e as estatísticas do seu agente simultaneamente,
                            garantindo que cada número na ficha tenha um peso narrativo real desde o primeiro momento.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={tutImg1} alt="Tutorial Narrativo" />
                        </div>
                    </div>
                </div>

                {/* Feature 2: Status & Ficha (Reverse) */}
                <div className="feature-block reverse">
                    <div className="feature-text">
                        <h2 className="feature-title">Status em Tempo Real</h2>
                        <p className="feature-description">
                            No caos do combate, cada segundo conta e a informação é sua arma mais valiosa.
                            Nossa tela de status oferece um painel de controle vitalício, monitorando em tempo real
                            sua Classificação, Modus Operandi e Defesa. Acompanhe sua Obstinação restante e
                            pontos de Condição com clareza absoluta, permitindo que você tome decisões táticas
                            de vida ou morte sem jamais interromper o fluxo narrativo para realizar cálculos matemáticos.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={statusImg} alt="Tela de Status" />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Atributos */}
                <div className="feature-block">
                    <div className="feature-text">
                        <h2 className="feature-title">Atributos e Perícias</h2>
                        <p className="feature-description">
                            Seu agente é definido pelo que ele pode fazer. O sistema de Atributos e Perícias do C.A.P.P.
                            organiza suas capacidades físicas e mentais — Força, Agilidade, Intelecto e muito mais —
                            em uma grade intuitiva e responsiva. Visualize seus pontos fortes com destaques
                            luminosos e acesse modificadores instantaneamente. Seja persuadindo um contato no submundo
                            ou hackeando um terminal corporativo, seus números estão sempre prontos para a ação.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame wide-view">
                            <img src={attrImg} style={{ objectFit: 'contain' }} alt="Grid de Atributos" />
                        </div>
                    </div>
                </div>

                {/* Feature 3.5: Aptidões e Capacidades (Reverse) */}
                <div className="feature-block reverse">
                    <div className="feature-text">
                        <h2 className="feature-title">Aptidões e Capacidades</h2>
                        <p className="feature-description">
                            Mergulhe na profundidade da personalização com o gerenciamento avançado de Aptidões e Capacidades.
                            Aqui você não apenas lista seus poderes, mas controla sua evolução e impacto.
                            Monitore o nível de suas Aptidões como Adaptação e Furtividade, e acompanhe o
                            desbloqueio de Capacidades únicas como Alteração Alheia ou Manipulação Humana.
                            É o painel de controle da sua singularidade, onde você define o que torna seu agente verdadeiramente especial.
                        </p>
                    </div>
                    <div className="feature-image-container" style={{ gap: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="mobile-frame">
                            <img src={aptImg} alt="Lista de Aptidões" />
                        </div>
                        <div className="mobile-frame">
                            <img src={capImg} alt="Lista de Capacidades" />
                        </div>
                    </div>
                </div>

                {/* Feature 4: Equipamento */}
                <div className="feature-block">
                    <div className="feature-text">
                        <h2 className="feature-title">Gestão de Equipamento</h2>
                        <p className="feature-description">
                            Prepare-se para a guerra com uma interface visual de equipamento de última geração.
                            Esqueça as listas de texto intermináveis; utilize o sistema de "Boneco" para arrastar e soltar
                            implantes, armaduras e dispositivos diretamente nos slots corporais do seu agente.
                            Do capacete tático às botas de propulsão, gerencie sua carga e slots de aprimoramento
                            com a precisão de um engenheiro militar, garantindo que você esteja sempre otimizado para a missão.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={equipImg} alt="Boneco de Equipamento" />
                        </div>
                    </div>
                </div>

                {/* Feature 5: Rolagem de Dados (Reverse) */}
                <div className="feature-block reverse">
                    <div className="feature-text">
                        <h2 className="feature-title">Rolagem Automatizada</h2>
                        <p className="feature-description">
                            Sinta o peso do destino sem a bagunça da mesa. O rolador de dados integrado não é apenas
                            um gerador de números aleatórios, mas uma implementação completa das regras do sistema C.A.P.
                            Ele calcula automaticamente sucessos, falhas críticas e a mecânica de "explosão" de dados,
                            apresentando os resultados com efeitos visuais impactantes e sonoros. Focado na transparência
                            e na emoção, ele mantém a tensão do jogo fluindo a cada teste de habilidade.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={diceImg} alt="Rolagem de Dados" />
                        </div>
                    </div>
                </div>

                {/* Feature 6: Personalização */}
                <div className="feature-block">
                    <div className="feature-text">
                        <h2 className="feature-title">Personalização Visual</h2>
                        <p className="feature-description">
                            Seu aplicativo, suas regras estéticas. O C.A.P.P. entende que a imersão é visual,
                            oferecendo uma seleção de 5 temas exclusivos e meticulosamente desenhados.
                            Alterne entre o clássico "Cyber" verde, o agressivo "Vamp" vermelho, o elegante "Neon" azul,
                            ou mergulhe na nostalgia "Synth". Cada tema altera completamente a paleta de cores e a
                            atmosfera da interface, permitindo que você sincronize o app com o tom da sua campanha ou a vibe do seu personagem.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={configImg} alt="Temas" />
                        </div>
                    </div>
                </div>

                {/* Feature 7: Biblioteca (Reverse) */}
                <div className="feature-block reverse">
                    <div className="feature-text">
                        <h2 className="feature-title">Biblioteca de Regras</h2>
                        <p className="feature-description">
                            Conhecimento é poder, e no C.A.P.P., ele está sempre ao seu alcance. A Biblioteca integrada
                            permite que você carregue e organize seus livros de regras, suplementos e anotações em PDF.
                            Com um leitor otimizado para mobile, você pode consultar tabelas de itens, verificar regras
                            obscuras de combate ou reler a lore do mundo em segundos, sem nunca sair do aplicativo.
                            Mantenha o mestre feliz e o jogo ágil com acesso instantâneo a toda a informação necessária.
                        </p>
                    </div>
                    <div className="feature-image-container">
                        <div className="mobile-frame">
                            <img src={booksImg} alt="Biblioteca" />
                        </div>
                    </div>
                </div>

                <div className="privacy-link-container">
                    <Link to="/capp/privacy-policy" className="privacy-link">Política de Privacidade</Link>
                </div>

            </div>
        </div>
    );
};

export default CappPage;
