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
    // SUBSTITUIR pela foto real da oficina (use Unsplash agora como placeholder premium)
    imagem:
      'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1920&q=80',
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
      imagem:
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'auto-eletrica',
      titulo: 'Auto Elétrica',
      icone: 'Zap',
      descricao:
        'Diagnóstico elétrico computadorizado, bateria, velas e motor de partida.',
      itens: ['Diagnóstico elétrico', 'Bateria', 'Reparos elétricos', 'Velas', 'Motor de partida'],
      imagem:
        'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pneus',
      titulo: 'Pneus e Alinhamento',
      icone: 'Disc3',
      descricao:
        'Alinhamento, balanceamento e venda de pneus para todos os modelos.',
      itens: ['Alinhamento', 'Balanceamento', 'Pneus'],
      imagem:
        'https://images.unsplash.com/photo-1605164599901-db7f68c4b1ed?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ar-condicionado',
      titulo: 'Ar Condicionado',
      icone: 'Snowflake',
      descricao:
        'Manutenção, troca de filtros, reparo e instalação de sistema completo.',
      itens: ['Manutenção', 'Troca de filtros', 'Reparo e instalação'],
      imagem:
        'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'diagnostico',
      titulo: 'Diagnóstico Bosch',
      icone: 'ScanLine',
      descricao:
        'Scanner Bosch para diagnóstico veicular completo e identificação precisa de falhas.',
      itens: ['Scanner Bosch', 'Diagnóstico computadorizado', 'Análise de falhas'],
      imagem:
        'https://images.unsplash.com/photo-1530046339915-78e95b5b34a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'outros',
      titulo: 'Outros Serviços',
      icone: 'ShieldCheck',
      descricao:
        'Serviços de emergência, diagnóstico veicular e vidros automotivos.',
      itens: ['Serviços de emergência', 'Diagnóstico veicular', 'Vidros automotivos'],
      imagem:
        'https://images.unsplash.com/photo-1599256871679-1ce8e8b3a02e?auto=format&fit=crop&w=800&q=80',
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
    imagem:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
  },

  // ----------------------------------------------------------
  //  GALERIA
  // ----------------------------------------------------------
  galeria: [
    {
      url: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=800&q=80',
      alt: 'Oficina mecânica profissional',
    },
    {
      url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
      alt: 'Mecânico trabalhando',
    },
    {
      url: 'https://images.unsplash.com/photo-1605164599901-db7f68c4b1ed?auto=format&fit=crop&w=800&q=80',
      alt: 'Serviço de pneus',
    },
    {
      url: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?auto=format&fit=crop&w=800&q=80',
      alt: 'Reparo elétrico',
    },
    {
      url: 'https://images.unsplash.com/photo-1530046339915-78e95b5b34a6?auto=format&fit=crop&w=800&q=80',
      alt: 'Scanner automotivo Bosch',
    },
    {
      url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
      alt: 'Manutenção de motor',
    },
  ],

  // ----------------------------------------------------------
  //  AVALIAÇÕES
  // ----------------------------------------------------------
  avaliacoes: [
    {
      nome: 'Cliente Satisfeito',
      texto:
        'Excelente atendimento! Cobram valores justos. São muito honestos nos reparos e sugestões.',
      nota: 5,
    },
    {
      nome: 'Cliente Verificado',
      texto:
        'Ambiente limpo e organizado, atendimento honesto e realmente especializado.',
      nota: 5,
    },
    {
      nome: 'Cliente Verificado',
      texto:
        'Profissionais competentes, atendimento maravilhoso e serviço de qualidade.',
      nota: 5,
    },
    {
      nome: 'Cliente Verificado',
      texto: 'Preço justo e atendimento transparente.',
      nota: 5,
    },
    {
      nome: 'Cliente Verificado',
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
