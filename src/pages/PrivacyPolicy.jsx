import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '120px 20px', maxWidth: '900px', margin: '0 auto', color: '#e0e0e0', lineHeight: '1.8' }}>
            <h1 style={{ fontFamily: 'var(--font-secondary)', fontSize: '3rem', marginBottom: '1rem', color: '#FFFF00', textTransform: 'uppercase' }}>Política de Privacidade - CAPP</h1>
            <p style={{ color: '#aaa', marginBottom: '3rem' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <p>A Doppio ("nós", "nosso") desenvolve aplicativos com o compromisso de proteger a sua privacidade. Esta página informa aos visitantes sobre nossas políticas de coleta, uso e divulgação de Informações Pessoais, caso decidam utilizar o nosso aplicativo CAPP.</p>
                <p>Ao optar por usar o nosso Serviço, você concorda com a coleta e uso de informações relacionadas a esta política. As Informações Pessoais que coletamos são usadas para fornecer e melhorar o Serviço. Não usaremos ou compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>1. Coleta e Uso de Informações</h2>
                <p>Para uma melhor experiência ao usar nosso Serviço, podemos exigir que você nos forneça certas informações de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade.</p>
                <p>O aplicativo utiliza serviços de terceiros que podem coletar informações usadas para identificá-lo. Abaixo estão os links para a política de privacidade dos provedores de serviços terceirizados utilizados pelo aplicativo:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '1rem', color: '#FFFF00' }}>
                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Google Play Services</a></li>
                    <li>AdMob (se aplicável)</li>
                    <li>Firebase Analytics (se aplicável)</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>2. Dados de Log</h2>
                <p>Informamos que sempre que você utiliza nosso Serviço, em caso de erro no aplicativo, coletamos dados e informações (através de produtos de terceiros) no seu telefone, chamados de Dados de Log. Esses dados podem incluir informações como o endereço de IP do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar nosso Serviço, a hora e a data de uso do Serviço e outras estatísticas.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>3. Cookies</h2>
                <p>Cookies são arquivos com pequena quantidade de dados que são comumente usados como identificadores únicos anônimos. Eles são enviados para o seu navegador a partir dos sites que você visita e são armazenados na memória interna do seu dispositivo.</p>
                <p>Este Serviço não usa esses “cookies” explicitamente. No entanto, o aplicativo pode usar código de terceiros e bibliotecas que usam “cookies” para coletar informações e melhorar seus serviços. Você tem a opção de aceitar ou recusar esses cookies e saber quando um cookie está sendo enviado para o seu dispositivo. Se você optar por recusar nossos cookies, pode não conseguir usar algumas partes deste Serviço.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>4. Provedores de Serviço</h2>
                <p>Podemos empregar empresas e indivíduos terceirizados pelos seguintes motivos:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '1rem', color: '#ccc' }}>
                    <li>Para facilitar nosso Serviço;</li>
                    <li>Para fornecer o Serviço em nosso nome;</li>
                    <li>Para realizar serviços relacionados ao Serviço; ou</li>
                    <li>Para nos ajudar a analisar como nosso Serviço é utilizado.</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Queremos informar aos usuários deste Serviço que esses terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outro fim.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>5. Segurança</h2>
                <p>Valorizamos sua confiança em nos fornecer suas Informações Pessoais, por isso estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta.</p>
                <p style={{ marginTop: '1rem', borderLeft: '3px solid #FFFF00', paddingLeft: '1rem', fontStyle: 'italic' }}>O aplicativo preza pelo armazenamento local de dados ("offline-first") sempre que possível, garantindo que suas fichas, anotações e criações permaneçam sob seu controle direto no dispositivo.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>6. Links para Outros Sites</h2>
                <p>Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, você será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, aconselhamos fortemente que você reveja a Política de Privacidade desses sites. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>7. Privacidade das Crianças</h2>
                <p>Esses Serviços não se dirigem a ninguém com idade inferior a 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças com menos de 13 anos. No caso de descobrirmos que uma criança com menos de 13 anos nos forneceu informações pessoais, as excluímos imediatamente de nossos servidores. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>8. Alterações nesta Política de Privacidade</h2>
                <p>Podemos atualizar nossa Política de Privacidade periodicamente. Portanto, aconselhamos que você revise esta página periodicamente para verificar quaisquer alterações. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.</p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Esta política é efetiva a partir de 2026-01-08.</p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00f3ff', marginBottom: '1rem' }}>9. Contato</h2>
                <p>Se você tiver dúvidas ou sugestões sobre nossa Política de Privacidade, não hesite em nos contatar em <a href="mailto:doppio.designtech@gmail.com" style={{ color: '#FFFF00', textDecoration: 'underline' }}>doppio.designtech@gmail.com</a>.</p>
            </section>

        </div>
    );
};

export default PrivacyPolicy;
