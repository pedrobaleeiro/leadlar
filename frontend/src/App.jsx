import { useState } from "react";
import "./App.css";
function App() {
  const [pagina, setPagina] = useState("inicio");
  const conversations = [
    {
      name: "Larissa Martins",
      channel: "WhatsApp",
      message: "Oi! Ainda está disponível o apê no Itaim?",
      time: "agora",
      icon: "🟢",
    },
    {
      name: "Carlos Eduardo",
      channel: "Instagram",
      message: "Gostaria de agendar uma visita.",
      time: "2 min",
      icon: "🟣",
    },
    {
      name: "Juliana Souza",
      channel: "Facebook",
      message: "Você: Claro! Posso te ajudar.",
      time: "15 min",
      icon: "🔵",
    },
    {
      name: "Fernanda Lima",
      channel: "TikTok",
      message: "Tem mais fotos do imóvel?",
      time: "1 h",
      icon: "⚫",
    },
  ];

  const leads = [
    {
      name: "Marcos Oliveira",
      source: "WhatsApp • Itaim Bibi",
      status: "Quente",
      time: "agora",
    },
    {
      name: "Beatriz Almeida",
      source: "Instagram • Jardim Europa",
      status: "Quente",
      time: "5 min",
    },
    {
      name: "Rafael Costa",
      source: "Facebook • Vila Nova Conceição",
      status: "Morno",
      time: "1 h",
    },
  ];

  return (
    <div className="leadlar-app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">L</div>

          <div>
            <h1>Leadlar</h1>
            <span>Real Estate AI</span>
          </div>
        </div>

        <nav className="nav">

          <button
  className="nav-item active"
  onClick={() => setPagina("inicio")}
>
            <span>⌂</span>
            Início
          </button>

          <button className="nav-item">
            <span>⌂</span>
            Imóveis
          </button>

          <button className="nav-item">
            <span>♙</span>
            Leads
            <small>12</small>
          </button>

          <button className="nav-item">
            <span>▢</span>
            Inbox Omnichannel
            <small>8</small>
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Automações
          </button>

          <button className="nav-item">
            <span>✦</span>
            Conteúdo IA
          </button>

          <button className="nav-item">
            <span>▣</span>
            Agenda
          </button>

          <button className="nav-item">
            <span>↗</span>
            Relatórios
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Configurações
          </button>

        </nav>

        <p className="menu-title">ATALHOS</p>

        <div className="shortcuts">
          <button>⌂ Modelos salvos</button>
          <button>☵ Respostas rápidas</button>
          <button>⚡ Automações salvas</button>
          <button>◉ Campanhas</button>
          <button>⌁ Integrações</button>
        </div>

        <div className="premium-box">
          <strong>Plano Profissional</strong>

          <p>
            Recursos avançados de IA,
            CRM e automações.
          </p>

          <button>Ver meu plano →</button>
        </div>

        <div className="user">
          <div className="avatar">PB</div>

          <div>
            <strong>Pedro Baleeiro</strong>
            <span>Corretor imobiliário</span>
          </div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="main">

        {/* HEADER */}

        <header className="header">

          <div>
            <h2>Olá, Pedro 👋</h2>
            <p>
              Acompanhe seus imóveis, leads e automações em um só lugar.
            </p>
          </div>

          <div className="header-actions">

            <div className="search">
              🔍
              <input
                placeholder="Buscar imóveis, leads, conversas..."
              />
            </div>

            <button className="icon-button">🔔</button>

            <button className="new-button">
              + Novo
            </button>

          </div>

        </header>

        {/* KPIS */}

        <section className="metrics">

          <div className="metric-card">
            <div className="metric-icon purple">♙</div>

            <div>
              <span>Leads do dia</span>
              <h3>
                38 <small>↑ 26%</small>
              </h3>
              <p>Ontem: 30</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon blue">▣</div>

            <div>
              <span>Visitas agendadas</span>
              <h3>
                12 <small>↑ 20%</small>
              </h3>
              <p>esta semana</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon green">📢</div>

            <div>
              <span>Anúncios ativos</span>
              <h3>
                27 <small>↑ 8%</small>
              </h3>
              <p>em 4 plataformas</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon orange">↗</div>

            <div>
              <span>Conversão geral</span>
              <h3>
                8,4% <small>↑ 1,2 pp</small>
              </h3>
              <p>últimos 30 dias</p>
            </div>
          </div>

        </section>

        {/* AI */}

        <section className="ai-panel">

          <div className="ai-title">
            <span className="ai-icon">✦</span>

            <div>
              <h2>Assistente Leadlar IA</h2>

              <p>
                Seu copiloto para criar conteúdo,
                atender leads e fechar mais negócios.
              </p>
            </div>
          </div>

          <div className="ai-search">

            <input
              placeholder="Pergunte algo ou descreva o conteúdo que deseja criar..."
            />

            <button>→</button>

          </div>

          <div className="ai-actions">

            <button>✨ Criar descrição</button>

            <button>🎬 Roteiro de vídeo</button>

            <button>📱 Legenda para Reels</button>

            <button>💬 Responder lead</button>

            <button>🚀 Publicar em todas as redes</button>

          </div>

        </section>

        {/* ROW */}

        <section className="dashboard-grid">

          {/* INBOX */}

          <div className="panel">

            <div className="panel-header">
              <div>
                <h3>Inbox Omnichannel</h3>
                <p>Todas as conversas em um só lugar.</p>
              </div>
            </div>

            <div className="channel-tabs">

              <button className="selected">Todas 8</button>

              <button>🟢 WhatsApp 5</button>

              <button>🟣 Instagram 1</button>

              <button>🔵 Facebook 1</button>

              <button>⚫ TikTok 1</button>

            </div>

            <div className="conversation-list">

              {conversations.map((item) => (
                <div
                  className="conversation"
                  key={item.name}
                >

                  <div className="conversation-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div className="conversation-info">

                    <strong>
                      {item.name} {item.icon}
                    </strong>

                    <span>
                      {item.message}
                    </span>

                  </div>

                  <small>{item.time}</small>

                </div>
              ))}

            </div>

            <button className="panel-bottom-button">
              Abrir inbox completo →
            </button>

          </div>

          {/* ESTÚDIO */}

          <div className="panel">

            <div className="panel-header">
              <div>
                <h3>Estúdio de Conteúdo</h3>

                <p>
                  Crie conteúdo com IA e publique nas redes.
                </p>
              </div>
            </div>

            <div className="content-tabs">
              <button className="selected">
                Rascunhos 4
              </button>

              <button>Agendados 5</button>

              <button>Publicados</button>
            </div>

            <div className="content-item">
              <div className="content-image image-one"></div>

              <div>
                <strong>
                  Apartamento moderno no Itaim
                </strong>

                <span>Rascunho • Criado há 2h</span>
              </div>

              <button>⋮</button>
            </div>

            <div className="content-item">
              <div className="content-image image-two"></div>

              <div>
                <strong>
                  Casa em condomínio fechado
                </strong>

                <span>Rascunho • Criado há 5h</span>
              </div>

              <button>⋮</button>
            </div>

            <div className="content-item">
              <div className="content-image image-three"></div>

              <div>
                <strong>
                  Tour pelo duplex incrível
                </strong>

                <span>Rascunho • Criado há 1 dia</span>
              </div>

              <button>⋮</button>
            </div>

            <button className="panel-bottom-button">
              Criar novo conteúdo →
            </button>

          </div>

          {/* PUBLICAÇÃO */}

          <div className="panel">

            <div className="panel-header">
              <div>
                <h3>Publicação Unificada</h3>

                <p>
                  Publique e compartilhe em todas as redes.
                </p>
              </div>
            </div>

            <div className="social-networks">

              <div>
                <span className="social whatsapp">
                  W
                </span>
                WhatsApp
              </div>

              <div>
                <span className="social instagram">
                  I
                </span>
                Instagram
              </div>

              <div>
                <span className="social facebook">
                  f
                </span>
                Facebook
              </div>

              <div>
                <span className="social tiktok">
                  ♪
                </span>
                TikTok
              </div>

              <div>
                <span className="social marketplace">
                  M
                </span>
                Marketplace
              </div>

            </div>

            <div className="post-preview">

              <div className="post-image"></div>

              <div>
                <strong>
                  Apartamento incrível com vista para o parque
                </strong>

                <p>
                  3 suítes, 2 vagas e lazer completo!
                </p>

                <span>#Oportunidade</span>
              </div>

            </div>

            <button className="publish-button">
              🚀 Publicar em todas as redes
            </button>

            <button className="schedule-button">
              ▣ Agendar para depois
            </button>

          </div>

          {/* LEADS */}

          <div className="panel">

            <div className="panel-header">
              <div>
                <h3>Leads em destaque</h3>
              </div>

              <button>Ver todos</button>
            </div>

            <div className="lead-tabs">
              <button className="selected">
                🔥 Quentes 12
              </button>

              <button>Em negociação 7</button>

              <button>Follow-up 5</button>
            </div>

            <div className="lead-list">

              {leads.map((lead) => (
                <div className="lead" key={lead.name}>

                  <div className="lead-avatar">
                    {lead.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{lead.name}</strong>
                    <span>{lead.source}</span>
                  </div>

                  <div className="lead-side">
                    <span
                      className={
                        lead.status === "Quente"
                          ? "hot"
                          : "warm"
                      }
                    >
                      {lead.status}
                    </span>

                    <small>{lead.time}</small>
                  </div>

                </div>
              ))}

            </div>

            <button className="panel-bottom-button">
              Ver funil completo →
            </button>

          </div>

        </section>

        {/* LOWER */}

        <section className="bottom-grid">

          <div className="panel">

            <div className="panel-header">
              <h3>Automações ativas</h3>
              <button>Ver todas</button>
            </div>

            <div className="automation">

              <div>
                <strong>
                  🟢 Boas-vindas WhatsApp
                </strong>

                <span>
                  Responde novos contatos automaticamente
                </span>
              </div>

              <div className="toggle active"></div>

            </div>

            <div className="automation">

              <div>
                <strong>
                  🟣 Follow-up de visita
                </strong>

                <span>
                  Envia mensagem 1 dia após a visita
                </span>
              </div>

              <div className="toggle active"></div>

            </div>

          </div>

          <div className="panel">

            <div className="panel-header">
              <h3>Calendário de conteúdo</h3>
              <button>Ver calendário</button>
            </div>

            <div className="calendar">

              {["Seg 20", "Ter 21", "Qua 22", "Qui 23", "Sex 24"].map(
                (day) => (
                  <div className="calendar-day" key={day}>
                    <span>{day}</span>

                    <div className="calendar-property"></div>

                    <small>15:00</small>
                  </div>
                )
              )}

            </div>

          </div>

          <div className="panel performance">

            <div className="panel-header">
              <h3>Desempenho dos anúncios</h3>
              <button>Ver relatório</button>
            </div>

            <div className="performance-grid">

              <div>
                <span>Investimento</span>
                <strong>R$ 1.842</strong>
                <small>↑ 12%</small>
              </div>

              <div>
                <span>Alcance</span>
                <strong>24.875</strong>
                <small>↑ 18%</small>
              </div>

              <div>
                <span>Cliques</span>
                <strong>312</strong>
                <small>↑ 8%</small>
              </div>

              <div>
                <span>Leads</span>
                <strong>48</strong>
                <small>↑ 20%</small>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;