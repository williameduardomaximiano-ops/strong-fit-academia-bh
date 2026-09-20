export default function Home() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#topo" aria-label="Academia Top Fit - início">
          <span className="brandMark">TF</span>
          <span className="brandCopy"><strong>TOP FIT</strong><small>ACADEMIA</small></span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#estrutura">Estrutura</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="headerCta" href="https://wa.me/5541997221792?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Academia%20Top%20Fit." target="_blank" rel="noopener noreferrer">Quero treinar</a>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="heroMedia" aria-hidden="true" />
          <div className="heroShade" aria-hidden="true" />
          <div className="heroGrid" aria-hidden="true" />
          <div className="heroContent">
            <span className="eyebrow">ALMIRANTE TAMANDARÉ · PR</span>
            <h1>SEU TREINO.<br/><em>SEU RITMO.</em><br/>SEU PRÓXIMO NÍVEL.</h1>
            <p>Uma academia completa para quem quer evoluir com musculação, aulas em grupo, dança e artes marciais.</p>
            <div className="actions">
              <a className="btn primary" href="https://wa.me/5541997221792?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20visita%20%C3%A0%20Top%20Fit." target="_blank" rel="noopener noreferrer">Agendar uma visita <span>↗</span></a>
              <a className="btn ghost" href="#estrutura">Conhecer a estrutura</a>
            </div>
          </div>
          <div className="heroBadge">
            <strong>4,6</strong><span>★★★★★</span><small>avaliação no Google</small>
          </div>
        </section>

        <section className="trustStrip" aria-label="Diferenciais">
          <div><strong>06H–22H</strong><span>Segunda a sexta</span></div>
          <div><strong>+ MODALIDADES</strong><span>Treino para diferentes objetivos</span></div>
          <div><strong>ESTRUTURA COMPLETA</strong><span>Conforto para sua rotina</span></div>
          <div><strong>FÁCIL ACESSO</strong><span>Av. Emílio Johnson, 466</span></div>
        </section>

        <section className="section" id="estrutura">
          <div className="sectionKicker">01 · ESTRUTURA</div>
          <div className="introGrid">
            <div><h2>NÃO É SÓ TREINAR.<br/><span>É QUERER VOLTAR.</span></h2></div>
            <div className="introCopy">
              <p>A Top Fit reúne musculação, aulas coletivas e atividades variadas em um espaço pensado para encaixar o treino na sua rotina.</p>
              <p>Estacionamento, vestiário, chuveiro, Wi-Fi e estrutura acessível ajudam a tornar a experiência mais prática do início ao fim.</p>
            </div>
          </div>
          <div className="showcase">
            <article className="feature featureMain">
              <div className="featureImage strength" aria-hidden="true" />
              <div className="featureOverlay" />
              <div className="featureContent"><span>01</span><h3>Musculação</h3><p>Estrutura para treinar força, condicionamento e evolução constante.</p></div>
            </article>
            <div className="featureStack">
              <article className="feature">
                <div className="featureImage group" aria-hidden="true" />
                <div className="featureOverlay" />
                <div className="featureContent"><span>02</span><h3>Aulas em grupo</h3></div>
              </article>
              <article className="feature darkCard">
                <div className="bigNumber">466</div>
                <p>Av. Emílio Johnson<br/>Vila Santa Terezinha</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Academia+Top+Fit+Av.+Emilio+Johnson+466+Almirante+Tamandare+PR" target="_blank" rel="noopener noreferrer">COMO CHEGAR ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="section modalities" id="modalidades">
          <div className="sectionKicker">02 · MODALIDADES</div>
          <div className="sectionHead">
            <h2>TREINE DO <span>SEU JEITO.</span></h2>
            <p>Escolha a atividade que combina com sua rotina e seu objetivo.</p>
          </div>
          <div className="modalityGrid">
            <article className="modalityCard"><span>01</span><h3>Musculação</h3><p>Força, resistência e condicionamento.</p><b>↗</b></article>
            <article className="modalityCard"><span>02</span><h3>Ginástica</h3><p>Aulas dinâmicas para movimentar o corpo.</p><b>↗</b></article>
            <article className="modalityCard"><span>03</span><h3>Dança</h3><p>Energia, ritmo e treino em grupo.</p><b>↗</b></article>
            <article className="modalityCard"><span>04</span><h3>Artes marciais</h3><p>Disciplina, técnica e condicionamento.</p><b>↗</b></article>
          </div>
          <p className="sourceNote">A disponibilidade e os horários das aulas podem variar. Consulte a academia.</p>
        </section>

        <section className="impact">
          <div className="impactBg" aria-hidden="true" />
          <div className="impactInner">
            <span className="eyebrow">TREINO QUE CABE NA SUA ROTINA</span>
            <h2>MAIS ENERGIA.<br/>MAIS CONSTÂNCIA.<br/><em>MAIS VOCÊ.</em></h2>
            <a className="btn primary" href="https://wa.me/5541997221792?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Top%20Fit." target="_blank" rel="noopener noreferrer">Falar com a Top Fit <span>↗</span></a>
          </div>
        </section>

        <section className="section" id="avaliacoes">
          <div className="sectionKicker">03 · QUEM TREINA, CONTA</div>
          <div className="reviewsTop">
            <div><strong>4,6</strong><span>★★★★★</span><small>53 avaliações no Google*</small></div>
            <h2>EXPERIÊNCIAS QUE<br/><span>FALAM POR SI.</span></h2>
          </div>
          <div className="reviewGrid">
            <article className="review"><div className="stars">★★★★★</div><p>Alunos destacam a qualidade dos aparelhos, a limpeza e o ambiente confortável da academia.</p><span>Resumo de avaliações públicas</span></article>
            <article className="review"><div className="stars">★★★★★</div><p>As aulas de ritmo, circuito, zumba, pilates e jump aparecem entre os pontos elogiados por clientes.</p><span>Resumo de avaliações públicas</span></article>
            <article className="review"><div className="stars">★★★★★</div><p>Espaço amplo e variedade de equipamentos também são mencionados por quem treina no local.</p><span>Resumo de avaliações públicas</span></article>
          </div>
          <p className="sourceNote">*Avaliação consultada no perfil público do Google. Pode variar com novas avaliações.</p>
        </section>

        <section className="section contactSection" id="contato">
          <div className="contactPanel">
            <div className="contactCopy">
              <div className="sectionKicker">04 · VEM PRA TOP FIT</div>
              <h2>O MELHOR TREINO<br/>É O QUE <span>COMEÇA.</span></h2>
              <p>Fale com a equipe, tire suas dúvidas e conheça a estrutura pessoalmente.</p>
              <div className="actions">
                <a className="btn primary" href="https://wa.me/5541997221792?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Academia%20Top%20Fit." target="_blank" rel="noopener noreferrer">Chamar no WhatsApp <span>↗</span></a>
                <a className="btn ghost" href="tel:+5541997221792">Ligar agora</a>
              </div>
            </div>
            <div className="contactInfo">
              <div><span>ENDEREÇO</span><strong>Av. Emílio Johnson, 466<br/>Vila Santa Terezinha<br/>Almirante Tamandaré – PR</strong></div>
              <div><span>HORÁRIOS</span><strong>Seg–Sex: 06:00–22:00<br/>Sábado: 06:00–12:00<br/>Domingo: fechado</strong></div>
              <div><span>INSTAGRAM</span><a href="https://instagram.com/top_fit2012" target="_blank" rel="noopener noreferrer">@top_fit2012 ↗</a></div>
              <div><span>TELEFONE</span><a href="tel:+5541997221792">(41) 99722-1792</a></div>
            </div>
          </div>
          <div className="mapWrap">
            <iframe title="Mapa da Academia Top Fit" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Academia%20Top%20Fit%20Av.%20Emilio%20Johnson%20466%20Almirante%20Tamandare%20PR&output=embed" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand"><span className="brandMark">TF</span><span className="brandCopy"><strong>TOP FIT</strong><small>ACADEMIA</small></span></div>
        <p>Treino, movimento e evolução em Almirante Tamandaré.</p>
        <a href="#topo">Voltar ao topo ↑</a>
        <small>© 2026 Academia Top Fit. Informações públicas sujeitas a atualização.</small>
      </footer>

      <a className="floatingWa" href="https://wa.me/5541997221792?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Top%20Fit." target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp">WA</a>
    </>
  );
}
