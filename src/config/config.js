// ============================================================
//  CONFIG CENTRAL — Sistema White-Label
// ============================================================
//  Edite APENAS este arquivo para trocar os dados da empresa.
//  Os componentes consomem tudo daqui — não toque neles para
//  ajustes de identidade ou conteúdo.
// ============================================================

export const config = {
  // ----------------------------------------------------------
  //  IDENTIDADE DA EMPRESA
  // ----------------------------------------------------------
  empresa: {
    nome: 'Auto Elétrica e Mecânica do João',
    nomeCurto: 'Auto Elétrica do João',
    subBrand: 'Bosch Car Service',
    slogan: 'Diagnóstico, Mecânica e Auto Elétrica com Qualidade Bosch',
    descricao:
      'Serviços automotivos especializados, mecânica, pneus, alinhamento, auto elétrica e manutenção completa em Marechal Cândido Rondon.',
    cidade: 'Marechal Cândido Rondon',
    estado: 'PR',
    cnpj: '', // opcional, deixe vazio para esconder
    anoFundacao: null,
  },

  // ----------------------------------------------------------
  //  CONTATO
  // ----------------------------------------------------------
  contato: {
    whatsapp: '5545999916556', // formato internacional sem +, espaços ou traços
    whatsappDisplay: '(45) 99991-6556',
    telefone: '4532542414',
    telefoneDisplay: '(45) 3254-2414',
    email: '', // opcional
    endereco: {
      rua: 'R. Independência, 883',
      bairro: 'Centro',
      cidade: 'Marechal Cândido Rondon',
      estado: 'PR',
      cep: '',
      // Coordenadas para o Google Maps embed (Marechal Cândido Rondon - PR)
      lat: -24.5559,
      lng: -54.0581,
      // URL do embed do Google Maps (pode atualizar com o endereço exato)
      mapsEmbedUrl:
        'https://www.google.com/maps?q=R.+Independ%C3%AAncia,+883,+Marechal+C%C3%A2ndido+Rondon+-+PR&output=embed',
    },
    horarios: [
      { dias: 'Segunda a Sexta', horario: '07:30 – 12:00 / 13:30 – 18:00' },
      { dias: 'Sábado', horario: 'Fechado' },
      { dias: 'Domingo', horario: 'Fechado' },
    ],
    redes: {
      facebook:
        'https://www.facebook.com/share/1MzAKqw6rJ/?mibextid=wwXIfr',
      instagram: '',
    },
  },

  // ----------------------------------------------------------
  //  MENSAGENS PRÉ-DEFINIDAS DO WHATSAPP
  // ----------------------------------------------------------
  whatsapp: {
    mensagemPadrao:
      'Olá! Gostaria de mais informações sobre os serviços da Auto Elétrica e Mecânica do João.',
    mensagemOrcamento:
      'Olá! Gostaria de solicitar um orçamento. Meu carro é o ____ e o problema é ____.',
    mensagemServico: (servico) =>
      `Olá! Gostaria de mais informações sobre o serviço de ${servico}.`,
  },

  // ----------------------------------------------------------
  //  HERO
  // ----------------------------------------------------------
  hero: {
    titulo: 'Diagnóstico, Mecânica e Auto Elétrica com',
    tituloDestaque: 'Qualidade Bosch',
    subtitulo:
      'Serviços automotivos especializados em mecânica, pneus, alinhamento, auto elétrica e manutenção completa em Marechal Cândido Rondon.',
    imagem: '/images/sobre.webp',
    provas: [
      'Honestidade nos reparos',
      'Equipe especializada',
      'Bosch Car Service',
      'Atendimento profissional',
    ],
  },

  // ----------------------------------------------------------
  //  SERVIÇOS
  // ----------------------------------------------------------
  servicos: [
    {
      id: 'mecanica',
      titulo: 'Mecânica Geral',
      icone: 'Wrench',
      descricao:
        'Reparo de motor, suspensão, freios, transmissão e lubrificação completa.',
      itens: ['Reparo de motor', 'Suspensão', 'Freios', 'Transmissão', 'Lubrificação'],
      imagem: '/images/motoraberto.webp',
    },
    {
      id: 'auto-eletrica',
      titulo: 'Auto Elétrica',
      icone: 'Zap',
      descricao:
        'Diagnóstico elétrico computadorizado, bateria, velas e motor de partida.',
      itens: ['Diagnóstico elétrico', 'Bateria', 'Reparos elétricos', 'Velas', 'Motor de partida'],
      imagem: '/images/eletrica.webp',
    },
    {
      id: 'pneus',
      titulo: 'Pneus e Alinhamento',
      icone: 'Disc3',
      descricao:
        'Alinhamento, balanceamento e venda de pneus para todos os modelos.',
      itens: ['Alinhamento', 'Balanceamento', 'Pneus'],
      imagem: '/images/pneus.webp',
    },
    {
      id: 'ar-condicionado',
      titulo: 'Ar Condicionado',
      icone: 'Snowflake',
      descricao:
        'Manutenção, troca de filtros, reparo e instalação de sistema completo.',
      itens: ['Manutenção', 'Troca de filtros', 'Reparo e instalação'],
      imagem: '/images/diagnostico.webp',
    },
    {
      id: 'diagnostico',
      titulo: 'Diagnóstico Especializado',
      icone: 'ScanLine',
      descricao:
        'Equipamentos modernos para diagnóstico veicular completo e identificação precisa de falhas.',
      itens: ['Diagnóstico computadorizado', 'Análise de falhas', 'Manutenção de câmbio automático'],
      imagem: '/images/diagnostico.webp',
    },
    {
      id: 'outros',
      titulo: 'Peças e Acessórios',
      icone: 'ShieldCheck',
      descricao:
        'Estoque completo de peças e acessórios das melhores marcas para seu veículo.',
      itens: ['Peças originais', 'Acessórios automotivos', 'Marcas de qualidade'],
      imagem: '/images/eletrica.webp',
    },
  ],

  // ----------------------------------------------------------
  //  SOBRE
  // ----------------------------------------------------------
  sobre: {
    titulo: 'Sobre a Empresa',
    texto: `A Auto Elétrica e Mecânica do João oferece serviços automotivos especializados com transparência, honestidade e atendimento profissional. Como Bosch Car Service, atua com mecânica, auto elétrica, pneus, alinhamento e diagnóstico automotivo, priorizando qualidade e confiança em cada serviço.`,
    diferenciais: [
      'Atendimento honesto',
      'Valores justos',
      'Profissionais especializados',
      'Ambiente organizado',
      'Sala de espera climatizada',
      'Atendimento transparente',
    ],
    imagem: '/images/sobre.webp',
  },

  // ----------------------------------------------------------
  //  GALERIA
  // ----------------------------------------------------------
  galeria: [
    {
      url: '/images/sobre.webp',
      alt: 'Oficina Auto Elétrica João — interior',
    },
    {
      url: '/images/pneus.webp',
      alt: 'Estoque de pneus',
    },
    {
      url: '/images/motoraberto.webp',
      alt: 'Alinhamento e balanceamento',
    },
    {
      url: '/images/arcondicionado.webp',
      alt: 'Manutenção de ar condicionado veicular',
    },
    {
      url: '/images/autoeletrica.webp',
      alt: 'Diagnóstico elétrico automotivo',
    },
    {
      url: '/images/scanner.webp',
      alt: 'Scanner automotivo profissional',
    },
  ],

  // ----------------------------------------------------------
  //  AVALIAÇÕES
  // ----------------------------------------------------------
  avaliacoes: [
    {
      nome: 'Carlos Mendonça',
      texto:
        'Excelente atendimento! Cobram valores justos. São muito honestos nos reparos e sugestões.',
      nota: 5,
    },
    {
      nome: 'Rodrigo Almeida',
      texto:
        'Ambiente limpo e organizado, atendimento honesto e realmente especializado.',
      nota: 5,
    },
    {
      nome: 'Fernanda Costa',
      texto:
        'Profissionais competentes, atendimento maravilhoso e serviço de qualidade.',
      nota: 5,
    },
    {
      nome: 'João Paulo Silva',
      texto: 'Preço justo e atendimento transparente.',
      nota: 5,
    },
    {
      nome: 'Márcia Oliveira',
      texto: 'Excelente atendimento e serviço.',
      nota: 5,
    },
  ],

  // ----------------------------------------------------------
  //  DIFERENCIAIS (cards da seção)
  // ----------------------------------------------------------
  diferenciais: [
    { icone: 'Handshake', titulo: 'Honestidade no Serviço', descricao: 'Diagnóstico transparente e indicações justas para cada reparo.' },
    { icone: 'ScanSearch', titulo: 'Diagnóstico Especializado', descricao: 'Scanner Bosch e equipamentos modernos para análise precisa.' },
    { icone: 'UserCheck', titulo: 'Atendimento Profissional', descricao: 'Equipe treinada para atender com clareza e respeito.' },
    { icone: 'Award', titulo: 'Qualidade Bosch', descricao: 'Padrão Bosch Car Service em todos os serviços executados.' },
    { icone: 'Users', titulo: 'Equipe Qualificada', descricao: 'Profissionais com experiência e capacitação técnica.' },
    { icone: 'BadgePercent', titulo: 'Preço Justo', descricao: 'Orçamento transparente, sem cobranças surpresa.' },
  ],

  // ----------------------------------------------------------
  //  FFR DO BRASIL — NÃO ALTERAR (config white-label)
  // ----------------------------------------------------------
  ffr: {
    whatsapp: '5545999317831',
    mensagem: (nomeEmpresa) =>
      `Vim do site da ${nomeEmpresa}, quero falar com o responsável pelo site.`,
  },

  // ----------------------------------------------------------
  //  SEO
  // ----------------------------------------------------------
  seo: {
    titulo:
      'Auto Elétrica e Mecânica do João — Bosch Car Service | Marechal Cândido Rondon',
    descricao:
      'Oficina mecânica e auto elétrica em Marechal Cândido Rondon. Bosch Car Service especializado em mecânica, alinhamento, balanceamento, ar condicionado e diagnóstico computadorizado.',
    keywords:
      'mecânica Marechal Rondon, auto elétrica Marechal Rondon, Bosch Car Service Marechal Rondon, alinhamento e balanceamento, oficina mecânica Marechal Rondon',
    url: 'https://autoeletricajoao.com.br',
    imagemOg:
      'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1200&q=80',
  },
}

// ----------------------------------------------------------
//  HELPERS
// ----------------------------------------------------------
export const whatsappLink = (mensagem = config.whatsapp.mensagemPadrao) =>
  `https://wa.me/${config.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const telefoneLink = () => `tel:+55${config.contato.telefone}`
