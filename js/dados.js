/* Conteúdo das disciplinas: temas, resumos, pegadinhas, flashcards e questões.
   Para editar, veja o README.md (seção "Como editar o conteúdo"). */
const DISC = [
 {
  "id": "formacao",
  "nome": "Formação Geral",
  "temas": [
   {
    "id": "si",
    "cor": "var(--t1)",
    "titulo": "Sistemas de Informação",
    "curto": "Sistemas de Informação",
    "desc": "Conceitos básicos, evolução, competitividade (Porter), infraestrutura e tipos de SI (ERP, CRM, SCM, KMS, BI).",
    "resumo": [
     {
      "h": "Módulo 1 — Conceitos básicos e evolução",
      "itens": [
       "<mark>Sistema de informação (SI)</mark>: conjunto de componentes inter-relacionados (software, hardware e redes de telecomunicações) que <b>coletam, manipulam, armazenam e disseminam</b> informações para aumentar receitas, reduzir custos, gerenciar operações, interagir com clientes e superar a concorrência.",
       "Os dados num SI são: coletados, armazenados, protegidos, recuperados, compartilhados, analisados e apresentados.",
       "<mark>Diamante de Leavitt</mark> (1965): <b>tarefa, pessoa, estrutura e tecnologia</b> — os 4 elementos em torno dos quais os SI foram estruturados nos anos 1960.",
       "Componentes atuais: <b>tecnologia</b> (hardware = tangível; software = instruções, intangível, dividido em sistema operacional e aplicativo; dados = fatos, intangíveis), <b>pessoas</b> (do suporte ao CIO), <b>comunicação</b> (redes; virou categoria própria) e <b>processos</b> (etapas para um resultado; automatizar não basta, é preciso melhorar o processo).",
       "Dados isolados valem pouco; <mark>agregados, indexados e organizados em banco de dados</mark> viram base para decisão.",
       "<b>Era do mainframe</b> (fim dos anos 1950–1960): máquinas do tamanho de salas, só grandes empresas/governos; <b>compartilhamento de tempo</b> (vários usuários ao mesmo tempo); <b>MRP</b> no fim dos anos 1960; IBM dominante; polo em Minneapolis/St. Paul.",
       "<b>Revolução do PC</b>: Altair 8800 (1975) → Apple II (Jobs e Wozniak) → IBM PC (1981, com sistema da Microsoft). A <mark>arquitetura aberta do IBM PC</mark> permitiu clones, preços menores e inovação. PC foi “Homem do Ano” da Time (1982). Windows 3.1 (1992) foi o primeiro sucesso comercial. PCs ainda eram autônomos (sem rede).",
       "<b>Cliente-servidor</b> (meados dos anos 1980): PCs (clientes) ligados em LAN a um servidor que controla permissões; primeiro uso popular de e-mail; surgem os <mark>primeiros ERPs</mark> (banco de dados centralizado, módulos de contabilidade, finanças, estoque, RH).",
       "<b>Internet</b>: 29/10/1969, “login” da UCLA para Stanford (Kleinrock); Arpanet (Dep. de Defesa dos EUA) com 4 nós; e-mail no início dos anos 1970; <mark>World Wide Web por Tim Berners-Lee em 1989</mark>; em <mark>1991 a NSF libera o uso comercial</mark>; eBay e Amazon em 1994; bolha pontocom estoura em 2000 (mas deixa fibra ótica instalada → globalização). Surge a indústria de segurança digital.",
       "<b>Web 2.0</b>: sites interativos, blogs, redes sociais; <mark>desintermediação</mark> = tecnologia substituindo um intermediário (livrarias, locadoras como a Blockbuster, agências de viagem, jornais).",
       "<b>Pós-PC</b> (Ray Ozzie, 2012): smartphones e nuvem; o PC continua, mas perde protagonismo para a mobilidade.",
       "Linha do tempo: Mainframe (70: terminais, TSO/MVS, MRP) → PC (80: MS-DOS, WordPerfect, Lotus 1-2-3) → Cliente-servidor (fim 80/90: LAN, Windows p/ grupos) → WWW (90–2000: intranet, Windows XP) → Web 2.0 (Wi-Fi, laptop) → Pós-PC (smartphone, Android/iOS)."
      ]
     },
     {
      "h": "Módulo 2 — SI e competitividade",
      "itens": [
       "SI dão: dados em tempo real, automação do atendimento, novos modelos de negócio e ferramentas analíticas para vantagem competitiva.",
       "<mark>Walmart e o Retail Link</mark> (sistema de SCM, meados dos anos 1980): fornecedores acessam estoque e vendas e gerenciam os próprios níveis de estoque. Em 1983 o Walmart exigiu código <b>UPC</b> dos fornecedores. Lição: SI devem ser usados <b>estrategicamente</b>.",
       "<mark>Cinco forças de Porter</mark>: (1) ameaça de <b>substitutos</b> — mais substitutos = menor lucratividade; (2) poder dos <b>fornecedores</b> — forte quando há poucos; (3) poder dos <b>clientes</b> — forte quando há muitas empresas oferecendo o mesmo; (4) <b>barreiras à entrada</b> — quanto mais fácil entrar, mais difícil lucrar; (5) <b>rivalidade</b> entre concorrentes — onde a TI (BI, dados em tempo real) vira arma. Porter (2001) aplicou o modelo à internet.",
       "Substituto = produto similar para a <i>mesma</i> tarefa (smartphone substituiu o pager), não um serviço diferente (avião × trem).",
       "<mark>Pirâmide dos SI (abordagem vertical)</mark>: <b>ESS</b> (alta administração, decisões excepcionais, dados externos + MIS/DSS, gráficos); <b>DSS</b> (questões incomuns, perguntas “e se…”, usa modelos e dados externos); <b>MIS</b> (gerência intermediária, “está tudo funcionando?”, relatórios resumidos a partir do TPS); <b>TPS</b> (nível operacional, registra rotinas: folha, vendas, remessas).",
       "Decisões: <b>estruturadas</b> (operacional, regras claras, automatizáveis — horas extras, reposição de estoque, crédito), <b>semiestruturadas</b> (intermediária — plano de marketing, orçamento departamental, site) e <b>não estruturadas</b> (topo — entrar num mercado, orçamento de capital, metas de longo prazo). Quanto mais estruturada, mais fácil de automatizar."
      ]
     },
     {
      "h": "Módulo 3 — Infraestrutura",
      "itens": [
       "Infraestrutura de SI: redes de telecomunicações, bancos de dados e data warehouse, software, hardware e procedimentos. Precisa apoiar a <b>agilidade</b> e a estratégia de longo prazo.",
       "Serviços de informação podem ser <b>terceirizados</b> (economia, pessoal qualificado, foco no essencial), <b>internos centralizados</b> (unidade cuida de tudo) ou <b>descentralizados</b> (unidade central só cuida da infraestrutura). Direção: CIO ou CTO; comitê gestor define prioridades.",
       "<mark>Controles gerais</mark>: valem para toda a organização — controle de acesso, restrição por função, sistemas tolerantes a falhas, backup remoto. <mark>Controles de aplicativos</mark>: específicos de um sistema — validação de entrada, registro de acessos, arquivamento de cópias, divulgação só a autorizados.",
       "<b>Infraestrutura tradicional</b>: instalada no espaço da empresa (mais energia, espaço e dinheiro). <b>Em nuvem</b>: acesso via internet com <b>virtualização</b>.",
       "<b>IaaS</b> (infraestrutura como serviço): computação/armazenamento sob demanda, paga por uso. <b>SaaS</b> (software como serviço): o provedor hospeda tudo e o usuário acessa o aplicativo.",
       "<b>Infraestrutura convergente (CI)</b>: pacotes pré-integrados de computação, armazenamento e rede. <b>Hiperconvergente (HCI)</b>: integração e gerenciamento ainda mais rígidos, incluindo virtualização.",
       "Gerenciamento: <b>BMS</b> (gestão predial do datacenter — energia, temperatura, segurança física) e gerenciamento de sistemas; uso crescente de automação e orquestração.",
       "Infraestrutura ideal: armazenamento de alto desempenho (com recuperação de desastres), redes de baixa latência, segurança, WAN otimizada, virtualização e tempo de inatividade zero."
      ]
     },
     {
      "h": "Módulo 4 — Principais tipos de SI",
      "itens": [
       "<mark>ERP</mark> (planejamento de recursos empresariais): integra finanças, RH, manufatura, cadeia de suprimentos, comércio etc. num <b>único sistema com banco de dados único</b>. Entra quando as planilhas não dão mais conta. Hoje: nuvem, IA, aprendizado de máquina, RPA, omnicanal.",
       "<mark>CRM</mark> (gestão do relacionamento com o cliente): visão única do cliente; geração e gerenciamento de leads, gestão de contatos e negócios, comunicação, automação de vendas e marketing, análise, integração e customização. Integrar CRM ao ERP gera grandes ganhos.",
       "<mark>SCM</mark> (cadeia de suprimentos): da matéria-prima ao consumidor — produto certo, consumidor certo, quantidade certa, momento certo. Evoluiu de <b>linear</b> (a saída de uma etapa é a entrada da seguinte) para <b>rede</b>, com foco em <b>resiliência e sustentabilidade</b>.",
       "<mark>KMS</mark> (gestão do conhecimento): repositório central do conhecimento. Benefícios: menos tempo buscando informação, treinamento mais eficaz, <b>retenção do conhecimento</b> quando o funcionário sai e melhor experiência do cliente.",
       "<mark>BI</mark> (inteligência de negócios): não diz o que fazer, nem é só relatório. 4 etapas: (1) coletar e transformar dados (<b>ETL</b> — extrair, transformar, carregar); (2) descobrir tendências (mineração de dados); (3) visualizar (painéis, gráficos); (4) agir com base em insights.",
       "<b>Omnicanal</b>: estratégia que integra os canais para melhorar a experiência do cliente."
      ]
     }
    ],
    "pegadinhas": [
     "Diamante de Leavitt tem <b>estrutura</b>, não “processos” — os quatro são tarefa, pessoa, estrutura e tecnologia.",
     "A arquitetura do IBM PC era <b>aberta</b> (permitiu clones), não fechada.",
     "O ERP nasceu na era <b>cliente-servidor</b>, não na do mainframe (lá era o MRP).",
     "Quem criou a WWW foi Tim Berners-Lee (1989); a liberação comercial da internet foi da NSF (1991).",
     "MIS é da <b>gerência intermediária</b>; ESS é da alta administração; TPS é do operacional.",
     "Mais substitutos = <b>menos</b> lucratividade. Muitos fornecedores = <b>menos</b> poder deles.",
     "Controle de <b>aplicativo</b> é específico (validação de entrada); controle <b>geral</b> é da organização inteira (acesso, backup)."
    ],
    "flash": [
     [
      "Diamante de Leavitt",
      "Tarefa, pessoa, estrutura e tecnologia (1965)."
     ],
     [
      "Hardware × Software × Dados",
      "Hardware é tangível; software são instruções (intangível); dados são fatos (intangíveis)."
     ],
     [
      "Compartilhamento de tempo",
      "Permitia que muitos usuários acessassem o mainframe ao mesmo tempo."
     ],
     [
      "Impacto da arquitetura aberta do IBM PC",
      "Clones, preços mais baixos e mais inovação."
     ],
     [
      "Cliente-servidor",
      "PCs em LAN ligados a um servidor que controla permissões; berço do ERP."
     ],
     [
      "Desintermediação",
      "A tecnologia substitui um intermediário numa transação (ex.: locadoras, agências)."
     ],
     [
      "As 5 forças de Porter",
      "Substitutos, poder dos fornecedores, poder dos clientes, barreiras à entrada, rivalidade."
     ],
     [
      "DSS",
      "Apoio à decisão para questões incomuns — perguntas do tipo “e se…”."
     ],
     [
      "TPS",
      "Registra transações de rotina no nível operacional (folha, vendas, estoque)."
     ],
     [
      "IaaS × SaaS",
      "IaaS: infraestrutura sob demanda. SaaS: aplicativo hospedado pelo provedor."
     ],
     [
      "CI × HCI",
      "Convergente: pacote pré-integrado. Hiperconvergente: integração ainda mais rígida, com virtualização."
     ],
     [
      "Etapas do BI",
      "Coletar/transformar (ETL) → descobrir tendências → visualizar → agir."
     ],
     [
      "Benefícios do KMS",
      "Menos busca, treinamento melhor, retenção de conhecimento, melhor atendimento."
     ],
     [
      "SCM hoje",
      "De linear para rede, com resiliência e sustentabilidade."
     ]
    ],
    "quiz": [
     {
      "q": "Qual é a importância de integrar adequadamente o componente dados num SI?",
      "op": [
       "Garantir apenas segurança e privacidade",
       "Dados organizados em banco de dados permitem decisões informadas e avaliar sua eficácia",
       "Reduzir custo de armazenamento sem análise",
       "Só é relevante para grandes corporações"
      ],
      "c": 1,
      "exp": "Agregados, indexados e organizados, os dados viram base para decisões e para avaliar seus resultados."
     },
     {
      "q": "Os quatro elementos do Diamante de Leavitt são:",
      "op": [
       "Hardware, software, dados e redes",
       "Tarefa, pessoa, estrutura e tecnologia",
       "Pessoas, processos, comunicação e tecnologia",
       "Coleta, análise, visualização e ação"
      ],
      "c": 1,
      "exp": "Leavitt (1965): tarefa, pessoa, estrutura e tecnologia."
     },
     {
      "q": "Um dos impactos da arquitetura do IBM PC nos anos 1980 foi:",
      "op": [
       "Restringir o software disponível",
       "Permitir clones, reduzindo preços e estimulando inovação",
       "Garantir exclusividade de venda à IBM",
       "Causar o fracasso do PC"
      ],
      "c": 1,
      "exp": "A arquitetura aberta facilitou cópias (clones), o que baixou preços e aumentou a concorrência."
     },
     {
      "q": "Como a arquitetura cliente-servidor influenciou os ERPs?",
      "op": [
       "Limitou o desenvolvimento dos ERPs",
       "Centralizou dados e recursos, facilitando ERPs que integram várias funções",
       "ERPs eram exclusivamente de mainframe",
       "Reduziu a eficiência por exigir internet"
      ],
      "c": 1,
      "exp": "Os primeiros ERPs rodavam em cliente-servidor, com banco de dados centralizado."
     },
     {
      "q": "Qual foi o impacto da liberação do uso comercial da internet pela NSF em 1991?",
      "op": [
       "Restringiu a internet a universidades",
       "Empresas passaram a explorar o mercado digital (eBay e Amazon surgem em 1994)",
       "Reduziu o número de usuários",
       "Travou o desenvolvimento de navegadores"
      ],
      "c": 1,
      "exp": "A liberação abriu o mercado digital e levou ao surgimento de empresas como eBay e Amazon."
     },
     {
      "q": "Segundo Porter, a existência de muitos produtos substitutos:",
      "op": [
       "Aumenta a lucratividade",
       "Não afeta a lucratividade",
       "Diminui a lucratividade, pois pressiona os preços para baixo",
       "Aumenta a lucratividade por estimular inovação"
      ],
      "c": 2,
      "exp": "Mais opções para o consumidor = pressão nos preços = menor lucro no setor."
     },
     {
      "q": "Qual correspondência entre tipo de SI e função está correta?",
      "op": [
       "ESS — usado por gerentes operacionais para registrar transações",
       "TPS — integra dados externos para decisões estratégicas",
       "DSS — sistema dos executivos para visão global",
       "MIS — apoia gerentes intermediários sintetizando dados de transações"
      ],
      "c": 3,
      "exp": "O MIS resume e relata dados do TPS para a gerência intermediária (controle)."
     },
     {
      "q": "Decidir se a empresa entra ou não num novo mercado é uma decisão:",
      "op": [
       "Estruturada, típica do nível operacional",
       "Semiestruturada, da gerência intermediária",
       "Não estruturada, da gestão de topo",
       "Automatizável por TPS"
      ],
      "c": 2,
      "exp": "Decisões de topo são não estruturadas: exigem julgamento e não têm regra predefinida."
     },
     {
      "q": "Validação de dados de entrada e registro de acessos a um sistema específico são exemplos de:",
      "op": [
       "Controles gerais",
       "Controles de aplicativos",
       "Infraestrutura hiperconvergente",
       "Gerenciamento predial (BMS)"
      ],
      "c": 1,
      "exp": "Controles de aplicativos são específicos de um aplicativo; controles gerais valem para toda a organização."
     },
     {
      "q": "O modelo em que o provedor hospeda hardware, software e dados e o usuário acessa o aplicativo pela internet é o:",
      "op": [
       "IaaS",
       "SaaS",
       "CI",
       "TPS"
      ],
      "c": 1,
      "exp": "SaaS = software como serviço."
     },
     {
      "q": "Qual opção descreve corretamente o processo de BI?",
      "op": [
       "Só coleta dados para consulta futura",
       "Foca só a visualização",
       "Coletar e transformar dados, descobrir tendências, visualizar e agir com base nos insights",
       "Relata o presente sem previsões"
      ],
      "c": 2,
      "exp": "As quatro etapas do BI terminam na tomada de decisão."
     },
     {
      "q": "Um dos principais benefícios do KMS é:",
      "op": [
       "Reduzir espaço físico de arquivos",
       "Manter o conhecimento na empresa mesmo quando funcionários saem",
       "Servir apenas à documentação legal",
       "Aumentar o tempo de busca"
      ],
      "c": 1,
      "exp": "Retenção do conhecimento é um dos quatro benefícios citados, ao lado de busca rápida, treinamento e atendimento."
     }
    ]
   },
   {
    "id": "povo",
    "cor": "var(--t2)",
    "titulo": "O povo brasileiro e a questão do negro e do indígena",
    "curto": "Povo brasileiro",
    "desc": "Identidade nacional, miscigenação, branqueamento, povos indígenas, cultura afro-brasileira, racismo e antirracismo.",
    "resumo": [
     {
      "h": "Módulo 1 — A identidade brasileira",
      "itens": [
       "O estereótipo do brasileiro “cordial, festeiro, sem preconceito” é uma <mark>construção social reducionista</mark>.",
       "Três chaves da identidade: <b>diversidade interna</b> (com elos que unem), <b>poder</b> (identidades marcadas por privilégios) e <mark>pertencimento</mark> (sentir-se parte de um ou mais grupos).",
       "Relativismo cultural = observar a cultura do outro a partir das regras e percepções dele (com exceções). Cultura está sempre em movimento.",
       "Mitos desde a Ilha de Vera Cruz ajudaram a construir o <mark>mito da democracia racial</mark>.",
       "<b>Indígenas</b>: sociedades diversas reduzidas à imagem única do “índio”; predomínio do tronco tupi-guarani no litoral; relação íntima com a natureza e ausência de comércio. Não houve relação amistosa: houve luta, doenças e extermínio. Foram escravizados até o <mark>decreto do Marquês de Pombal (1757)</mark>. Rótulos de “preguiçosos”, “primitivos”, “não civilizados”. O indígena pode manter sua cultura e viver em sociedade.",
       "“Descobrimento” × <mark>invasão e conquista</mark>: não se descobre terra já habitada.",
       "Colonização de fato a partir de <b>1534</b> (capitanias hereditárias, cana-de-açúcar); ouro e diamantes no séc. XVII (MG, GO, MT); <b>1808</b> chegada da família real ao Rio. Quem nascia aqui era considerado português até a Independência.",
       "Herança portuguesa: língua oficial, catolicismo, festas (Carnaval, São João), folclore (cuca, lobisomem), pratos (feijoada, quindim, bacalhoada).",
       "Imigração europeia (séc. XIX–XX): italianos, alemães, portugueses, para mão de obra rural, sobretudo na <mark>cafeicultura do Sudeste</mark>. Chegavam a um país com projeto de <b>branqueamento</b>. Também vieram japoneses, chineses, árabes e judeus.",
       "<b>Africanos</b> trazidos a partir da 2ª metade do séc. XVI: samba, atabaque, dendê, acarajé; candomblé e umbanda (religiões de matriz africana criadas no Brasil). A escravização gerou o <mark>racismo estrutural</mark>.",
       "Crítica à exaltação individual de “negros bem-sucedidos”: ignora a estrutura social que impede competição igualitária.",
       "Negros são maioria da população, mas eram 35,8% dos universitários; Brasil foi o último país do Ocidente a abolir a escravidão. Frases como “denegrir” e “preto de alma branca” naturalizam o racismo."
      ]
     },
     {
      "h": "Módulo 2 — Miscigenação e a explicação do Brasil",
      "itens": [
       "Schwarcz e Starling (2015): a mestiçagem virou questão de representação nacional.",
       "No séc. XIX, a miscigenação era um <mark>dilema</mark> para os intelectuais: base da nação, mas “atrelada a defeitos da herança biológica” segundo teorias raciais (Ortiz).",
       "Teorias importadas: <b>positivismo de Comte</b> (ciência sem teologia/metafísica), <b>darwinismo social</b> (características biológicas tornariam alguém superior — padrão: homem branco urbano) e <b>evolucionismo de Spencer</b> (sociedades evoluem do primitivo ao civilizado — topo = Europa do séc. XIX).",
       "Solução adotada: <mark>branqueamento</mark> — miscigenação exaltada, mas baseada em apagamento do passado. Até o clima (ventos alísios) foi usado para justificar o “atraso”.",
       "<mark>Colorismo</mark>: quanto mais clara a pele, maior a aceitação social (“café com leite”, “cor de jambo”). Nos movimentos atuais, importa o lugar de fala.",
       "Cultura = conjunto de ideias, valores e costumes transmitidos; maneira como a realidade é codificada por uma sociedade (Santos, 2005). O idioma português dá unidade.",
       "Linha do tempo da cultura nacional: <b>1822/1889</b> criação do Estado nacional → <b>1901</b> eurocentrismo e ideia de “atraso” → <b>1920</b> modernismo e <mark>Movimento Antropofágico</mark> (“engolir” a cultura estrangeira) → <b>1930</b> Estado Novo/Vargas, primeira grande valorização da cultura nacional → <b>1950</b> influência americana → <b>1964</b> ditadura impõe cultura comum → <b>2000</b> pluralidade.",
       "Identidade cultural na globalização é <b>maleável, flexível, fluida</b>. Brasilidade é pertencimento, afinidade e afeto.",
       "<b>Indianismo</b> (1836, adaptação do romantismo europeu): indígena como herói nacional — mas só porque já não ameaçava: (1) estava quase extinto no litoral; (2) o sistema produtivo se apoiava no negro, que não se podia enaltecer; (3) reforçou o mito da <mark>docilidade do negro</mark> (Lopez, 1995). Autores: <b>Gonçalves Dias</b> (indígena herói) e <b>José de Alencar</b> (mundo natural do nativo, bandeirante, gaúcho, sertanejo).",
       "Legados indígenas: caju, açaí, guaraná; mandioca (tapioca e farinha); trançados de palha. Houve genocídio e violência cultural.",
       "Azevedo (2008): até os anos 1970 os indígenas eram vistos como <mark>categoria social transitória</mark>, a ser “integrada”. População: ~2 milhões na conquista → ~70 mil em 1957. Censo 2010: ~896 mil (maioria no Norte, menos no Sul); maior etnia: ticuna.",
       "<mark>Constituição de 1988</mark>, título VII, capítulo “Dos Índios”: <b>art. 231</b> (organização social, costumes, línguas e direitos originários sobre as terras; União demarca) e <b>art. 232</b> (podem ir a juízo, com o Ministério Público). Garimpo por não indígenas proibido (art. 231, §7º).",
       "<b>Joênia Wapichana</b> (2008): primeira indígena a defender uma causa no STF (terras de cinco povos em Roraima).",
       "<b>Lei 11.645/2008</b>: torna obrigatório o ensino de história e cultura <b>afro-brasileira e indígena</b>.",
       "Cultura negra: <b>capoeira</b> (dança + luta para disfarçar; fim do séc. XVI; resistência), lundu e batuque perseguidos; <b>Black Power</b> e Bailes Black (Toni Tornado, Wilson Simonal); cabelo crespo como resistência; <b>maracatu</b> (cortejo da coroação dos Reis do Congo); <b>jongo</b>/caxambu (umbigada, tambores, canto; patrimônio registrado pelo IPHAN em 2005; ligado à origem do samba)."
      ]
     },
     {
      "h": "Módulo 3 — Relações étnico-raciais",
      "itens": [
       "<mark>Lei 10.639/2003</mark>: altera a LDB (Lei 9.394/1996) e torna obrigatório o ensino de história e cultura afro-brasileira e africana. É resultado da <b>mobilização do movimento negro</b>.",
       "A escola tem papel essencial na construção da identidade; o desafio é promover a identidade negra num universo que pedia sua negação.",
       "“Raça”: usada por militantes como <mark>construção social, política e cultural</mark>, não biológica. Quem prefere “etnia” busca afastar o determinismo biológico. Após o nazismo, a ideia de raça biológica tornou-se inaceitável.",
       "No Brasil, racismo passa pela cor da pele e se afirma <mark>pela sua negação</mark>; redes sociais expõem racismo disfarçado de liberdade de expressão.",
       "Diálogo entre escolas, secretarias, movimento negro, ONGs e núcleos de estudos afro-brasileiros; educadores combatem a discriminação e o mito da democracia racial.",
       "Jovens negros são as maiores vítimas de violência (77% das mortes de 15 a 29 anos); IBGE: população negra morre 2,7 vezes mais por homicídio.",
       "<mark>Lei 7.716/1989</mark>: racismo vira crime (conduta dirigida a grupo/coletividade). <b>Injúria racial</b>: art. 140, §3º do Código Penal (ofende a honra de alguém). <i>Atualização fora do material: desde 2023 (Lei 14.532) a injúria racial foi equiparada ao racismo.</i>",
       "ONU: <b>Década Internacional de Afrodescendentes (2015–2024)</b>. Rio de Janeiro, 2000: Centro Nazareth Cerqueira → Disque-Racismo.",
       "Agenda do movimento negro: menos violência, fim do racismo, acesso a universidade e trabalho (cotas); hoje também intolerância religiosa, feminismo e direitos LGBT.",
       "<mark>“Mais importante do que repudiar o racismo é ser antirracista”</mark> — antirracismo é prática (Angela Davis).",
       "Pensadores: <b>Milton Santos</b> (diversidade geográfica e social, desigualdade espacial), <b>Djamila Ribeiro</b> (interseção gênero, raça e classe; crítica à identidade homogênea e patriarcal), <b>Ailton Krenak</b> (crítica radical à identidade fixa; povos indígenas e meio ambiente).",
       "Poetas da identidade: Ferreira Gullar, Conceição Evaristo (mulher negra), Manoel de Barros (Pantanal), Oswald de Andrade (<i>Manifesto antropófago</i>), Cora Coralina (Goiás), Adélia Prado, João Cabral de Melo Neto, Mário de Andrade, Hilda Hilst, Eliane Potiguara (indígena)."
      ]
     }
    ],
    "pegadinhas": [
     "Democracia racial é <b>mito</b> — associado à leitura da obra de Gilberto Freyre sobre uma escravidão “branda”. Nas questões, ela nunca é apresentada como realidade.",
     "A Lei 10.639/2003 é só afro-brasileira e africana; a <b>11.645/2008</b> acrescenta a indígena.",
     "O indianismo exaltou o indígena porque ele <b>já não ameaçava</b> a ordem — não por reconhecimento real.",
     "Imigração europeia foi sobretudo <b>rural</b> (café do Sudeste) no séc. XIX, não urbana nem industrial exclusivamente.",
     "O africano substituiu o indígena por causa do <b>lucro do tráfico negreiro</b> para a metrópole (Novais), não por “aptidão”.",
     "Racismo (Lei 7.716/89) atinge grupo/coletividade; injúria racial (art. 140, §3º CP) ofende a honra de uma pessoa.",
     "No material, a sociologia <b>não</b> diz que discriminação é natural nem que o indígena perde a condição ao usar tecnologia."
    ],
    "flash": [
     [
      "Três chaves da identidade",
      "Diversidade interna, poder e pertencimento."
     ],
     [
      "Mito da democracia racial",
      "Ideia de convivência harmônica entre raças e escravidão “branda” — desmentida pela realidade de desigualdade."
     ],
     [
      "Fim da escravidão indígena",
      "Decreto do Marquês de Pombal, 1757."
     ],
     [
      "Branqueamento",
      "Projeto de “clarear” a população via miscigenação e imigração europeia."
     ],
     [
      "Colorismo",
      "Aceitação social maior quanto mais clara a pele."
     ],
     [
      "Teorias do séc. XIX",
      "Positivismo (Comte), darwinismo social, evolucionismo (Spencer)."
     ],
     [
      "Movimento Antropofágico",
      "Anos 1920: “engolir” a cultura estrangeira e produzir uma cultura com a cara do país."
     ],
     [
      "Por que o indianismo exaltou o indígena?",
      "Já estava quase extinto, o sistema produtivo era negro e reforçava o mito da docilidade do negro."
     ],
     [
      "Arts. 231 e 232 da CF/88",
      "231: costumes e terras originárias (União demarca). 232: indígenas podem ir a juízo."
     ],
     [
      "Joênia Wapichana",
      "Primeira indígena a defender causa no STF (2008)."
     ],
     [
      "Lei 10.639/2003",
      "Ensino obrigatório de história e cultura afro-brasileira e africana."
     ],
     [
      "Lei 7.716/1989",
      "Tornou o racismo crime."
     ],
     [
      "Capoeira",
      "Dança + luta, criada para disfarçar a luta proibida aos escravizados; símbolo de resistência."
     ],
     [
      "Jongo",
      "Canto, dança (umbigada) e tambores; registrado pelo IPHAN em 2005; raiz do samba."
     ],
     [
      "Antirracismo",
      "Não basta repudiar o racismo: é preciso prática contra ele."
     ]
    ],
    "quiz": [
     {
      "q": "(AOCP) Sobre a formação da cultura e identidade nacional, é correto afirmar:",
      "op": [
       "A sociologia defende que a discriminação é natural",
       "O relativismo cultural vê mitos como primitivos",
       "Indígenas perdem a condição ao adotar tecnologias ocidentais",
       "Mesmo condenado por lei, o preconceito racial é perpetuado por mecanismos sociais e simbólicos"
      ],
      "c": 3,
      "exp": "Racismo persiste por mecanismos que produzem e reproduzem desigualdades, apesar da lei."
     },
     {
      "q": "A imigração europeia dos séculos XIX e XX foi motivada principalmente:",
      "op": [
       "Pela industrialização urbana exclusiva",
       "Pela necessidade de mão de obra em áreas rurais, como a cafeicultura do Sudeste",
       "Pela ocupação do Nordeste no século XVIII",
       "Somente após a abolição, para a indústria"
      ],
      "c": 1,
      "exp": "Italianos, alemães e portugueses vieram sobretudo para o café no Sudeste, enriquecendo a diversidade cultural."
     },
     {
      "q": "Sobre a miscigenação no Brasil, é correto afirmar que:",
      "op": [
       "Serviu para enaltecer o mulato",
       "Deu origem direta aos movimentos afro-brasileiros",
       "Era vista como fundamental, mas enfrentava teorias raciais do séc. XIX que inferiorizavam o negro",
       "Conseguiu embranquecer a sociedade"
      ],
      "c": 2,
      "exp": "Era um dilema: base da nação, mas vista como defeito pelas teorias raciais da época."
     },
     {
      "q": "(Mackenzie) O contato amistoso entre brancos e indígenas foi preservado:",
      "op": [
       "Pela Igreja, que sempre respeitou a cultura indígena",
       "Até o início da colonização, quando o indígena passou a ser descrito como selvagem e indolente",
       "Pelos colonos que só escravizaram africanos",
       "Até hoje"
      ],
      "c": 1,
      "exp": "Com a tentativa de escravização, doenças e extermínio, a convivência pacífica acabou."
     },
     {
      "q": "(Fuvest/Novais) A adoção da mão de obra africana se explica principalmente porque:",
      "op": [
       "Os indígenas eram mais fáceis de obter",
       "Mercadores se preocupavam com os africanos",
       "O tráfico negreiro abria um comércio rentável para a metrópole, articulado ao sistema colonial",
       "Os indígenas conquistaram a liberdade por revoltas"
      ],
      "c": 2,
      "exp": "O lucro do tráfico ia para a metrópole; o apresamento indígena era negócio interno da colônia."
     },
     {
      "q": "A Lei 10.639/2003, que tornou obrigatório o ensino de história e cultura afro-brasileira, resultou de:",
      "op": [
       "Aumento da renda nacional",
       "Mobilização do movimento negro",
       "Melhoria da infraestrutura escolar",
       "Ampliação de disciplinas obrigatórias"
      ],
      "c": 1,
      "exp": "Foram os movimentos negros que levaram essas demandas à pauta política."
     },
     {
      "q": "O indianismo do séc. XIX pôde exaltar o indígena como herói nacional porque:",
      "op": [
       "O indígena era a principal mão de obra",
       "O indígena já não representava ameaça à ordem vigente",
       "Os indígenas lideravam a política",
       "Havia plena igualdade de direitos"
      ],
      "c": 1,
      "exp": "Quase extinto no litoral e fora do sistema produtivo, celebrá-lo não era perigoso (Lopez, 1995)."
     },
     {
      "q": "O colorismo pode ser definido como:",
      "op": [
       "Valorização igual de todos os tons de pele",
       "Separação de indivíduos pelo tom de pele, com mais aceitação para peles mais claras",
       "Movimento artístico modernista",
       "Política de cotas"
      ],
      "c": 1,
      "exp": "Quanto mais clara a tez, maior a aceitação social por semelhança com o branco."
     },
     {
      "q": "O art. 231 da Constituição de 1988 reconhece aos indígenas:",
      "op": [
       "Apenas o direito ao voto",
       "Organização social, costumes, línguas, crenças, tradições e direitos originários sobre as terras que ocupam",
       "A propriedade dos minérios do subsolo",
       "A tutela permanente do Estado"
      ],
      "c": 1,
      "exp": "Cabe à União demarcar as terras. O art. 232 garante que podem ir a juízo."
     },
     {
      "q": "Para militantes e intelectuais do movimento negro, o termo “raça” deve ser entendido como:",
      "op": [
       "Categoria biológica",
       "Construção social, política e cultural produzida nas relações de poder",
       "Sinônimo de nacionalidade",
       "Termo proibido pela lei"
      ],
      "c": 1,
      "exp": "O uso não é biológico; quem prefere “etnia” busca afastar ainda mais o determinismo biológico."
     },
     {
      "q": "A frase “mais importante do que repudiar o racismo é ser antirracista” significa que:",
      "op": [
       "Basta não ser racista",
       "O antirracismo exige prática ativa contra o racismo",
       "Racismo é assunto só jurídico",
       "O racismo acabou"
      ],
      "c": 1,
      "exp": "Antirracismo ultrapassa a indignação: envolve ações no seu próprio meio."
     },
     {
      "q": "Qual pensador faz uma crítica radical à ideia de identidade nacional fixa, a partir dos povos indígenas e do meio ambiente?",
      "op": [
       "Milton Santos",
       "Djamila Ribeiro",
       "Ailton Krenak",
       "Gilberto Freyre"
      ],
      "c": 2,
      "exp": "Krenak defende uma identidade fluida e plural e a proteção dos territórios indígenas."
     }
    ]
   },
   {
    "id": "meio",
    "cor": "var(--t3)",
    "titulo": "Meio ambiente e sociedade",
    "curto": "Meio ambiente",
    "desc": "Biodiversidade, Brasil megadiverso, impactos ambientais e prevenção, sustentabilidade, Agenda 21 e Agenda 2030.",
    "resumo": [
     {
      "h": "Módulo 1 — Biodiversidade",
      "itens": [
       "<mark>Biodiversidade</mark> = <b>riqueza de espécies + diversidade genética + diversidade de ecossistemas</b>. Não é só contar espécies.",
       "Convenção sobre a Diversidade Biológica (1992): variabilidade de organismos vivos de todas as origens, dentro de espécies, entre espécies e de ecossistemas.",
       "Histórico: termo usado por <b>Walter G. Rosen</b> (1985); popularizado pelo livro de <b>E. O. Wilson</b>; consolidado após a <mark>ECO-92</mark> (Rio de Janeiro). Ideia: biodiversidade é <b>patrimônio natural da humanidade</b>.",
       "Importância <b>ambiental</b>: <mark>manutenção dos processos e do funcionamento dos ecossistemas</mark> (cadeias alimentares, produção de oxigênio, polinização por abelhas).",
       "Importância <b>econômica</b>: valor <b>direto</b> (uso direto, ex.: açaí), <b>indireto</b> (benefício indireto, ex.: abelhas polinizando) e <b>potencial</b> (utilidade que ainda pode ser descoberta).",
       "Também tem valores genético, social, científico, educacional, cultural, ético, recreativo e estético.",
       "<mark>Brasil megadiverso</mark>: cerca de 20% das espécies do planeta e muitas endêmicas. Motivos: vários biomas e ecossistemas aquáticos, diferentes zonas climáticas, enorme costa marinha, localização tropical.",
       "<b>Hotspots</b>: áreas com muitas espécies endêmicas ameaçadas. No Brasil: <b>Cerrado e Mata Atlântica</b>.",
       "Perda: ~8.700 espécies extintas por ano; ~25% ameaçadas (ONU). A extinção atual é causada pela ação humana. Causas: poluição, expansão urbana, agropecuária, exploração insustentável, espécies exóticas invasoras, mudanças climáticas e poluição genética (transgênicos, hibridização)."
      ]
     },
     {
      "h": "Módulo 2 — Impactos ambientais",
      "itens": [
       "<mark>CONAMA, Resolução nº 001/1986</mark>: impacto ambiental é qualquer alteração das propriedades físicas, químicas e biológicas do meio ambiente causada por atividades <b>humanas</b> que afete saúde/segurança/bem-estar, atividades socioeconômicas, biota, condições estéticas e sanitárias e qualidade dos recursos.",
       "Resumo: <mark>toda alteração do meio ambiente provocada pelo ser humano</mark> (ação antrópica).",
       "Pode ser <b>positivo</b> (corrige dano: reflorestamento, limpeza de rios) ou <b>negativo</b> (degrada, incluindo impacto estético).",
       "Classificações: <b>direto/1ª ordem</b> (causa e consequência diretas) × <b>indireto/2ª ordem</b>; <b>local</b>, <b>regional</b> (ex.: Brumadinho) e <b>global</b> (CO₂); <b>temporário</b> × <b>permanente</b>; <b>reversível</b> × <b>irreversível</b>.",
       "Marcos históricos do aumento do impacto: <b>agricultura</b> (sedentarização), <b>Revolução Industrial</b> (carvão) e <b>explosão populacional</b> (1 → 7 bilhões em menos de 200 anos).",
       "Fontes: urbanização, rodovias e ferrovias (atropelamentos, <b>efeito de borda</b>), produção de energia (fósseis, carvão, hidrelétricas), indústria, mineração, agropecuária, turismo, consumo excessivo e lixo.",
       "Consequências: <b>aquecimento global</b> (efeito estufa natural intensificado por CO₂ e metano), <b>acidificação dos oceanos</b> (absorção de CO₂, branqueamento de corais), perda de biodiversidade, poluição do ar, da água (escassez de água doce) e do solo (geralmente irreversível).",
       "Prevenção <b>local</b>: economizar água e energia, separar lixo, produtos biodegradáveis, descarte correto de pilhas, doar, consumir menos.",
       "Prevenção <b>global</b>: ONU, tratados; Dia Internacional da Biodiversidade (<b>22 de maio</b>); Década da Biodiversidade (<b>2011–2020</b>).",
       "Prevenção <b>regional</b> — principal mecanismo no Brasil: <mark>licenciamento ambiental</mark> (avaliação de impacto, <b>EIA</b> e <b>RIMA</b>)."
      ]
     },
     {
      "h": "Módulo 3 — Sustentabilidade e Agendas",
      "itens": [
       "<mark>Sustentabilidade</mark>: uso dos recursos pelas gerações atuais <b>sem comprometer o uso pelas gerações futuras</b>. Não é proibir o uso, é pautar o desenvolvimento econômico na preservação.",
       "<b>1972 — Estocolmo</b>: primeira conferência da ONU sobre meio ambiente. <b>1987 — Relatório Brundtland</b> (“Nosso Futuro Comum”): primeira vez do conceito de desenvolvimento sustentável. <b>1992 — ECO-92</b>: consolidação e popularização. <b>2002 — Joanesburgo</b>: três pilares.",
       "<mark>Três pilares</mark>: <b>social</b> (sociopolítica — vida digna, redução da pobreza), <b>econômica</b> (ecoeficiência — tecnologias de menor impacto, menos energia fóssil) e <b>ambiental</b> (ecológica — natureza capaz de se regenerar, disponibilidade futura).",
       "<mark>Agenda 21</mark>: construída na ECO-92, assinada por mais de 170 países; primeira vez que o crescimento econômico teve de se pautar em medidas sustentáveis. Lema: <b>“Pensar globalmente, agir localmente”</b>.",
       "<b>Agenda 21 Brasileira</b>: iniciada em 1997, concluída em 2002; <b>21 objetivos</b> (ações prioritárias) em 5 áreas: economia da poupança na sociedade do conhecimento; inclusão social para uma sociedade solidária; sustentabilidade urbana e rural; recursos naturais estratégicos (água, biodiversidade, florestas); governança e ética.",
       "Um dos objetivos mais importantes: <b>elevar o nível de consciência da sociedade</b>.",
       "<b>Agenda 21 Local</b>: planejamento participativo via <b>Fórum de Agenda 21</b> (governo + sociedade civil) que elabora um Plano Local de Desenvolvimento Sustentável.",
       "<mark>Agenda 2030</mark>: 2015, 193 países, <b>17 objetivos</b> (ODS); substituiu a Agenda 21 no plano global. Segundo o material, o Brasil ainda aplica a Agenda 21 Brasileira."
      ]
     }
    ],
    "pegadinhas": [
     "Impacto ambiental é sempre de origem <b>humana</b> — alteração natural não entra no conceito do CONAMA.",
     "Impacto pode ser <b>positivo</b> (reflorestamento também é impacto!).",
     "Importância <b>ambiental</b> = funcionamento dos ecossistemas; “serviços para a indústria” é importância <b>econômica</b>.",
     "Sustentabilidade: as gerações <b>atuais</b> não podem comprometer as <b>futuras</b> (e não o contrário).",
     "Os três pilares são social, econômico e ambiental — “global”, “pacífica” e “ecossistêmica” são distratores.",
     "Brundtland (1987) cria o conceito; ECO-92 consolida; Estocolmo (1972) foi a primeira conferência.",
     "Agenda 21 tem 21 objetivos no Brasil; Agenda 2030 tem 17 ODS."
    ],
    "flash": [
     [
      "Biodiversidade (3 níveis)",
      "Riqueza de espécies, diversidade genética e diversidade de ecossistemas."
     ],
     [
      "Valor direto, indireto e potencial",
      "Direto: uso (açaí). Indireto: benefício (abelhas). Potencial: utilidade futura."
     ],
     [
      "Por que o Brasil é megadiverso?",
      "Muitos biomas, várias zonas climáticas, grande costa marinha e localização tropical (~20% das espécies)."
     ],
     [
      "Hotspots no Brasil",
      "Cerrado e Mata Atlântica."
     ],
     [
      "Resolução CONAMA 001/1986",
      "Define impacto ambiental: alteração física, química ou biológica causada por atividade humana."
     ],
     [
      "Impacto direto × indireto",
      "Direto: lixo no rio piora a água. Indireto: por isso, diminuem os peixes."
     ],
     [
      "Reversível × irreversível",
      "Reversível: dá para recuperar. Irreversível: efeito persiste (desmatar para construir cidade)."
     ],
     [
      "Efeito de borda",
      "Excesso de bordas empobrece toda a floresta."
     ],
     [
      "Acidificação dos oceanos",
      "Absorção de CO₂ muda o pH; mata algas dos corais (branqueamento)."
     ],
     [
      "Principal prevenção regional no Brasil",
      "Licenciamento ambiental (EIA/RIMA)."
     ],
     [
      "Relatório Brundtland",
      "1987, “Nosso Futuro Comum”: suprir o presente sem afetar o futuro."
     ],
     [
      "Três pilares da sustentabilidade",
      "Social, econômico (ecoeficiência) e ambiental (ecológico)."
     ],
     [
      "Lema da Agenda 21",
      "Pensar globalmente, agir localmente."
     ],
     [
      "Agenda 2030",
      "2015, 193 países, 17 objetivos; substituiu a Agenda 21."
     ]
    ],
    "quiz": [
     {
      "q": "Quais são os principais aspectos do conceito de biodiversidade?",
      "op": [
       "Variedade de fungos, vírus, bactérias, plantas e animais",
       "Espécies viventes e extintas",
       "Riqueza de espécies, diversidade genética e diversidade de ecossistemas",
       "Riqueza de espécies e de cadeias alimentares"
      ],
      "c": 2,
      "exp": "O conceito vai além do número de espécies."
     },
     {
      "q": "A importância ambiental da biodiversidade está relacionada:",
      "op": [
       "À manutenção dos processos e do funcionamento dos ecossistemas",
       "Aos serviços prestados à indústria",
       "Ao uso de insumos industriais",
       "A uma questão apenas ética"
      ],
      "c": 0,
      "exp": "Serviços e insumos são o lado econômico; o ambiental é o funcionamento dos ecossistemas."
     },
     {
      "q": "As abelhas, por polinizarem plantações, são exemplo de valor econômico:",
      "op": [
       "Direto",
       "Indireto",
       "Potencial",
       "Estético"
      ],
      "c": 1,
      "exp": "Beneficiam o ser humano de forma indireta."
     },
     {
      "q": "No Brasil, são considerados hotspots de biodiversidade:",
      "op": [
       "Amazônia e Pampa",
       "Cerrado e Mata Atlântica",
       "Caatinga e Pantanal",
       "Apenas a costa marinha"
      ],
      "c": 1,
      "exp": "Hotspots têm alta concentração de espécies endêmicas ameaçadas."
     },
     {
      "q": "Resumidamente, o conceito de impacto ambiental (CONAMA 001/1986) é:",
      "op": [
       "Toda alteração no meio ambiente provocada por ação humana",
       "Toda alteração em espaços urbanos",
       "Toda alteração com múltiplas origens",
       "Alteração só no solo por qualquer ser vivo"
      ],
      "c": 0,
      "exp": "Impacto ambiental sempre decorre de ação antrópica."
     },
     {
      "q": "Assinale a classificação correta de impactos ambientais:",
      "op": [
       "Local: causa e consequência não se relacionam diretamente",
       "Temporário: ocorre de forma contínua",
       "Reversível: efeitos não se encerram após a intervenção",
       "Direto: causa e consequência se relacionam de forma direta; indireto: não se relacionam de forma direta"
      ],
      "c": 3,
      "exp": "As outras alternativas trocam as definições."
     },
     {
      "q": "A tragédia de Brumadinho, que afetou toda a bacia hidrográfica, é exemplo de impacto:",
      "op": [
       "Local",
       "Regional",
       "Global",
       "Temporário"
      ],
      "c": 1,
      "exp": "Atingiu uma região inteira, não só os locais por onde a lama passou."
     },
     {
      "q": "O principal mecanismo de prevenção de impactos ambientais no Brasil é:",
      "op": [
       "O Dia Internacional da Biodiversidade",
       "O licenciamento ambiental (EIA/RIMA)",
       "A Década da Biodiversidade",
       "A reciclagem doméstica"
      ],
      "c": 1,
      "exp": "O licenciamento gera compromissos para prevenir, reduzir ou mitigar danos."
     },
     {
      "q": "Sobre desenvolvimento sustentável, é correto afirmar:",
      "op": [
       "O uso atual pode afetar minimamente as gerações futuras",
       "Recursos não renováveis ficam de fora",
       "O uso futuro não pode comprometer o atual",
       "O desenvolvimento econômico deve usar os recursos atuais sem comprometer seu uso pelas gerações futuras"
      ],
      "c": 3,
      "exp": "Definição do Relatório Brundtland (1987)."
     },
     {
      "q": "Os três princípios norteadores da sustentabilidade são:",
      "op": [
       "Social, ambiental e global",
       "Ambiental, econômica e pacífica",
       "Social, econômica e ambiental",
       "Ambiental, ecológica e ecossistêmica"
      ],
      "c": 2,
      "exp": "Os três pilares foram afirmados em Joanesburgo (2002)."
     },
     {
      "q": "A Agenda 21 foi construída:",
      "op": [
       "Em Estocolmo, 1972",
       "No Relatório Brundtland, 1987",
       "Durante a ECO-92, no Rio de Janeiro",
       "Na Agenda 2030, em 2015"
      ],
      "c": 2,
      "exp": "Assinada por mais de 170 países, com o lema “pensar globalmente, agir localmente”."
     },
     {
      "q": "A Agenda 2030 da ONU:",
      "op": [
       "Tem 21 objetivos",
       "Tem 17 objetivos e substituiu a Agenda 21",
       "Foi assinada só pelo Brasil",
       "Trata apenas de biodiversidade"
      ],
      "c": 1,
      "exp": "Assinada em 2015 por 193 países."
     }
    ]
   },
   {
    "id": "dh",
    "cor": "var(--t4)",
    "titulo": "Fundamentação histórica dos direitos humanos",
    "curto": "Direitos humanos",
    "desc": "Declarações de 1776, 1789 e 1948, características, gerações, correntes teóricas, Arendt, multiculturalismo e Brasil.",
    "resumo": [
     {
      "h": "Módulo 1 — Evolução dos direitos humanos",
      "itens": [
       "Direitos humanos: direitos básicos garantidos a todo ser humano, independentemente de condição. Mudam com o tempo (ex.: conectividade digital na pandemia).",
       "Primeiras referências nos séc. XVII–XVIII, na <mark>crise do absolutismo</mark>; o termo era contraponto aos direitos divinos. Iluminismo → <b>Estado de direito</b>; “<b>era dos direitos</b>” (Bobbio).",
       "Segundo <b>Lynn Hunt</b>, o Iluminismo materializou os direitos em dois documentos:",
       "<mark>Declaração de Independência dos EUA (1776)</mark>: homens criados iguais por Deus, com direitos à <b>vida, liberdade e busca da felicidade</b>, vistos como <b>autoevidentes</b>. Objetivo: justificar o <b>rompimento</b> com a Inglaterra, não listar direitos. A Constituição de 1787 manteve a escravidão.",
       "<mark>Declaração dos Direitos do Homem e do Cidadão (França, 1789)</mark>: direitos naturais, inalienáveis e sagrados, que <b>precisam ser ditos e defendidos</b>; os homens nascem e <b>permanecem</b> livres e iguais. Documento legal que embasou a Constituição.",
       "Liga das Nações (Tratado de Versalhes, 1919) falhou; após a 2ª Guerra, <b>ONU (1945)</b> — Carta de São Francisco.",
       "<mark>Declaração Universal dos Direitos Humanos (1948)</mark>: 30 artigos; ideal comum a todos os povos; não regional; direitos inalienáveis de <b>liberdade, justiça e paz</b>; conceito de <mark>família humana</mark>; texto mais traduzido do mundo.",
       "Características: <mark>universalidade</mark> (para todos — se vale para um, vale para todos), <mark>interdependência</mark> (um depende do outro: quem passa fome não exerce a liberdade) e <mark>indivisibilidade</mark> (não se dividem em categorias — ex.: voto de cabresto na República Velha).",
       "<b>Gerações</b>: 1ª — liberdade individual (declarações do séc. XVIII); 2ª — igualdade, família humana (séc. XX, ONU); 3ª — direitos coletivos e difusos a partir dos anos 1960 (meio ambiente, paz, ex.: Amazônia).",
       "Direitos humanos não são garantia definitiva: são <b>trabalho em progresso</b> (a França voltou à monarquia; genocídios após 1948)."
      ]
     },
     {
      "h": "Módulo 2 — Fundamentação e reconstrução",
      "itens": [
       "Três correntes: <mark>jusnaturalismo</mark> — direito natural e intrínseco, existe antes da lei (divino na Antiguidade, razão na Modernidade). Crítica: se é óbvio, por que precisa ser reafirmado? (Hunt).",
       "<mark>Positivismo</mark> — só é direito o que a lei determina. Crítica: reduz direitos; foi abalado em <b>Nuremberg</b>, onde nazistas alegaram que seus atos eram legais.",
       "<mark>Moralismo</mark> — direitos baseados nos valores morais de cada grupo (ex.: respeitar fila). Crítica: fragmentaria a universalidade.",
       "As três correntes <b>se complementam</b>; nenhuma é mais importante. A DUDH é declaração de intenção: precisa ser <b>positivada</b> pelos países.",
       "Em Nuremberg: jusnaturalismo → condenar os atos como crimes, mesmo legais; positivismo → os atos seriam legítimos pela lei alemã.",
       "<mark>Hannah Arendt</mark>: ruptura dos direitos humanos por totalitarismos (direita e esquerda, incluindo stalinismo) e <b>imperialismo</b>. Foco nos <b>apátridas</b> e refugiados — sem Estado, perdem a humanidade perante a lei.",
       "Ideia central de Arendt: <mark>o direito a ter direitos</mark>; o indivíduo como cidadão do mundo, garantido pela própria humanidade. Mas precisa de um Estado para transformar o princípio em lei."
      ]
     },
     {
      "h": "Módulo 3 — Diversidade cultural",
      "itens": [
       "A declaração se chama <b>universal</b>, não internacional: quer transcender fronteiras.",
       "Críticas ao <mark>universalismo</mark>: viés <b>eurocêntrico, ocidental e cristão</b>; soberba de um grupo decidir pelo mundo (“tutelar o mundo”); risco de instrumento <b>imperialista</b>. Defesa: adesão voluntária de países de todos os continentes.",
       "<mark>Multiculturalismo</mark> (<b>Boaventura de Sousa Santos</b>): equilíbrio entre <b>competência global e legitimidade local</b>; cuidado para não relativizar ao extremo (ex.: mutilação genital).",
       "Frase-chave: “temos o direito a ser iguais quando a nossa diferença nos inferioriza; e o direito a ser diferentes quando a nossa igualdade nos descaracteriza”.",
       "Diferenças aceitas desde que nenhum valor inferiorize o outro; igualdade não é uniformidade (ex.: xiitas × sunitas).",
       "<mark>Dignidade da pessoa humana</mark>: condições mínimas para uma vida digna; valor absoluto, incomensurável; varia entre culturas. CF/88, art. 1º: fundamentos incluem soberania, cidadania e dignidade; art. 170 (ordem econômica, existência digna); art. 230 (idosos).",
       "<b>Virada kantiana</b> pós-2ª Guerra: a pessoa é fim em si mesma, nunca meio (rejeita coisificação).",
       "Fases da ONU (Quintana, 1999): <b>definição</b> (burocrática) → <b>promoção</b> → <b>proteção</b> (fiscalização).",
       "Desde 1966, nove tratados principais. Sistemas regionais: <b>Interamericano, Europeu e Africano</b>. Ásia e Oceania não têm comitê regional, mas seus cidadãos não ficam desassistidos."
      ]
     },
     {
      "h": "Módulo 4 — Direitos humanos no Brasil",
      "itens": [
       "Brasil foi <b>fundador da ONU (1945)</b> e contribuiu para a DUDH, mas a consolidação foi interrompida por 21 anos de ditadura militar.",
       "Formação: colônia, açúcar e ouro com mão de obra escravizada; Independência (1822) manteve monarquia e escravidão; <b>último país a abolir</b> (Lei Áurea, 13 de maio de 1888 — <i>atenção: o material escreve “12 de maio”, mas a data correta é 13</i>), sem políticas para os libertos; República (1889) com voto restrito (mulheres, indígenas e analfabetos excluídos).",
       "<mark>Constituição de 1988 — “Constituição Cidadã”</mark>: 8ª constituição do país; elaborada por congressistas eleitos em 1986 (menos de 30 mulheres, nenhuma senadora). Garante liberdade de expressão, igualdade entre homens e mulheres, separação de poderes e direitos sociais (educação, trabalho, saúde, lazer). Prevê prevalência dos direitos humanos nas relações internacionais e a Defensoria Pública.",
       "Constituição sozinha não basta: são necessárias <b>políticas públicas</b> (Executivo e Legislativo colaborando).",
       "Brasil ratificou <b>oito tratados</b> da ONU (pactos de direitos civis e políticos e de direitos econômicos, sociais e culturais; convenções contra discriminação racial, contra a mulher, tortura, criança, desaparecimento forçado, pessoas com deficiência). Integra o Sistema Interamericano. Em 2011, Dilma Rousseff foi a primeira mulher a abrir a Assembleia Geral.",
       "Quando o Estado falha: aciona-se o sistema internacional → investigação e possível condenação → pressão sobre o Estado.",
       "<mark>Caso Maria da Penha</mark>: agressão em 1983; 15 anos sem prisão; em 2001 a <b>Comissão Interamericana</b> responsabilizou o Brasil por negligência → Lei Maria da Penha."
      ]
     }
    ],
    "pegadinhas": [
     "A declaração americana usou os direitos para justificar a <b>independência</b>; a francesa é que <b>listou e defendeu</b> direitos em documento legal.",
     "Para os americanos, os direitos eram <b>autoevidentes</b>; para os franceses, precisavam ser <b>ditos e defendidos</b>.",
     "Indivisibilidade ≠ independência: os direitos <b>não</b> são independentes nem debatidos isoladamente.",
     "Nenhuma corrente teórica (jusnaturalista, positivista, moralista) é a mais importante — elas se complementam.",
     "Para Arendt, o ponto-chave é o <b>direito a ter direitos</b> (apátridas), não a Guerra Fria.",
     "A DUDH é declaração de intenção; não é lei por si só.",
     "O material cita “artigo 5º da Declaração de 1945” — trata-se da DUDH de <b>1948</b> (proibição da tortura)."
    ],
    "flash": [
     [
      "Declaração americana (1776)",
      "Vida, liberdade e busca da felicidade; direitos autoevidentes; objetivo: justificar a independência."
     ],
     [
      "Declaração francesa (1789)",
      "Direitos naturais, inalienáveis e sagrados que precisam ser ditos; base da Constituição."
     ],
     [
      "DUDH (1948)",
      "30 artigos; família humana; liberdade, justiça e paz; texto mais traduzido do mundo."
     ],
     [
      "Universalidade",
      "Direitos para todos, sem exceção — se vale para um, vale para todos."
     ],
     [
      "Interdependência",
      "Um direito depende do outro (fome impede a liberdade)."
     ],
     [
      "Indivisibilidade",
      "Direitos não se separam em categorias (voto de cabresto)."
     ],
     [
      "Gerações",
      "1ª liberdade; 2ª igualdade; 3ª direitos coletivos e difusos (meio ambiente, paz)."
     ],
     [
      "Jusnaturalismo",
      "Direito natural, existe antes da lei."
     ],
     [
      "Positivismo",
      "Só é direito o que está na lei; abalado em Nuremberg."
     ],
     [
      "Moralismo",
      "Direitos baseados nos valores de cada grupo."
     ],
     [
      "Hannah Arendt",
      "Direito a ter direitos; apátridas e refugiados."
     ],
     [
      "Boaventura de Sousa Santos",
      "Multiculturalismo: competência global + legitimidade local."
     ],
     [
      "Virada kantiana",
      "A pessoa é fim em si mesma, nunca meio."
     ],
     [
      "Constituição Cidadã",
      "CF/88, fim da ditadura; dignidade da pessoa humana como fundamento (art. 1º)."
     ],
     [
      "Caso Maria da Penha",
      "Comissão Interamericana responsabilizou o Brasil (2001) → lei homônima."
     ]
    ],
    "quiz": [
     {
      "q": "Ao acompanhar a história das declarações de direitos, compreendemos que:",
      "op": [
       "A DUDH superou todas porque todos os direitos eram inéditos",
       "Os direitos humanos são fruto de construção histórica em constante evolução",
       "Declarações surgem espontaneamente em regimes estáveis",
       "A independência americana iniciou o poder dos EUA"
      ],
      "c": 1,
      "exp": "A DUDH reuniu direitos já debatidos em outras declarações."
     },
     {
      "q": "Sobre as características dos direitos humanos, é correto afirmar que:",
      "op": [
       "São independentes e debatidos isoladamente",
       "São indiscutíveis e compreendidos por si só",
       "São capacitistas",
       "São indivisíveis e precisam ser respeitados como um todo",
       "São apenas jurídicos"
      ],
      "c": 3,
      "exp": "Nenhum direito é mais importante que o outro nem pode ser interpretado sozinho."
     },
     {
      "q": "Qual diferença entre as declarações de 1776 e 1789 está correta?",
      "op": [
       "A americana listou direitos em documento legal; a francesa só justificou a independência",
       "A americana via os direitos como autoevidentes; a francesa afirmava que precisavam ser ditos e defendidos",
       "Ambas aboliram a escravidão",
       "A francesa foi redigida pela ONU"
      ],
      "c": 1,
      "exp": "A francesa virou base da Constituição; a americana servia ao rompimento com a Inglaterra."
     },
     {
      "q": "A terceira geração de direitos humanos concentra-se em:",
      "op": [
       "Liberdade individual contra o absolutismo",
       "Igualdade e família humana",
       "Direitos coletivos e difusos, como meio ambiente e paz",
       "Direito ao voto"
      ],
      "c": 2,
      "exp": "A partir dos anos 1960, direitos que beneficiam a todos e só podem ser exigidos em conjunto."
     },
     {
      "q": "Segundo Hannah Arendt, é correto afirmar:",
      "op": [
       "O ponto-chave é a luta pelo direito a ter direitos, pois muitos ficam sem a proteção de qualquer Estado",
       "O período mais tenso foi a Guerra Fria",
       "Sua teoria só aponta problemas sem soluções",
       "Sua teoria está superada"
      ],
      "c": 0,
      "exp": "Apátridas e refugiados ficaram desprotegidos; os direitos humanos devem ocupar esse espaço."
     },
     {
      "q": "Sobre as correntes de fundamentação dos direitos humanos:",
      "op": [
       "O jusnaturalismo é o menos reconhecido",
       "O positivismo é a mais importante",
       "O moralismo é o que menos recebe críticas",
       "Não há como dizer qual é mais importante, pois todas reforçam esses direitos"
      ],
      "c": 3,
      "exp": "Todas recebem críticas e se complementam."
     },
     {
      "q": "No Tribunal de Nuremberg, qual corrente foi amplamente questionada por dar respaldo legal aos atos nazistas?",
      "op": [
       "Jusnaturalismo",
       "Positivismo",
       "Moralismo",
       "Multiculturalismo"
      ],
      "c": 1,
      "exp": "A defesa alegou que os atos eram legais pela lei alemã vigente."
     },
     {
      "q": "Sobre a universalidade dos direitos humanos:",
      "op": [
       "Visa atender a todos sem distinção, mas é criticada por não abrir espaço às diferenças culturais",
       "É a forma mais correta, impondo-se a todas as culturas",
       "Foi substituída pelo relativismo cultural",
       "Defende uma aldeia global uniforme"
      ],
      "c": 0,
      "exp": "Críticos apontam viés eurocêntrico e propõem um direito multicultural."
     },
     {
      "q": "Sobre a estrutura da ONU para os direitos humanos:",
      "op": [
       "A África está sem fiscalização",
       "Há comitês regionais que não cobrem todos os continentes, mas isso não deixa pessoas desassistidas",
       "Não há estrutura permanente",
       "A ONU repassou o tema à Unesco"
      ],
      "c": 1,
      "exp": "Ásia e Oceania não têm comitê regional, mas os demais sistemas podem atuar."
     },
     {
      "q": "A dignidade da pessoa humana, segundo o material, é:",
      "op": [
       "Um valor mensurável economicamente",
       "O conjunto de condições mínimas para uma vida digna, que varia entre culturas",
       "Um conceito exclusivo da CF/88",
       "Sinônimo de liberdade de expressão"
      ],
      "c": 1,
      "exp": "Cada cultura tem seu conjunto de condições essenciais; preservá-las é o objetivo dos direitos humanos."
     },
     {
      "q": "Sobre a Constituição de 1988:",
      "op": [
       "É fraca e será substituída",
       "Impede compromissos internacionais",
       "Criou declaração própria seguida na América Latina",
       "Ficou marcada pela quantidade de direitos garantidos e por criar estruturas para sua promoção"
      ],
      "c": 3,
      "exp": "É a Constituição Cidadã, embora nem todos os direitos sejam efetivados."
     },
     {
      "q": "Sobre o compromisso atual do Brasil com a ONU:",
      "op": [
       "Os índices de desigualdade impedem cadeiras no conselho",
       "Temos ampla participação, ratificamos a maior parte dos tratados, mas ainda consolidamos esses direitos no país",
       "Estamos suspensos",
       "Somos país modelo da América Latina"
      ],
      "c": 1,
      "exp": "Participamos das estruturas da ONU, mas persistem desigualdades e violações."
     }
    ]
   }
  ]
 },
 {
  "id": "java",
  "nome": "POO em Java",
  "temas": [
   {
    "id": "intro",
    "cor": "var(--t1)",
    "titulo": "Introdução à programação OO em Java",
    "curto": "Introdução à POO",
    "desc": "Classes, objetos, construtor, encapsulamento, relações entre objetos, referências, visibilidade, coleções, agrupamento, JVM/JRE/JDK.",
    "resumo": [
     {
      "h": "Classes e objetos",
      "itens": [
       "A POO surgiu como resposta à <mark>crise do software</mark>: o paradigma estruturado tinha problemas de manutenibilidade e reaproveitamento de código.",
       "<mark>Classe</mark> = modelo para criar objetos com mesma estrutura e comportamento: dados + métodos que operam sobre eles + mecanismo de instanciação. Dados e métodos formam o <b>contrato</b> entre quem cria e quem usa a classe.",
       "Toda classe <code>public</code> deve estar num arquivo com o <b>mesmo nome</b> e extensão <code>.java</code> (ex.: <code>Aluno.java</code>). Java é <mark>case sensitive</mark>: <code>class</code> ≠ <code>Class</code>.",
       "Sintaxe: <code>[Modificador] class Identificador [TipoParâmetros] [extends Superclasse] [implements Interfaces]</code>. Mínimo: <code>class ClasseSimples { }</code>. Duas formas de declarar: normal e <b>enum</b>.",
       "Modificadores de classe: anotações, <code>public/protected/private</code> (acesso), <code>abstract/final</code> (hierarquia), <code>static</code> (só em classes membro), <code>strictfp</code> (ponto flutuante independente de plataforma).",
       "<mark>Construtor</mark>: executado sempre na instanciação; tem <b>exatamente o nome da classe</b>, pode ter modificador, mas <b>não tem tipo de retorno</b>. <code>new</code> é sempre seguido do construtor.",
       "<b>Estado</b> do objeto = seus atributos; <b>comportamento</b> = seus métodos.",
       "Destruição: o programador <b>não destrói</b> objetos. O <mark>coletor de lixo (garbage collector)</mark> da JVM libera objetos sem referência. <code>System.gc()</code> é só uma <b>solicitação</b>, não uma ordem."
      ]
     },
     {
      "h": "Encapsulamento e relações entre objetos",
      "itens": [
       "<mark>Encapsulamento</mark>: ocultar atributos e funcionamento internos, expondo só o necessário. Atributos <code>private</code> acessados por <b>getters e setters</b> públicos. Dois propósitos: <b>ocultação de dados</b> e <b>abstração</b>.",
       "<mark>Associação</mark>: relação mais fraca; um objeto usa serviços de outro, cada um com vida independente.",
       "<mark>Agregação</mark>: pai contém filhos, mas os filhos <b>sobrevivem</b> à destruição do pai (Escola–Aluno).",
       "<mark>Composição</mark>: filhos <b>morrem junto</b> com o pai (Escola–Departamento). É um caso especial de agregação e o conceito mais restritivo; associação é o mais abrangente.",
       "Java <b>não tem ponteiros</b>: toda variável de classe é uma <b>referência</b>. Objetos são passados <mark>por referência</mark>; tipos primitivos, <mark>por valor</mark>. <code>a2 = a1</code> faz as duas variáveis apontarem para o mesmo objeto."
      ]
     },
     {
      "h": "Herança, visibilidade e polimorfismo (visão geral)",
      "itens": [
       "Superclasse (base, pai) × subclasse (derivada, filha). Herança evita repetir código e facilita manutenção.",
       "<mark>Java não tem herança múltipla de classes</mark>, mas uma classe pode implementar várias interfaces e uma interface pode estender várias interfaces.",
       "Herança é declarada só para o <b>ancestral imediato</b> (<code>extends</code>). Toda classe descende direta ou indiretamente de <mark>Object</mark>.",
       "Quatro níveis de acesso: <b>default</b> (sem modificador → pacote), <b>private</b> (só a classe), <b>protected</b> (pacote + subclasses), <b>public</b> (todos).",
       "Na herança: público na superclasse deve continuar público; protegido pode virar protegido ou público, <b>nunca privado</b>. Privados não são acessíveis pelas subclasses.",
       "<b>Pacote</b> (<code>package</code>): espaço de nomes que organiza classes afins e evita conflito de nomes.",
       "Construtor da subclasse repassa parâmetros ao da superclasse com <code>super(...)</code>.",
       "<mark>Polimorfismo</mark>: um mesmo método com comportamentos diferentes. Aparece na <b>sobrecarga</b> (mesmo nome, parâmetros diferentes) e na <b>herança/sobrescrita</b>. Classe abstrata: não é instanciada; quem implementa seus métodos abstratos é a classe <b>concreta</b>."
      ]
     },
     {
      "h": "Agrupamento e coleções",
      "itens": [
       "Agrupamento: formar pares <b>(chave, coleção de objetos)</b> segundo um critério. <code>List</code> guarda os objetos; <code>Map</code> guarda os pares e <b>não aceita chaves duplicadas</b>.",
       "<code>Collectors.groupingBy</code> recebe uma função classificadora e retorna um <code>Collector</code> que monta um <code>Map</code> (chave → container). Por padrão usa <code>List</code>; outras assinaturas permitem <code>Set</code> (<code>Collectors.toSet()</code>) e outro tipo de Map (<code>TreeMap</code> mantém ordenado).",
       "Coleções (containers) agrupam elementos numa unidade. Interface <code>Collection</code>: <code>Set</code> (conjunto matemático, sem duplicados), <code>List</code> (ordenada, <b>admite duplicados</b>, acesso por posição), <code>Queue</code> e <code>Deque</code>. <code>Map</code> <b>não é verdadeiramente uma coleção</b>.",
       "Expressão lambda de exemplo: <code>x -&gt; x * x</code> (eleva ao quadrado)."
      ]
     },
     {
      "h": "Ambiente e estrutura da linguagem",
      "itens": [
       "Stroustrup: “Java não é independente de plataforma, <b>é uma plataforma</b>” — o programa é executado pela <mark>JVM</mark>, não pelo hardware. Vantagem: portabilidade; desvantagem: desempenho inferior ao C++.",
       "<mark>JVM</mark> executa <b>bytecodes</b> gerados pelo compilador. <mark>JRE</mark> = JVM + bibliotecas: permite <b>executar</b>, não desenvolver. <mark>JDK</mark> = JRE + ferramentas: <code>java</code>, <code>javac</code>, <code>jar</code>, <code>javadoc</code>. O JDK <b>não traz editor</b> de código — por isso usamos IDE (Eclipse, NetBeans).",
       "Ponto de entrada: <code>public static void main(String[] args)</code>. O <code>main</code> não é obrigatório para compilar, só para executar.",
       "Laços: <code>while</code>, <code>do-while</code> (executa ao menos uma vez) e <code>for</code>. Java checa limites de arrays (segurança), algo que o C++ não faz."
      ]
     }
    ],
    "pegadinhas": [
     "O programador <b>não</b> escolhe quando o objeto é destruído; <code>System.gc()</code> só pede.",
     "Construtor <b>não tem tipo de retorno</b> (nem <code>void</code>) e pode ser privado.",
     "Objeto passado como parâmetro <b>não</b> é clonado: passa-se a referência.",
     "Agregação: filho sobrevive. Composição: filho morre com o pai.",
     "Objeto da subclasse <b>é</b> do tipo da superclasse; o contrário não.",
     "O JDK contém JRE e JVM, mas não contém editor.",
     "<code>List</code> admite duplicados; <code>Set</code> e as chaves de <code>Map</code> não."
    ],
    "flash": [
     [
      "Classe",
      "Modelo com dados, métodos e mecanismo de instanciação."
     ],
     [
      "Construtor",
      "Mesmo nome da classe, sem tipo de retorno, executado no new."
     ],
     [
      "Garbage collector",
      "JVM libera objetos sem referência; System.gc() é só pedido."
     ],
     [
      "Encapsulamento",
      "Atributos private + getters/setters públicos."
     ],
     [
      "Associação × agregação × composição",
      "Uso independente × filho sobrevive × filho morre com o pai."
     ],
     [
      "Passagem de parâmetros",
      "Objetos: por referência. Primitivos: por valor."
     ],
     [
      "Quatro níveis de acesso",
      "default (pacote), private (classe), protected (pacote + subclasses), public (todos)."
     ],
     [
      "Herança múltipla em Java",
      "Proibida para classes; permitida entre interfaces."
     ],
     [
      "Classe Object",
      "Ancestral de todas as classes Java."
     ],
     [
      "JVM × JRE × JDK",
      "Executa bytecode × JVM + bibliotecas × JRE + ferramentas (javac, jar, javadoc)."
     ],
     [
      "groupingBy",
      "Collector que cria um Map chave → coleção de objetos agrupados."
     ],
     [
      "List × Set × Map",
      "Ordenada com duplicados × sem duplicados × pares chave-valor sem chave repetida."
     ]
    ],
    "quiz": [
     {
      "q": "Sobre objetos em Java, é correto afirmar:",
      "op": [
       "O programador determina o momento exato da destruição do objeto",
       "Um objeto passado como parâmetro gera um clone",
       "O programador não precisa se preocupar em desalocar a memória de objetos",
       "O construtor não pode ser privado"
      ],
      "c": 2,
      "exp": "A reciclagem de memória é feita pelo coletor de lixo da JVM."
     },
     {
      "q": "O método construtor em Java:",
      "op": [
       "Deve ter tipo de retorno void",
       "Deve ter exatamente o nome da classe e não possui tipo de retorno",
       "Só pode existir um por classe",
       "É chamado manualmente após o new"
      ],
      "c": 1,
      "exp": "O new é sempre seguido da chamada ao construtor, que tem o nome da classe e não tem retorno."
     },
     {
      "q": "Uma Escola e seus Departamentos: se a escola deixa de existir, os departamentos também deixam. Essa relação é de:",
      "op": [
       "Associação",
       "Agregação",
       "Composição",
       "Herança"
      ],
      "c": 2,
      "exp": "Na composição o ciclo de vida do filho depende do pai."
     },
     {
      "q": "Sobre herança em Java, é correto afirmar:",
      "op": [
       "Atributo protegido da superclasse não é visível na subclasse",
       "Um objeto da subclasse também é do tipo da superclasse",
       "A superclasse herda os métodos públicos da subclasse",
       "Uma superclasse só pode ter uma subclasse"
      ],
      "c": 1,
      "exp": "A subclasse tem a mesma estrutura da superclasse, então seus objetos são também do tipo dela."
     },
     {
      "q": "Um membro com modificador protected é acessível:",
      "op": [
       "Apenas dentro da própria classe",
       "Apenas no mesmo pacote",
       "No mesmo pacote e pelas subclasses, mesmo de outros pacotes",
       "Por qualquer classe"
      ],
      "c": 2,
      "exp": "protected = pacote + subclasses. Classe não derivada de outro pacote não acessa."
     },
     {
      "q": "Qual assinatura cria o ponto de entrada de um programa Java?",
      "op": [
       "public static int main(String args[])",
       "public void main(String[] args)",
       "public static void main(String[] args)",
       "static public main(String args)"
      ],
      "c": 2,
      "exp": "A assinatura do main é fixa: public static void main(String[] args)."
     },
     {
      "q": "Qual elemento permite executar, mas não desenvolver, programas Java?",
      "op": [
       "JDK",
       "JRE",
       "javac",
       "IDE"
      ],
      "c": 1,
      "exp": "JRE = JVM + bibliotecas. Para desenvolver é preciso o JDK."
     },
     {
      "q": "(I) Java não é independente de plataforma, é uma plataforma, PORQUE (II) o software Java é executado pela JVM, não pelo hardware.",
      "op": [
       "As duas estão corretas e a II justifica a I",
       "As duas estão corretas, mas a II não justifica a I",
       "A I é correta e a II falsa",
       "A I é falsa e a II correta"
      ],
      "c": 0,
      "exp": "A JVM abstrai o hardware, e é isso que faz de Java uma plataforma."
     },
     {
      "q": "Sobre o método groupingBy da classe Collectors, é correto afirmar:",
      "op": [
       "O programador informa o atributo e os objetos vão sempre para List",
       "Os objetos agrupados são armazenados num container mapeado para a chave de agrupamento",
       "Retorna diretamente um List",
       "Não aceita expressões lambda"
      ],
      "c": 1,
      "exp": "Retorna um Collector que monta um Map chave → container (List por padrão, mas pode ser Set)."
     },
     {
      "q": "Sobre as coleções em Java, é correto afirmar:",
      "op": [
       "Nenhuma coleção admite elementos duplicados",
       "List admite duplicados e permite acesso por posição",
       "Map é uma subinterface de Collection",
       "Set mantém sempre a ordem de inserção"
      ],
      "c": 1,
      "exp": "List é ordenada e aceita duplicados; Map não é verdadeiramente uma coleção."
     }
    ]
   },
   {
    "id": "heranca",
    "cor": "var(--t2)",
    "titulo": "Herança em Java",
    "curto": "Herança",
    "desc": "Hierarquia, herança múltipla, classes internas, Liskov, tipagem estática × vinculação dinâmica, Collections e métodos da classe Object.",
    "resumo": [
     {
      "h": "Hierarquia de herança",
      "itens": [
       "Herança = transmitir métodos e atributos aos descendentes. Cria a relação <mark>“é um”</mark> (Aluno é uma Pessoa).",
       "Classes acima <b>generalizam</b>; classes abaixo <b>especializam</b> (sobrescrevendo métodos). A relação se propaga: um Aluno também é Física e Pessoa.",
       "A hierarquia de classes cria uma <mark>hierarquia de tipos</mark>: objeto da derivada pertence a um <b>subtipo</b> da superclasse.",
       "Instanciar Aluno reserva memória para os atributos herdados de Pessoa. Subclasse possui tudo da superclasse, mas <b>só enxerga o que não é privado</b>."
      ]
     },
     {
      "h": "Herança múltipla e classes internas",
      "itens": [
       "<mark>Problema do diamante (“diamante da morte”)</mark>: com herança múltipla, a classe não sabe de qual pai herdar um método de mesmo nome. Por isso Java <b>proíbe</b> herança múltipla de classes; a solução é mudar a modelagem (ou usar interfaces).",
       "<code>private</code> e <code>protected</code> só podem ser aplicados a classes <b>aninhadas</b> (não às de nível superior).",
       "Classes internas podem ser estendidas por outras internas ou por classes fora do aninhamento. Para instanciar uma classe interna é preciso antes instanciar a externa: <code>new Externa().new Interna()</code>.",
       "Classe interna <code>protected</code> fica visível para a subclasse da externa, <b>mesmo em outro pacote</b>."
      ]
     },
     {
      "h": "Liskov, tipos estáticos e vinculação dinâmica",
      "itens": [
       "<mark>Princípio da substituição de Liskov</mark> (subtipagem comportamental forte): para ser subtipo, <b>todas as propriedades da superclasse devem valer na subclasse</b>. Se a subclasse muda o contrato, quem usa a superclasse terá problemas.",
       "<b>Tipagem estática</b>: tipo definido em compilação (Java). <b>Tipagem dinâmica</b>: tipo definido em execução (JavaScript). O <code>var</code> do Java 10 <b>continua sendo tipagem estática</b> (inferência).",
       "<mark>Vinculação dinâmica (dynamic binding)</mark>: com uma referência da superclasse apontando para objeto da subclasse, o método executado é decidido em tempo de execução pelo <b>tipo do objeto</b>. Isso <b>não</b> é tipagem dinâmica, pois o tipo da variável não muda.",
       "Ex.: <code>Base obj2 = new Derivada1();</code> — variável do tipo Base, objeto do tipo Derivada1."
      ]
     },
     {
      "h": "Herança nas bibliotecas: Collections",
      "itens": [
       "Framework Collections: armazenar, manipular e comunicar dados agregados; implementado com herança e interfaces. Duas hierarquias: <b>Collection</b> e <b>Map</b>.",
       "Métodos de Collection: <code>add</code>, <code>contains</code>, <code>equals</code>, <code>hashCode</code>, <code>remove</code>, <code>toArray</code>.",
       "<code>TreeSet</code> pode receber um <code>Comparator</code> (sobrescrevendo <code>compare</code>) para ordenar os elementos."
      ]
     },
     {
      "h": "Métodos da classe Object",
      "itens": [
       "<mark>toString()</mark>: representação textual do objeto (padrão: nome da classe + @ + hash em hexadecimal, usando <code>getClass()</code> e <code>hashCode()</code>). A documentação <b>recomenda sobrescrever</b>. Se a subclasse não sobrescreve, herda a versão da superclasse.",
       "<mark>equals(Object)</mark>: na classe Object retorna true <b>só se for o mesmo objeto</b> (igual a <code>==</code>). Sobrescrevemos para comparar conteúdo. Propriedades: <b>reflexividade, simetria, transitividade, consistência</b> e <code>x.equals(null)</code> é sempre false.",
       "<mark>hashCode()</mark>: contrato — objetos <b>iguais por equals devem ter o mesmo hash</b>; objetos diferentes <b>não precisam</b> ter hashes diferentes. Quem sobrescreve <code>equals</code> deve sobrescrever <code>hashCode</code>.",
       "<code>==</code> compara referências; <code>equals</code> compara segundo a implementação.",
       "<mark>instanceof</mark>: <code>obj instanceof Tipo</code> retorna true também para objetos de subclasses comparados ao tipo da superclasse.",
       "<code>protected</code> herdado de superclasse de <b>outro pacote</b>: a subclasse usa via herança, mas não pode chamar o método por meio de <b>outro objeto</b> (mensagem para outra instância), e classes do pacote da subclasse que não são descendentes não o acessam.",
       "A superclasse <b>não</b> acessa métodos da subclasse: a herança vai do geral para o específico, nunca o inverso."
      ]
     }
    ],
    "pegadinhas": [
     "Sobrescrever método é <b>especializar</b>, não generalizar.",
     "Java aceita herança em <b>vários níveis</b>; o que não aceita é herança <b>múltipla</b> de classes.",
     "Herança múltipla <b>não</b> é implementada por cast.",
     "Vinculação dinâmica ≠ tipagem dinâmica. Java é estaticamente tipada, inclusive com <code>var</code>.",
     "Mudar <code>equals</code> exige rever <code>hashCode</code>. Objetos iguais com hash diferente violam o contrato.",
     "Na classe Object, <code>equals</code> se comporta como <code>==</code>.",
     "Subclasse <b>pode</b> sobrescrever métodos protegidos da superclasse."
    ],
    "flash": [
     [
      "Relação criada pela herança",
      "“É um” / “é tipo de”."
     ],
     [
      "Diamante da morte",
      "Ambiguidade da herança múltipla; motivo de Java proibi-la em classes."
     ],
     [
      "Liskov",
      "Subclasse deve manter todas as propriedades (contrato) da superclasse."
     ],
     [
      "Tipagem estática × dinâmica",
      "Tipo em compilação (Java) × tipo em execução (JavaScript)."
     ],
     [
      "Vinculação dinâmica",
      "Método escolhido em execução pelo tipo do objeto, não da variável."
     ],
     [
      "var (Java 10)",
      "Inferência de tipo; ainda é tipagem estática."
     ],
     [
      "toString()",
      "Descrição textual do objeto; recomenda-se sobrescrever."
     ],
     [
      "equals na classe Object",
      "true só se for o mesmo objeto (como ==)."
     ],
     [
      "Propriedades de equals",
      "Reflexiva, simétrica, transitiva, consistente; equals(null) = false."
     ],
     [
      "Contrato do hashCode",
      "Objetos iguais → mesmo hash; diferentes podem coincidir."
     ],
     [
      "instanceof",
      "Testa se o objeto é de um tipo (inclui subclasses)."
     ],
     [
      "Instanciar classe interna",
      "new Externa().new Interna()."
     ]
    ],
    "quiz": [
     {
      "q": "Sobre herança em Java, é correto afirmar:",
      "op": [
       "Uma classe que sobrescreve método da superclasse promove sua generalização",
       "O objeto de uma classe derivada pertence a um subtipo da superclasse",
       "Objeto com duas superclasses é caso de múltipla hierarquia aceita em Java",
       "Java não admite herança em múltiplos níveis"
      ],
      "c": 1,
      "exp": "A hierarquia de classes é também uma hierarquia de tipos."
     },
     {
      "q": "Java proíbe herança múltipla de classes principalmente por causa:",
      "op": [
       "Do custo de memória",
       "Do problema do diamante, que gera ambiguidade na herança de métodos",
       "Da falta de suporte da JVM a interfaces",
       "Do coletor de lixo"
      ],
      "c": 1,
      "exp": "Linguagens com herança múltipla deixam ao programador resolver o diamante; Java evita o problema."
     },
     {
      "q": "Sobre classes internas, é correto afirmar:",
      "op": [
       "Herança múltipla é implementada em Java por cast",
       "Uma classe interna protegida pode ser acessada por uma classe de outro pacote que estenda a classe externa pública",
       "Classe interna protegida não é acessível no mesmo pacote",
       "Aninhamento de classes é um tipo de herança"
      ],
      "c": 1,
      "exp": "protected dá acesso às subclasses, mesmo em outro pacote."
     },
     {
      "q": "Considere Base ← Derivada1 ← Derivada2 e: Base obj1 = new Base(); Base obj2 = new Derivada1(); Base obj3 = new Derivada2(); Derivada1 obj4 = new Derivada1(); É correto afirmar:",
      "op": [
       "obj2 e obj3 são referências para objetos do mesmo tipo",
       "obj1, obj2 e obj3 são variáveis do tipo Base, mas os objetos são Base, Derivada1 e Derivada2",
       "obj4 é variável do tipo Base",
       "O código não compila"
      ],
      "c": 1,
      "exp": "A variável é do tipo Base; o objeto instanciado define qual método sobrescrito será executado."
     },
     {
      "q": "A situação em que uma variável do tipo Pessoa referencia um objeto Fisica e o método executado é o de Fisica caracteriza:",
      "op": [
       "Tipagem dinâmica",
       "Vinculação dinâmica (dynamic binding)",
       "Sobrecarga",
       "Downcasting obrigatório"
      ],
      "c": 1,
      "exp": "O tipo da variável não muda; a escolha do método em execução é vinculação dinâmica."
     },
     {
      "q": "Sobre o método toString, é correto afirmar:",
      "op": [
       "Retorna o código hash do objeto",
       "Retorna a classe do objeto",
       "Converte o objeto em String de forma fixa, sem poder ser alterado",
       "Fornece uma representação textual do objeto que pode ser sobrescrita pelas subclasses"
      ],
      "c": 3,
      "exp": "Pertence a Object e a documentação recomenda sobrescrevê-lo."
     },
     {
      "q": "Sobre equals e hashCode, é correto afirmar:",
      "op": [
       "Mudanças em equals podem exigir mudanças em hashCode, mas o inverso nunca ocorre",
       "equals não precisa ser sobrescrito para comparar conteúdo",
       "equals sempre depende de hashCode",
       "Objetos iguais com hash diferentes violam o contrato de hashCode"
      ],
      "c": 3,
      "exp": "Objetos iguais segundo equals devem ter o mesmo hash."
     },
     {
      "q": "Na implementação padrão da classe Object, a.equals(b) retorna true quando:",
      "op": [
       "a e b têm os mesmos atributos",
       "a e b referenciam o mesmo objeto",
       "a e b são da mesma classe",
       "a e b têm o mesmo toString"
      ],
      "c": 1,
      "exp": "Na classe Object, equals equivale a a == b."
     },
     {
      "q": "Julgue: I. Métodos protegidos da subclasse são acessíveis pela superclasse. II. Atributos e métodos protegidos são herdados e acessíveis pela subclasse. III. Métodos protegidos são acessíveis por classes fora da hierarquia de outro pacote.",
      "op": [
       "Apenas I",
       "Apenas II",
       "I e II",
       "II e III"
      ],
      "c": 1,
      "exp": "A superclasse não herda da subclasse, e protected não abre acesso a classes de outro pacote fora da hierarquia."
     },
     {
      "q": "O princípio da substituição de Liskov afirma que:",
      "op": [
       "Toda subclasse deve sobrescrever todos os métodos",
       "Um subtipo deve manter válidas todas as propriedades da superclasse",
       "A superclasse pode ser substituída pela subclasse apenas com cast",
       "Só interfaces podem ser subtipos"
      ],
      "c": 1,
      "exp": "Se a subclasse muda o contrato, deixa de ser um subtipo comportamental."
     }
    ]
   },
   {
    "id": "poli",
    "cor": "var(--t3)",
    "titulo": "Polimorfismo em Java",
    "curto": "Polimorfismo",
    "desc": "Classes e métodos abstratos, final, upcasting/downcasting, polimorfismo, interfaces, interfaces aninhadas e funcionais.",
    "resumo": [
     {
      "h": "Classes abstratas e final",
      "itens": [
       "A POO respondeu à <b>crise do software</b> (fim dos anos 1960–70), focando reuso e manutenibilidade.",
       "<mark>Classe abstrata</mark> (<code>abstract</code>): <b>não pode ser instanciada</b>; fornece interface e comportamentos comuns às subclasses. Classes que podem ser instanciadas são <b>concretas</b>.",
       "<mark>Método abstrato</mark>: sem corpo; obriga a classe a ser abstrata. A abstração se propaga: subclasse que não implementa o método abstrato também é abstrata.",
       "Classe abstrata pode ter atributos, construtores e métodos concretos; pode estender classe concreta e ser estendida por concreta. Não precisa ter método abstrato.",
       "<mark>final</mark> em <b>método</b>: não pode ser sobrescrito (não obriga a classe a ser final). Em <b>classe</b>: não pode ter subclasses (mas pode ter superclasse) e todos os métodos ficam implicitamente final. Em <b>variável</b>: deve ser inicializada (na declaração ou no construtor) e não pode mudar.",
       "Métodos <code>static</code> e <code>private</code> são implicitamente final. <code>final</code> permite otimizações do compilador.",
       "Referência final: <code>final Escola ref = new Escola();</code> — o <b>objeto</b> pode mudar (<code>ref.atualizarNome(...)</code>), mas <code>ref = new Escola()</code> gera <b>erro de compilação</b>."
      ]
     },
     {
      "h": "Upcasting, downcasting e polimorfismo",
      "itens": [
       "<mark>Upcasting</mark>: tratar referência da subclasse como da superclasse. <mark>Downcasting</mark>: tratar referência da superclasse como da subclasse.",
       "Nenhum dos dois <b>muda o objeto</b>, só a interpretação da referência; ocorrem <b>dentro da hierarquia</b>; e não alteram restrições de acesso (privado continua privado).",
       "Atributo protegido da superclasse é o <b>mesmo espaço de memória</b> para superclasse e subclasse. A superclasse é construída primeiro.",
       "<mark>Polimorfismo</mark>: método invocado por uma <b>referência da superclasse</b> executa a <b>versão especializada</b> da subclasse, decidida em <b>tempo de execução</b>. Substitui <code>switch-case</code> por tipo e melhora a manutenibilidade.",
       "Ex.: vetor <code>Pessoa[]</code> com objetos Fisica e Juridica; <code>recuperarID()</code> formata CPF ou CNPJ conforme o objeto."
      ]
     },
     {
      "h": "Interfaces",
      "itens": [
       "Interface = <mark>contrato</mark>: especifica interações possíveis sem definir o comportamento (exemplo do mouse).",
       "Não pode ser instanciada; não tem estado. Pode conter <b>constantes, assinaturas de métodos, tipos aninhados, métodos static e default</b>. Só <code>default</code> e <code>static</code> têm implementação.",
       "Membros são implicitamente <b>public</b>; atributos são <b>public static final</b>. Método abstrato de interface <b>não pode ter corpo</b>, nem vazio <code>{ }</code>.",
       "Interfaces herdam apenas de interfaces e <mark>admitem herança múltipla</mark> (<code>interface C extends A, B</code>). Interface não estende classe e classe não estende interface.",
       "Classe usa <code>implements</code> (várias, separadas por vírgula) e deve implementar <b>todos</b> os métodos abstratos, sem reduzir a visibilidade (public continua public).",
       "Variável do tipo interface pode referenciar objeto da classe que a implementa, mas só acessa os métodos daquela interface. Para trocar de interface, usa-se cast.",
       "<code>@interface</code> declara uma <b>Annotation</b>, tipo especial de interface. Interfaces servem para construir <b>APIs</b>, ocultando a implementação.",
       "<mark>Classe abstrata × interface</mark>: a classe abstrata define <b>o que o objeto é</b> (tipo, com estado e membros privados/protegidos); a interface define <b>capacidades</b> (contrato). Use interface para capacidades; classe abstrata para compartilhar código e atributos. São complementares (ex.: <code>List</code> × <code>AbstractList</code> × <code>ArrayList</code>)."
      ]
     },
     {
      "h": "Interfaces avançadas",
      "itens": [
       "Interface aninhada é <b>implicitamente static</b>. Se for membro de outra interface, <b>só pode ser public</b>; se declarada dentro de uma classe, aceita qualquer modificador.",
       "Compilador gera arquivo separado: <code>iExterna$iInterna.class</code>.",
       "<mark>Não há herança entre entidade aninhada e externa</mark>: a interna é membro da externa, não herda seus métodos. Implementar a interna não implementa a externa.",
       "Variável com mesmo nome em duas interfaces implementadas gera <b>ambiguidade</b>; resolve-se com o nome completo (<code>iAlfa.nome</code>).",
       "Interface membro de uma classe fica disponível à subclasse por herança (<code>class Concreta extends Base implements iNested</code>).",
       "<mark>Lambda</mark> (Java 8, cálculo lambda de Alonzo Church): função anônima, sem nome, modificadores ou tipos declarados. <b>Programação funcional</b>: paradigma declarativo, sem estado mutável.",
       "<mark>Interface funcional (SAM — single abstract method)</mark>: exatamente <b>um método abstrato</b>, contando os herdados. Ex.: <code>Comparator</code>, <code>Runnable</code>. Anotação <code>@FunctionalInterface</code> faz o compilador verificar. Subinterface que acrescenta outro método abstrato deixa de ser funcional."
      ]
     }
    ],
    "pegadinhas": [
     "Classe abstrata <b>não</b> exige que todos os métodos sejam abstratos, e pode estender classe concreta.",
     "Método <code>final</code> não obriga classe <code>final</code>; mas método <code>abstract</code> obriga classe <code>abstract</code>.",
     "Classe <code>final</code> pode ter superclasse; o que não pode é ter subclasse.",
     "<code>final</code> na referência impede reapontar, não impede alterar o objeto.",
     "Casting não transforma o objeto nem libera acesso a membros privados.",
     "Para o polimorfismo, o vetor/variável deve ser do tipo da <b>superclasse</b>.",
     "Interface funcional é definida pelo número de métodos abstratos (um só), não pelo uso de lambda.",
     "Classe não pode herdar de duas classes, mas pode implementar várias interfaces."
    ],
    "flash": [
     [
      "Classe abstrata",
      "Não instanciável; fornece contrato e comportamento comum."
     ],
     [
      "Método abstrato",
      "Sem corpo; força a classe a ser abstrata."
     ],
     [
      "final em método / classe / variável",
      "Não sobrescreve / não tem subclasse / não muda valor."
     ],
     [
      "Implicitamente final",
      "Métodos static e private."
     ],
     [
      "Upcasting × downcasting",
      "Sub → super × super → sub; não mudam o objeto."
     ],
     [
      "Polimorfismo",
      "Referência da superclasse executa versão da subclasse em tempo de execução."
     ],
     [
      "O que uma interface pode conter",
      "Constantes, assinaturas, tipos aninhados, métodos static e default."
     ],
     [
      "Herança em interfaces",
      "Múltipla (extends A, B); só entre interfaces."
     ],
     [
      "Classe abstrata × interface",
      "O que o objeto é × capacidades que oferece."
     ],
     [
      "Interface aninhada",
      "Implicitamente static; se membro de interface, só public."
     ],
     [
      "Interface funcional (SAM)",
      "Um único método abstrato, incluindo herdados; @FunctionalInterface."
     ],
     [
      "Lambda em Java",
      "Função anônima, desde o Java 8."
     ]
    ],
    "quiz": [
     {
      "q": "Sobre classes abstratas em Java, é correto afirmar:",
      "op": [
       "Se a classe é abstrata, todos os métodos devem ser abstratos",
       "Uma classe abstrata pode estender uma classe concreta",
       "Admite herança múltipla se as superclasses forem abstratas",
       "Um método abstrato não pode ser herdado"
      ],
      "c": 1,
      "exp": "Ser abstrata só impede a instanciação; as regras de herança continuam as mesmas."
     },
     {
      "q": "Dado: final Escola ref = new Escola(); ref.atualizarAtributoNome(\"X\"); ref = new Escola(); É correto afirmar:",
      "op": [
       "A chamada de atualizarAtributoNome gera erro",
       "A última linha gera erro de compilação, pois ref é final",
       "A primeira linha gera erro",
       "O código compila normalmente"
      ],
      "c": 1,
      "exp": "ref é final: não pode apontar para outra instância, mas o objeto pode ser alterado."
     },
     {
      "q": "Julgue: I. O downcasting muda o tipo do objeto instanciado. II. Up e downcasting podem ser feitos para tipos fora da hierarquia. III. O upcasting não permite invocar métodos private da superclasse por essa referência.",
      "op": [
       "Apenas I",
       "Apenas II",
       "Apenas III",
       "II e III"
      ],
      "c": 2,
      "exp": "Casting só muda a interpretação da referência, dentro da hierarquia, e não altera restrições de acesso."
     },
     {
      "q": "Sobre o modificador final, é correto afirmar:",
      "op": [
       "Declarar um método final obriga a classe a ser final",
       "Uma classe final pode ter subclasses",
       "Métodos static e private são implicitamente final",
       "Variável final não precisa ser inicializada"
      ],
      "c": 2,
      "exp": "Eles não poderiam ser redefinidos de qualquer forma."
     },
     {
      "q": "Para obter comportamento polimórfico ao percorrer um vetor com objetos Derivada1 e Derivada2, o vetor deve ser declarado como:",
      "op": [
       "Derivada1[]",
       "Derivada2[]",
       "Base[] (superclasse)",
       "Object[] com switch-case"
      ],
      "c": 2,
      "exp": "O polimorfismo ocorre por meio de referências do tipo da superclasse."
     },
     {
      "q": "Sobre interfaces em Java, é correto afirmar:",
      "op": [
       "Admitem herança múltipla",
       "Legam atributos protegidos às subinterfaces",
       "Só podem ter atributos privados",
       "Estendem classes concretas"
      ],
      "c": 0,
      "exp": "É uma das formas de Java contornar a ausência de herança múltipla de classes."
     },
     {
      "q": "Sobre interfaces, assinale a correta:",
      "op": [
       "São equivalentes às classes abstratas",
       "Declaram funcionalidades que devem ser implementadas pelas classes que as implementam",
       "Permitem funcionalidades que podem ou não ser sobrescritas por quem implementa",
       "Podem estender classes abstratas"
      ],
      "c": 1,
      "exp": "A classe que implementa deve definir todos os métodos abstratos declarados."
     },
     {
      "q": "Uma interface iTeste declara: void metodo() { } — o compilador acusa erro. A correção é:",
      "op": [
       "Colocar final no método",
       "Retirar o corpo { } e terminar a assinatura com ponto e vírgula",
       "Trocar implements por extends na classe",
       "Tirar abstract da interface"
      ],
      "c": 1,
      "exp": "Método abstrato de interface não admite corpo, nem vazio."
     },
     {
      "q": "Julgue: I. Uma classe só implementa interface aninhada se implementar a externa. II. Interface que estende uma aninhada também estende a externa. III. Interface que estende uma aninhada precisa usar a referência completa, mesmo no mesmo pacote.",
      "op": [
       "Apenas I",
       "Apenas III",
       "I e II",
       "II e III"
      ],
      "c": 1,
      "exp": "A aninhada é membro da externa (sem herança), acessível só pela referência completa."
     },
     {
      "q": "Uma interface é funcional quando:",
      "op": [
       "É declarada com expressões lambda",
       "Possui exatamente um método abstrato, contando os herdados",
       "É uma classe abstrata especial",
       "Possui apenas métodos default"
      ],
      "c": 1,
      "exp": "Critério SAM. @FunctionalInterface pede ao compilador que o verifique."
     }
    ]
   },
   {
    "id": "exc",
    "cor": "var(--t4)",
    "titulo": "Tratamento de exceções em Java",
    "curto": "Exceções",
    "desc": "Hierarquia Throwable, exceções implícitas × explícitas, try/catch/finally, throw, throws, exceções próprias, encadeamento e relançamento.",
    "resumo": [
     {
      "h": "Conceito e hierarquia",
      "itens": [
       "<mark>Exceção</mark> = “evento excepcional”: condição causada por <b>erro em tempo de execução</b> que interrompe o fluxo normal. Erro de <b>sintaxe</b> é de compilação, <b>não</b> é exceção.",
       "Ao ocorrer, cria-se um <b>exception object</b> entregue ao sistema de execução da JVM (<b>lançamento</b>). A JVM procura na <b>pilha de chamadas (call stack)</b> um <b>exception handler</b> adequado, que <b>captura (catch)</b> a exceção. Sem handler, o programa termina e imprime a pilha.",
       "Vantagem: propagar o erro pela pilha até quem se interessa, sem passar código de erro método a método.",
       "Todas as exceções descendem de <mark>Throwable</mark> (que descende de Object). Dois ramos: <b>Error</b> (não precisam ser capturadas normalmente — ex.: <code>StackOverflowError</code>, <code>OutOfMemoryError</code>) e <b>Exception</b> (devem ser capturadas; o programador estende para criar as suas).",
       "<b>RuntimeException</b> (subclasse de Exception): divisão por zero (<code>ArithmeticException</code>), índice inválido (<code>IndexOutOfBoundsException</code>), <code>NullPointerException</code>."
      ]
     },
     {
      "h": "Implícitas × explícitas",
      "itens": [
       "<mark>Implícitas</mark>: definidas em <b>Error e RuntimeException</b> e derivadas; lançadas pelo próprio Java Runtime; podem ocorrer em qualquer ponto; <b>tratamento não obrigatório</b> (contornáveis). Não precisam ser listadas em <code>throws</code>. Ex.: <code>UnknownError</code> (subclasse de Error) é implícita.",
       "<mark>Explícitas</mark>: todas as outras (ex.: <code>IllegalAccessException</code>, <code>IOException</code>). São <b>incontornáveis</b>: devem ser capturadas com try-catch ou declaradas com <code>throws</code>; senão, <b>erro de compilação</b>.",
       "<i>Atenção: o material diz em um exercício que IOException é subtipo de Error. Na verdade, <code>IOException</code> estende <code>Exception</code> e é uma exceção explícita (verificada).</i>",
       "Mesmo lançando manualmente uma implícita com <code>throw</code>, os chamadores não são obrigados a tratá-la."
      ]
     },
     {
      "h": "try, catch, finally, throw e throws",
      "itens": [
       "<code>try</code>: bloco monitorado. <code>catch</code>: captura e trata; podem ser encadeados vários <code>catch</code>. Captura por tipo: <code>catch (Exception e)</code> pega Exception e subclasses.",
       "<mark>finally</mark>: executado <b>sempre</b> — com ou sem exceção, tratada ou não, e mesmo com <code>return</code>, <code>break</code> ou <code>continue</code>. Única exceção: <code>System.exit</code>. Ideal para <b>liberar recursos</b> (fechar conexões, evitar vazamento).",
       "Um <code>try</code> exige pelo menos um <code>catch</code> <b>ou</b> um <code>finally</code>; pode ter vários catch, mas <b>um único finally</b>.",
       "<mark>throw</mark>: lança uma exceção explicitamente, seguido de um objeto Throwable (<code>throw new ArithmeticException(\"msg\");</code>). Não se lança primitivo nem Object. A execução desvia para o try mais próximo com catch compatível; senão, para o mais externo, até o tratador padrão.",
       "<code>getMessage()</code> (de Throwable) retorna a mensagem passada ao construtor; <code>printStackTrace()</code> imprime a pilha.",
       "<mark>throws</mark>: na assinatura do método, após os parâmetros, lista as exceções <b>explícitas não tratadas</b>, avisando os chamadores (que deverão tratar ou propagar). Error e RuntimeException não precisam ser listadas."
      ]
     },
     {
      "h": "Exceções próprias, encadeamento e relançamento",
      "itens": [
       "Criar exceção própria: <b>estender</b> uma classe de exceção existente (herda o mecanismo). Escolher a de nível mais baixo que ainda generalize a nova. Boa prática para bibliotecas e componentes. Considerar sobrescrever <code>toString()</code>.",
       "Construtores típicos: sem argumentos (mensagem padrão), com String, com String + Throwable (encadeamento) e com Throwable.",
       "Todo objeto Throwable guarda um <b>instantâneo da pilha</b> da thread no momento da criação — mesmo com construtor vazio.",
       "<mark>Encadeamento</mark>: uma exceção causada por outra guarda a causa (Throwable). A causa pode ser definida no construtor ou por <code>initCause</code>, <b>uma única vez</b>; <code>getCause()</code> recupera.",
       "<mark>Relançamento</mark>: dentro do <code>catch</code>, usar <code>throw</code> com a <b>referência da exceção capturada</b> (<code>throw e;</code>) para repassá-la ao chamador."
      ]
     }
    ],
    "pegadinhas": [
     "Erro de sintaxe <b>não</b> é exceção (é de compilação).",
     "Implícitas = Error + RuntimeException. Não tratá-las <b>não</b> gera erro de compilação.",
     "Explícitas não tratadas nem declaradas com throws <b>geram</b> erro de compilação.",
     "<code>throw</code> lança; <code>throws</code> declara na assinatura. Relançar é com <code>throw</code>, dentro do catch.",
     "<code>finally</code> roda mesmo com return; só não roda com System.exit.",
     "try sem catch é válido se tiver finally.",
     "Nem todas as exceções herdam <b>diretamente</b> de Throwable; herdam direta ou indiretamente."
    ],
    "flash": [
     [
      "Exceção",
      "Erro em tempo de execução que interrompe o fluxo normal."
     ],
     [
      "Raiz das exceções",
      "Throwable → Error e Exception."
     ],
     [
      "Implícitas",
      "Error, RuntimeException e derivadas; tratamento opcional."
     ],
     [
      "Explícitas",
      "Demais exceções; obrigam try-catch ou throws."
     ],
     [
      "finally",
      "Sempre executa (exceto System.exit); libera recursos."
     ],
     [
      "throw × throws",
      "Lança um objeto exceção × declara exceções na assinatura."
     ],
     [
      "Relançamento",
      "throw e; dentro do catch."
     ],
     [
      "Encadeamento",
      "Exceção guarda a causa (Throwable); getCause()."
     ],
     [
      "Exceção própria",
      "Estender uma classe de exceção existente."
     ],
     [
      "Exemplos de RuntimeException",
      "ArithmeticException, NullPointerException, IndexOutOfBoundsException."
     ],
     [
      "Exemplos de Error",
      "StackOverflowError, OutOfMemoryError."
     ],
     [
      "getMessage()",
      "Retorna a mensagem da exceção."
     ]
    ],
    "quiz": [
     {
      "q": "Julgue: I. Erro de sintaxe causa exceção. II. Um desvio no fluxo principal é uma exceção. III. O tratamento de exceção é suportado pela JVM.",
      "op": [
       "Apenas I",
       "Apenas II",
       "Apenas III",
       "I e II"
      ],
      "c": 2,
      "exp": "Exceção é erro de execução, não de compilação; desvio previsto não é exceção; o mecanismo é suportado pela JVM."
     },
     {
      "q": "Sobre exceções, assinale a correta:",
      "op": [
       "Exceções implícitas não podem ser propagadas",
       "Exceções da classe UnknownError são implícitas",
       "Exceção implícita não capturada gera erro de compilação",
       "Toda exceção lançada com throw é explícita"
      ],
      "c": 1,
      "exp": "UnknownError é subclasse de Error; implícitas = Error + RuntimeException."
     },
     {
      "q": "Para garantir o fechamento de uma conexão mesmo se ocorrer exceção, usa-se:",
      "op": [
       "try",
       "catch",
       "throw",
       "throws",
       "finally"
      ],
      "c": 4,
      "exp": "finally é executado independentemente do desvio causado pela exceção."
     },
     {
      "q": "Sobre o relançamento de exceções, é correto afirmar:",
      "op": [
       "É feito com throws",
       "Blocos try aninhados dispensam relançamento",
       "É feito dentro do bloco try",
       "Usa-se throw com a referência da exceção capturada, dentro do catch"
      ],
      "c": 3,
      "exp": "throw e; dentro do catch repassa a exceção ao chamador."
     },
     {
      "q": "Um método lança IllegalAccessException (explícita) e não a trata. O que é obrigatório?",
      "op": [
       "Nada",
       "Declarar throws IllegalAccessException na assinatura",
       "Usar finally",
       "Estender RuntimeException"
      ],
      "c": 1,
      "exp": "Explícitas não tratadas devem ser listadas em throws, ou há erro de compilação."
     },
     {
      "q": "Qual afirmação sobre o bloco finally está correta?",
      "op": [
       "Não é executado se houver return no try",
       "Um try pode ter vários finally",
       "Um try pode ter finally sem catch",
       "Só executa quando há exceção"
      ],
      "c": 2,
      "exp": "try exige ao menos um catch ou um finally; finally é único e sempre executa."
     },
     {
      "q": "Sobre a criação de novas exceções, é correto afirmar:",
      "op": [
       "Todas as exceções herdam diretamente de Throwable",
       "Deve-se sempre estender diretamente Throwable",
       "Mesmo exceções com construtor vazio guardam o contexto (pilha) de execução",
       "Só exceções nativas podem ser encadeadas"
      ],
      "c": 2,
      "exp": "Todo Throwable guarda um instantâneo da pilha no momento da criação."
     },
     {
      "q": "ArithmeticException (divisão por zero) é:",
      "op": [
       "Explícita, subclasse de IOException",
       "Implícita, subclasse de RuntimeException",
       "Um Error",
       "Um erro de compilação"
      ],
      "c": 1,
      "exp": "É lançada automaticamente pelo Java Runtime e não exige tratamento obrigatório."
     },
     {
      "q": "Quando uma exceção é lançada e não há catch compatível em nenhum nível da pilha:",
      "op": [
       "O programa ignora e continua",
       "O tratador padrão encerra o programa e imprime a pilha de execução",
       "A JVM reinicia o método",
       "O compilador corrige automaticamente"
      ],
      "c": 1,
      "exp": "A busca sobe pela pilha até o tratador padrão."
     },
     {
      "q": "Qual é o papel da cláusula throws?",
      "op": [
       "Lançar uma exceção",
       "Capturar uma exceção",
       "Informar aos chamadores as exceções explícitas que o método pode lançar sem tratar",
       "Liberar recursos"
      ],
      "c": 2,
      "exp": "throws fica na assinatura, após a lista de parâmetros."
     }
    ]
   },
   {
    "id": "thr",
    "cor": "var(--t5)",
    "titulo": "Programação paralela em Java: threads",
    "curto": "Threads",
    "desc": "Processos × threads, preempção, prioridades, daemon, ciclo de vida, criação, semáforos, monitores (synchronized), objetos imutáveis.",
    "resumo": [
     {
      "h": "Conceitos",
      "itens": [
       "<mark>Thread</mark> (processo leve): linha de execução dentro de um processo. Threads <b>compartilham o mesmo espaço de memória</b> do processo; <b>processos</b> têm memória e recursos próprios, isolados.",
       "Threads são mais leves: criação, finalização e troca de contexto mais rápidas; comunicação facilitada pela memória compartilhada.",
       "Paralelismo depende de: SO <mark>multitarefa preemptiva</mark> (pode interromper uma tarefa para executar outra), linguagem multithread e processadores multinúcleo (inclusive hyperthreading).",
       "<b>Escalonador</b>: gerencia o tempo de CPU; ao fim do tempo, salva o contexto (registradores, contador de programa) e carrega outro processo.",
       "Nas primeiras JVMs, threads dependiam da plataforma e prejudicavam a portabilidade."
      ]
     },
     {
      "h": "Prioridade, tipos e ciclo de vida",
      "itens": [
       "Toda thread tem <b>prioridade</b>; maior prioridade = <b>preferência, não controle</b>. O comportamento <b>não é determinístico</b>; o escalonador preempta até a de maior prioridade. Sem isso, threads de baixa prioridade poderiam ser adiadas indefinidamente.",
       "<mark>Daemon</mark>: baixa prioridade, segundo plano, serve às threads de usuário; a JVM a encerra quando todas as threads de usuário terminam (ex.: <b>Garbage Collector</b>). <mark>User threads</mark>: primeiro plano; a JVM espera que terminem.",
       "A aplicação começa com a <b>thread principal (main)</b>. Thread filha herda a prioridade da criadora e só nasce daemon se a criadora for daemon (<code>setDaemon()</code> altera depois). Toda thread tem nome.",
       "<mark>Seis estados</mark> (enum <code>Thread.State</code>, via <code>getState()</code>): <b>NEW</b> (criada, não agendada), <b>RUNNABLE</b> (pronta/agendada ou em execução), <b>BLOCKED</b> (aguardando uma trava/lock), <b>WAITING</b> (<code>wait()</code>/<code>join()</code> sem timeout ou <code>park()</code>), <b>TIMED_WAITING</b> (<code>sleep()</code> ou wait/join com timeout), <b>TERMINATED</b> (encerrada).",
       "Criação: (1) <b>estender a classe Thread</b>; (2) <mark>implementar a interface Runnable</mark> (método <code>run()</code>). Runnable costuma ser melhor, pois Java não tem herança múltipla; estender Thread faz sentido quando se quer modificar a própria classe Thread. Inicia-se com <code>start()</code>."
      ]
     },
     {
      "h": "Sincronização",
      "itens": [
       "Problema: várias threads escrevendo na mesma variável → <mark>condição de corrida</mark>. O incremento <code>contador++</code> não é atômico: lê, incrementa e grava.",
       "Técnicas: travas, atomização, <b>semáforos</b>, <b>monitores</b>. Outros riscos: <b>deadlock</b> (bloqueio mútuo) e inconsistência de dados.",
       "<mark>Semáforo</mark> (classe <code>Semaphore</code>, desde o Java 5): <b>contador de permissões</b> que controla quantos acessos simultâneos um recurso aceita. <code>acquire()</code> pede permissão (bloqueia até haver uma); <code>release()</code> devolve. Parâmetro <b>fair</b> define fila FIFO. Com 1 permissão funciona como exclusão mútua (mutex); com 0 permissões serve para <b>sinalização</b> entre threads.",
       "<mark>Monitor</mark>: permite <b>exclusão mútua</b> (via mutex/lock) e <b>cooperação</b> entre threads. Em Java, implementado por <code>synchronized</code> em método ou bloco. Cada objeto tem um monitor; métodos <code>static synchronized</code> travam o objeto <code>Class</code>. Código protegido é <b>thread-safe</b>.",
       "Cooperação (wait-set de cada objeto): <code>wait()</code> libera a trava e suspende; <code>notify()</code> acorda uma thread; <code>notifyAll()</code> acorda todas, mas só uma obtém a trava."
      ]
     },
     {
      "h": "Objetos imutáveis",
      "itens": [
       "<mark>Imutável</mark>: estado não muda após a criação → <b>thread-safe</b>, dispensa sincronização. Ex.: <code>String</code>.",
       "Receita: sem setters; campos <code>private</code> e <code>final</code>; classe <code>final</code> ou construtor privado."
      ]
     }
    ],
    "pegadinhas": [
     "Threads compartilham memória; processos não.",
     "RUNNABLE inclui “pronta para executar”; NEW é criada mas não iniciada.",
     "<code>sleep()</code> leva a TIMED_WAITING; <code>wait()</code>/<code>join()</code> sem tempo levam a WAITING; esperar trava é BLOCKED.",
     "Prioridade alta <b>não garante</b> ordem de execução.",
     "Daemon é encerrada pela JVM quando acabam as threads de usuário; o GC é daemon.",
     "Semáforo = contador de permissões; monitor = synchronized (uma thread por vez na região crítica).",
     "Objeto imutável é recomendado porque seu estado não muda, não por gastar menos memória."
    ],
    "flash": [
     [
      "Thread × processo",
      "Thread: unidade dentro do processo, memória compartilhada. Processo: memória própria."
     ],
     [
      "Multitarefa preemptiva",
      "SO interrompe uma tarefa para executar outra."
     ],
     [
      "Daemon thread",
      "Segundo plano, serve às user threads; ex.: garbage collector."
     ],
     [
      "6 estados",
      "NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED."
     ],
     [
      "Duas formas de criar thread",
      "Estender Thread ou implementar Runnable."
     ],
     [
      "Condição de corrida",
      "Threads acessando e alterando o mesmo dado ao mesmo tempo."
     ],
     [
      "Semaphore",
      "Contador de permissões: acquire() e release()."
     ],
     [
      "Monitor em Java",
      "synchronized: exclusão mútua + cooperação."
     ],
     [
      "wait / notify / notifyAll",
      "Libera trava e espera / acorda uma / acorda todas."
     ],
     [
      "Deadlock",
      "Bloqueio mútuo entre threads."
     ],
     [
      "Objeto imutável",
      "Estado fixo após criação; thread-safe (ex.: String)."
     ]
    ],
    "quiz": [
     {
      "q": "Qual afirmação melhor descreve threads em Java?",
      "op": [
       "Partes independentes que compartilham só o código-fonte",
       "Processos separados com memória própria",
       "Unidades de execução dentro de um processo que compartilham o mesmo espaço de memória",
       "Interfaces gráficas"
      ],
      "c": 2,
      "exp": "Essa é a diferença essencial entre thread e processo."
     },
     {
      "q": "Qual estado indica que a thread está pronta para ser executada pelo escalonador?",
      "op": [
       "New",
       "Runnable",
       "Blocked",
       "Waiting",
       "Terminated"
      ],
      "c": 1,
      "exp": "New: criada, não iniciada. Blocked: aguarda trava. Waiting: wait/join. Terminated: encerrada."
     },
     {
      "q": "Uma thread que chamou sleep(1000) está no estado:",
      "op": [
       "BLOCKED",
       "WAITING",
       "TIMED_WAITING",
       "NEW"
      ],
      "c": 2,
      "exp": "Suspensão por período determinado leva a TIMED_WAITING."
     },
     {
      "q": "Sobre prioridade de threads, é correto afirmar:",
      "op": [
       "A thread de maior prioridade sempre executa até o fim",
       "Maior prioridade dá preferência, mas não garante comportamento determinístico",
       "Prioridade só vale para daemon",
       "Java não permite prioridade"
      ],
      "c": 1,
      "exp": "O escalonador preempta até a de maior prioridade para permitir paralelismo."
     },
     {
      "q": "Por que implementar Runnable costuma ser preferível a estender Thread?",
      "op": [
       "Runnable é mais rápido",
       "Porque Java não tem herança múltipla, e estender Thread ocupa a única superclasse",
       "Porque Thread é final",
       "Porque só Runnable tem o método run"
      ],
      "c": 1,
      "exp": "Estender Thread só faz sentido quando se quer alterar o comportamento da própria classe Thread."
     },
     {
      "q": "Como semáforos e monitores facilitam a comunicação entre threads?",
      "op": [
       "Semáforos controlam acessos por contagem de permissões; monitores garantem que uma thread por vez execute a região crítica",
       "São irrelevantes em Java",
       "Semáforos travam a CPU",
       "Monitores criam novas threads"
      ],
      "c": 0,
      "exp": "Semaphore usa acquire/release; monitores usam synchronized."
     },
     {
      "q": "Em Java, o conceito de monitor é implementado pela palavra reservada:",
      "op": [
       "volatile",
       "synchronized",
       "final",
       "static"
      ],
      "c": 1,
      "exp": "synchronized marca métodos ou blocos como regiões críticas."
     },
     {
      "q": "Por que objetos imutáveis são recomendados em programação multithread?",
      "op": [
       "Consomem menos memória",
       "Podem ser modificados por várias threads sem problema",
       "Seu estado não muda após a criação, simplificando a sincronização",
       "Não precisam ser inicializados"
      ],
      "c": 2,
      "exp": "Objetos imutáveis são thread-safe."
     },
     {
      "q": "Sobre daemon threads, é correto afirmar:",
      "op": [
       "São de alta prioridade e a JVM espera seu término",
       "São de segundo plano e a JVM as encerra quando todas as threads de usuário terminam",
       "Não podem ser criadas pelo programador",
       "A thread main é daemon"
      ],
      "c": 1,
      "exp": "O garbage collector é um exemplo de daemon thread."
     },
     {
      "q": "O método notifyAll():",
      "op": [
       "Acorda todas as threads do wait-set, mas só uma obtém a trava",
       "Encerra todas as threads",
       "Libera a trava sem acordar ninguém",
       "Acorda apenas a thread main"
      ],
      "c": 0,
      "exp": "notify acorda uma; notifyAll acorda todas, e a exclusão mútua continua valendo."
     }
    ]
   },
   {
    "id": "bd",
    "cor": "var(--t6)",
    "titulo": "Integração com banco de dados em Java",
    "curto": "Banco de dados",
    "desc": "Middleware JDBC, drivers, Derby, Statement × PreparedStatement, ResultSet, mapeamento objeto-relacional, DAO, JPA e transações.",
    "resumo": [
     {
      "h": "Middleware JDBC e Derby",
      "itens": [
       "<mark>Middleware</mark>: integra front-end e back-end de forma transparente, permitindo trocar o fornecedor do banco com pouca ou nenhuma alteração de código. Em Java: <mark>JDBC (Java Database Connectivity)</mark>, pacote <code>java.sql</code>.",
       "Use SQL <b>ANSI</b> padronizado para não prender o sistema a um fornecedor.",
       "<b>Derby (Java DB)</b>: banco relacional feito em Java, subprojeto Apache DB, embutível, parte da distribuição do JDK; gerenciado pela aba <b>Services</b> do NetBeans. Porta padrão <b>1527</b>. O servidor precisa ser iniciado antes do uso.",
       "Connection String Derby: <code>jdbc:derby://localhost:1527/escola</code>. Oracle: <code>jdbc:oracle:thin:@localhost:1521:XE</code>.",
       "Classes principais: <code>DriverManager</code>, <code>Connection</code>, <code>Statement</code>, <code>PreparedStatement</code>, <code>ResultSet</code>."
      ]
     },
     {
      "h": "Tipos de driver",
      "itens": [
       "<b>Tipo 1 — JDBC-ODBC Bridge</b>: conexão por meio do ODBC.",
       "<b>Tipo 2 — JDBC-Native API</b>: usa o <b>cliente do banco</b> instalado.",
       "<b>Tipo 3 — JDBC-Net</b>: acessa servidores de <b>middleware via sockets</b>, arquitetura de <b>três camadas</b>.",
       "<b>Tipo 4 — Pure Java</b>: implementação toda em Java, <b>sem cliente instalado</b> (ex.: Oracle Thin Driver). <i>O material chega a chamar o JDBC-Net de “thin driver”; nas associações de prova, siga: ODBC → 1, cliente do banco → 2, middleware/sockets → 3, sem cliente → 4.</i>"
      ]
     },
     {
      "h": "Usando o JDBC",
      "itens": [
       "Passos: (1) carregar o driver (<code>Class.forName(...)</code>); (2) obter a <b>conexão</b> com <code>DriverManager.getConnection(url, usuario, senha)</code>; (3) criar o executor (<code>createStatement()</code>); (4) executar o SQL; (5) <b>fechar na ordem inversa</b> da criação.",
       "<mark>executeQuery</mark> → <b>SELECT</b> (retorna <code>ResultSet</code>). <mark>executeUpdate</mark> → <b>INSERT, UPDATE, DELETE</b>.",
       "O <code>ResultSet</code> começa <b>antes do primeiro registro (BOF)</b>; percorre-se com <code>while (rs.next())</code> e lê-se com <code>getString(\"CAMPO\")</code>, <code>getInt</code> etc.",
       "<mark>PreparedStatement</mark>: SQL <b>parametrizado</b> com <code>?</code>, preenchido com <code>setString</code>, <code>setInt</code>... Facilita datas e apóstrofos e <b>protege contra SQL Injection</b>.",
       "A biblioteca do driver (Java DB Driver) precisa ser adicionada ao projeto, senão dá erro em execução."
      ]
     },
     {
      "h": "Mapeamento objeto-relacional e DAO",
      "itens": [
       "<mark>Mapeamento objeto-relacional (ORM)</mark>: converter tabelas e registros em classes de entidade e coleções de objetos (uma entidade por tabela, exceto tabelas de relacionamento).",
       "<mark>DAO (Data Access Object)</mark>: padrão que <b>concentra os comandos SQL</b> numa classe (em geral, uma DAO por entidade), melhorando reuso e manutenção.",
       "Métodos mínimos: <code>obterTodos</code> → <b>SELECT</b>, <code>incluir</code> → <b>INSERT</b>, <code>excluir</code> → <b>DELETE</b>, <code>alterar</code> → <b>UPDATE</b>.",
       "<code>GenericDAO&lt;E, K&gt;</code> abstrata (E = entidade, K = chave primária) com utilitários <code>getConnection</code>, <code>getStatement</code>, <code>closeStatement</code>.",
       "Regra de ORM: a <b>chave primária não pode ser alterada</b>."
      ]
     },
     {
      "h": "JPA e transações",
      "itens": [
       "Frameworks de persistência: Hibernate, Entity Framework, Pony, Speedo… Em Java, a arquitetura <mark>JPA</mark> (o material chama de Java Persistence Architecture; o nome oficial é <b>Java Persistence API</b>).",
       "Anotações: <code>@Entity</code>, <code>@Id</code> (chave primária), <code>@Basic(optional=...)</code> (obrigatoriedade), <code>@NamedQuery</code>. <b>JPQL</b>: linguagem de consulta que retorna <b>objetos</b>, não registros.",
       "Configuração no arquivo XML <mark>persistence.xml</mark>: unidade de persistência, url, user, driver, password, entidades e <b>provedor</b> (EclipseLink, Hibernate, Oracle TopLink).",
       "<code>Persistence</code> liga às unidades de persistência → <code>EntityManagerFactory</code> gera → <mark>EntityManager</mark>, que opera as entidades: <code>persist</code> (incluir), <code>merge</code>, <code>remove</code>, <code>find</code>, <code>createQuery</code>/<code>createNamedQuery</code>.",
       "<mark>Transações no JDBC</mark>: controladas pela <b>Connection</b> — desligar o autocommit (<code>setAutoCommit(false)</code>), confirmar com <code>commit()</code> e desfazer com <code>rollback()</code>. No JPA, via <code>EntityTransaction</code> (<code>begin</code>, <code>commit</code>, <code>rollback</code>).",
       "NetBeans: <b>Entity Classes from Database</b> gera as entidades JPA a partir de uma conexão JDBC existente."
      ]
     }
    ],
    "pegadinhas": [
     "O middleware de banco em Java é o <b>JDBC</b>, não o JEE.",
     "SELECT → executeQuery; INSERT/UPDATE/DELETE → executeUpdate.",
     "ResultSet começa <b>antes</b> do primeiro registro: chame next() primeiro.",
     "Na DAO, obterTodos é SELECT, não INSERT.",
     "Quem controla transação no JDBC é a <b>Connection</b> (não existe classe Transaction no JDBC padrão).",
     "EntityManager executa operações; EntityManagerFactory apenas cria EntityManagers.",
     "Fechar componentes JDBC na ordem <b>inversa</b> da criação.",
     "Para gerar entidades no NetBeans basta a conexão JDBC, não JSON."
    ],
    "flash": [
     [
      "JDBC",
      "Middleware Java para acesso a bancos via SQL (java.sql)."
     ],
     [
      "Derby / Java DB",
      "Banco relacional em Java, parte do JDK, porta 1527."
     ],
     [
      "4 tipos de driver",
      "ODBC Bridge, Native API, JDBC-Net (middleware), Pure Java."
     ],
     [
      "executeQuery × executeUpdate",
      "SELECT (ResultSet) × INSERT/UPDATE/DELETE."
     ],
     [
      "PreparedStatement",
      "SQL com ? parametrizado; evita SQL Injection."
     ],
     [
      "ResultSet",
      "Cursor que começa antes do 1º registro; percorrido com next()."
     ],
     [
      "Mapeamento objeto-relacional",
      "Tabelas e registros convertidos em entidades e coleções."
     ],
     [
      "DAO",
      "Concentra o SQL: obterTodos, incluir, excluir, alterar."
     ],
     [
      "persistence.xml",
      "Configura unidade de persistência, conexão e provedor JPA."
     ],
     [
      "EntityManager",
      "Opera entidades (persist, createQuery...)."
     ],
     [
      "Transação no JDBC",
      "Connection: autocommit off, commit(), rollback()."
     ],
     [
      "JPQL",
      "Consulta do JPA que retorna objetos."
     ]
    ],
    "quiz": [
     {
      "q": "No ambiente Java, o middleware que promove a comunicação entre front-end e back-end com diferentes bancos é:",
      "op": [
       "JEE",
       "JDBC",
       "JVM",
       "Derby"
      ],
      "c": 1,
      "exp": "O JDBC permite trocar de fornecedor com pouca ou nenhuma alteração de código."
     },
     {
      "q": "Associe: 1 JDBC-ODBC Bridge, 2 JDBC-Native API, 3 JDBC-Net, 4 Pure Java a: (a) usa o cliente do banco; (b) conecta via ODBC; (c) toda em Java, sem cliente; (d) middleware via sockets.",
      "op": [
       "a1, b2, c3, d4",
       "a2, b1, c4, d3",
       "a3, b1, c2, d4",
       "a4, b3, c1, d2"
      ],
      "c": 1,
      "exp": "Cliente do banco → Native API; ODBC → Bridge; sem cliente → Pure Java; sockets/3 camadas → JDBC-Net."
     },
     {
      "q": "Qual método executa um SELECT e retorna um ResultSet?",
      "op": [
       "executeUpdate",
       "executeQuery",
       "prepareStatement",
       "getConnection"
      ],
      "c": 1,
      "exp": "executeUpdate é para INSERT, UPDATE e DELETE."
     },
     {
      "q": "Uma vantagem do PreparedStatement é:",
      "op": [
       "Dispensar a conexão",
       "Proteger contra SQL Injection e facilitar parâmetros como datas",
       "Executar apenas SELECT",
       "Gerar entidades JPA"
      ],
      "c": 1,
      "exp": "Os ? são preenchidos pelo JDBC, que cuida da conversão e dos delimitadores."
     },
     {
      "q": "No código que faz st.executeQuery(\"SELECT * FROM ALUNO\") e, num while(r1.next()), chama lista.add(new Aluno(...)), a execução da consulta e a montagem da lista são feitas por:",
      "op": [
       "getConnection e executeQuery",
       "createStatement e executeQuery",
       "executeQuery e add",
       "executeQuery e close"
      ],
      "c": 2,
      "exp": "executeQuery roda o SQL e add insere cada entidade na coleção."
     },
     {
      "q": "Na DAO, os métodos obterTodos, incluir, excluir e alterar correspondem a:",
      "op": [
       "INSERT, SELECT, UPDATE, DELETE",
       "SELECT, INSERT, DELETE, UPDATE",
       "SELECT, UPDATE, DELETE, INSERT",
       "UPDATE, INSERT, DELETE, SELECT"
      ],
      "c": 1,
      "exp": "Assim o SQL fica concentrado na classe DAO."
     },
     {
      "q": "No JPA, qual componente gerencia as operações sobre entidades (persist, createQuery)?",
      "op": [
       "EntityManager",
       "EntityManagerFactory",
       "Persistence",
       "ResultSet"
      ],
      "c": 0,
      "exp": "A Factory gera EntityManagers; Persistence liga às unidades de persistência."
     },
     {
      "q": "No JDBC padrão, qual classe é responsável pela transação?",
      "op": [
       "Transaction",
       "Connection",
       "EntityManager",
       "ResultSet",
       "Statement"
      ],
      "c": 1,
      "exp": "Desliga-se o autocommit e usa-se commit() ou rollback() da Connection."
     },
     {
      "q": "Onde fica a configuração da conexão e do provedor de persistência no JPA?",
      "op": [
       "No arquivo persistence.xml",
       "Na classe DriverManager",
       "No ResultSet",
       "Em anotações @Id"
      ],
      "c": 0,
      "exp": "Nele ficam a unidade de persistência, url, user, driver, password, entidades e provedor."
     },
     {
      "q": "Sobre o Derby (Java DB), é correto afirmar:",
      "op": [
       "Depende de servidor Oracle",
       "É um banco relacional feito em Java, distribuído com o JDK, com porta padrão 1527",
       "É um framework ORM",
       "Só funciona com JPA"
      ],
      "c": 1,
      "exp": "É um subprojeto do Apache DB, gerenciável pela aba Services do NetBeans."
     }
    ]
   }
  ]
 },
 {
  "id": "matlog",
  "nome": "Matemática e Lógica",
  "temas": [
   {
    "id": "conj",
    "cor": "var(--t1)",
    "titulo": "Teoria dos conjuntos e princípios de contagem",
    "curto": "Conjuntos e contagem",
    "desc": "Conjuntos numéricos, operações, intervalos, casa dos pombos, princípios aditivo e multiplicativo, arranjos, permutações e combinações.",
    "resumo": [
     {
      "h": "Conjuntos",
      "itens": [
       "Conjuntos numéricos: <b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b>. <mark>Racional</mark> = pode ser escrito como a/b com a, b inteiros e b ≠ 0 (inclui inteiros, decimais finitos e dízimas periódicas, como 0,111…). <b>Irracionais</b> (√2, π) não são quociente de inteiros.",
       "Operações: <b>união</b> A ∪ B (está em A <i>ou</i> em B); <b>interseção</b> A ∩ B (em A <i>e</i> em B); <b>diferença</b> A − B (em A e não em B); <b>complementar</b> (o que falta para chegar ao universo).",
       "Leis de De Morgan para conjuntos: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ e (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ. Distributivas: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
       "Contagem na união: <mark>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</mark>.",
       "Intervalos: [a; b] fechado (inclui extremos), ]a; b[ aberto (exclui). Somar todos os elementos de ]−2; 5] com todos de [1; 7[ dá <b>]−1; 12[</b> (extremos somados; fica aberto onde algum dos lados é aberto).",
       "Um conjunto com n elementos tem <mark>2ⁿ subconjuntos</mark> (cada elemento entra ou não entra). Ex.: 8 elementos → 256."
      ]
     },
     {
      "h": "Princípios de contagem",
      "itens": [
       "<mark>Princípio da casa dos pombos</mark>: se n + 1 pombos ocupam n casas, alguma casa tem pelo menos 2 pombos. Pense no <b>pior caso</b>. Ex.: 20 bolas azuis e 30 verdes — para garantir 2 azuis, retire 30 + 2 = <b>32</b>.",
       "<mark>Princípio aditivo</mark>: se os casos são <b>disjuntos</b> (um OU outro), <b>soma</b>. Ex.: senhas de 4, 5 ou 6 dígitos distintos = 5.040 + 30.240 + 151.200 = 186.480.",
       "<mark>Princípio multiplicativo</mark>: etapas sucessivas e independentes (uma E outra) → <b>multiplica</b>. Comece pela etapa com restrição. Ex.: números pares de 4 algarismos distintos com 1–8: unidade 4 opções, depois 7 · 6 · 5 → 4 · 7 · 6 · 5 = 840."
      ]
     },
     {
      "h": "Agrupamentos combinatórios",
      "itens": [
       "Pergunta-chave: <mark>a ordem importa?</mark> Sim → arranjo/permutação. Não → combinação.",
       "<b>Permutação simples</b> (ordenar todos os n): <b>Pₙ = n!</b>. Anagramas de ALFREDO (7 letras distintas) = 7!.",
       "<b>Arranjo simples</b> (filas com p de n, ordem importa): <mark>Aₙ,ₚ = n!/(n − p)!</mark>. Ex.: placas com 2 letras distintas e 4 algarismos distintos = A₂₆,₂ · A₁₀,₄.",
       "<b>Combinação simples</b> (subconjuntos de p elementos, ordem não importa): <mark>Cₙ,ₚ = n!/[p!(n − p)!]</mark>. Ex.: 3 sabores entre 8 → C₈,₃ = 56. Escolher 3 de 6 empresas e 2 de 5 → C₆,₃ · C₅,₂ = 20 · 10 = 200.",
       "<b>Permutação com repetição</b>: n!/(a! b! …). ARRANJO tem 2 A e 2 R → 7!/(2! 2!) = <b>1.260</b>.",
       "<b>Arranjo com repetição</b>: nᵖ (cada posição pode repetir). Ex.: senhas de 4 caracteres com k símbolos = k⁴.",
       "<b>Combinação com repetição</b> (escolher p itens de n tipos, podendo repetir): <mark>CRₙ,ₚ = Cₙ₊ₚ₋₁,ₚ</mark>. Ex.: 4 pacotes de 10 tipos doces e 3 de 7 salgados → CR₁₀,₄ · CR₇,₃. Dividir 20 moedas idênticas entre 3 herdeiros → CR₃,₂₀ = C₂₂,₂ = 231.",
       "<b>Permutação circular</b>: (n − 1)! = n!/n. Roda com 10 crianças → 9! = 10!/10.",
       "Blocos: 5 livros de probabilidade, 7 de cálculo e 8 de álgebra juntos por assunto → <b>3! · 5! · 7! · 8!</b> (ordena os blocos e, dentro de cada um, os livros).",
       "Restrições em subconjuntos: de {a,…,g}, sem a e b e com f e g → sobram 3 livres → 2³ = 8. Subconjuntos de 3 elementos de {1,3,5,7,9} sem o 5 → C₄,₃ = 4."
      ]
     }
    ],
    "pegadinhas": [
     "Escolher sabores, empresas, comissões: <b>ordem não importa → combinação</b>. Senhas, filas, placas: <b>ordem importa → arranjo</b>.",
     "Casos alternativos (OU) somam; etapas (E) multiplicam.",
     "Casa dos pombos: sempre considere o <b>pior caso</b> antes de garantir.",
     "Letras repetidas nos anagramas: divida pelo fatorial de cada repetição.",
     "Roda/mesa circular: (n − 1)!, não n!.",
     "0,111… é racional (dízima periódica).",
     "Número de subconjuntos é 2ⁿ, não n! nem 2n."
    ],
    "flash": [
     [
      "n(A ∪ B)",
      "n(A) + n(B) − n(A ∩ B)"
     ],
     [
      "Subconjuntos de um conjunto com n elementos",
      "2ⁿ"
     ],
     [
      "Casa dos pombos",
      "n + 1 objetos em n caixas → alguma caixa tem ≥ 2."
     ],
     [
      "Princípio aditivo × multiplicativo",
      "Casos disjuntos (ou) somam × etapas (e) multiplicam."
     ],
     [
      "Permutação simples",
      "n!"
     ],
     [
      "Arranjo simples",
      "Aₙ,ₚ = n!/(n − p)! — ordem importa."
     ],
     [
      "Combinação simples",
      "Cₙ,ₚ = n!/[p!(n − p)!] — ordem não importa."
     ],
     [
      "Permutação com repetição",
      "n!/(a! b! …)"
     ],
     [
      "Arranjo com repetição",
      "nᵖ"
     ],
     [
      "Combinação com repetição",
      "CRₙ,ₚ = Cₙ₊ₚ₋₁,ₚ"
     ],
     [
      "Permutação circular",
      "(n − 1)!"
     ],
     [
      "Número racional",
      "Pode ser escrito como a/b, com a, b inteiros e b ≠ 0."
     ]
    ],
    "quiz": [
     {
      "q": "Uma sorveteria oferece 8 sabores e o cliente escolhe 3 porções diferentes para a taça. Quantas taças distintas podem ser formadas?",
      "op": [
       "C₈,₃",
       "A₈,₃",
       "8³",
       "3!"
      ],
      "c": 0,
      "exp": "A ordem dos sabores na taça não importa: combinação de 8 tomados 3 a 3 (= 56)."
     },
     {
      "q": "Selecionar 3 empresas de um grupo de 6 e 2 de outro grupo de 5. Quantas contratações diferentes?",
      "op": [
       "150",
       "200",
       "400",
       "1.200"
      ],
      "c": 1,
      "exp": "C₆,₃ · C₅,₂ = 20 · 10 = 200 (escolhas independentes se multiplicam)."
     },
     {
      "q": "Em um saco com 20 bolas azuis e 30 verdes, qual o menor número de retiradas para garantir pelo menos duas azuis?",
      "op": [
       "21",
       "22",
       "31",
       "32"
      ],
      "c": 3,
      "exp": "Pior caso: saem as 30 verdes antes. Depois, mais 2 bolas garantem duas azuis."
     },
     {
      "q": "Quantos são os anagramas da palavra ARRANJO?",
      "op": [
       "5.040",
       "2.520",
       "1.260",
       "620"
      ],
      "c": 2,
      "exp": "7 letras com A e R repetidas duas vezes: 7!/(2! · 2!) = 1.260."
     },
     {
      "q": "De quantas maneiras 10 crianças podem formar uma roda?",
      "op": [
       "10!",
       "9!/10",
       "10!/10",
       "10 · 9!"
      ],
      "c": 2,
      "exp": "Permutação circular: (10 − 1)! = 9! = 10!/10."
     },
     {
      "q": "Quantos subconjuntos possui um conjunto com 8 elementos?",
      "op": [
       "28",
       "64",
       "256",
       "8!"
      ],
      "c": 2,
      "exp": "Cada elemento pode ou não entrar: 2⁸ = 256."
     },
     {
      "q": "Quantas senhas com algarismos distintos (0 a 9) têm no mínimo 4 e no máximo 6 dígitos?",
      "op": [
       "186.480",
       "151.200",
       "122.222",
       "5.040"
      ],
      "c": 0,
      "exp": "Casos disjuntos se somam: 5.040 + 30.240 + 151.200."
     },
     {
      "q": "5 livros de probabilidade, 7 de cálculo e 8 de álgebra devem ficar juntos por assunto numa prateleira. Número de arrumações:",
      "op": [
       "20!",
       "5! · 7! · 8!",
       "3! · 5! · 7! · 8!",
       "20!/(5! · 7! · 8!)"
      ],
      "c": 2,
      "exp": "Ordena-se os 3 blocos (3!) e, dentro de cada bloco, os livros."
     },
     {
      "q": "Somando todos os números de ]−2; 5] com todos os de [1; 7[, obtém-se:",
      "op": [
       "[0; 12]",
       "]−1; 12]",
       "]−1; 12[",
       "[−2; 11["
      ],
      "c": 2,
      "exp": "Extremos: −2 + 1 = −1 (aberto, pois −2 não entra) e 5 + 7 = 12 (aberto, pois 7 não entra)."
     },
     {
      "q": "Numa padaria há 10 tipos de biscoito doce e 7 de salgado. Comprar 4 pacotes doces e 3 salgados, podendo repetir tipos, pode ser feito de:",
      "op": [
       "C₁₀,₄ · C₇,₃",
       "A₁₀,₄ · A₇,₃",
       "CR₁₀,₄ · CR₇,₃",
       "10⁴ · 7³"
      ],
      "c": 2,
      "exp": "Escolhas sem ordem e com repetição permitida: combinações com repetição, multiplicadas."
     }
    ]
   },
   {
    "id": "graf",
    "cor": "var(--t2)",
    "titulo": "Gráficos e interpretações gráficas",
    "curto": "Gráficos",
    "desc": "Intervalos reais, plano cartesiano, pares ordenados, tabelas e gráficos de função, teste da reta vertical, máximos e mínimos.",
    "resumo": [
     {
      "h": "Intervalos",
      "itens": [
       "<mark>Intervalo</mark> = subconjunto de ℝ entre dois extremos. Contém todos os reais entre eles (inclusive irracionais, como π entre 3 e 5).",
       "<b>Bola fechada</b> / colchete voltado para dentro <code>[ ]</code> / sinais ≥ ≤ → extremo incluído. <b>Bola aberta</b> / <code>] [</code> ou <code>( )</code> / sinais &gt; &lt; → extremo excluído.",
       "Ex.: {x ∈ ℝ; −1 &lt; x ≤ 5} = ]−1; 5] (aberto em −1, fechado em 5).",
       "<mark>Amplitude</mark> = limite superior − limite inferior (LS − LI). É a mesma para intervalo aberto ou fechado. Ex.: [−4; 2] → 6.",
       "Semirretas: [6; +∞[ = {x ≥ 6}; ]−∞; 6[ = {x &lt; 6}. O lado do infinito é sempre aberto.",
       "Intervalos no cotidiano: o 2º trimestre (meses 4, 5, 6) → [4; 6]."
      ]
     },
     {
      "h": "Plano cartesiano",
      "itens": [
       "Criado por <b>René Descartes</b> para localizar pontos. Eixo horizontal (x) = <mark>abscissa</mark>; eixo vertical (y) = <mark>ordenada</mark>; (0, 0) = <b>origem</b>.",
       "Ponto = <mark>par ordenado (x, y)</mark>: primeiro a coordenada horizontal, depois a vertical. Cuidado: (1, 2) parece intervalo aberto, mas é ponto.",
       "x aumenta → ponto vai para a direita; y aumenta → ponto sobe.",
       "Tabelas viram gráficos: cada linha (x, y) é um ponto. Aplicações: robótica, mapas por setores (colunas A–H, linhas 0–3)."
      ]
     },
     {
      "h": "Gráficos de funções",
      "itens": [
       "Função associa a cada x <b>um único</b> y. Ex.: x ↦ x² (definida para todo real); x ↦ √x (só para x ≥ 0).",
       "<mark>Teste da reta vertical</mark>: é gráfico de função se toda reta vertical toca o gráfico <b>no máximo em um ponto</b>. Se uma vertical cruza dois pontos (um mesmo x com dois y), <b>não é função</b>.",
       "Leitura de gráficos: localizar maior/menor valor, comparar grupos, identificar valores iguais (ex.: marcas com o mesmo preço)."
      ]
     },
     {
      "h": "Máximos e mínimos",
      "itens": [
       "O valor de <b>x</b> onde ocorre o extremo é o <b>ponto de máximo/mínimo</b>; o valor <b>y = f(x)</b> é o <mark>valor máximo/mínimo</mark>.",
       "Lançamento de um corpo: o par (altura máxima, distância até a queda) é lido no gráfico; no desafio do material, altura máxima 500 e alcance 20 → (500, 20).",
       "Na análise de dados (ex.: gráficos epidemiológicos), interpretar mal um pico leva a decisões ruins: compare cenários, verifique limitações e combine com outros dados."
      ]
     }
    ],
    "pegadinhas": [
     "≥ e ≤ → bola fechada; &gt; e &lt; → bola aberta.",
     "Amplitude não muda se o intervalo é aberto ou fechado.",
     "Par ordenado: x primeiro. (a, b) ≠ (b, a).",
     "Não é função quando um mesmo x tem dois y (reta vertical toca duas vezes). Pular valores numa tabela não impede que seja função.",
     "Máximo (x) × valor máximo (y) são coisas diferentes."
    ],
    "flash": [
     [
      "Bola fechada",
      "Extremo incluído: [ ], ≥, ≤."
     ],
     [
      "Bola aberta",
      "Extremo excluído: ] [ ou ( ), &gt;, &lt;."
     ],
     [
      "Amplitude",
      "LS − LI."
     ],
     [
      "Abscissa × ordenada",
      "Eixo horizontal (x) × eixo vertical (y)."
     ],
     [
      "Origem",
      "Ponto (0, 0)."
     ],
     [
      "Par ordenado",
      "(x, y): horizontal primeiro."
     ],
     [
      "Teste da reta vertical",
      "Gráfico é de função se cada vertical toca no máximo um ponto."
     ],
     [
      "Ponto × valor máximo",
      "x onde ocorre × y = f(x)."
     ],
     [
      "Domínio de √x",
      "x ≥ 0."
     ]
    ],
    "quiz": [
     {
      "q": "Quais intervalos correspondem a: aberto em −1 e fechado em 5; fechado em 0,5 e aberto em 3,14?",
      "op": [
       "{−1 &lt; x ≤ 5} e {0,5 &lt; x &lt; 3,14}",
       "{−1 &lt; x ≤ 5} e {0,5 ≤ x &lt; 3,14}",
       "{−1 ≤ x ≤ 5} e {0,5 &lt; x &lt; 3,14}",
       "{−1 &lt; x &lt; 5} e {0,5 ≤ x ≤ 3,14}"
      ],
      "c": 1,
      "exp": "&gt;/&lt; = aberto; ≥/≤ = fechado."
     },
     {
      "q": "Qual é a amplitude do intervalo ]−4; 2[?",
      "op": [
       "−2",
       "4",
       "6",
       "Não tem amplitude, pois é aberto"
      ],
      "c": 2,
      "exp": "LS − LI = 2 − (−4) = 6, mesmo com extremos abertos."
     },
     {
      "q": "X = {0, 2} e Y = [1; 2]. O conjunto de todas as somas x + y é:",
      "op": [
       "[1; 2]",
       "[1; 4]",
       "[1; 2] ∪ [3; 4]",
       "[0; 4]"
      ],
      "c": 2,
      "exp": "0 + [1; 2] = [1; 2] e 2 + [1; 2] = [3; 4]."
     },
     {
      "q": "No par ordenado (−3, 5), o valor −3 é:",
      "op": [
       "A ordenada",
       "A abscissa",
       "A origem",
       "A amplitude"
      ],
      "c": 1,
      "exp": "A primeira coordenada é a abscissa (eixo horizontal)."
     },
     {
      "q": "O ponto (0, 0) do plano cartesiano é chamado de:",
      "op": [
       "Abscissa",
       "Ordenada",
       "Origem",
       "Vértice"
      ],
      "c": 2,
      "exp": "É o cruzamento dos eixos."
     },
     {
      "q": "Um gráfico NÃO representa uma função quando:",
      "op": [
       "Pula alguns valores de x",
       "Alguma reta vertical o toca em mais de um ponto",
       "Tem pontos no 3º quadrante",
       "É uma reta horizontal"
      ],
      "c": 1,
      "exp": "Um mesmo x não pode ter duas imagens."
     },
     {
      "q": "Num gráfico de preços por marca, duas marcas aparecem com o mesmo valor. A conclusão correta é:",
      "op": [
       "Todas as marcas têm preços diferentes",
       "Nem todas as marcas têm preços diferentes",
       "O gráfico não é de função",
       "A mesma marca é a mais cara e a mais barata"
      ],
      "c": 1,
      "exp": "Basta haver duas marcas com o mesmo preço."
     },
     {
      "q": "Em relação a máximos e mínimos, é correto afirmar:",
      "op": [
       "O valor máximo é o x onde ocorre o pico",
       "O ponto de máximo é o x; o valor máximo é y = f(x)",
       "Máximo e mínimo só existem em retas",
       "O mínimo é sempre zero"
      ],
      "c": 1,
      "exp": "Distinção cobrada pelo material: o x é o ponto; o y é o valor."
     },
     {
      "q": "A função x ↦ √x, com valores reais, está definida para:",
      "op": [
       "Todo x real",
       "x ≥ 0",
       "x &gt; 0 apenas",
       "x ≤ 0"
      ],
      "c": 1,
      "exp": "Valores negativos não têm raiz quadrada real."
     },
     {
      "q": "O 2º trimestre do ano, com os meses numerados de 1 a 12, é representado por:",
      "op": [
       "[3; 6]",
       "[4; 6]",
       "]4; 6[",
       "[1; 3]"
      ],
      "c": 1,
      "exp": "Abril, maio e junho: meses 4, 5 e 6."
     }
    ]
   },
   {
    "id": "func",
    "cor": "var(--t3)",
    "titulo": "Aprofundamento de funções",
    "curto": "Funções",
    "desc": "Domínio, contradomínio e imagem; injetora, sobrejetora e bijetora; inversa; crescentes e decrescentes; funções periódicas.",
    "resumo": [
     {
      "h": "Domínio, contradomínio e imagem",
      "itens": [
       "f: A → B: <mark>domínio</mark> A (entradas, eixo x), <mark>contradomínio</mark> B (onde as saídas podem estar), <mark>imagem</mark> (saídas efetivamente atingidas, eixo y). Im ⊆ CD.",
       "Quando a função vem por fórmula, o domínio é o <b>maior subconjunto de ℝ</b> onde ela dá valores reais: raiz de índice par exige radicando ≥ 0; denominador ≠ 0. Ex.: √x → x ≥ 0; 120x/(300 − x) → x ≠ 300.",
       "Imagem depende do domínio escolhido. Ex.: f(x) = x² − 4x + 8 (vértice em (2, 4)): D = [0; 2] → Im = [4; 8]; D = [−2; 0] → Im = [8; 20]; D = [2; +∞[ → Im = [4; +∞[.",
       "f(x) = 0 → onde o gráfico cruza o eixo x. Em lucro, é o <b>ponto de equilíbrio</b>: 100x − 2000 = 0 → x = 20 unidades."
      ]
     },
     {
      "h": "Injetora, sobrejetora, bijetora e inversa",
      "itens": [
       "<mark>Injetora</mark>: elementos diferentes do domínio têm imagens diferentes (a₁ ≠ a₂ ⇒ f(a₁) ≠ f(a₂)). Gráfico: <b>teste da reta horizontal</b> — cada horizontal toca no máximo uma vez.",
       "<mark>Sobrejetora</mark>: todo elemento do contradomínio é imagem de algum x (<b>Im = CD</b>).",
       "<mark>Bijetora</mark>: injetora e sobrejetora. Ex.: f(x) = 2x + 1 de ℝ em ℝ.",
       "Parábola em ℝ → ℝ (ex.: x²) não é injetora (f(−1) = f(1)) nem sobrejetora (não atinge negativos).",
       "Só função bijetora tem <mark>inversa</mark>. Gráficos de f e f⁻¹ são simétricos em relação a y = x; interseções com a inversa ficam sobre y = x. Ex.: f(x) = −x² + 2x + 2 em [1; +∞[ → −x² + 2x + 2 = x → x = 2 → ponto (2, 2) → a + b = 4."
      ]
     },
     {
      "h": "Crescentes, decrescentes e periódicas",
      "itens": [
       "<mark>Crescente</mark>: x₁ &lt; x₂ ⇒ f(x₁) &lt; f(x₂). <mark>Decrescente</mark>: x₁ &lt; x₂ ⇒ f(x₁) &gt; f(x₂). Uma função pode crescer num intervalo e decrescer em outro.",
       "<mark>Periódica</mark>: existe T &gt; 0 com <b>f(x + T) = f(x)</b> para todo x do domínio. O menor T é o <b>período</b>. Modela fenômenos cíclicos (estações, batimentos).",
       "Uso: período 4 e f(2) = 5 → f(6) = f(6 − 4) = f(2) = 5.",
       "Se f tem período T, então g(x) = f(kx) tem período <b>T/k</b> e h(x) = f(x/k) tem período <b>kT</b>. Deslocar (f(x + q)) não muda o período. Ex.: f com período 2 → f(2x) tem período 1; f(x/2), período 4."
      ]
     }
    ],
    "pegadinhas": [
     "Imagem ≠ contradomínio: a imagem é o que de fato é atingido.",
     "Reta vertical testa se é função; reta <b>horizontal</b> testa se é injetora.",
     "Sobrejetora depende do contradomínio escolhido.",
     "Toda função afim f(x) = ax + b com a ≠ 0, de ℝ em ℝ, é bijetora.",
     "Só bijetoras têm inversa.",
     "f(2x) tem período menor (divide por 2); f(x/2), maior (multiplica por 2).",
     "“Menor quantidade para não ter prejuízo” = resolver lucro = 0."
    ],
    "flash": [
     [
      "Domínio",
      "Conjunto das entradas (eixo x)."
     ],
     [
      "Contradomínio × imagem",
      "Onde as saídas podem estar × saídas efetivamente atingidas."
     ],
     [
      "Domínio de fórmulas",
      "Radicando de raiz par ≥ 0; denominador ≠ 0."
     ],
     [
      "Injetora",
      "x diferentes → imagens diferentes (teste da horizontal)."
     ],
     [
      "Sobrejetora",
      "Im = CD."
     ],
     [
      "Bijetora",
      "Injetora e sobrejetora; tem inversa."
     ],
     [
      "Gráfico da inversa",
      "Simétrico ao de f em relação a y = x."
     ],
     [
      "Crescente",
      "x₁ &lt; x₂ ⇒ f(x₁) &lt; f(x₂)."
     ],
     [
      "Função periódica",
      "f(x + T) = f(x); o menor T é o período."
     ],
     [
      "Período de f(kx)",
      "T/k."
     ],
     [
      "Ponto de equilíbrio",
      "Lucro f(x) = 0."
     ]
    ],
    "quiz": [
     {
      "q": "O lucro de uma fábrica é f(x) = 100x − 2000. Qual a quantidade mínima produzida para não haver prejuízo?",
      "op": [
       "10",
       "15",
       "20",
       "25"
      ],
      "c": 2,
      "exp": "100x − 2000 = 0 → x = 20 (ponto de equilíbrio)."
     },
     {
      "q": "f(x) = 2x + 1, de ℝ em ℝ, é:",
      "op": [
       "Injetora, mas não sobrejetora",
       "Sobrejetora, mas não injetora",
       "Injetora e sobrejetora (bijetora)",
       "Nem injetora nem sobrejetora"
      ],
      "c": 2,
      "exp": "Função afim com coeficiente não nulo: x diferentes dão y diferentes e todo real é atingido."
     },
     {
      "q": "f é periódica de período 4 e f(2) = 5. Então f(6) vale:",
      "op": [
       "2",
       "4",
       "5",
       "9"
      ],
      "c": 2,
      "exp": "f(6) = f(6 − 4) = f(2) = 5."
     },
     {
      "q": "f: ℝ → ℝ tem período 2. É correto afirmar:",
      "op": [
       "g(x) = f(2x) tem período 4",
       "g(x) = f(2x) tem período 1",
       "h(x) = f(x/2) tem período 1",
       "h(x) = f(x + q) não é periódica"
      ],
      "c": 1,
      "exp": "g(x + 1) = f(2x + 2) = f(2x) = g(x)."
     },
     {
      "q": "Qual função tem domínio [0; +∞[, adequada para representar tempo não negativo?",
      "op": [
       "f(x) = √x",
       "f(x) = x²",
       "f(x) = 1/x",
       "f(x) = x³"
      ],
      "c": 0,
      "exp": "A raiz quadrada real exige x ≥ 0."
     },
     {
      "q": "f(x) = x² − 4x + 8 com domínio D = [0; 2]. A imagem é:",
      "op": [
       "[8; 20]",
       "[4; 8]",
       "[4; +∞[",
       "[0; 4]"
      ],
      "c": 1,
      "exp": "f(0) = 8 e f(2) = 4 (vértice); nesse trecho a função decresce de 8 até 4."
     },
     {
      "q": "f: [1; +∞[ → ]−∞; 3], f(x) = −x² + 2x + 2, é bijetora. Se (a, b) é a interseção de f com sua inversa, a + b vale:",
      "op": [
       "2",
       "4",
       "6",
       "8"
      ],
      "c": 1,
      "exp": "Interseção em y = x: −x² + x + 2 = 0 → x = 2 (x = −1 fora do domínio). Ponto (2, 2)."
     },
     {
      "q": "Uma função f: ℝ → ℝ não é injetora quando:",
      "op": [
       "Alguma reta vertical toca o gráfico duas vezes",
       "Alguma reta horizontal toca o gráfico em mais de um ponto",
       "Sua imagem é ℝ",
       "Ela é crescente"
      ],
      "c": 1,
      "exp": "Dois x diferentes com o mesmo y violam a injetividade."
     },
     {
      "q": "Uma função f: A → B é sobrejetora quando:",
      "op": [
       "Sua imagem é igual ao contradomínio",
       "Seu domínio é ℝ",
       "É crescente",
       "Tem inversa em qualquer caso"
      ],
      "c": 0,
      "exp": "Todo elemento de B é atingido por algum x."
     },
     {
      "q": "Qual o domínio de f(x) = 120x/(300 − x)?",
      "op": [
       "ℝ",
       "ℝ − {0}",
       "ℝ − {300}",
       "[0; 300]"
      ],
      "c": 2,
      "exp": "O denominador não pode ser zero."
     }
    ]
   },
   {
    "id": "prop",
    "cor": "var(--t4)",
    "titulo": "Cálculo proposicional",
    "curto": "Lógica proposicional",
    "desc": "Proposições, conectivos, tabelas-verdade, precedência, tautologia/contradição/contingência, álgebra booleana, equivalências e inferências.",
    "resumo": [
     {
      "h": "Proposições e princípios",
      "itens": [
       "Aristóteles: pai da lógica, <b>teoria do silogismo</b> (obra <i>Organon</i>). Boole (lógica matemática/álgebra booleana), De Morgan, Russell, Frege, Peano, Leibniz.",
       "<mark>Proposição</mark>: sentença <b>declarativa</b>, com sentido completo, que pode ser V ou F. Exclamativas, interrogativas e imperativas <b>não</b> são proposições.",
       "Princípios: <b>identidade</b>, <b>não contradição</b> (não é V e F ao mesmo tempo) e <b>terceiro excluído</b> (ou é V ou é F)."
      ]
     },
     {
      "h": "Conectivos e tabelas-verdade",
      "itens": [
       "<b>Negação</b> ~p: inverte o valor.",
       "<mark>Conjunção</mark> p ∧ q (“e”): V só se <b>ambas</b> V.",
       "<mark>Disjunção</mark> p ∨ q (“ou”): F só se <b>ambas</b> F. <b>Disjunção exclusiva</b> p ⊻ q (“ou… ou”): V quando os valores são <b>diferentes</b>.",
       "<mark>Condicional</mark> p → q (“se… então”): <b>F só quando V → F</b>. p é condição <b>suficiente</b> para q; q é condição <b>necessária</b> para p.",
       "<mark>Bicondicional</mark> p ↔ q (“se e somente se”): V quando os valores são <b>iguais</b>.",
       "<b>NAND</b> (p ↑ q) = ~(p ∧ q): F só se ambas V. <b>NOR</b> (p ↓ q) = ~(p ∨ q): V só se ambas F.",
       "“Nem p nem q” = ~p ∧ ~q.",
       "Tabela-verdade com n proposições simples tem <b>2ⁿ linhas</b>.",
       "<mark>Precedência</mark> (material): 1º ~; 2º ∧ e ∨, na ordem em que aparecem; 3º →; 4º ↔. Parênteses primeiro.",
       "<mark>Tautologia</mark>: sempre V. <mark>Contradição</mark>: sempre F. <mark>Contingência</mark>: V e F conforme o caso. Ex.: p ∨ ~p é tautologia; p ∧ ~p é contradição."
      ]
     },
     {
      "h": "Álgebra booleana",
      "itens": [
       "V = 1, F = 0. <b>A · B</b> = E (AND); <b>A + B</b> = OU (OR); Ā = complemento (NOT). Portas lógicas em circuitos digitais.",
       "<mark>Precedência booleana</mark>: 1º parênteses; 2º negação/complemento; 3º multiplicação lógica (AND); 4º soma lógica (OR). Em S = A + B · C, calcula-se B · C primeiro.",
       "Propriedades: comutativa, associativa, distributiva, idempotência (A + A = A), absorção (A + A·B = A), complemento (A + Ā = 1; A · Ā = 0)."
      ]
     },
     {
      "h": "Equivalências, implicações e argumentos",
      "itens": [
       "<mark>Equivalência</mark> (⇔): proposições com a mesma tabela-verdade.",
       "<b>De Morgan</b>: ~(p ∧ q) ⇔ ~p ∨ ~q; ~(p ∨ q) ⇔ ~p ∧ ~q.",
       "<mark>Negação da condicional</mark>: ~(p → q) ⇔ <b>p ∧ ~q</b>. “Se chove, levo guarda-chuva” → negação: “chove <b>e</b> não levo guarda-chuva”.",
       "p → q ⇔ ~p ∨ q. <mark>Contrapositiva</mark>: p → q ⇔ ~q → ~p. A <b>recíproca</b> (q → p) e a <b>inversa</b> (~p → ~q) <b>não</b> são equivalentes.",
       "p ↔ q ⇔ (p → q) ∧ (q → p). Negação da bicondicional: p ⊻ q.",
       "<mark>Implicação lógica</mark> (⇒): p ⇒ q quando p → q é tautologia.",
       "Regras de inferência: <b>modus ponens</b> (p → q, p ⊢ q); <b>modus tollens</b> (p → q, ~q ⊢ ~p); <b>silogismo hipotético</b> (p → q, q → r ⊢ p → r); <b>silogismo disjuntivo</b> (p ∨ q, ~p ⊢ q).",
       "Argumento <b>válido</b>: premissas verdadeiras garantem conclusão verdadeira. Técnica: parta do fato simples dado (“Ora, …”) e vá encadeando."
      ]
     }
    ],
    "pegadinhas": [
     "Pergunta e ordem não são proposições.",
     "A condicional é falsa <b>só</b> em V → F.",
     "Negar “se p então q” <b>não</b> é “se p então não q”: é “p e não q”.",
     "Contrapositiva é equivalente; recíproca não é.",
     "Na álgebra booleana, AND antes de OR.",
     "Bicondicional: V quando os valores são iguais; disjunção exclusiva: V quando são diferentes.",
     "“Nem… nem” é conjunção de negações."
    ],
    "flash": [
     [
      "Proposição",
      "Sentença declarativa, V ou F."
     ],
     [
      "p ∧ q",
      "V só se ambas V."
     ],
     [
      "p ∨ q",
      "F só se ambas F."
     ],
     [
      "p → q",
      "F só quando V → F."
     ],
     [
      "p ↔ q",
      "V quando os valores são iguais."
     ],
     [
      "NAND / NOR",
      "~(p ∧ q) / ~(p ∨ q)."
     ],
     [
      "Tautologia / contradição / contingência",
      "Sempre V / sempre F / depende."
     ],
     [
      "~(p → q)",
      "p ∧ ~q"
     ],
     [
      "De Morgan",
      "~(p ∧ q) ⇔ ~p ∨ ~q; ~(p ∨ q) ⇔ ~p ∧ ~q."
     ],
     [
      "Contrapositiva",
      "p → q ⇔ ~q → ~p."
     ],
     [
      "Modus ponens / tollens",
      "p → q, p ⊢ q / p → q, ~q ⊢ ~p."
     ],
     [
      "Precedência booleana",
      "Parênteses, NOT, AND, OR."
     ],
     [
      "Linhas da tabela-verdade",
      "2ⁿ"
     ]
    ],
    "quiz": [
     {
      "q": "Qual opção descreve uma proposição?",
      "op": [
       "Sentença exclamativa com sentido completo",
       "Sentença interrogativa com sentido completo",
       "Sentença imperativa com sentido completo",
       "Sentença declarativa que pode ser julgada V ou F"
      ],
      "c": 3,
      "exp": "Só sentenças declarativas admitem valor lógico."
     },
     {
      "q": "A negação de “Se estiver chovendo, eu levo o guarda-chuva” é:",
      "op": [
       "Se não estiver chovendo, levo o guarda-chuva",
       "Não está chovendo e eu não levo o guarda-chuva",
       "Se estiver chovendo, não levo o guarda-chuva",
       "Está chovendo e eu não levo o guarda-chuva"
      ],
      "c": 3,
      "exp": "~(p → q) ⇔ p ∧ ~q."
     },
     {
      "q": "Na expressão booleana S = A + B · C, a ordem correta é:",
      "op": [
       "Primeiro AND (B · C), depois OR",
       "Primeiro OR, depois AND",
       "Da esquerda para a direita, sem prioridade",
       "Não se pode misturar operadores"
      ],
      "c": 0,
      "exp": "Precedência: parênteses, NOT, AND, OR."
     },
     {
      "q": "“Nem Carlos é engenheiro nem Paulo é professor” é representada por:",
      "op": [
       "~(p ∧ q)",
       "~p ∨ ~q",
       "~p ∧ ~q",
       "~p → q"
      ],
      "c": 2,
      "exp": "“Nem… nem” = negação das duas, unidas por “e”."
     },
     {
      "q": "Se p é falsa e q é verdadeira, o valor de p ↔ q é:",
      "op": [
       "Verdadeiro",
       "Falso",
       "Indeterminado",
       "Depende da ordem"
      ],
      "c": 1,
      "exp": "Bicondicional é V apenas quando os valores são iguais."
     },
     {
      "q": "Se p é V e q é F, o valor de (p ∧ q) → (p → q) é:",
      "op": [
       "Verdadeiro",
       "Falso",
       "Indeterminado",
       "Verdadeiro só se q for V"
      ],
      "c": 0,
      "exp": "p ∧ q = F e p → q = F. F → F é verdadeiro."
     },
     {
      "q": "Uma proposição composta cuja tabela-verdade tem apenas V na última coluna é:",
      "op": [
       "Contradição",
       "Contingência",
       "Tautologia",
       "Equivalência"
      ],
      "c": 2,
      "exp": "Ex.: p ∨ ~p."
     },
     {
      "q": "Qual é equivalente a p → q?",
      "op": [
       "q → p",
       "~p → ~q",
       "~q → ~p",
       "p ∧ ~q"
      ],
      "c": 2,
      "exp": "A contrapositiva é equivalente; a recíproca e a inversa não."
     },
     {
      "q": "(FCC) Se não leio, não compreendo. Se jogo, não leio. Se não desisto, compreendo. Se é feriado, não desisto. Então:",
      "op": [
       "Se jogo, não é feriado",
       "Se não jogo, é feriado",
       "Se é feriado, não leio",
       "Se é feriado, jogo"
      ],
      "c": 0,
      "exp": "Feriado → não desisto → compreendo → leio → não jogo. Contrapositiva: se jogo, não é feriado."
     },
     {
      "q": "Ana é prima de Bia ou Carlos é filho de Pedro. Se Jorge é irmão de Maria, Breno não é neto de Beto. Se Carlos é filho de Pedro, Breno é neto de Beto. Ora, Jorge é irmão de Maria. Logo:",
      "op": [
       "Carlos é filho de Pedro ou Breno é neto de Beto",
       "Breno é neto de Beto e Ana é prima de Bia",
       "Jorge é irmão de Maria e Breno é neto de Beto",
       "Ana é prima de Bia e Carlos não é filho de Pedro"
      ],
      "c": 3,
      "exp": "Jorge irmão → Breno não é neto (modus ponens) → Carlos não é filho de Pedro (modus tollens) → Ana é prima (silogismo disjuntivo)."
     }
    ]
   },
   {
    "id": "pred",
    "cor": "var(--t5)",
    "titulo": "Cálculo de predicados",
    "curto": "Predicados",
    "desc": "Sentenças abertas, conjunto universo e conjunto verdade, operações, quantificadores ∀ e ∃, variáveis livres e ligadas, negação e aplicações (Prolog).",
    "resumo": [
     {
      "h": "Sentenças abertas",
      "itens": [
       "<mark>Sentença aberta</mark> (função proposicional, condição) p(x): contém variável; vira proposição V ou F quando x é substituído por um elemento. Ex.: “x + 3 = 10”, “Ela é advogada”.",
       "<mark>Conjunto universo</mark> U: elementos que podem substituir a variável. <mark>Conjunto verdade</mark> Vₚ = {x ∈ U | p(x) é V}.",
       "Com duas variáveis, o conjunto verdade é formado por <b>pares ordenados</b> de A × B.",
       "Operações e conjuntos verdade: <b>negação</b> → complementar de Vₚ; <b>conjunção</b> p(x) ∧ q(x) → <b>Vₚ ∩ V_q</b>; <b>disjunção</b> → <b>Vₚ ∪ V_q</b>; <b>condicional</b> → Vₚᶜ ∪ V_q; <b>bicondicional</b> → (Vₚ ∩ V_q) ∪ (Vₚᶜ ∩ V_qᶜ).",
       "Ex. do material: raízes {1, 5} e {4, 9} → conjunto verdade da disjunção = {1, 4, 5, 9}."
      ]
     },
     {
      "h": "Quantificadores",
      "itens": [
       "<mark>Universal ∀</mark> (“para todo”, “qualquer que seja”): ∀x p(x) é V se <b>todos</b> satisfazem.",
       "<mark>Existencial ∃</mark> (“existe”, “algum”, “pelo menos um”): ∃x p(x) é V se <b>ao menos um</b> satisfaz. <b>∃!</b> = existe um único.",
       "Quantificar transforma sentença aberta (sem valor lógico) em proposição.",
       "<mark>A ordem importa</mark>: em ℤ, ∀x ∃y (x &lt; y) é <b>V</b> (sempre há um maior), mas ∃y ∀x (x &lt; y) é <b>F</b> (não há inteiro maior que todos).",
       "“Todo real não nulo tem inverso”: <b>∀x ∈ ℝ (x ≠ 0 → ∃y ∈ ℝ, xy = 1)</b>.",
       "<mark>Variável ligada</mark>: está no escopo de um quantificador. <mark>Variável livre</mark>: não está. Só sem variáveis livres a expressão é proposição."
      ]
     },
     {
      "h": "Negação de quantificadores",
      "itens": [
       "<mark>~(∀x p(x)) ⇔ ∃x ~p(x)</mark>: “nem todos são” = “existe pelo menos um que não é”.",
       "<mark>~(∃x p(x)) ⇔ ∀x ~p(x)</mark>: “não existe” = “todos não são” / “nenhum é”.",
       "“À noite, todos os gatos são pardos” → negação: “À noite, <b>existe pelo menos um</b> gato que <b>não</b> é pardo” (mantém “à noite”).",
       "“Não é verdade que todos os aldeões não dormem a sesta” ⇔ <b>pelo menos um aldeão dorme a sesta</b>."
      ]
     },
     {
      "h": "Aplicações na computação",
      "itens": [
       "<mark>Prolog</mark> (programação lógica): <b>fatos</b>, <b>regras</b> e <b>consultas</b>. Predicados e constantes em <b>minúsculas</b>; variáveis começam com <b>maiúscula</b>. Fato correto: <code>pai(carlos, mario).</code>",
       "<b>Sistemas especialistas</b> (Hayes-Roth, 1983): categorias como interpretação, predição, diagnóstico, projeto, planejamento, monitoramento, depuração, conserto, instrução e controle. Diagnóstico = inferir a causa de falhas a partir de sintomas observados.",
       "<b>Prova de correção</b> de programas: usar lógica de predicados para demonstrar que um programa cumpre sua especificação (pré e pós-condições)."
      ]
     }
    ],
    "pegadinhas": [
     "Negar “todos são” dá “algum não é”, não “nenhum é”.",
     "Negar “existe” dá “todo… não”.",
     "∀x ∃y e ∃y ∀x não são equivalentes.",
     "Para “todo x ≠ 0 tem inverso” use ∀ com →, não ∃ nem ↔.",
     "Conjunção → interseção dos conjuntos verdade; disjunção → união.",
     "No Prolog, maiúscula é variável; em fatos, use minúsculas."
    ],
    "flash": [
     [
      "Sentença aberta",
      "Tem variável; vira proposição ao substituir ou quantificar."
     ],
     [
      "Conjunto verdade",
      "Elementos do universo que tornam p(x) verdadeira."
     ],
     [
      "V(p ∧ q) / V(p ∨ q)",
      "Vₚ ∩ V_q / Vₚ ∪ V_q."
     ],
     [
      "∀",
      "Para todo."
     ],
     [
      "∃ / ∃!",
      "Existe pelo menos um / existe um único."
     ],
     [
      "~∀x p(x)",
      "∃x ~p(x)"
     ],
     [
      "~∃x p(x)",
      "∀x ~p(x)"
     ],
     [
      "Variável ligada × livre",
      "No escopo de quantificador × fora dele."
     ],
     [
      "Prolog",
      "Fatos, regras e consultas; variáveis com maiúscula."
     ],
     [
      "∀x ∃y (x &lt; y) em ℤ",
      "Verdadeira."
     ],
     [
      "∃y ∀x (x &lt; y) em ℤ",
      "Falsa."
     ]
    ],
    "quiz": [
     {
      "q": "No conjunto dos inteiros: (I) ∀x ∃y (x &lt; y); (II) ∃y ∀x (x &lt; y). É correto afirmar:",
      "op": [
       "Ambas são verdadeiras",
       "A primeira é verdadeira e a segunda é falsa",
       "A primeira é falsa e a segunda é verdadeira",
       "Ambas são falsas"
      ],
      "c": 1,
      "exp": "Todo inteiro tem um maior, mas não existe inteiro maior que todos."
     },
     {
      "q": "A negação de “À noite, todos os gatos são pardos” é:",
      "op": [
       "De dia, todos os gatos são pardos",
       "De dia, nenhum gato é pardo",
       "À noite, existe pelo menos um gato que não é pardo",
       "À noite, nenhum gato é pardo"
      ],
      "c": 2,
      "exp": "~∀x p(x) ⇔ ∃x ~p(x), mantendo o contexto “à noite”."
     },
     {
      "q": "“Não é verdade que todos os aldeões não dormem a sesta.” Para isso ser verdade, é necessário que:",
      "op": [
       "Todos os aldeões durmam a sesta",
       "Pelo menos um aldeão durma a sesta",
       "Nenhum aldeão durma a sesta",
       "No máximo um aldeão não durma a sesta"
      ],
      "c": 1,
      "exp": "~∀x ~p(x) ⇔ ∃x p(x)."
     },
     {
      "q": "“Todo número real diferente de zero possui inverso multiplicativo” é escrito como:",
      "op": [
       "∀x ∈ ℝ (x = 0 → ∃y, xy = 1)",
       "∀x ∈ ℝ (x ≠ 0 → ∃y ∈ ℝ, xy = 1)",
       "∃x ∈ ℝ (x ≠ 0 ∧ xy = 1)",
       "∀x ∈ ℝ (x ≠ 0 ↔ ∃y, xy = 1)"
      ],
      "c": 1,
      "exp": "Quantificador universal com condicional e o existencial para y."
     },
     {
      "q": "p(x) tem conjunto verdade {1, 5} e q(x), {4, 9}. O conjunto verdade de p(x) ∨ q(x) é:",
      "op": [
       "{1, 5}",
       "{4, 9}",
       "∅",
       "{1, 4, 5, 9}"
      ],
      "c": 3,
      "exp": "Disjunção corresponde à união dos conjuntos verdade."
     },
     {
      "q": "O conjunto verdade de p(x) ∧ q(x) é:",
      "op": [
       "Vₚ ∪ V_q",
       "Vₚ ∩ V_q",
       "Vₚ − V_q",
       "O complementar de Vₚ"
      ],
      "c": 1,
      "exp": "Um elemento precisa satisfazer as duas sentenças."
     },
     {
      "q": "Em Prolog, qual é a estrutura correta de um fato?",
      "op": [
       "pai(Carlos, Mario)",
       "Pai(Carlos, mario)",
       "pai(carlos, Mario)",
       "pai(carlos, mario)"
      ],
      "c": 3,
      "exp": "Predicado e constantes em minúsculas; maiúsculas indicam variáveis."
     },
     {
      "q": "A negação de ∃x p(x) é:",
      "op": [
       "∃x ~p(x)",
       "∀x ~p(x)",
       "∀x p(x)",
       "~∃x ~p(x)"
      ],
      "c": 1,
      "exp": "“Não existe x com p” = “para todo x, não p”."
     },
     {
      "q": "Uma variável é chamada de ligada quando:",
      "op": [
       "Aparece duas vezes na fórmula",
       "Está no escopo de um quantificador",
       "É uma constante",
       "Não tem valor definido"
      ],
      "c": 1,
      "exp": "Fora do escopo de quantificadores, a variável é livre."
     },
     {
      "q": "“Um número natural mais dez é menor que três.” O conjunto verdade em ℕ é:",
      "op": [
       "ℕ",
       "{0, 1, 2}",
       "∅",
       "{3}"
      ],
      "c": 2,
      "exp": "Nenhum natural satisfaz x + 10 &lt; 3."
     }
    ]
   },
   {
    "id": "demo",
    "cor": "var(--t6)",
    "titulo": "Métodos de demonstração",
    "curto": "Demonstrações",
    "desc": "Demonstração trivial, por vacuidade, direta, contrapositiva, por contradição (absurdo), técnicas com quantificadores e indução matemática.",
    "resumo": [
     {
      "h": "Demonstrações de P ⇒ Q",
      "itens": [
       "Base: a condicional P → Q só é falsa quando P é V e Q é F.",
       "<mark>Trivial</mark>: prova-se que <b>Q é sempre verdadeira</b>; então P → Q é verdadeira, qualquer que seja P. Rara na prática.",
       "<mark>Por vacuidade</mark>: prova-se que <b>P é sempre falsa</b>; então P → Q é verdadeira por vacuidade. Ex.: “se x² &lt; 0, então …” em ℝ.",
       "<mark>Direta</mark>: supõe P verdadeira e, por uma cadeia de argumentos (modus ponens), conclui Q. Ex.: n par → n = 2k → n² = 4k² = 2(2k²) → n² par.",
       "Números: <b>par</b> n = 2k; <b>ímpar</b> n = 2k + 1 (k inteiro). Ex.: n ímpar → n = 2k + 1 → 5n + 3 = 10k + 8 = 2(5k + 4), par.",
       "<mark>Contrapositiva</mark> (contraposição): prova ~Q → ~P de forma direta, pois P → Q ⇔ ~Q → ~P. Útil quando a direta é difícil (ex.: “se n² é par, então n é par” → prova-se “se n é ímpar, n² é ímpar”).",
       "<mark>Por contradição / redução ao absurdo</mark>: supõe P e <b>~Q</b> (ou a negação do que se quer provar) e chega a uma <b>contradição</b> (algo V e F ao mesmo tempo). Base: princípio da não contradição (Aristóteles; método socrático). Ex.: √2 irracional; unicidade do elemento neutro; discos de raio racional e irracional nunca voltam a coincidir."
      ]
     },
     {
      "h": "Quantificadores em demonstrações",
      "itens": [
       "<b>∀x ∈ S, P(x)</b>: provar para um x <b>arbitrário</b> de S (não um exemplo). Para refutar basta <mark>um contraexemplo</mark>.",
       "<b>∃x ∈ S, P(x)</b>: basta <b>exibir</b> um x que satisfaz (demonstração construtiva). Ex.: ∃x ∈ ℝ, x² = 3 é V porque √3 é real e (√3)² = 3.",
       "Linguagem: ∀ = “para cada”, “para todo”; ∃ = “existe”, “para algum”, “para pelo menos um”. “Todos os pássaros têm asas” usa ∀."
      ]
     },
     {
      "h": "Indução matemática",
      "itens": [
       "Base: <b>princípio da boa ordenação</b> (todo subconjunto não vazio de ℕ tem menor elemento).",
       "<mark>Princípio da indução</mark>: para provar P(n) para todo inteiro n ≥ n₀: (1) <b>base</b>: provar P(n₀); (2) <b>passo indutivo</b>: supor P(k) verdadeira (<b>hipótese de indução</b>) e provar P(k + 1). Então P(n) vale para todo n ≥ n₀.",
       "Imagem clássica: efeito dominó — a primeira peça cai (base) e cada peça derruba a seguinte (passo).",
       "Ex.: 1 + 2 + … + n = n(n + 1)/2. Base: n = 1 → 1 = 1. Passo: soma até k + 1 = k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2."
      ]
     }
    ],
    "pegadinhas": [
     "Trivial: Q sempre V. Vacuidade: P sempre F. Não troque.",
     "Contrapositiva prova ~Q → ~P; a recíproca Q → P <b>não</b> serve.",
     "Absurdo: supõe-se a <b>negação</b> da conclusão e busca-se contradição.",
     "Exemplos não provam um “para todo”; um contraexemplo derruba.",
     "Indução exige as duas etapas: base e passo.",
     "Na indução, supor P(k) não é “roubar”: é a hipótese para chegar a P(k + 1)."
    ],
    "flash": [
     [
      "Demonstração trivial",
      "Q é sempre verdadeira ⇒ P → Q verdadeira."
     ],
     [
      "Demonstração por vacuidade",
      "P é sempre falsa ⇒ P → Q verdadeira."
     ],
     [
      "Demonstração direta",
      "Supõe P e deduz Q."
     ],
     [
      "Contrapositiva",
      "Prova ~Q → ~P."
     ],
     [
      "Redução ao absurdo",
      "Supõe a negação da tese e chega a contradição."
     ],
     [
      "Par / ímpar",
      "2k / 2k + 1."
     ],
     [
      "Refutar um “para todo”",
      "Basta um contraexemplo."
     ],
     [
      "Provar um “existe”",
      "Exibir um elemento que satisfaz."
     ],
     [
      "Indução: etapas",
      "Base P(n₀) + passo P(k) ⇒ P(k + 1)."
     ],
     [
      "Hipótese de indução",
      "Suposição de que P(k) é verdadeira."
     ],
     [
      "Boa ordenação",
      "Todo subconjunto não vazio de ℕ tem menor elemento."
     ]
    ],
    "quiz": [
     {
      "q": "Demonstrar P ⇒ Q supondo P e ¬Q até obter uma contradição é a demonstração:",
      "op": [
       "Direta",
       "Trivial",
       "Por redução ao absurdo",
       "Por vacuidade"
      ],
      "c": 2,
      "exp": "Se supor a conclusão falsa gera contradição, a conclusão tem de ser verdadeira."
     },
     {
      "q": "Para provar que o quadrado de um par é par: “Seja n = 2k; então n² = 4k² = 2(2k²), logo n² é par.” Esse método é:",
      "op": [
       "Demonstração direta",
       "Por vacuidade",
       "Contrapositiva",
       "Por indução"
      ],
      "c": 0,
      "exp": "Parte da hipótese e chega à conclusão por passos válidos."
     },
     {
      "q": "Quando a hipótese P é falsa para todos os valores, a implicação P → Q é verdadeira por:",
      "op": [
       "Trivialidade",
       "Vacuidade",
       "Contradição",
       "Indução"
      ],
      "c": 1,
      "exp": "Condicional com antecedente falso é sempre verdadeira."
     },
     {
      "q": "A demonstração por contraposição de P → Q consiste em provar diretamente:",
      "op": [
       "Q → P",
       "~P → ~Q",
       "~Q → ~P",
       "P ∧ ~Q"
      ],
      "c": 2,
      "exp": "~Q → ~P é equivalente a P → Q."
     },
     {
      "q": "Qual opção usa o quantificador universal?",
      "op": [
       "Existe um número natural que é par",
       "Todos os pássaros têm asas",
       "Alguns alunos faltaram",
       "Há uma solução para a equação"
      ],
      "c": 1,
      "exp": "“Todos” indica ∀; as demais usam ∃."
     },
     {
      "q": "“Existe um número real x tal que x² = 3” é:",
      "op": [
       "Falsa, pois 3 não é quadrado perfeito",
       "Verdadeira, pois √3 é real e (√3)² = 3",
       "Falsa, pois x teria de ser inteiro",
       "Indeterminada"
      ],
      "c": 1,
      "exp": "Para provar um existencial basta exibir um elemento."
     },
     {
      "q": "Para mostrar que “todo número primo é ímpar” é falsa, basta:",
      "op": [
       "Testar vários primos ímpares",
       "Uma demonstração por indução",
       "Um contraexemplo, como o número 2",
       "Provar por vacuidade"
      ],
      "c": 2,
      "exp": "Um único contraexemplo derruba uma afirmação universal."
     },
     {
      "q": "As etapas do princípio da indução matemática são:",
      "op": [
       "Supor a negação e achar contradição",
       "Base (provar P(n₀)) e passo indutivo (P(k) ⇒ P(k + 1))",
       "Testar os 10 primeiros casos",
       "Provar que P é sempre falsa"
      ],
      "c": 1,
      "exp": "Como num dominó: a primeira peça cai e cada uma derruba a próxima."
     },
     {
      "q": "Discos com raio racional e irracional rolam sem deslizar. Supõe-se que os pontos de contato voltam a coincidir e conclui-se que um número racional seria igual a um irracional. O método usado é:",
      "op": [
       "Direto",
       "Redução ao absurdo",
       "Vacuidade",
       "Trivial"
      ],
      "c": 1,
      "exp": "A suposição leva a uma contradição; logo os pontos nunca voltam a coincidir."
     },
     {
      "q": "Se n é ímpar, então 5n + 3 é par. Qual sequência demonstra isso diretamente?",
      "op": [
       "Supor 5n + 3 ímpar e chegar a absurdo",
       "n = 2k + 1 ⇒ 5n + 3 = 10k + 8 = 2(5k + 4), que é par",
       "Testar n = 1 e n = 3",
       "Mostrar que n nunca é ímpar"
      ],
      "c": 1,
      "exp": "Parte da hipótese (n = 2k + 1) e chega à forma 2m."
     }
    ]
   }
  ]
 },
 {
  "id": "so",
  "nome": "Sistemas Operacionais",
  "temas": [
   {
    "id": "conc",
    "cor": "var(--t1)",
    "titulo": "Conceitos básicos de sistemas operacionais",
    "curto": "Conceitos básicos",
    "desc": "Evolução histórica, tipos de SO, kernel, system calls, modos de acesso, Windows e Unix/Linux, licenças.",
    "resumo": [
     {
      "h": "O que é um SO e evolução histórica",
      "itens": [
       "SO: conjunto de rotinas que gerencia os recursos (processador, memória, E/S, arquivos) e oferece uma interface ao usuário — em texto (<b>shell</b>, interpretador de comandos) ou gráfica (<b>GUI</b>).",
       "<b>Máquina de níveis (camadas)</b>: hardware na base; qualquer camada acima do hardware pode ser vista como uma <b>máquina virtual</b> (abstração).",
       "<mark>1ª geração (1945–1955)</mark>: <b>válvulas</b>, programação em painéis. <mark>2ª (1955–1965)</mark>: <b>transistores</b> e <b>processamento em lote (batch)</b>. <mark>3ª (1965–1980)</mark>: <b>circuitos integrados</b>, surge o conceito pleno de SO — multiprogramação, multiprocessamento, <b>time-sharing</b>, spooling, memória virtual — e o <b>UNIX</b>. <mark>4ª (1980–hoje)</mark>: microcomputadores, redes, sistemas distribuídos (alguns autores já falam em 5ª).",
       "Unix: MULTICS (MIT, Bell Labs, GE, 1965) → Ken Thompson cria o UNICS/Unix (1969, PDP-7). <b>POSIX</b> (IEEE) padronizou chamadas e utilitários. <b>Linux</b>: Linus Torvalds, 1991, inspirado no Minix.",
       "Windows: começa com o <b>MS-DOS</b> (1981, 16 bits, monoprogramável, monousuário, linha de comando). Windows NT: 32 bits, multitarefa preemptiva, multithread, memória virtual, multiprocessamento simétrico.",
       "Licenças: Windows é <mark>proprietário</mark> (código fechado). Linux é <b>software livre</b> (GPL, <b>copyleft</b>: versões modificadas mantêm a mesma licença). “Free” pode significar livre ou gratuito."
      ]
     },
     {
      "h": "Tipos de sistemas operacionais",
      "itens": [
       "<mark>Monoprogramáveis/monotarefa</mark>: um programa por vez com todos os recursos → desperdício de CPU enquanto espera E/S.",
       "<mark>Multiprogramáveis/multitarefa</mark>: recursos compartilhados entre vários programas e usuários; enquanto um espera E/S, outro usa a CPU. <b>Grau de multiprogramação</b> = quantidade de processos na memória.",
       "Tipos de multiprogramáveis: <b>batch/lote</b> (tarefas de rotina sem interação do usuário), <mark>tempo compartilhado</mark> (vários usuários interativos, remotos, ao mesmo tempo, cada um com a impressão de exclusividade) e <b>tempo real</b> (resposta dentro de limites rígidos de tempo — o tempo é parâmetro fundamental).",
       "<mark>Múltiplos processadores</mark>: dois ou mais processadores. <b>Fortemente acoplados</b>: compartilham a memória principal e um único SO (SMP simétrico, assimétrico). <b>Fracamente acoplados</b>: cada sistema com sua memória e SO, ligados por rede (sistemas de rede e distribuídos)."
      ]
     },
     {
      "h": "Estrutura: kernel, system calls e modos",
      "itens": [
       "<mark>Kernel (núcleo)</mark>: conjunto de rotinas centrais do SO. Funções: tratamento de interrupções e exceções; criação e eliminação de processos e threads; <b>sincronização e comunicação entre processos e threads</b>; escalonamento; gerência de memória, sistema de arquivos e E/S; redes; contabilização; auditoria e segurança.",
       "<mark>System calls (chamadas de sistema)</mark>: porta de entrada para os serviços do kernel. Tipos: gerência de processos (<code>fork</code>, <code>waitpid</code>, <code>execve</code>, <code>exit</code>), de arquivos, de diretórios, e outras. <code>waitpid</code> = gerência de <b>processos</b>.",
       "<mark>Modo usuário</mark>: acesso limitado ao hardware, instruções não privilegiadas. <mark>Modo kernel</mark>: acesso total, instruções privilegiadas; só o SO executa nele.",
       "Arquiteturas: <b>monolítica</b> (tudo no núcleo), <b>em camadas</b>, <b>microkernel</b> (núcleo mínimo, serviços em modo usuário), <b>máquina virtual</b>.",
       "Termos distratores: <b>shell</b> = interface; <b>bootstrap</b> = inicialização; <b>middleware</b> = ponte entre aplicações; <b>socket</b> = ponto de comunicação de rede."
      ]
     },
     {
      "h": "Linux na prática (usuário)",
      "itens": [
       "<mark>root</mark>: superusuário, com todos os privilégios. <code>sudo</code> executa como root.",
       "Distribuições (Ubuntu, Debian, Fedora…) = kernel Linux + utilitários GNU + programas.",
       "Comandos básicos: <code>pwd</code>, <code>ls</code>, <code>cd</code>, <code>mkdir</code>, <code>man</code>."
      ]
     }
    ],
    "pegadinhas": [
     "Transistores → 2ª geração; circuitos integrados, multiprogramação e UNIX → 3ª.",
     "Tempo compartilhado = vários usuários interativos; batch = sem interação; tempo real = prazo rígido.",
     "Kernel ≠ shell. O shell é a interface; o kernel é o núcleo.",
     "Fortemente acoplado: memória e SO compartilhados. Fracamente: cada um com os seus.",
     "Windows: proprietário. Copyleft é característica de licenças livres (GPL).",
     "Criar/eliminar <b>arquivos</b> é do sistema de arquivos; criar/eliminar processos e threads é do kernel."
    ],
    "flash": [
     [
      "Kernel",
      "Núcleo do SO: rotinas centrais que gerenciam recursos."
     ],
     [
      "System call",
      "Chamada que uma aplicação faz para usar um serviço do kernel."
     ],
     [
      "Modo kernel × usuário",
      "Acesso total e instruções privilegiadas × acesso restrito."
     ],
     [
      "1ª / 2ª / 3ª / 4ª geração",
      "Válvulas / transistores e lote / CIs, multiprogramação e UNIX / micros e redes."
     ],
     [
      "Tempo compartilhado",
      "Vários usuários interativos simultâneos."
     ],
     [
      "Tempo real",
      "Resposta dentro de limites rígidos de tempo."
     ],
     [
      "Fortemente acoplado",
      "Processadores compartilham memória e um único SO."
     ],
     [
      "root",
      "Superusuário do Linux."
     ],
     [
      "POSIX",
      "Padrão IEEE que unificou chamadas e utilitários Unix."
     ],
     [
      "Linux",
      "Linus Torvalds, 1991, baseado no Minix."
     ],
     [
      "Copyleft",
      "Obra derivada mantém a mesma licença livre (GPL)."
     ]
    ],
    "quiz": [
     {
      "q": "No Linux, qual é o usuário predefinido com maiores privilégios?",
      "op": [
       "master",
       "admin",
       "maint",
       "root"
      ],
      "c": 3,
      "exp": "root é o superusuário."
     },
     {
      "q": "O objetivo principal de um sistema de tempo compartilhado é:",
      "op": [
       "Processar tarefas de rotina sem interação do usuário",
       "Permitir que múltiplos usuários remotos executem tarefas simultaneamente",
       "Ter o tempo como parâmetro fundamental",
       "Tratar milhares de transações por segundo"
      ],
      "c": 1,
      "exp": "Sem interação é batch; tempo como parâmetro fundamental é tempo real."
     },
     {
      "q": "Quanto ao código-fonte, o Windows é classificado como:",
      "op": [
       "Livre",
       "Aberto",
       "Copyleft",
       "Proprietário"
      ],
      "c": 3,
      "exp": "A Microsoft detém o código e impõe termos de licença."
     },
     {
      "q": "O termo que designa o núcleo de um sistema operacional é:",
      "op": [
       "shell",
       "kernel",
       "bootstrap",
       "middleware"
      ],
      "c": 1,
      "exp": "Shell é a interface; bootstrap, a inicialização; middleware, a ponte entre aplicações."
     },
     {
      "q": "Qual é uma função do kernel?",
      "op": [
       "Sincronização e comunicação entre processos e threads",
       "Configuração dos aplicativos",
       "Escalonamento de arquivos e pastas",
       "Definir rotas de pacotes"
      ],
      "c": 0,
      "exp": "Está na lista de funções do núcleo citada no material."
     },
     {
      "q": "A chamada num_proc = waitpid(pid, &statloc, options) é do tipo:",
      "op": [
       "Gerenciamento de arquivos",
       "Gerenciamento de processos",
       "Gerenciamento de diretórios",
       "Gerenciamento de memória"
      ],
      "c": 1,
      "exp": "waitpid espera o término de um processo filho."
     },
     {
      "q": "Qual evento marcou a transição da 2ª para a 3ª geração?",
      "op": [
       "Uso de válvulas",
       "Surgimento dos transistores",
       "Estabelecimento da multiprogramação e do multiprocessamento, com circuitos integrados",
       "Popularização dos smartphones"
      ],
      "c": 2,
      "exp": "A 3ª geração trouxe CIs, multiprogramação, time-sharing e o UNIX."
     },
     {
      "q": "Em sistemas fortemente acoplados:",
      "op": [
       "Cada processador tem sua própria memória e seu SO",
       "Os processadores compartilham a memória principal, gerenciados por um único SO",
       "Não há comunicação entre processadores",
       "Só existe um processador"
      ],
      "c": 1,
      "exp": "Fracamente acoplados têm memória e SO próprios, ligados por rede."
     },
     {
      "q": "Sobre a evolução do Unix, é correto afirmar:",
      "op": [
       "Sempre foi monoprogramável e monousuário",
       "Introduziu multitarefa e multiusuário e originou diversas variantes",
       "Foi criado pela Microsoft",
       "Não influenciou o Linux"
      ],
      "c": 1,
      "exp": "Surgiu do MULTICS, foi padronizado pelo POSIX e inspirou o Linux."
     },
     {
      "q": "Programas de usuário executam em qual modo?",
      "op": [
       "Modo kernel, com acesso total",
       "Modo usuário, com acesso limitado ao hardware",
       "Modo tempo real",
       "Modo supervisor sempre"
      ],
      "c": 1,
      "exp": "Só o SO roda em modo kernel; aplicações usam system calls para acessar recursos."
     }
    ]
   },
   {
    "id": "proc",
    "cor": "var(--t2)",
    "titulo": "Processos e gerência do processador",
    "curto": "Processos e escalonamento",
    "desc": "Modelo de processo, estados, PCB, contexto, fork/exec, threads, escalonamento, sincronização, semáforos, monitores e deadlock.",
    "resumo": [
     {
      "h": "Processos",
      "itens": [
       "<mark>Processo</mark> = programa em execução, com registradores, variáveis e <b>espaço de endereçamento</b>. Dois processos do mesmo programa são execuções distintas.",
       "Componentes: <b>contexto de hardware</b> (registradores), <b>contexto de software</b> (características: PID, prioridade, limites), <b>espaço de endereçamento</b> (memória do programa e dados, protegida dos demais).",
       "<mark>PCB / BCP</mark> (bloco de controle do processo): entrada na tabela de processos com todas as informações do processo.",
       "<mark>Mudança de contexto</mark>: salvar o estado do processo que sai e carregar o do que entra na CPU.",
       "Criação no Linux: <mark>fork()</mark> cria um filho <b>cópia do pai</b>, com <b>espaço de endereçamento próprio</b> (compartilha só os arquivos abertos). <code>execve()</code> troca a imagem para executar outro programa; <code>waitpid()</code> espera o filho; <code>exit()</code> termina.",
       "Término: saída normal (voluntária), saída por erro (voluntária), erro fatal (involuntária), morto por outro processo (<code>kill</code>). <code>pstree</code> mostra a árvore de processos."
      ]
     },
     {
      "h": "Estados",
      "itens": [
       "<mark>Novo → Pronto → Executando → (Bloqueado) → Terminado</mark>.",
       "Transições: (1) novo → pronto; (2) pronto → executando (escalonado); (3) executando → pronto (preempção, fim do quantum); (4) executando → bloqueado (espera E/S ou evento); (5) bloqueado → <b>pronto</b>; (6) executando → terminado.",
       "Quem sai do bloqueado <b>sempre volta para pronto</b>, nunca direto para executando. Processo pronto <b>não</b> está usando a CPU.",
       "<b>CPU-bound</b>: usa muito processador. <b>I/O-bound</b>: passa mais tempo em E/S."
      ]
     },
     {
      "h": "Threads",
      "itens": [
       "<mark>Threads</mark>: linhas de execução concorrentes <b>dentro de um processo</b>, compartilhando o espaço de endereçamento. Um processo pode ter várias.",
       "Vantagens: concorrência dentro do processo, menor custo de criação e troca, melhor uso de múltiplas CPUs."
      ]
     },
     {
      "h": "Escalonamento",
      "itens": [
       "<mark>Escalonador (scheduler)</mark>: decide <b>qual processo pronto recebe a CPU</b>. Objetivo da multiprogramação: manter a CPU ocupada.",
       "<b>Preemptivo</b>: o SO pode interromper o processo. <b>Não preemptivo</b>: o processo usa a CPU até terminar ou bloquear.",
       "<mark>FIFO / FCFS</mark>: ordem de chegada, sem preempção.",
       "<mark>SJF</mark> (menor job primeiro): menor tempo de CPU estimado primeiro; minimiza o tempo médio de espera, mas pode causar <b>starvation</b> dos longos.",
       "<mark>Round Robin</mark>: FIFO com <b>quantum</b> (fatia de tempo); ao fim do quantum o processo volta para o <b>final da fila</b>. Justo; ignora prioridade.",
       "<mark>Prioridade</mark>: executa o de maior prioridade; risco de starvation (resolvido com <b>envelhecimento/aging</b>). No Linux: <code>nice</code> e <code>renice</code> ajustam prioridade.",
       "<mark>Múltiplas filas</mark>: cada fila com uma prioridade (e seu algoritmo); a <b>prioridade da fila</b> define a ordem."
      ]
     },
     {
      "h": "Sincronização e deadlock",
      "itens": [
       "<mark>Condição de corrida</mark>: resultado depende da ordem de acesso a dados compartilhados. <mark>Região crítica</mark>: trecho que acessa o recurso compartilhado. <b>Exclusão mútua</b>: só um processo por vez na região crítica.",
       "<mark>Semáforo</mark> (Dijkstra): <b>variável inteira que conta sinais</b>, com operações atômicas <b>down/P/wait</b> e <b>up/V/signal</b>. Semáforo binário = <b>mutex</b>.",
       "<mark>Monitor</mark>: estrutura de alto nível que garante exclusão mútua automaticamente (só um processo ativo dentro dele).",
       "Comunicação entre processos (IPC): pipes, sinais, memória compartilhada, troca de mensagens.",
       "<mark>Deadlock</mark>: processos esperando uns pelos outros indefinidamente. Quatro condições simultâneas: <b>exclusão mútua</b>, <b>posse e espera</b>, <b>não preempção</b>, <b>espera circular</b>. <b>Starvation</b>: um processo nunca é atendido."
      ]
     }
    ],
    "pegadinhas": [
     "Bloqueado → pronto (nunca direto para executando).",
     "fork(): filho com espaço de endereçamento <b>próprio</b>; compartilha só arquivos abertos.",
     "Round Robin: fim do quantum → volta ao <b>final</b> da fila; não usa prioridade.",
     "Escalonador escolhe qual processo pronto usa a CPU; não distribui memória.",
     "Semáforo é variável inteira que conta sinais, não uma estrutura de armazenamento.",
     "Múltiplas filas: a ordem vem da prioridade da fila.",
     "Thread não é processo com menos controle; é linha de execução dentro de um processo."
    ],
    "flash": [
     [
      "Processo",
      "Programa em execução + contexto + espaço de endereçamento."
     ],
     [
      "PCB",
      "Bloco de controle com as informações do processo."
     ],
     [
      "Contexto de hardware / software",
      "Registradores / características como PID e prioridade."
     ],
     [
      "Estados",
      "Novo, pronto, executando, bloqueado, terminado."
     ],
     [
      "fork() / execve()",
      "Cria cópia do processo / troca a imagem por outro programa."
     ],
     [
      "Thread",
      "Linha de execução concorrente dentro de um processo."
     ],
     [
      "Round Robin",
      "FIFO com quantum; volta ao fim da fila."
     ],
     [
      "SJF",
      "Menor job primeiro; risco de starvation."
     ],
     [
      "Preemptivo",
      "SO pode tirar a CPU do processo."
     ],
     [
      "Semáforo",
      "Inteiro com operações P (down) e V (up)."
     ],
     [
      "Região crítica",
      "Trecho que acessa recurso compartilhado."
     ],
     [
      "4 condições do deadlock",
      "Exclusão mútua, posse e espera, não preempção, espera circular."
     ],
     [
      "nice / renice",
      "Definir / alterar prioridade de processos no Linux."
     ]
    ],
    "quiz": [
     {
      "q": "Sobre threads, é correto afirmar:",
      "op": [
       "Devem ser evitadas, pois não trazem benefício",
       "Não aumentam o desempenho com múltiplas CPUs",
       "Pode haver no máximo uma por processo",
       "São linhas de execução concorrentes dentro de um processo"
      ],
      "c": 3,
      "exp": "Threads compartilham o espaço de endereçamento do processo."
     },
     {
      "q": "No Round Robin, o processo executado é:",
      "op": [
       "O de maior prioridade",
       "O primeiro da fila, até terminar",
       "O primeiro da fila, por um quantum, voltando depois ao final da fila",
       "O que consome menos CPU"
      ],
      "c": 2,
      "exp": "Cada processo recebe uma fatia de tempo, de forma circular."
     },
     {
      "q": "A principal função de um algoritmo de escalonamento é:",
      "op": [
       "Determinar quanto tempo cada processo precisa",
       "Decidir qual processo pronto recebe a CPU",
       "Distribuir memória",
       "Garantir que a CPU nunca fique ociosa"
      ],
      "c": 1,
      "exp": "Sempre que a CPU fica livre, o escalonador escolhe um processo da fila de prontos."
     },
     {
      "q": "Semáforos são:",
      "op": [
       "Estruturas de armazenamento",
       "Programas que controlam outros programas",
       "Variáveis inteiras que contam sinais enviados a elas",
       "Ferramentas de monitoramento"
      ],
      "c": 2,
      "exp": "Com operações atômicas P/V, controlam o acesso a regiões críticas."
     },
     {
      "q": "No escalonamento por múltiplas filas, o que determina a ordem de execução?",
      "op": [
       "O tamanho do processo",
       "A ordem de chegada",
       "A prioridade associada a cada fila",
       "O tempo estimado"
      ],
      "c": 2,
      "exp": "Filas de maior prioridade são atendidas primeiro."
     },
     {
      "q": "Sobre a chamada fork(), é correto afirmar:",
      "op": [
       "Cria um filho que compartilha o espaço de endereçamento do pai",
       "Cria um filho cópia do pai, com espaço de endereçamento próprio",
       "Substitui o programa em execução",
       "Encerra o processo pai"
      ],
      "c": 1,
      "exp": "Só os arquivos abertos são compartilhados; para outro programa usa-se execve()."
     },
     {
      "q": "Sobre os estados de um processo, é correto afirmar:",
      "op": [
       "Processos no estado pronto estão usando a CPU",
       "Um processo que sai do bloqueado deve ir para pronto antes de executar",
       "Todo processo passa pelo estado bloqueado",
       "Do bloqueado vai direto para executando"
      ],
      "c": 1,
      "exp": "Após o evento esperado, o processo volta à fila de prontos."
     },
     {
      "q": "A troca da CPU de um processo para outro, salvando e carregando estados, chama-se:",
      "op": [
       "Swapping",
       "Mudança de contexto",
       "Paginação",
       "Spooling"
      ],
      "c": 1,
      "exp": "Guarda-se o contexto de quem sai e carrega-se o de quem entra."
     },
     {
      "q": "Qual NÃO é uma das quatro condições necessárias para o deadlock?",
      "op": [
       "Exclusão mútua",
       "Posse e espera",
       "Não preempção",
       "Escalonamento Round Robin"
      ],
      "c": 3,
      "exp": "A quarta condição é a espera circular."
     },
     {
      "q": "Para dar mais prioridade a um processo crítico no Linux, um administrador pode usar:",
      "op": [
       "nice/renice",
       "mkdir",
       "chmod",
       "crontab -l"
      ],
      "c": 0,
      "exp": "Esses comandos ajustam a prioridade de escalonamento."
     }
    ]
   },
   {
    "id": "mem",
    "cor": "var(--t3)",
    "titulo": "Gerência de memória",
    "curto": "Memória",
    "desc": "Endereços lógico e físico, MMU, base e limite, relocação, partições, First/Best/Worst Fit, fragmentação, swapping, paginação, substituição de páginas, Linux.",
    "resumo": [
     {
      "h": "Endereçamento e proteção",
      "itens": [
       "<b>Endereço lógico</b> (gerado pelo processo) × <b>endereço físico</b> (na memória real). O espaço lógico pode ser maior que o físico → <b>memória virtual</b>.",
       "<mark>MMU</mark> (Memory Management Unit): hardware que mapeia lógico → físico.",
       "Proteção com <mark>registrador base e limite</mark>: endereço válido se <b>base ≤ endereço &lt; base + limite</b>; fora disso → exceção. Carregar esses registradores é instrução <b>privilegiada</b> (modo kernel). Ex.: base 4000, limite 2000 → 3800 inválido, 5200 válido, 6200 inválido.",
       "<b>Relocação</b>: o registrador base vira registrador de relocação — físico = lógico + base. Ex.: base 14000 e lógico 346 → físico 14346."
      ]
     },
     {
      "h": "Alocação e fragmentação",
      "itens": [
       "Alocação contígua em <b>partições fixas</b> ou <b>variáveis</b>.",
       "Escolha do espaço livre: <mark>First Fit</mark> (primeiro que couber, mais rápido); <mark>Best Fit</mark> (<b>percorre a lista toda</b> e escolhe o <b>menor</b> que caiba); <mark>Worst Fit</mark> (o <b>maior</b> espaço); Next Fit (continua de onde parou).",
       "<mark>Fragmentação externa</mark>: pedaços livres <b>entre</b> as áreas alocadas que, somados, bastariam, mas não são contíguos. Solução: <mark>compactação</mark> (mover blocos ocupados para uma extremidade).",
       "<mark>Fragmentação interna</mark>: sobra <b>dentro</b> do bloco alocado (bloco maior que o necessário; também na última página).",
       "<mark>Swapping</mark>: mover processos inteiros entre memória principal e disco (swap out / swap in), aumentando o grau de multiprogramação."
      ]
     },
     {
      "h": "Memória virtual e paginação",
      "itens": [
       "Memória virtual: processo dividido em blocos mapeados por tabelas; só parte dele fica na memória principal.",
       "<mark>Paginação</mark>: espaço lógico em <b>páginas</b>; memória física em <b>molduras/quadros (frames)</b> do mesmo tamanho (potência de 2). A <b>tabela de páginas</b> associa página → quadro. Não tem fragmentação externa; pode ter interna na última página.",
       "Bits na tabela: proteção (leitura/escrita) e <b>válido/inválido</b> (a página pertence ao espaço do processo / está na memória).",
       "<mark>Falta de página (page fault)</mark>: página referenciada não está na memória → SO busca no disco.",
       "<b>Segmentação</b>: divisão em segmentos lógicos de tamanhos variáveis (código, dados, pilha).",
       "<b>TLB</b>: cache de traduções. <b>Working set</b>: páginas usadas recentemente. <b>Thrashing</b>: excesso de page faults, o sistema só troca páginas.",
       "<mark>Substituição de páginas</mark>: <b>FIFO</b> (sai a que está há <b>mais tempo</b> na memória), <b>LRU</b> (menos recentemente usada), <b>LFU</b> (menos frequentemente usada), <b>NRU</b> (não usada recentemente), <b>Ótimo</b> (a que demorará mais a ser usada — teórico), <b>relógio/segunda chance</b>."
      ]
     },
     {
      "h": "Memória no Linux",
      "itens": [
       "<code>free</code>: relatório de uso de memória RAM e swap (<code>free -h</code>). <code>vmstat</code>: estatísticas de memória virtual, processos e CPU. <code>top</code>/<code>htop</code>: processos em tempo real. <code>swapon</code>: ativa/lista áreas de swap. <code>getconf PAGESIZE</code>: tamanho da página."
      ]
     }
    ],
    "pegadinhas": [
     "Endereço válido: base ≤ end &lt; base + limite.",
     "Compactação resolve fragmentação <b>externa</b>; First/Best/Worst Fit são políticas de alocação, não de correção.",
     "Best Fit = menor bloco que caiba (percorre tudo). Worst Fit = maior.",
     "Swapping move processos inteiros; buffering é armazenamento temporário de dados em trânsito.",
     "FIFO de páginas retira a mais <b>antiga</b>; LRU, a usada há mais tempo; LFU, a menos usada.",
     "Relatório rápido de memória: <code>free</code>."
    ],
    "flash": [
     [
      "MMU",
      "Hardware que traduz endereço lógico em físico."
     ],
     [
      "Base e limite",
      "Válido se base ≤ end &lt; base + limite."
     ],
     [
      "Relocação",
      "Físico = lógico + registrador de relocação."
     ],
     [
      "First / Best / Worst Fit",
      "Primeiro que cabe / menor que cabe / maior espaço."
     ],
     [
      "Fragmentação externa",
      "Espaços livres entre blocos, não contíguos."
     ],
     [
      "Fragmentação interna",
      "Sobra dentro do bloco alocado."
     ],
     [
      "Compactação",
      "Junta os blocos ocupados, criando um grande espaço livre."
     ],
     [
      "Swapping",
      "Troca processos entre RAM e disco."
     ],
     [
      "Página × moldura",
      "Bloco lógico × bloco físico de mesmo tamanho."
     ],
     [
      "Page fault",
      "Página referenciada fora da memória principal."
     ],
     [
      "FIFO × LRU",
      "Sai a mais antiga × sai a usada há mais tempo."
     ],
     [
      "Thrashing",
      "Excesso de page faults."
     ],
     [
      "free / vmstat",
      "Uso de memória / estatísticas de memória virtual."
     ]
    ],
    "quiz": [
     {
      "q": "Para eliminar a fragmentação externa, reorganizando a memória, usa-se:",
      "op": [
       "Compactação",
       "First Fit",
       "Best Fit",
       "Last Fit"
      ],
      "c": 0,
      "exp": "As demais são políticas de alocação e não reorganizam a memória."
     },
     {
      "q": "A técnica que move processos entre a memória principal e o disco para liberar espaço é:",
      "op": [
       "Buffering",
       "Defragging",
       "Offset",
       "Swapping"
      ],
      "c": 3,
      "exp": "Swap out/swap in permitem mais processos que a memória física comportaria."
     },
     {
      "q": "Qual comando gera um relatório rápido de uso de memória no Linux?",
      "op": [
       "vmstat",
       "getconf PAGESIZE",
       "swapon",
       "free"
      ],
      "c": 3,
      "exp": "free mostra RAM e swap usadas e livres."
     },
     {
      "q": "A política de substituição que retira as páginas que estão há mais tempo na memória é:",
      "op": [
       "LIFO",
       "FIFO",
       "LFU",
       "LRU"
      ],
      "c": 1,
      "exp": "FIFO olha o tempo de carga; LRU, o último uso; LFU, a frequência."
     },
     {
      "q": "A função do algoritmo Best Fit é:",
      "op": [
       "Percorrer a lista inteira e escolher o menor segmento livre adequado",
       "Escolher o maior espaço",
       "Buscar o primeiro espaço suficiente",
       "Manter lista de tamanhos mais pedidos"
      ],
      "c": 0,
      "exp": "Minimiza a sobra, mas pode gerar pequenos buracos."
     },
     {
      "q": "Base = 4000 e limite = 2000. Julgue: I. 3800 acessa a memória. II. 6200 é bloqueado com exceção. III. 5200 é permitido.",
      "op": [
       "Apenas I",
       "Apenas II e III",
       "Apenas I e III",
       "I, II e III"
      ],
      "c": 1,
      "exp": "Válido de 4000 até 5999; 3800 e 6200 estão fora."
     },
     {
      "q": "A fragmentação que ocorre dentro de um bloco alocado maior que o necessário é:",
      "op": [
       "Externa",
       "Interna",
       "Lógica",
       "Virtual"
      ],
      "c": 1,
      "exp": "Na paginação, pode ocorrer na última página do processo."
     },
     {
      "q": "Na paginação, a memória física é dividida em:",
      "op": [
       "Segmentos de tamanho variável",
       "Molduras (quadros) do mesmo tamanho das páginas",
       "Partições fixas de tamanhos diferentes",
       "Setores de disco"
      ],
      "c": 1,
      "exp": "A tabela de páginas associa cada página a uma moldura."
     },
     {
      "q": "Quando um processo referencia uma página que não está na memória principal, ocorre:",
      "op": [
       "Thrashing",
       "Page fault (falta de página)",
       "Deadlock",
       "Compactação"
      ],
      "c": 1,
      "exp": "O SO busca a página no disco; thrashing é o excesso disso."
     },
     {
      "q": "O componente de hardware que traduz endereços lógicos em físicos é:",
      "op": [
       "TLB",
       "MMU",
       "PCB",
       "BIOS"
      ],
      "c": 1,
      "exp": "A TLB é apenas uma cache de traduções usada pela MMU."
     }
    ]
   },
   {
    "id": "arq",
    "cor": "var(--t4)",
    "titulo": "Sistema de arquivos",
    "curto": "Sistema de arquivos",
    "desc": "Arquivos e diretórios, caminhos, métodos de alocação, i-nodes, FAT, ext e journaling, VFS, partições e comandos Linux.",
    "resumo": [
     {
      "h": "Arquivos e diretórios",
      "itens": [
       "Exigências: armazenar muita informação, <b>persistência</b> após o processo terminar e acesso concorrente.",
       "Arquivo = unidade lógica de informação criada por processos, identificada por nome (extensão pode ser só convenção).",
       "Organização: sequência desestruturada de bytes (a mais simples, usada por Unix/Windows), registros de tamanho fixo, árvore de registros. Acesso sequencial ou <b>aleatório/direto</b> (padrão nos sistemas modernos).",
       "Tipos: arquivos regulares (<b>texto/ASCII</b> ou <b>binários</b>), diretórios, especiais.",
       "Diretórios: <b>nível único</b> (sem nomes repetidos), <b>dois níveis</b> (master file directory, um por usuário), <mark>árvore (hierárquico)</mark> — o mais usado.",
       "<mark>Caminho absoluto</mark>: parte da raiz (<code>/home/ana/a.txt</code>). <mark>Caminho relativo</mark>: parte do diretório de trabalho. Entradas especiais: <code>.</code> (atual) e <code>..</code> (pai)."
      ]
     },
     {
      "h": "Implementação",
      "itens": [
       "<mark>Alocação contígua</mark>: blocos sequenciais; basta o primeiro bloco e o tamanho. Rápida, mas gera fragmentação externa.",
       "<mark>Alocação encadeada</mark>: cada bloco aponta para o seguinte. <b>FAT</b> (tabela de alocação de arquivos) guarda esse encadeamento numa tabela na memória.",
       "<mark>Alocação indexada / i-node</mark>: o <b>i-node</b> é uma estrutura (bloco) com os <b>atributos</b> do arquivo e os <b>endereços dos blocos de dados</b>. Só é carregado na memória quando o arquivo é aberto.",
       "Gerência de espaço livre: mapa de bits ou lista encadeada de blocos livres."
      ]
     },
     {
      "h": "Sistemas de arquivos no Linux",
      "itens": [
       "<mark>VFS</mark> (sistema de arquivos virtual): camada que dá interface única para vários sistemas de arquivos. Objetos: <b>superbloco</b> (um sistema de arquivos inteiro), <b>i-node</b> (um arquivo individual), <b>dentry</b> (uma entrada de diretório, componente do caminho) e <b>file</b> (arquivo aberto).",
       "Família <b>ext</b>: ext2 (sem journaling), <b>ext3</b> (acrescenta <mark>journaling</mark>), <b>ext4</b> (maior capacidade e desempenho). Journaling registra as operações num log antes de efetivá-las, facilitando a recuperação após falhas.",
       "Outros: FAT/FAT32, exFAT, NTFS (Windows), XFS, Btrfs.",
       "Discos e partições: tabela <b>MBR</b> (até 4 primárias) ou <b>GPT</b>. Ferramentas: <code>fdisk</code> (particionar), <code>mkfs</code> (formatar, ex.: <code>mkfs.ext4</code>), <code>mount</code>/<code>umount</code> (montar), <code>/etc/fstab</code> (montagem automática), <code>lsblk</code>, <code>df</code>."
      ]
     },
     {
      "h": "Comandos de arquivos no Linux",
      "itens": [
       "Diretórios: <code>pwd</code>, <code>cd</code>, <code>ls</code>, <code>mkdir</code> (cria), <code>rmdir</code> (remove diretório <b>vazio</b>).",
       "Arquivos: <code>cp</code>, <code>mv</code> (move/renomeia), <code>rm</code>, <code>touch</code>, <code>cat</code>, <code>tail -f</code> (acompanha o final), <code>ln -s</code> (link simbólico).",
       "<mark>rm -rf dir</mark>: remove diretório e todo o conteúdo (-r recursivo, -f força).",
       "Editor <b>nano</b>: <code>Ctrl+O</code> salva (write Out), <code>Ctrl+X</code> sai, <code>Ctrl+W</code> busca, <code>Ctrl+G</code> ajuda.",
       "Permissões <code>rwx</code> para dono, grupo e outros; <code>chmod</code> altera (ex.: <code>chmod 755</code>, <code>chmod u+x</code>)."
      ]
     }
    ],
    "pegadinhas": [
     "i-node guarda atributos e endereços dos blocos; ponteiro para o bloco seguinte é alocação encadeada; sequência na FAT é FAT.",
     "Superbloco = sistema de arquivos inteiro; i-node = arquivo; dentry = entrada de diretório.",
     "rmdir só remove diretório vazio; para tudo, rm -rf.",
     "No nano, Ctrl+O salva; Ctrl+X sai.",
     "Journaling surgiu no ext3 (ext2 não tem).",
     "“I PORQUE II”: mkdir e rmdir criarem/removerem diretórios não justifica que cd, ls e pwd manipulem diretórios."
    ],
    "flash": [
     [
      "Caminho absoluto × relativo",
      "A partir da raiz × a partir do diretório atual."
     ],
     [
      "Alocação contígua",
      "Blocos sequenciais; início + tamanho."
     ],
     [
      "Alocação encadeada / FAT",
      "Cada bloco aponta para o próximo / tabela com o encadeamento."
     ],
     [
      "i-node",
      "Atributos + endereços dos blocos do arquivo."
     ],
     [
      "Superbloco",
      "Descreve um sistema de arquivos inteiro."
     ],
     [
      "dentry",
      "Entrada de diretório (componente do caminho)."
     ],
     [
      "VFS",
      "Interface única para vários sistemas de arquivos."
     ],
     [
      "Journaling",
      "Log das operações para recuperação após falhas (ext3/ext4)."
     ],
     [
      "fdisk / mkfs / mount",
      "Particionar / formatar / montar."
     ],
     [
      "/etc/fstab",
      "Montagens automáticas."
     ],
     [
      "rm -rf",
      "Remove diretório e conteúdo, recursivo e forçado."
     ],
     [
      "nano: salvar / sair",
      "Ctrl+O / Ctrl+X."
     ]
    ],
    "quiz": [
     {
      "q": "Qual comando apaga um diretório e todo o seu conteúdo?",
      "op": [
       "ls -lr provas",
       "mv provas",
       "rm -rf provas",
       "tail -f provas"
      ],
      "c": 2,
      "exp": "-r é recursivo e -f força a remoção."
     },
     {
      "q": "Sobre o i-node, é correto afirmar:",
      "op": [
       "Cada bloco aponta para o seguinte",
       "Os dados ficam em blocos contíguos",
       "A sequência de blocos fica na FAT",
       "É um bloco com os atributos e os endereços dos blocos de dados do arquivo"
      ],
      "c": 3,
      "exp": "As outras opções descrevem alocação encadeada, contígua e FAT."
     },
     {
      "q": "I – cd, ls, pwd, mkdir e rmdir servem para manipular diretórios, PORQUE II – mkdir e rmdir criam e removem diretórios.",
      "op": [
       "Ambas verdadeiras e II justifica I",
       "Ambas verdadeiras, mas II não justifica I",
       "I verdadeira e II falsa",
       "Ambas falsas"
      ],
      "c": 1,
      "exp": "II fala só de dois comandos; não explica os demais."
     },
     {
      "q": "Sobre a estrutura do sistema de arquivos no Linux: I. i-node = arquivo individual. II. Superbloco = sistema de arquivos inteiro. III. Dentry = sistema de arquivos particionado.",
      "op": [
       "I, II e III",
       "Apenas I e III",
       "Apenas I e II",
       "Apenas II"
      ],
      "c": 2,
      "exp": "Dentry corresponde a uma entrada de diretório."
     },
     {
      "q": "No editor nano, para salvar o arquivo usa-se:",
      "op": [
       "Ctrl+G",
       "Ctrl+O",
       "Ctrl+X",
       "Ctrl+W"
      ],
      "c": 1,
      "exp": "Ctrl+X sai; Ctrl+W busca; Ctrl+G é ajuda."
     },
     {
      "q": "O caminho /home/ana/relatorio.txt é:",
      "op": [
       "Relativo",
       "Absoluto",
       "Simbólico",
       "Inválido"
      ],
      "c": 1,
      "exp": "Começa na raiz (/)."
     },
     {
      "q": "Na alocação contígua, para localizar um arquivo o sistema precisa:",
      "op": [
       "Do endereço do primeiro bloco e da extensão em blocos",
       "De um ponteiro em cada bloco",
       "Da FAT",
       "De um i-node por bloco"
      ],
      "c": 0,
      "exp": "É rápida, mas sofre fragmentação externa."
     },
     {
      "q": "O recurso do ext3/ext4 que registra operações em log para facilitar a recuperação após falhas é:",
      "op": [
       "Swapping",
       "Journaling",
       "Paginação",
       "Spooling"
      ],
      "c": 1,
      "exp": "O ext2 não tinha journaling."
     },
     {
      "q": "A sequência para usar um novo disco no Linux é:",
      "op": [
       "mount → mkfs → fdisk",
       "fdisk → mkfs → mount",
       "mkfs → fdisk → mount",
       "chmod → mount → fdisk"
      ],
      "c": 1,
      "exp": "Particionar, formatar e montar."
     },
     {
      "q": "A camada do Linux que oferece interface única para diferentes sistemas de arquivos é o:",
      "op": [
       "VFS",
       "MBR",
       "PCB",
       "TLB"
      ],
      "c": 0,
      "exp": "Virtual File System, com objetos superbloco, i-node, dentry e file."
     }
    ]
   },
   {
    "id": "auto",
    "cor": "var(--t5)",
    "titulo": "Automatizando tarefas no Linux",
    "curto": "CRON e shell script",
    "desc": "CRON e crontab, formato dos campos, /etc/crontab, permissões, shell script, variáveis, read, if, testes, laços e expressões regulares.",
    "resumo": [
     {
      "h": "CRON",
      "itens": [
       "<mark>CRON</mark>: executa comandos em dias e horários definidos, sem intervenção do usuário. Cada usuário tem seu crontab independente.",
       "<code>crontab -e</code> (editar), <code>crontab -l</code> (listar), <code>crontab -r</code> (remover). No nano, Ctrl+X para sair.",
       "<mark>Cinco campos</mark>: <b>minuto</b> (0–59) · <b>hora</b> (0–23) · <b>dia do mês</b> (1–31) · <b>mês</b> (1–12) · <b>dia da semana</b> (0–7; 0 e 7 = domingo, 1 = segunda) · comando.",
       "Símbolos: <code>*</code> = todos os valores; <code>,</code> = lista (0,15,30,45); <code>-</code> = intervalo (8-17, 1-5); <code>/</code> = passo (<code>*/30</code> = a cada 30).",
       "Exemplos: <code>30 17 * 12 *</code> → todo dia de dezembro às 17h30. <code>30 17 * 3 1</code> → segundas de março às 17h30. <code>0,30 8-17 * * 1-5</code> → de hora em hora e meia, das 8 às 17, de segunda a sexta. <code>0 */2 * * *</code> → a cada 2 horas. <mark><code>*/30 * * * 1</code></mark> → a cada 30 minutos, às segundas.",
       "<code>/etc/crontab</code>: crontab do sistema, com um <b>campo a mais (usuário)</b>. Diretórios <code>/etc/cron.hourly</code>, <code>daily</code>, <code>weekly</code>, <code>monthly</code>.",
       "<mark>Permissões</mark>: o usuário do crontab precisa ter as permissões necessárias para executar o comando (ex.: ler a origem e escrever no destino de um <code>tar</code>). Não use <code>sudo</code> no crontab: ele fica esperando uma senha que ninguém digitará."
      ]
     },
     {
      "h": "Shell script",
      "itens": [
       "Primeira linha (<b>shebang</b>): <mark><code>#!/bin/bash</code></mark> define o interpretador.",
       "Dar permissão de execução: <mark><code>chmod +x script</code></mark> (ou <code>chmod u+x</code>). Executar: <code>./script</code> (./ = diretório atual).",
       "<code>echo</code> (imprime; <code>-n</code> sem quebra de linha; <code>-e</code> caracteres especiais), <code>date +%H:%M</code>, <code>$(comando)</code> (substituição de comando), <code>sleep</code>, <code>clear</code>.",
       "<code>read var</code>: espera o usuário digitar (e ENTER); <code>read -s</code> não mostra o que é digitado.",
       "<code>exit n</code>: encerra com código de retorno (0 = sucesso). Sem valor, retorna o do último comando. Linhas com <code>#</code> são comentários."
      ]
     },
     {
      "h": "Variáveis, decisões e laços",
      "itens": [
       "Variável: <code>nome=valor</code> (sem espaços); uso: <code>$nome</code>. Parâmetros: <code>$1</code>, <code>$2</code>…, <code>$#</code> (quantidade), <code>$?</code> (retorno do último comando).",
       "<code>if [[ condição ]]; then … elif … else … fi</code>.",
       "Testes de string: <mark><code>-n</code> = não vazia</mark>; <code>-z</code> = vazia; <code>==</code>, <code>!=</code>. Numéricos: <code>-eq</code>, <code>-ne</code>, <code>-lt</code>, <code>-le</code>, <code>-gt</code>, <code>-ge</code>. Arquivos: <code>-f</code> (arquivo), <code>-d</code> (diretório), <code>-e</code> (existe).",
       "Validar que o usuário digitou algo: <code>if [[ -n $palavra ]]</code>.",
       "<mark>Expressões regulares</mark>: <code>[[ $x =~ ^[0-9]{3}$ ]]</code> → exatamente 3 dígitos (<code>^</code> início, <code>$</code> fim, <code>{3}</code> repetição).",
       "Laços: <code>for i in lista; do … done</code>, <code>while condição; do … done</code>; <code>case $x in … esac</code>. Aritmética: <code>$(( a + b ))</code>."
      ]
     }
    ],
    "pegadinhas": [
     "Ordem do crontab: <b>minuto, hora</b>, dia do mês, mês, dia da semana.",
     "“A cada 30 minutos” é <code>*/30</code> no campo minuto; <code>30</code> sozinho é “no minuto 30”.",
     "Dia da semana: 1 = segunda, 0 ou 7 = domingo.",
     "/etc/crontab tem o campo extra de usuário; o crontab do usuário não.",
     "<code>-n</code> testa não vazia; <code>-z</code> testa vazia.",
     "chmod +x dá permissão de execução; quem define o interpretador é o shebang.",
     "<code>^[0-9]{3}$</code> = exatamente 3 dígitos, não “pelo menos 3”.",
     "sudo dentro do crontab trava esperando senha."
    ],
    "flash": [
     [
      "Campos do crontab",
      "min hora dia-do-mês mês dia-da-semana comando."
     ],
     [
      "crontab -e / -l",
      "Editar / listar tarefas do usuário."
     ],
     [
      "*/30 no minuto",
      "A cada 30 minutos."
     ],
     [
      "Dia da semana 1 / 0 ou 7",
      "Segunda / domingo."
     ],
     [
      "/etc/crontab",
      "Crontab do sistema, com campo de usuário."
     ],
     [
      "Shebang",
      "#!/bin/bash — define o interpretador."
     ],
     [
      "chmod +x",
      "Permite executar o script."
     ],
     [
      "$(comando)",
      "Substitui pela saída do comando."
     ],
     [
      "-n / -z",
      "String não vazia / vazia."
     ],
     [
      "-eq -gt -lt",
      "Igual / maior / menor (números)."
     ],
     [
      "$1, $#, $?",
      "1º parâmetro, quantidade, retorno do último comando."
     ],
     [
      "^[0-9]{3}$",
      "Exatamente 3 dígitos."
     ]
    ],
    "quiz": [
     {
      "q": "Agendamento a cada 30 minutos, apenas às segundas-feiras:",
      "op": [
       "30 * * * 2 comando",
       "*/30 * * * 1 comando",
       "0,30 0 * * * comando",
       "30 0 * * 1 comando"
      ],
      "c": 1,
      "exp": "*/30 no minuto e 1 (segunda) no dia da semana."
     },
     {
      "q": "Qual comparador valida que o usuário digitou algo na variável palavra?",
      "op": [
       "if [[ -n $palavra ]]",
       "if [[ -z $palavra ]]",
       "if [[ !palavra ]]",
       "if [[ $palavra = ]]"
      ],
      "c": 0,
      "exp": "-n é verdadeiro quando a string não está vazia."
     },
     {
      "q": "Qual o efeito de chmod +x script.sh?",
      "op": [
       "Verifica a sintaxe",
       "Remove comentários",
       "Agenda no cron",
       "Concede permissão para o arquivo ser executado"
      ],
      "c": 3,
      "exp": "Quem define o interpretador é a linha #!/bin/bash."
     },
     {
      "q": "Por que o usuário precisa das permissões corretas ao configurar uma tarefa no cron?",
      "op": [
       "Para evitar tarefas duplicadas",
       "Para editar o crontab",
       "Para ter as permissões necessárias para executar o comando",
       "Para limitar o número de tarefas"
      ],
      "c": 2,
      "exp": "O comando roda com os privilégios do dono do crontab."
     },
     {
      "q": "O objetivo da expressão ^[0-9]{3}$ num script de validação é:",
      "op": [
       "Verificar se o input tem exatamente 3 dígitos",
       "Confirmar pelo menos 3 dígitos",
       "Checar mais de 3 dígitos",
       "Verificar se é menor que 100"
      ],
      "c": 0,
      "exp": "^ e $ ancoram início e fim; {3} exige exatamente três."
     },
     {
      "q": "A linha 30 17 * 12 * /bin/comando executa:",
      "op": [
       "Dia 12 de cada mês às 17h30",
       "Todos os dias de dezembro às 17h30",
       "Às 30h17",
       "A cada 30 minutos em dezembro"
      ],
      "c": 1,
      "exp": "Minuto 30, hora 17, qualquer dia, mês 12, qualquer dia da semana."
     },
     {
      "q": "A primeira linha #!/bin/bash de um script serve para:",
      "op": [
       "Comentar o script",
       "Indicar o interpretador que executará o script",
       "Dar permissão de execução",
       "Agendar a execução"
      ],
      "c": 1,
      "exp": "É o shebang, a “palavra mágica” que identifica o script."
     },
     {
      "q": "Qual a diferença do arquivo /etc/crontab para o crontab de um usuário?",
      "op": [
       "Não existe diferença",
       "Tem um campo a mais indicando o usuário que executará o comando",
       "Não aceita o caractere *",
       "Só aceita scripts em /tmp"
      ],
      "c": 1,
      "exp": "Por definir a configuração do sistema, informa o usuário em cada linha."
     },
     {
      "q": "Uma linha 0 15 1 * * sudo /root/apagar no crontab do usuário luiz não funciona porque:",
      "op": [
       "O mês está errado",
       "O sudo aguarda uma senha que não será fornecida",
       "O cron não aceita o dia 1",
       "O minuto deveria ser 15"
      ],
      "c": 1,
      "exp": "O script fica esperando indefinidamente pela senha."
     },
     {
      "q": "No script, o comando read sem parâmetros:",
      "op": [
       "Lê um arquivo",
       "Suspende a execução até o usuário teclar ENTER",
       "Limpa a tela",
       "Encerra o script"
      ],
      "c": 1,
      "exp": "Com uma variável (read nome), armazena o que foi digitado."
     }
    ]
   }
  ]
 },
 {
  "id": "ihc",
  "nome": "Engenharia de Usabilidade",
  "temas": [
   {
    "id": "ergo",
    "cor": "var(--t1)",
    "titulo": "Ergonomia em interação humano-computador",
    "curto": "Ergonomia e usabilidade",
    "desc": "Ergonomia e seus domínios, usabilidade (ISO 9241-11 e ISO 9126), ergodesign, engenharia semiótica e os oito critérios ergonômicos.",
    "resumo": [
     {
      "h": "Ergonomia e usabilidade",
      "itens": [
       "<mark>Ergonomia</mark>: do grego <i>ergon</i> (trabalho) + <i>nomos</i> (leis, normas). Estuda as interações entre pessoas e sistemas para otimizar o <b>bem-estar humano e o desempenho</b> (Abergo). Adapta a máquina ao operador.",
       "Domínios: <b>física</b> (anatomia, antropometria, biomecânica), <b>cognitiva</b> (percepção, atenção, memória, controle motor) e <b>organizacional</b> (sistemas sociotécnicos, estruturas, processos).",
       "Na interface o usuário se relaciona de forma física, perceptiva e cognitiva. Princípio: reduzir a carga cognitiva — o usuário <b>não</b> deve precisar memorizar informações; comandos simples e naturais.",
       "<mark>ISO 9241-11</mark> (ergonomia/IHC): usabilidade é a medida em que um produto pode ser usado por usuários específicos para alcançar objetivos com <b>efetividade (eficácia), eficiência e satisfação</b> num contexto de uso específico. <i>Atenção: um desafio do Praticando dá como gabarito “ISO 9241-12”; se aparecer assim na prova, a resposta esperada é a família <b>ISO 9241</b>.</i>",
       "<mark>ISO 9126</mark> (qualidade de produto de software): usabilidade é a capacidade de ser <b>compreendido, aprendido, utilizado e atraente</b> em condições específicas.",
       "Eficácia = atingir o objetivo; eficiência = recursos gastos (tempo, desvios, erros); satisfação = a mais difícil de medir (subjetiva).",
       "<mark>Barreiras na usabilidade</mark>: problemas que <b>impedem o usuário de concluir o trabalho sem ajuda externa</b>."
      ]
     },
     {
      "h": "Ergodesign e engenharia semiótica",
      "itens": [
       "<mark>Ergodesign</mark>: integra ergonomia e design para unir usabilidade e estética (Leong Yap, 1997). Está embutido em usabilidade, design centrado no usuário, UX e design emocional.",
       "<mark>Engenharia semiótica</mark>: vê a IHC como <b>comunicação entre designer e usuário</b> mediada pela interface. Métodos: <b>MAC</b> (método de avaliação de comunicabilidade) e <b>MIS</b> (método de inspeção semiótica)."
      ]
     },
     {
      "h": "Os oito critérios ergonômicos (Bastien e Scapin)",
      "itens": [
       "<mark>1. Condução</mark>: guiar o usuário, principalmente o <b>inexperiente</b>. Subcritérios: <b>convite</b>, <b>agrupamento e distinção</b> (por local e formato), <b>legibilidade</b> (contraste, fonte, espaçamento) e <b>feedback imediato</b>. Ex.: títulos em campos e janelas, ajuda on-line, indicar formato de entrada.",
       "<mark>2. Carga de trabalho</mark>: reduzir a carga cognitiva e perceptiva. Subcritérios: <b>brevidade</b> (concisão e ações mínimas) e <b>densidade informacional</b>.",
       "<mark>3. Controle explícito</mark>: o usuário no comando. <b>Ações explícitas</b> (o sistema só executa o que foi pedido) e <b>controle do usuário</b> (interromper, cancelar, pausar, continuar).",
       "<mark>4. Adaptabilidade</mark>: adequar-se ao contexto e às preferências. <b>Flexibilidade</b> (várias formas de fazer) e <b>consideração da experiência do usuário</b> (novato × experiente, ex.: atalhos).",
       "<mark>5. Gestão de erros</mark>: <b>proteção contra erros</b>, <b>qualidade das mensagens de erro</b> e <b>correção dos erros</b>.",
       "<mark>6. Homogeneidade/consistência</mark>: padronizar para que os elementos sejam reconhecidos, localizados e lembrados.",
       "<mark>7. Significado dos códigos e denominações</mark>: termos e ícones que correspondam ao que representam.",
       "<mark>8. Compatibilidade</mark>: adequação às características do usuário e da tarefa (expectativas, hábitos, linguagem do negócio)."
      ]
     }
    ],
    "pegadinhas": [
     "ISO 9241-11 = efetividade, eficiência e satisfação num contexto de uso. ISO 9126 = qualidade do produto de software. ISO 9000 = gestão da qualidade; ISO 27000 = segurança da informação.",
     "“O sistema executa exatamente o que o usuário pede” → controle explícito (ações explícitas).",
     "Guiar o iniciante → condução. Diminuir leitura e digitação → carga de trabalho.",
     "Padronização visual → homogeneidade/consistência.",
     "O usuário não deve memorizar o máximo possível: isso aumenta a carga cognitiva.",
     "Barreira = impede o trabalho sem ajuda externa (não é erro trivial)."
    ],
    "flash": [
     [
      "Ergonomia",
      "Ergon (trabalho) + nomos (normas): otimizar bem-estar e desempenho."
     ],
     [
      "Domínios da ergonomia",
      "Física, cognitiva e organizacional."
     ],
     [
      "ISO 9241-11",
      "Usabilidade: efetividade, eficiência e satisfação num contexto de uso."
     ],
     [
      "ISO 9126",
      "Qualidade de produto: compreensível, apreensível, utilizável e atraente."
     ],
     [
      "Ergodesign",
      "Integração de ergonomia e design."
     ],
     [
      "Engenharia semiótica",
      "IHC como comunicação designer → usuário (MAC e MIS)."
     ],
     [
      "Os 8 critérios",
      "Condução, carga de trabalho, controle explícito, adaptabilidade, gestão de erros, homogeneidade, significado dos códigos, compatibilidade."
     ],
     [
      "Condução",
      "Guiar o usuário: convite, agrupamento, legibilidade, feedback."
     ],
     [
      "Carga de trabalho",
      "Brevidade (concisão, ações mínimas) e densidade informacional."
     ],
     [
      "Controle explícito",
      "Ações explícitas + controle do usuário."
     ],
     [
      "Gestão de erros",
      "Proteção, qualidade das mensagens e correção."
     ]
    ],
    "quiz": [
     {
      "q": "De acordo com a ISO 9241-11, a usabilidade de um produto é definida por:",
      "op": [
       "Atratividade visual e automação completa",
       "Permitir que usuários atinjam objetivos com efetividade, eficiência e satisfação num contexto de uso",
       "Rapidez de processamento",
       "Quantidade de funcionalidades"
      ],
      "c": 1,
      "exp": "Essa é a definição da norma de ergonomia de IHC."
     },
     {
      "q": "A característica que permite aos usuários atingirem seus objetivos com eficácia, eficiência e satisfação chama-se:",
      "op": [
       "Design",
       "Usabilidade",
       "Interatividade",
       "Acessibilidade"
      ],
      "c": 1,
      "exp": "Acessibilidade é o acesso por todas as pessoas, incluindo com deficiência."
     },
     {
      "q": "As barreiras na usabilidade são:",
      "op": [
       "Problemas resolvidos após algumas tentativas",
       "Problemas que não atrasam o usuário",
       "Problemas que impossibilitam o usuário de executar o trabalho sem ajuda externa",
       "Erros triviais"
      ],
      "c": 2,
      "exp": "A barreira impede a conclusão da tarefa."
     },
     {
      "q": "Qual critério ergonômico garante que o sistema execute apenas as ações solicitadas pelo usuário?",
      "op": [
       "Condução",
       "Controle explícito",
       "Adaptabilidade",
       "Homogeneidade"
      ],
      "c": 1,
      "exp": "Subcritério ações explícitas; o outro subcritério é controle do usuário."
     },
     {
      "q": "Fornecer títulos em campos e janelas, ajuda on-line e indicar formato de entrada são exemplos do critério:",
      "op": [
       "Condução",
       "Carga de trabalho",
       "Gestão de erros",
       "Compatibilidade"
      ],
      "c": 0,
      "exp": "A condução guia sobretudo o usuário sem experiência."
     },
     {
      "q": "Reduzir o tempo de leitura e de digitação e simplificar os passos de uma tarefa relaciona-se ao critério:",
      "op": [
       "Carga de trabalho",
       "Adaptabilidade",
       "Significado dos códigos",
       "Controle explícito"
      ],
      "c": 0,
      "exp": "Subcritérios brevidade (concisão e ações mínimas) e densidade informacional."
     },
     {
      "q": "O ergodesign busca:",
      "op": [
       "Substituir a ergonomia pelo design",
       "Integrar ergonomia e design para melhorar a usabilidade e a experiência do usuário",
       "Eliminar a estética das interfaces",
       "Tratar apenas de mobiliário"
      ],
      "c": 1,
      "exp": "Concilia os dois lados, antes vistos como conflitantes."
     },
     {
      "q": "O domínio da ergonomia que trata de percepção, atenção, memória e controle motor é o:",
      "op": [
       "Físico",
       "Cognitivo",
       "Organizacional",
       "Ambiental"
      ],
      "c": 1,
      "exp": "O físico trata de anatomia e biomecânica; o organizacional, de sistemas sociotécnicos."
     },
     {
      "q": "A engenharia semiótica tem como métodos principais:",
      "op": [
       "Teste A/B e análise de logs",
       "MAC (avaliação de comunicabilidade) e MIS (inspeção semiótica)",
       "Avaliação heurística e GOMS",
       "Card sorting e eye tracking"
      ],
      "c": 1,
      "exp": "Ela entende a interface como mensagem do designer ao usuário."
     },
     {
      "q": "Oferecer atalhos para usuários experientes e caminhos guiados para iniciantes atende ao critério:",
      "op": [
       "Adaptabilidade",
       "Homogeneidade",
       "Gestão de erros",
       "Legibilidade"
      ],
      "c": 0,
      "exp": "Adaptabilidade = flexibilidade e consideração da experiência do usuário."
     }
    ]
   },
   {
    "id": "dev",
    "cor": "var(--t2)",
    "titulo": "Desenvolvimento de interface humano-computador",
    "curto": "Desenvolvimento de IHC",
    "desc": "Affordance, comunicabilidade, fases do projeto, processos de design (ciclo simplificado, estrela, Mayhew), personas, cenários, análise de tarefas, requisitos e prototipação.",
    "resumo": [
     {
      "h": "Conceitos-chave",
      "itens": [
       "Projeto de IHC envolve usabilidade, engenharia semiótica, interação, interface, experiência do usuário e arquitetura da informação.",
       "<mark>Affordance</mark> (Norman): características <b>perceptíveis</b> do software que indicam <b>que operações podem ser realizadas</b> e como. Tipos: <b>explícito</b> (texto diz o que fazer: “Compre com 1 clique”), <b>convencional/padrão</b> (link azul sublinhado), <b>oculto</b> (menu dropdown) e <b>metafórico</b> (ícones que imitam objetos reais).",
       "<mark>Comunicabilidade</mark> (engenharia semiótica): capacidade da interface de <b>transmitir ao usuário a lógica do design e as intenções do designer</b>. Não é sinônimo de affordance.",
       "Princípios de design (Norman): <b>visibilidade</b> (funções visíveis e fáceis de identificar), feedback, restrições, mapeamento, consistência e affordance."
      ]
     },
     {
      "h": "Processo de design",
      "itens": [
       "Característica básica (Barbosa e Silva): atividades <mark>iterativas</mark>, com refinamentos sucessivos — não lineares.",
       "Fases (Rogers, Sharp e Preece): <b>identificar necessidades e definir requisitos</b> → <b>(re)design</b> → <b>construir versões interativas (protótipos)</b> → <b>avaliar o design</b>.",
       "Processos da literatura: ciclo de vida simplificado, <b>ciclo de vida estrela</b>, engenharia de usabilidade de Nielsen, engenharia de usabilidade de <b>Mayhew</b>, design contextual, design baseado em cenários, design dirigido por objetivos, design centrado na comunicação.",
       "<mark>Ciclo de vida estrela</mark> (Hix e Hartson): seis atividades — análise de tarefas/usuários/funcional, especificação de requisitos, projeto conceitual e representação formal, prototipação, implementação — todas ligadas à <b>avaliação</b>, que é a <mark>atividade central</mark>. Pode começar por qualquer atividade.",
       "<b>Mayhew</b>: engenharia de usabilidade em três fases — análise de requisitos, projeto/teste/desenvolvimento e instalação.",
       "Protótipos: <b>baixa fidelidade</b> (papel, esboço) × <b>média/alta fidelidade</b> (próximos do sistema real)."
      ]
     },
     {
      "h": "Representações e requisitos",
      "itens": [
       "Representações: <b>perfil de usuário</b>, <b>personas</b>, <b>cenários</b> e <b>modelos de tarefas</b>.",
       "<mark>Persona</mark>: <b>perfil hipotético</b> (arquétipo) de usuário. Elementos: identidade, status (primária/secundária), objetivos, habilidades, tarefas, relacionamentos (com outras personas), requisitos e expectativas. Boa prática: <b>poucas personas</b>; cada projeto tem seu elenco, com ao menos uma <b>persona primária</b>.",
       "<mark>Cenário</mark>: narrativa rica em detalhes de como uma persona interage com o sistema (ambiente, atores, objetivos, ações e eventos; pode incluir exceções).",
       "<mark>Análise de tarefas</mark>: começa pelos objetivos das pessoas. Métodos: <b>HTA</b> (análise hierárquica de tarefas), <b>GOMS</b> (objetivos, operadores, métodos e regras de seleção) e <b>CTT</b> (ConcurTaskTrees).",
       "<mark>Levantamento de requisitos</mark>: fase crucial para entender necessidades, alinhar expectativas e controlar o projeto; normalmente formalizado num documento acordado entre usuário e desenvolvedor.",
       "Caixas de mensagens: usadas para comunicar ao usuário, por exemplo, <b>apresentar um erro</b> ou o andamento de um processo."
      ]
     }
    ],
    "pegadinhas": [
     "Ciclo de vida estrela: centro = <b>avaliação</b> (não implementação nem prototipação).",
     "Persona é perfil <b>hipotético</b>, não um usuário real nem “todos os envolvidos”.",
     "Affordance indica que operações são possíveis; comunicabilidade transmite a intenção do designer.",
     "Processo de design de IHC é iterativo, não linear.",
     "Menu dropdown = affordance oculto; ícone de app = metafórico; link azul sublinhado = convencional.",
     "Funções fáceis de identificar → princípio da visibilidade."
    ],
    "flash": [
     [
      "Affordance",
      "Características perceptíveis que indicam as operações possíveis."
     ],
     [
      "Tipos de affordance",
      "Explícito, convencional, oculto e metafórico."
     ],
     [
      "Comunicabilidade",
      "Transmitir ao usuário a lógica e as intenções do design."
     ],
     [
      "Ciclo de vida estrela",
      "Avaliação no centro; seis atividades interligadas."
     ],
     [
      "Processo de design de IHC",
      "Iterativo, com refinamentos sucessivos."
     ],
     [
      "Persona",
      "Perfil hipotético de usuário; poucas, com uma primária."
     ],
     [
      "Cenário",
      "Narrativa de uso com atores, objetivos, ações e eventos."
     ],
     [
      "GOMS",
      "Goals, Operators, Methods, Selection rules."
     ],
     [
      "HTA",
      "Análise hierárquica de tarefas."
     ],
     [
      "Visibilidade",
      "Funções visíveis e fáceis de identificar."
     ],
     [
      "Protótipo de baixa fidelidade",
      "Papel ou esboço, barato e rápido."
     ]
    ],
    "quiz": [
     {
      "q": "No ciclo de vida estrela, a atividade central é:",
      "op": [
       "Implementação",
       "Análise de tarefas",
       "Avaliação",
       "Prototipação"
      ],
      "c": 2,
      "exp": "Todas as atividades passam pela avaliação."
     },
     {
      "q": "A melhor definição de comunicabilidade é:",
      "op": [
       "A intenção do usuário final",
       "A inclusão de falas na interface",
       "A transmissão ao usuário das intenções da interação com a interface",
       "A melhoria da linguagem"
      ],
      "c": 2,
      "exp": "Conceito da engenharia semiótica."
     },
     {
      "q": "No contexto de IHC, personas são:",
      "op": [
       "Requisitos descartáveis",
       "Todos os envolvidos no design",
       "Perfil hipotético do usuário",
       "Usuários administradores"
      ],
      "c": 2,
      "exp": "Arquétipos que guiam as decisões de design."
     },
     {
      "q": "O princípio que garante que os usuários identifiquem e utilizem eficientemente as funções do sistema é:",
      "op": [
       "Consistência",
       "Flexibilidade",
       "Visibilidade das funções",
       "Personalização"
      ],
      "c": 2,
      "exp": "Funções visíveis reduzem a curva de aprendizado."
     },
     {
      "q": "Um possível uso correto das caixas de mensagens é:",
      "op": [
       "Apresentar o menu",
       "Apresentar um erro do sistema",
       "Apresentar atalhos",
       "Apresentar ícones personalizados"
      ],
      "c": 1,
      "exp": "Elas comunicam erros e andamento de processos."
     },
     {
      "q": "Sobre affordance, é correto afirmar que:",
      "op": [
       "Trata dos objetivos do software",
       "Diz respeito apenas à redução de erros",
       "Indica que tipos de operações podem ser realizadas com o sistema interativo",
       "É sinônimo de comunicabilidade"
      ],
      "c": 2,
      "exp": "São características perceptíveis que sugerem o uso."
     },
     {
      "q": "Uma característica básica dos processos de design de IHC é:",
      "op": [
       "Atividades lineares, sem repetições",
       "Execução iterativa, com refinamentos sucessivos",
       "Exclusão dos usuários na avaliação",
       "Plano fixo sem modificações"
      ],
      "c": 1,
      "exp": "Itera-se quantas vezes o orçamento e o tempo permitirem."
     },
     {
      "q": "Um menu dropdown, que só mostra o conteúdo ao passar o mouse, exemplifica affordance:",
      "op": [
       "Explícito",
       "Convencional",
       "Oculto",
       "Metafórico"
      ],
      "c": 2,
      "exp": "Reduz a complexidade, mas pode dificultar o uso de quem não está acostumado."
     },
     {
      "q": "GOMS, HTA e CTT são métodos de:",
      "op": [
       "Avaliação heurística",
       "Análise de tarefas",
       "Acessibilidade",
       "Teste de integração"
      ],
      "c": 1,
      "exp": "A análise começa pelos objetivos das pessoas."
     },
     {
      "q": "A importância do levantamento de requisitos em projetos de IHC é:",
      "op": [
       "Ser secundário, feito após o desenvolvimento",
       "Entender as necessidades dos usuários, alinhar expectativas e controlar o projeto",
       "Definir apenas prazos",
       "Ser irrelevante, pois a UX é ajustada nos testes"
      ],
      "c": 1,
      "exp": "Costuma ser formalizado num documento acordado."
     }
    ]
   },
   {
    "id": "aval",
    "cor": "var(--t3)",
    "titulo": "Avaliação de interface humano-computador",
    "curto": "Avaliação de IHC",
    "desc": "Importância e objeto da avaliação, testes do desenvolvedor, formativa × somativa, laboratório × campo, avaliação heurística, inspeção por checklist e ensaio de interação.",
    "resumo": [
     {
      "h": "Por que e o que avaliar",
      "itens": [
       "Avaliar identifica e corrige problemas de qualidade de uso <b>antes</b> de o sistema entrar em operação (Barbosa e Silva, 2010). Os engenheiros sabem construir, mas nem sempre discutir a qualidade de uso.",
       "Planejamento: decidir <b>o que, quando, onde e como</b> avaliar, que dados coletar e qual técnica usar.",
       "Testes do desenvolvedor: <b>unidade</b> (cada item), <mark>integração</mark> (partes testadas isoladamente funcionando juntas), <b>sistema</b> (o todo), operação/aceitação. <b>Caixa-branca</b> testa o código; <b>caixa-preta</b> testa o comportamento. <b>Regressão</b>: reteste após mudanças.",
       "Critérios de qualidade na perspectiva do usuário: <mark>usabilidade, experiência do usuário, acessibilidade e comunicabilidade</mark>."
      ]
     },
     {
      "h": "Contextos de avaliação",
      "itens": [
       "<mark>Formativa</mark>: ao longo de todo o desenvolvimento; compara alternativas e identifica problemas <b>cedo</b>.",
       "<mark>Somativa</mark>: no final, sobre a solução (protótipo de média/alta fidelidade ou sistema); atesta se os níveis de qualidade foram atingidos.",
       "Local: <b>contexto real de uso (campo)</b> — observa casos típicos, menos controle; <b>laboratório</b> — mais controle, menos realismo.",
       "Classes de métodos: <b>investigação</b> (entrevistas, questionários), <b>observação</b> (usuários usando o sistema) e <b>inspeção</b> (especialistas examinam a interface prevendo problemas)."
      ]
     },
     {
      "h": "Avaliação heurística (Nielsen)",
      "itens": [
       "Técnica de <mark>inspeção</mark> proposta por <b>Jakob Nielsen (1994)</b>: rápida e de baixo custo, sem usuários; avaliadores (idealmente 3 a 5) percorrem a interface e registram violações com grau de severidade.",
       "<mark>As 10 heurísticas</mark>: (1) <b>visibilidade do estado do sistema</b>; (2) correspondência entre o sistema e o mundo real; (3) controle e liberdade do usuário; (4) consistência e padrões; (5) prevenção de erros; (6) <b>reconhecimento em vez de memorização</b>; (7) flexibilidade e eficiência de uso; (8) estética e design <b>minimalista</b>; (9) ajudar a reconhecer, diagnosticar e recuperar-se de erros; (10) ajuda e documentação.",
       "Heurística vem da mesma origem de “heureca” (Arquimedes). Avaliadores podem incluir novas heurísticas se necessário."
      ]
     },
     {
      "h": "Checklist e ensaio de interação",
      "itens": [
       "<mark>Inspeção por lista de verificação (checklist)</mark>: perguntas objetivas baseadas em critérios ergonômicos (ex.: <b>ErgoList</b>, com os critérios de Bastien e Scapin). Pode ser aplicada por não especialistas; resultado padronizado e rápido.",
       "<mark>Ensaio de interação (teste de usabilidade)</mark>: <b>usuários reais</b> (ou representativos) executam tarefas previamente definidas enquanto são observados; foco na <b>intuitividade e facilidade de uso</b>, especialmente para novos usuários. Etapas: planejamento, preparação (roteiro, tarefas, termo de consentimento), execução (observação, gravação, “pensar em voz alta”), análise e relato dos resultados."
      ]
     }
    ],
    "pegadinhas": [
     "Avaliação heurística é <b>inspeção</b>, sem usuários — não é observação.",
     "Heurística 1 = visibilidade do estado do sistema. A 6 é reconhecimento <b>em vez de</b> memorização (e não o contrário). A 8 é design <b>minimalista</b>.",
     "Teste de integração: partes já testadas funcionando juntas.",
     "Formativa = durante; somativa = no final.",
     "Ensaio de interação envolve usuários executando tarefas reais.",
     "Avaliar não atrasa inutilmente: corrige problemas antes da entrega."
    ],
    "flash": [
     [
      "Critérios na perspectiva do usuário",
      "Usabilidade, UX, acessibilidade e comunicabilidade."
     ],
     [
      "Teste de integração",
      "Verifica se partes testadas isoladamente funcionam juntas."
     ],
     [
      "Caixa-branca × caixa-preta",
      "Testa o código × testa o comportamento."
     ],
     [
      "Avaliação formativa",
      "Durante o desenvolvimento, para achar problemas cedo."
     ],
     [
      "Avaliação somativa",
      "No final, para atestar a qualidade de uso."
     ],
     [
      "Avaliação heurística",
      "Inspeção por especialistas com as heurísticas de Nielsen."
     ],
     [
      "Heurística 1",
      "Visibilidade do estado do sistema."
     ],
     [
      "Heurística 6",
      "Reconhecimento em vez de memorização."
     ],
     [
      "Checklist (ErgoList)",
      "Inspeção com perguntas baseadas em critérios ergonômicos."
     ],
     [
      "Ensaio de interação",
      "Usuários executam tarefas enquanto são observados."
     ],
     [
      "Pensar em voz alta",
      "Usuário verbaliza o que pensa durante o teste."
     ]
    ],
    "quiz": [
     {
      "q": "A heurística de Nielsen que garante que o usuário entenda o que está acontecendo no sistema é:",
      "op": [
       "Transparência na ocorrência de erros",
       "Limitação de controle",
       "Visibilidade do estado do sistema",
       "Memorização em vez de reconhecimento"
      ],
      "c": 2,
      "exp": "O sistema deve informar o usuário com feedback adequado."
     },
     {
      "q": "Verificar se partes do sistema testadas individualmente funcionam juntas é o teste de:",
      "op": [
       "Caixa-branca",
       "Caixa-preta",
       "Regressão",
       "Integração"
      ],
      "c": 3,
      "exp": "Unidade testa itens; integração, a junção deles."
     },
     {
      "q": "Na avaliação por ensaio de interação de um app de mensagens para novos usuários, o foco principal é:",
      "op": [
       "Segurança das mensagens",
       "Intuitividade e facilidade de uso da interface",
       "Diversidade de emojis",
       "Tempo de envio"
      ],
      "c": 1,
      "exp": "Observa-se o usuário realizando tarefas."
     },
     {
      "q": "A avaliação heurística é uma técnica do tipo:",
      "op": [
       "Investigação",
       "Inspeção",
       "Observação",
       "Estudo de campo"
      ],
      "c": 1,
      "exp": "Especialistas predizem problemas sem envolver usuários."
     },
     {
      "q": "Segundo Barbosa e Silva, os critérios de qualidade avaliados na perspectiva do usuário são:",
      "op": [
       "Desempenho, segurança, custo e prazo",
       "Usabilidade, experiência do usuário, acessibilidade e comunicabilidade",
       "Código, testes, deploy e manutenção",
       "Cor, fonte, ícones e layout"
      ],
      "c": 1,
      "exp": "Verifica-se se o sistema apoia o usuário em seus objetivos."
     },
     {
      "q": "A avaliação conduzida ao longo de todo o desenvolvimento, para identificar problemas cedo, é a:",
      "op": [
       "Somativa",
       "Formativa",
       "Final",
       "De aceitação"
      ],
      "c": 1,
      "exp": "A somativa ocorre no final, atestando a qualidade."
     },
     {
      "q": "Qual NÃO é uma das 10 heurísticas de Nielsen?",
      "op": [
       "Prevenção de erros",
       "Consistência e padrões",
       "Estética e design maximalista",
       "Ajuda e documentação"
      ],
      "c": 2,
      "exp": "A heurística é estética e design minimalista."
     },
     {
      "q": "Sobre a avaliação de IHC, é correto afirmar:",
      "op": [
       "Os problemas podem ser corrigidos depois que o produto entrar em operação",
       "A qualidade depende só dos programadores",
       "Permite identificar e corrigir problemas antes da entrega, tornando o produto mais robusto",
       "Só aumenta o tempo de entrega"
      ],
      "c": 2,
      "exp": "É uma atividade fundamental para a qualidade de uso."
     },
     {
      "q": "A inspeção de interface feita com perguntas objetivas baseadas em critérios ergonômicos (ex.: ErgoList) é a avaliação por:",
      "op": [
       "Ensaio de interação",
       "Lista de verificação (checklist)",
       "Entrevista",
       "Análise de logs"
      ],
      "c": 1,
      "exp": "Pode ser aplicada inclusive por não especialistas."
     },
     {
      "q": "Testar o sistema pelo comportamento, sem examinar o código, é o teste de:",
      "op": [
       "Caixa-branca",
       "Caixa-preta",
       "Unidade",
       "Regressão"
      ],
      "c": 1,
      "exp": "Caixa-branca examina a estrutura interna do código."
     }
    ]
   },
   {
    "id": "acess",
    "cor": "var(--t4)",
    "titulo": "Acessibilidade à web",
    "curto": "Acessibilidade",
    "desc": "Conceitos e legislação (LBI), barreiras, dimensões, desenho universal, tecnologias assistivas, W3C/WAI, WCAG, eMAG e boas práticas.",
    "resumo": [
     {
      "h": "Conceitos e legislação",
      "itens": [
       "Acessibilidade é direito constitucional (“todos são iguais perante a lei”). Termo correto: <mark>pessoa com deficiência</mark> (Convenção da ONU – Decreto 6.949/2009 – e Lei 13.146/2015).",
       "<mark>Lei 13.146/2015</mark> — Lei Brasileira de Inclusão (LBI) / Estatuto da Pessoa com Deficiência: TIC como instrumento de superação de barreiras; o poder público deve ampliar a acessibilidade do conteúdo web, especialmente de governo eletrônico.",
       "<mark>Seis barreiras da LBI</mark>: <b>urbanísticas</b> (vias e espaços públicos), <b>arquitetônicas</b> (edifícios), <b>nos transportes</b>, <b>nas comunicações e na informação</b>, <b>atitudinais</b> (comportamentos que impedem a participação) e <b>tecnológicas</b> (impedem o acesso às tecnologias).",
       "Seis dimensões da acessibilidade (Sassaki): arquitetônica, comunicacional, metodológica, instrumental, programática e atitudinal — todas complementares.",
       "<b>Decreto 5.296/2004</b>: prazo para tornar acessíveis os sites da administração pública. EUA: <b>Section 508</b> (1998)."
      ]
     },
     {
      "h": "Desenho universal",
      "itens": [
       "<mark>Desenho universal</mark>: produtos e ambientes utilizáveis, sempre que possível, por todas as pessoas, <b>sem adaptação</b> ou projeto específico. É um processo, não uma meta final.",
       "<mark>Sete princípios</mark>: (1) <b>uso equitativo</b> — útil para pessoas com diferentes habilidades (ex.: portas automáticas); (2) <b>uso flexível</b> — atende diferentes preferências e habilidades (tesoura para destros e canhotos); (3) <b>uso simples e intuitivo</b> — fácil de entender; (4) <b>informação de fácil percepção</b> — vários modos e contraste adequado; (5) <b>tolerância ao erro</b> — minimiza riscos de ações acidentais; (6) <b>baixo esforço físico</b> — uso eficiente, confortável e com mínimo de fadiga; (7) <b>tamanho e espaço para acesso e uso</b>."
      ]
     },
     {
      "h": "Web acessível e tecnologias assistivas",
      "itens": [
       "W3C: acessibilidade na web significa que pessoas com deficiência podem usar a web. Tim Berners-Lee criou a web em 1989.",
       "<mark>Tecnologias assistivas</mark>: <b>leitores de tela</b> (texto em voz; navegação por teclado — ex.: NVDA, JAWS), <b>ampliadores de tela</b> (baixa visão), <b>joysticks/dispositivos de apontamento</b> (deficiência motora), teclados alternativos, VLibras.",
       "Barreiras comuns: imagens sem <b>texto alternativo</b> (<code>alt</code>), formulários sem <b>rótulo</b>, ordem de navegação ilógica, baixo contraste, informação só por cor (daltonismo vermelho/verde, amarelo/azul), áudio sem legenda ou Libras (surdos que têm Libras como primeira língua), CAPTCHA.",
       "Boas práticas: <mark>associar um rótulo (label) a cada campo de formulário</mark>, texto alternativo em imagens, contraste suficiente, títulos claros e únicos, legendas e transcrições, navegação por teclado, linguagem simples."
      ]
     },
     {
      "h": "WCAG e eMAG",
      "itens": [
       "<b>WAI</b> (Web Accessibility Initiative, 1999) criou as <mark>WCAG</mark>: 1.0 (1999), 2.0 (2008), 2.1 (2018), 2.2 (em desenvolvimento no material, 2023).",
       "<mark>Quatro princípios (POUR)</mark>: <b>Perceptível</b> (apresentado de forma que possa ser percebido — visão, audição, tato), <b>Operável</b> (componentes e navegação operáveis por qualquer dispositivo), <b>Compreensível</b> (informação e operação fáceis de entender, consistentes e previsíveis), <b>Robusto</b> (interpretável por diversos agentes de usuário e tecnologias assistivas; semântica correta).",
       "Estrutura: princípios → <b>13 diretrizes</b> (WCAG 2.0) → critérios de sucesso em níveis de conformidade <b>A</b> (mínimo), <b>AA</b> e <b>AAA</b> (máximo).",
       "Componentes da acessibilidade web (W3C): conteúdo, agentes do usuário (navegadores), tecnologia assistiva, usuários, desenvolvedores, ferramentas de autoria e ferramentas de avaliação.",
       "<mark>eMAG</mark> (Modelo de Acessibilidade em Governo Eletrônico): recomendações brasileiras, alinhadas às WCAG, para os sites da administração pública."
      ]
     }
    ],
    "pegadinhas": [
     "Uso equitativo = útil para pessoas com diferentes habilidades; uso flexível = diferentes preferências e habilidades individuais.",
     "Termo correto: pessoa com deficiência (não “portador” nem “deficiente”).",
     "CAPTCHA “sempre que possível” prejudica a acessibilidade; descartar legendas também.",
     "Leitores de tela, ampliadores e joysticks são todos tecnologias assistivas.",
     "POUR: Perceptível, Operável, Compreensível, Robusto.",
     "eMAG é o modelo brasileiro para governo; WCAG é do W3C."
    ],
    "flash": [
     [
      "Lei 13.146/2015",
      "Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência)."
     ],
     [
      "Seis barreiras da LBI",
      "Urbanísticas, arquitetônicas, transportes, comunicações/informação, atitudinais, tecnológicas."
     ],
     [
      "Desenho universal",
      "Uso por todos, sem adaptação."
     ],
     [
      "7 princípios do desenho universal",
      "Equitativo, flexível, simples e intuitivo, informação perceptível, tolerância ao erro, baixo esforço, tamanho e espaço."
     ],
     [
      "Uso equitativo",
      "Útil para pessoas com diferentes habilidades."
     ],
     [
      "Tecnologia assistiva",
      "Recursos como leitor de tela, ampliador e joystick."
     ],
     [
      "WCAG",
      "Diretrizes do W3C/WAI para acessibilidade web."
     ],
     [
      "Princípios WCAG",
      "Perceptível, Operável, Compreensível, Robusto."
     ],
     [
      "Níveis de conformidade",
      "A, AA, AAA."
     ],
     [
      "eMAG",
      "Modelo de Acessibilidade em Governo Eletrônico."
     ],
     [
      "Boa prática em formulários",
      "Associar um rótulo (label) a cada campo."
     ]
    ],
    "quiz": [
     {
      "q": "Qual diretriz mais efetivamente apoia o cumprimento das normas de acessibilidade?",
      "op": [
       "Fornecer títulos redundantes",
       "Usar CAPTCHA sempre que possível",
       "Descartar legendas e transcrições",
       "Associar um rótulo a cada campo de entrada de um formulário"
      ],
      "c": 3,
      "exp": "Sem rótulo, o leitor de tela não informa o que o campo pede."
     },
     {
      "q": "São tecnologias assistivas adequadas: I) leitores de tela; II) joysticks e dispositivos de apontamento; III) ampliadores de tela.",
      "op": [
       "Apenas I",
       "Apenas II",
       "I e II",
       "I, II e III"
      ],
      "c": 3,
      "exp": "Atendem pessoas com deficiência visual, motora e baixa visão."
     },
     {
      "q": "O Princípio 1 do desenho universal, “uso equitativo”, significa:",
      "op": [
       "O uso é fácil de entender",
       "O design atende a diferentes preferências",
       "O design é útil para pessoas com diferentes habilidades",
       "Uso com mínimo de fadiga"
      ],
      "c": 2,
      "exp": "As outras alternativas descrevem os princípios 3, 2 e 6."
     },
     {
      "q": "Os quatro princípios das WCAG são:",
      "op": [
       "Visível, Rápido, Seguro, Simples",
       "Perceptível, Operável, Compreensível, Robusto",
       "Equitativo, Flexível, Simples, Tolerante",
       "Legível, Navegável, Responsivo, Seguro"
      ],
      "c": 1,
      "exp": "Conhecidos pela sigla POUR."
     },
     {
      "q": "A terminologia adequada, segundo a Convenção da ONU e a Lei 13.146/2015, é:",
      "op": [
       "Portador de deficiência",
       "Pessoa com deficiência",
       "Pessoa especial",
       "Deficiente"
      ],
      "c": 1,
      "exp": "Coloca a pessoa em primeiro lugar."
     },
     {
      "q": "O modelo brasileiro de recomendações de acessibilidade para sites da administração pública é o:",
      "op": [
       "WCAG",
       "eMAG",
       "ISO 9241",
       "Section 508"
      ],
      "c": 1,
      "exp": "É alinhado às WCAG."
     },
     {
      "q": "Qual barreira da LBI corresponde a atitudes ou comportamentos que impedem a participação social da pessoa com deficiência?",
      "op": [
       "Arquitetônica",
       "Urbanística",
       "Atitudinal",
       "Tecnológica"
      ],
      "c": 2,
      "exp": "As arquitetônicas estão em edifícios; as urbanísticas, em vias públicas."
     },
     {
      "q": "Para uma pessoa cega que usa leitor de tela, uma imagem se torna acessível quando:",
      "op": [
       "Tem cores fortes",
       "Possui texto alternativo (alt) descrevendo-a",
       "É animada",
       "Está em alta resolução"
      ],
      "c": 1,
      "exp": "O leitor de tela lê o texto alternativo."
     },
     {
      "q": "A iniciativa do W3C que criou as WCAG é a:",
      "op": [
       "WAI (Web Accessibility Initiative)",
       "Section 508",
       "ABNT",
       "IEEE"
      ],
      "c": 0,
      "exp": "Criada em 1999; a WCAG 2.0 saiu em 2008 e a 2.1 em 2018."
     },
     {
      "q": "Uma tesoura que pode ser usada por destros e canhotos exemplifica o princípio:",
      "op": [
       "Uso equitativo",
       "Uso flexível",
       "Tolerância ao erro",
       "Baixo esforço físico"
      ],
      "c": 1,
      "exp": "Uso flexível acomoda diferentes preferências e habilidades individuais."
     }
    ]
   }
  ]
 },
 {
  "id": "es",
  "nome": "Engenharia de Software",
  "temas": [
   {
    "id": "fund",
    "cor": "var(--t1)",
    "titulo": "Fundamentos de software e gerenciamento de projetos",
    "curto": "Fundamentos e projetos",
    "desc": "Software e seus tipos, engenharia de software em camadas, processo e atividades genéricas, fluxos de processo, PMI/PMBOK, grupos de processos, riscos e portfólio.",
    "resumo": [
     {
      "h": "Software e engenharia de software",
      "itens": [
       "<mark>Software</mark> (Pressman): (1) instruções que fornecem funções e desempenho desejados; (2) estruturas de dados que permitem manipular a informação; (3) documentação que descreve operação e uso. Distribui o produto mais importante da nossa era: a <b>informação</b>.",
       "Características: <b>intangível</b>, <b>alta volatilidade</b> (tecnologia e requisitos mudam), complexidade crescente com o avanço do hardware (crise do software).",
       "Tipos: <b>de sistema</b> (SO, drivers), <b>de aplicação</b> (ERP), <b>de engenharia/científico</b>, embarcado, de linha de produtos, web/móvel, inteligência artificial.",
       "<mark>Engenharia de software</mark> (IEEE): abordagem <b>sistemática, disciplinada e quantificável</b> para desenvolver, operar e manter software.",
       "<mark>Camadas</mark>: <b>foco na qualidade</b> (base filosófica) → <b>processo</b> (a base; “não existe engenharia sem processo”) → <b>métodos</b> → <b>ferramentas</b>."
      ]
     },
     {
      "h": "Processo e fluxos",
      "itens": [
       "<mark>Atividades genéricas</mark> (Pressman): <b>comunicação</b>, <b>planejamento</b>, <b>modelagem</b>, <b>construção</b> (codificação + testes) e <b>entrega</b>. Complementadas por atividades de apoio (controle e acompanhamento, gestão de riscos, garantia da qualidade, revisões, gerência de configuração, medição).",
       "<mark>Fluxos de processo</mark>: <b>linear</b> (cada atividade uma única vez, em sequência — cascata); <b>iterativo</b> (repete uma ou mais atividades antes de seguir); <b>evolucionário</b> (cada ciclo percorre todas as atividades e gera uma <b>nova versão</b> — melhor trato da complexidade); <b>paralelo</b> (atividades executadas ao mesmo tempo).",
       "Escolha do processo depende sobretudo da <b>complexidade</b>: quanto mais complexo, mais formalismo."
      ]
     },
     {
      "h": "Gerenciamento de projetos",
      "itens": [
       "<mark>PMI</mark> (Project Management Institute): organização que dissemina as boas práticas de gerenciamento de projetos como profissão; <b>certifica o PMP</b> (Project Management Professional). Publica o <b>PMBOK</b> (guia de conhecimento).",
       "<mark>Cinco grupos de processos</mark>: <b>iniciação</b> (termo de abertura, que autoriza a alocação de recursos), <b>planejamento</b> (começa pelo escopo; principal entrega = <b>cronograma</b>), <b>execução</b> (executar conforme planejado), <b>monitoramento e controle</b>, <b>encerramento</b>.",
       "Áreas de conhecimento do PMBOK: integração, escopo, cronograma (tempo), custos, qualidade, recursos, comunicações, riscos, aquisições e partes interessadas.",
       "Gerente de projeto: integrador de pessoas e conhecimentos. Plano de Gerenciamento do Projeto: executado e monitorado.",
       "<mark>Gerenciamento de riscos</mark>: destaque especial na <b>seleção do portfólio de projetos de software</b>. No material, o fator mais determinante na seleção do portfólio é a <b>viabilidade técnica</b>."
      ]
     }
    ],
    "pegadinhas": [
     "A camada <b>base</b> da engenharia de software é o <b>processo</b> (a qualidade é o foco que sustenta tudo).",
     "PMI é a organização (e certificadora do PMP); PMBOK é o guia; PMP é a certificação.",
     "Linear = cada atividade uma vez; evolucionário = cada ciclo gera nova versão.",
     "“Linear PORQUE paralelo”: as duas afirmativas são verdadeiras, mas uma não justifica a outra.",
     "Principal entrega do planejamento: cronograma. Documento da iniciação: termo de abertura."
    ],
    "flash": [
     [
      "Engenharia de software (IEEE)",
      "Abordagem sistemática, disciplinada e quantificável."
     ],
     [
      "Camadas da ES",
      "Qualidade, processo (base), métodos, ferramentas."
     ],
     [
      "Atividades genéricas",
      "Comunicação, planejamento, modelagem, construção, entrega."
     ],
     [
      "Fluxo linear",
      "Atividades em sequência, cada uma uma vez."
     ],
     [
      "Fluxo iterativo",
      "Repete atividades antes de seguir."
     ],
     [
      "Fluxo evolucionário",
      "Cada ciclo completo gera nova versão."
     ],
     [
      "Fluxo paralelo",
      "Atividades em paralelo."
     ],
     [
      "PMI / PMBOK / PMP",
      "Instituto / guia de boas práticas / certificação."
     ],
     [
      "5 grupos de processos",
      "Iniciação, planejamento, execução, monitoramento e controle, encerramento."
     ],
     [
      "Termo de abertura",
      "Autoriza o projeto e a alocação de recursos."
     ],
     [
      "Principal entrega do planejamento",
      "Cronograma."
     ]
    ],
    "quiz": [
     {
      "q": "Qual alternativa descreve corretamente o PMI?",
      "op": [
       "Certificadora do PMP e disseminadora de boas práticas de gerenciamento de projetos",
       "Uma ferramenta de gestão de projetos",
       "Uma forma de PMBOK",
       "Um instrumento de hardware"
      ],
      "c": 0,
      "exp": "O PMI publica o PMBOK e certifica o PMP."
     },
     {
      "q": "I – No fluxo linear, as atividades são executadas em sequência, PORQUE II – no fluxo paralelo, as atividades podem ocorrer em paralelo.",
      "op": [
       "As duas estão corretas e a II não justifica a I",
       "As duas estão corretas e a II justifica a I",
       "As duas são falsas",
       "A I é verdadeira e a II falsa"
      ],
      "c": 0,
      "exp": "São definições independentes de fluxos distintos."
     },
     {
      "q": "Segundo o material, o fator mais determinante na seleção de um portfólio de projetos de software é:",
      "op": [
       "Velocidade de entrega",
       "Estimativa de lucro",
       "Viabilidade técnica",
       "Tamanho da equipe"
      ],
      "c": 2,
      "exp": "A gestão de riscos pesa na escolha do portfólio."
     },
     {
      "q": "O fluxo de processo em que cada iteração percorre todas as atividades e gera uma nova versão do software é o:",
      "op": [
       "Linear",
       "Paralelo",
       "Iterativo",
       "Evolucionário"
      ],
      "c": 3,
      "exp": "Permite versionamento e melhor trato da complexidade."
     },
     {
      "q": "A camada que serve de base para a engenharia de software é a de:",
      "op": [
       "Ferramentas",
       "Métodos",
       "Processo",
       "Codificação"
      ],
      "c": 2,
      "exp": "Não existe engenharia sem processo; a qualidade depende da existência do processo."
     },
     {
      "q": "A engenharia de software, segundo o IEEE, é a aplicação de uma abordagem:",
      "op": [
       "Artesanal e intuitiva",
       "Sistemática, disciplinada e quantificável",
       "Exclusivamente ágil",
       "Voltada só à codificação"
      ],
      "c": 1,
      "exp": "Abrange desenvolvimento, operação e manutenção."
     },
     {
      "q": "O documento do grupo de iniciação que autoriza a alocação de recursos ao projeto é o:",
      "op": [
       "Cronograma",
       "Termo de abertura do projeto",
       "Matriz de rastreabilidade",
       "Plano de testes"
      ],
      "c": 1,
      "exp": "O cronograma é a principal entrega do planejamento."
     },
     {
      "q": "Qual NÃO é uma atividade genérica do processo segundo Pressman?",
      "op": [
       "Comunicação",
       "Modelagem",
       "Construção",
       "Marketing"
      ],
      "c": 3,
      "exp": "São comunicação, planejamento, modelagem, construção e entrega."
     },
     {
      "q": "Sistemas operacionais e drivers são exemplos de software:",
      "op": [
       "De aplicação",
       "De sistema",
       "Científico",
       "Embarcado"
      ],
      "c": 1,
      "exp": "Atendem a outros softwares."
     },
     {
      "q": "A principal entrega do grupo de processos de planejamento é:",
      "op": [
       "O termo de abertura",
       "O cronograma",
       "O código-fonte",
       "O relatório de encerramento"
      ],
      "c": 1,
      "exp": "O planejamento começa pelo gerenciamento do escopo."
     }
    ]
   },
   {
    "id": "fases",
    "cor": "var(--t2)",
    "titulo": "Fases do desenvolvimento de software",
    "curto": "Fases do desenvolvimento",
    "desc": "Engenharia de requisitos, requisitos funcionais, não funcionais e de domínio, técnicas de levantamento, análise, projeto, implementação, testes, implantação e manutenção.",
    "resumo": [
     {
      "h": "Engenharia de requisitos",
      "itens": [
       "<mark>Requisito</mark> (Sommerville): descrição dos <b>serviços</b> fornecidos pelo sistema e de suas <b>restrições operacionais</b>.",
       "<b>Funcionais</b>: serviços/funcionalidades (ex.: emitir histórico escolar). <b>Não funcionais</b>: restrições e qualidades (desempenho, segurança, <b>usabilidade</b>, confiabilidade). <b>De domínio</b>: regras de negócio, restrições aos funcionais.",
       "Na interface gráfica, o requisito não funcional-chave é a <mark>usabilidade</mark>.",
       "<mark>Processo da engenharia de requisitos</mark> (Pressman): <b>concepção</b> → <b>levantamento</b> → <b>elaboração</b> → <b>negociação</b> → <b>especificação</b> → <b>validação</b> → <b>gestão</b>.",
       "Levantamento define o escopo e gera a especificação, que funciona como <b>contrato</b> entre cliente e equipe. Técnicas: entrevistas, questionários/pesquisa, observação, brainstorming, prototipação e <b>JAD</b> (reuniões conjuntas de usuários e desenvolvedores).",
       "Elaboração: modelos a partir de cenários — <b>casos de uso da UML</b> (diagrama + descrição), classes de análise, diagramas de atividades e de estados.",
       "Negociação: priorizar e resolver conflitos. Validação: evidenciar que os modelos refletem as necessidades. Gestão: controlar mudanças com a <mark>matriz de rastreabilidade</mark> (liga cada requisito da origem até a entrega)."
      ]
     },
     {
      "h": "Projeto e implementação",
      "itens": [
       "<mark>Projeto</mark>: define <b>como</b> o sistema será construído — arquitetura, <b>modelo de classes</b> (diagrama de classes de projeto), interfaces, banco de dados, componentes. A arquitetura deve favorecer manutenção e escalabilidade.",
       "<mark>Implementação</mark>: <b>traduzir os modelos de projeto em código</b>, seguindo padrões de codificação e qualidade."
      ]
     },
     {
      "h": "Testes, implantação e manutenção",
      "itens": [
       "Testes: <b>unidade</b> (componentes isolados), <b>integração</b> (interfaces entre componentes), <b>sistema</b> (o todo, funcional e não funcional), <b>aceitação</b> (com o usuário). Caixa-branca (estrutura interna) × caixa-preta (comportamento). Regressão: retestar após mudanças.",
       "<b>Implantação</b>: colocar o sistema em produção (instalação, migração de dados, treinamento).",
       "<mark>Manutenção</mark>: a etapa <b>mais longa</b> do ciclo de vida. Tipos: <b>corretiva</b> (defeitos), <b>adaptativa</b> (mudanças de ambiente/tecnologia), <b>perfectiva/evolutiva</b> (melhorias e novas funcionalidades) e <b>preventiva</b> (facilitar manutenções futuras). Problema comum: a equipe original já não está disponível — por isso a documentação é essencial."
      ]
     }
    ],
    "pegadinhas": [
     "Usabilidade é requisito <b>não funcional</b>.",
     "Regra de negócio = requisito de domínio.",
     "Definir o modelo de classes é atividade de <b>projeto</b>; traduzir modelos em código é <b>implementação</b>.",
     "Manutenção é a fase mais longa, não a mais curta.",
     "Ordem da engenharia de requisitos: concepção, levantamento, elaboração, negociação, especificação, validação, gestão."
    ],
    "flash": [
     [
      "Requisito",
      "Serviço fornecido pelo sistema ou restrição operacional."
     ],
     [
      "Funcional × não funcional",
      "O que o sistema faz × qualidades e restrições."
     ],
     [
      "Requisito de domínio",
      "Regra de negócio."
     ],
     [
      "Etapas da engenharia de requisitos",
      "Concepção, levantamento, elaboração, negociação, especificação, validação, gestão."
     ],
     [
      "JAD",
      "Reuniões de grupo entre usuários e desenvolvedores."
     ],
     [
      "Matriz de rastreabilidade",
      "Liga requisitos da origem às entregas."
     ],
     [
      "Projeto",
      "Como construir: arquitetura, modelo de classes."
     ],
     [
      "Implementação",
      "Traduzir o projeto em código."
     ],
     [
      "Manutenção corretiva / adaptativa / perfectiva",
      "Corrigir / adaptar ao ambiente / melhorar."
     ],
     [
      "Fase mais longa",
      "Manutenção."
     ]
    ],
    "quiz": [
     {
      "q": "Qual é o requisito não funcional-chave ao definir a interface gráfica com o usuário?",
      "op": [
       "Funcionalidade",
       "Desempenho",
       "Segurança",
       "Usabilidade"
      ],
      "c": 3,
      "exp": "Facilidade de aprendizado e uso orienta o design da interface."
     },
     {
      "q": "Qual atividade é essencial na fase de projeto de um aplicativo que precisa suportar manutenção e escalabilidade?",
      "op": [
       "Escolha do SGBD",
       "Definição do modelo de classes do sistema",
       "Codificação das funcionalidades",
       "Testes de usabilidade com usuários"
      ],
      "c": 1,
      "exp": "O modelo de classes estrutura a arquitetura do sistema."
     },
     {
      "q": "O principal foco da equipe durante a implementação é:",
      "op": [
       "Análise de requisitos",
       "Design de interface",
       "Tradução dos modelos de projeto em código",
       "Teste de integração"
      ],
      "c": 2,
      "exp": "A análise vem antes; o teste de integração, depois."
     },
     {
      "q": "Regras de negócio que restringem os requisitos funcionais são chamadas de requisitos:",
      "op": [
       "Não funcionais",
       "De domínio",
       "De hardware",
       "De interface"
      ],
      "c": 1,
      "exp": "Seu descumprimento pode comprometer o uso do sistema."
     },
     {
      "q": "O documento que liga cada requisito de sua origem até as entregas que o satisfazem é a:",
      "op": [
       "Matriz de rastreabilidade",
       "EAP",
       "Ata de reunião",
       "Baseline"
      ],
      "c": 0,
      "exp": "Permite monitorar a estabilidade dos requisitos."
     },
     {
      "q": "A técnica de levantamento que substitui entrevistas individuais por reuniões de grupo com usuários e desenvolvedores é:",
      "op": [
       "Questionário",
       "JAD",
       "Observação",
       "Prototipação"
      ],
      "c": 1,
      "exp": "Joint Application Design."
     },
     {
      "q": "A etapa mais longa do ciclo de vida do software é:",
      "op": [
       "Levantamento",
       "Projeto",
       "Implementação",
       "Manutenção"
      ],
      "c": 3,
      "exp": "Inclui correções, adaptações e novas funcionalidades."
     },
     {
      "q": "Adaptar o software a um novo sistema operacional é manutenção:",
      "op": [
       "Corretiva",
       "Adaptativa",
       "Perfectiva",
       "Preventiva"
      ],
      "c": 1,
      "exp": "Corretiva corrige defeitos; perfectiva acrescenta melhorias."
     },
     {
      "q": "Na engenharia de requisitos, a etapa de negociação serve para:",
      "op": [
       "Codificar os requisitos",
       "Priorizar e resolver conflitos entre requisitos",
       "Implantar o sistema",
       "Escrever testes de unidade"
      ],
      "c": 1,
      "exp": "Avaliam-se custos, riscos e conflitos com todos os envolvidos."
     },
     {
      "q": "“O sistema deve responder em até 2 segundos” é um requisito:",
      "op": [
       "Funcional",
       "Não funcional",
       "De domínio",
       "De manutenção"
      ],
      "c": 1,
      "exp": "Descreve uma qualidade (desempenho), não um serviço."
     }
    ]
   },
   {
    "id": "mod",
    "cor": "var(--t3)",
    "titulo": "Modelos de processos de desenvolvimento de software",
    "curto": "Modelos de processo",
    "desc": "Cascata, incremental, evolucionário, prototipação, espiral, RUP, Manifesto Ágil, XP, Scrum e AUP.",
    "resumo": [
     {
      "h": "Modelos prescritivos",
      "itens": [
       "<mark>Cascata</mark>: sequencial, o mais antigo; indicado para <b>requisitos fixos e bem definidos</b>.",
       "<mark>Incremental</mark>: entregas em ciclos; entrega um <b>produto essencial</b> e as demais iterações já estão bem definidas.",
       "<mark>Evolucionário</mark>: parte dos requisitos está bem entendida; a cada iteração o problema é melhor compreendido e novas versões são geradas.",
       "<mark>Prototipação</mark>: “projeto rápido” iterativo com o usuário, usada principalmente para <b>validar requisitos</b>; o protótipo pode ser descartado ou evoluído. Etapas: <b>estabelecer objetivos → definir funcionalidade → desenvolver → avaliar</b>.",
       "<mark>Espiral</mark> (Barry Boehm, 1988): evolucionário e orientado a <b>riscos</b>; cada volta é uma fase. Quadrantes: determinar objetivos, alternativas e restrições; avaliar alternativas e <b>analisar riscos</b> (com protótipos); desenvolver e testar; planejar a próxima volta. Une o cascata (ciclo clássico) e a prototipação, acrescentando a análise de riscos."
      ]
     },
     {
      "h": "Processo Unificado (RUP)",
      "itens": [
       "Iterativo e incremental, dirigido por <b>casos de uso</b>, centrado na <b>arquitetura</b>.",
       "<mark>Quatro fases</mark>: <b>concepção</b> (inception — escopo, viabilidade), <b>elaboração</b> (arquitetura, requisitos detalhados, riscos), <b>construção</b> (desenvolvimento do produto) e <b>transição</b> (entrega ao usuário).",
       "<mark>O número de iterações em cada fase é variável</mark>, conforme o projeto. Disciplinas (modelagem de negócio, requisitos, análise e projeto, implementação, teste, implantação, configuração e mudanças, gerenciamento, ambiente) ocorrem em todas as fases, com intensidades diferentes (modelagem de negócio e requisitos mais fortes no início)."
      ]
     },
     {
      "h": "Métodos ágeis",
      "itens": [
       "<mark>Manifesto Ágil</mark> (2001): <b>indivíduos e interações</b> mais que processos e ferramentas; <b>software em funcionamento</b> mais que documentação abrangente; <b>colaboração com o cliente</b> mais que negociação de contratos; <b>resposta a mudanças</b> mais que seguir um plano.",
       "<mark>XP (Extreme Programming)</mark> — Kent Beck. <b>Valores</b>: comunicação, simplicidade, feedback, coragem e respeito. Práticas: <b>story cards</b> (histórias de usuário), programação em <b>pares</b>, <b>TDD</b> (teste antes do código), refatoração, integração contínua, releases pequenos, propriedade coletiva do código, cliente presente, ritmo sustentável. Papéis: cliente, programadores, <b>coach</b>, tracker.",
       "<b>Planning game</b>: no release planning, estima-se o esforço de cada story card e escolhe-se o que entra no release; no <mark>iteration planning</mark>, as histórias viram tarefas e <b>cada programador estima o tempo das tarefas sob sua responsabilidade</b>.",
       "<mark>Scrum</mark>: papéis — <b>Product Owner</b> (representa o cliente, prioriza o backlog), <b>Scrum Master</b> (garante as regras, facilitador, remove impedimentos) e <b>time</b> multidisciplinar e auto-organizado. Artefatos: <b>product backlog</b>, <b>sprint backlog</b>, <b>incremento</b>. Eventos: <b>sprint</b> (tipicamente 2 a 4 semanas), sprint planning, <b>daily scrum</b> (reunião diária curta), sprint review e sprint retrospective.",
       "<mark>AUP</mark> (Processo Unificado Ágil): versão simplificada do RUP; “serial no amplo, iterativo no particular”; mesmas 4 fases do RUP. Princípios: a equipe sabe o que faz, simplicidade, agilidade, foco em alto valor, independência de ferramenta, customização."
      ]
     }
    ],
    "pegadinhas": [
     "Cascata só para requisitos estáveis; requisitos voláteis pedem modelos iterativos/ágeis.",
     "O diferencial do espiral é a <b>análise de riscos</b>.",
     "RUP: o número de iterações por fase <b>varia</b>; testes e gerência de configuração ocorrem também na elaboração.",
     "Prototipação: objetivos → funcionalidade → desenvolver → avaliar (II, IV, III, I).",
     "No iteration planning do XP, cada programador estima as próprias tarefas.",
     "Product Owner prioriza o backlog; Scrum Master cuida das regras e remove impedimentos."
    ],
    "flash": [
     [
      "Cascata",
      "Sequencial; requisitos fixos."
     ],
     [
      "Incremental × evolucionário",
      "Produto essencial + iterações definidas × entendimento cresce a cada versão."
     ],
     [
      "Prototipação",
      "Validar requisitos: objetivos, funcionalidade, desenvolver, avaliar."
     ],
     [
      "Espiral",
      "Boehm, 1988; orientado a riscos."
     ],
     [
      "Fases do RUP",
      "Concepção, elaboração, construção, transição."
     ],
     [
      "4 valores do Manifesto Ágil",
      "Indivíduos, software funcionando, colaboração com cliente, resposta a mudanças."
     ],
     [
      "Valores do XP",
      "Comunicação, simplicidade, feedback, coragem, respeito."
     ],
     [
      "TDD",
      "Escrever o teste antes do código."
     ],
     [
      "Papéis do Scrum",
      "Product Owner, Scrum Master, time."
     ],
     [
      "Artefatos do Scrum",
      "Product backlog, sprint backlog, incremento."
     ],
     [
      "Daily scrum",
      "Reunião diária curta do time."
     ],
     [
      "AUP",
      "RUP simplificado: serial no amplo, iterativo no particular."
     ]
    ],
    "quiz": [
     {
      "q": "Na sessão Iteration Planning Game do XP, normalmente se faz:",
      "op": [
       "Definição, pelos programadores, dos story cards da iteração",
       "Estimação do esforço de cada story card",
       "Estimação da data de entrega do release",
       "Estimação, por cada programador, do tempo das tarefas sob sua responsabilidade"
      ],
      "c": 3,
      "exp": "As estimativas de story cards e datas pertencem ao release planning."
     },
     {
      "q": "A ordem correta das etapas da prototipação é: I. Avaliar; II. Estabelecer objetivos; III. Desenvolver; IV. Definir funcionalidade.",
      "op": [
       "I, IV, II, III",
       "II, IV, III, I",
       "III, II, IV, I",
       "IV, II, I, III"
      ],
      "c": 1,
      "exp": "Primeiro objetivos, depois funcionalidade, desenvolvimento e avaliação."
     },
     {
      "q": "Sobre o RUP, é correto afirmar:",
      "op": [
       "Modelagem de negócio é mais intensa na construção",
       "O número de iterações em cada uma das quatro fases é variável",
       "Requisitos têm menor atividade na concepção",
       "Testes não são executados na elaboração"
      ],
      "c": 1,
      "exp": "A quantidade de iterações depende do projeto."
     },
     {
      "q": "O modelo espiral (Pressman) incorpora o ciclo clássico e a prototipação e acrescenta:",
      "op": [
       "A análise de riscos",
       "A programação em pares",
       "O backlog",
       "A documentação mínima"
      ],
      "c": 0,
      "exp": "Cada volta inclui avaliação de alternativas e riscos."
     },
     {
      "q": "Para um projeto com requisitos fixos e bem compreendidos, o modelo mais indicado é:",
      "op": [
       "Cascata",
       "Espiral",
       "Prototipação",
       "Scrum"
      ],
      "c": 0,
      "exp": "O fluxo pode seguir sequencialmente até o encerramento."
     },
     {
      "q": "Qual NÃO é um valor do Manifesto Ágil?",
      "op": [
       "Indivíduos e interações mais que processos e ferramentas",
       "Software em funcionamento mais que documentação abrangente",
       "Seguir um plano mais que responder a mudanças",
       "Colaboração com o cliente mais que negociação de contratos"
      ],
      "c": 2,
      "exp": "O manifesto valoriza responder a mudanças mais que seguir um plano."
     },
     {
      "q": "No Scrum, quem representa o cliente e prioriza o product backlog é o:",
      "op": [
       "Scrum Master",
       "Product Owner",
       "Coach",
       "Tracker"
      ],
      "c": 1,
      "exp": "O Scrum Master garante as regras e facilita."
     },
     {
      "q": "Os valores do XP são:",
      "op": [
       "Comunicação, simplicidade, feedback, coragem e respeito",
       "Escopo, custo, prazo e qualidade",
       "Planejar, fazer, checar, agir",
       "Concepção, elaboração, construção e transição"
      ],
      "c": 0,
      "exp": "Proposto por Kent Beck."
     },
     {
      "q": "As quatro fases do RUP são:",
      "op": [
       "Análise, projeto, código e teste",
       "Concepção, elaboração, construção e transição",
       "Iniciação, planejamento, execução e encerramento",
       "Sprint, review, retrospective e daily"
      ],
      "c": 1,
      "exp": "O AUP adota as mesmas quatro fases."
     },
     {
      "q": "O AUP pode ser definido como:",
      "op": [
       "Uma versão simplificada do RUP, serial no amplo e iterativo no particular",
       "Um modelo cascata com prototipação",
       "Uma certificação do PMI",
       "Um framework de testes"
      ],
      "c": 0,
      "exp": "Segue valores e princípios ágeis."
     }
    ]
   },
   {
    "id": "qual",
    "cor": "var(--t4)",
    "titulo": "Qualidade de software",
    "curto": "Qualidade",
    "desc": "Qualidade de processo e de produto, gerenciamento da qualidade, fatores de McCall, custos da qualidade, métricas e testes.",
    "resumo": [
     {
      "h": "Conceitos",
      "itens": [
       "<mark>Qualidade de software</mark> (Pressman): gestão de qualidade efetiva aplicada para criar um produto útil que forneça <b>valor mensurável</b> a quem produz e a quem usa.",
       "A camada qualidade depende da existência de um <b>processo</b>: não se garante a qualidade do que não existe.",
       "<mark>Gerenciamento da qualidade</mark> (Sommerville): <b>garantia da qualidade</b> (padrões e procedimentos organizacionais), <b>planejamento da qualidade</b> (padrões para cada projeto) e <b>controle da qualidade</b> (verificar se foram seguidos). A equipe de qualidade deve ser <b>independente</b> da de desenvolvimento.",
       "Duas dimensões: qualidade do <b>processo</b> (testes de verificação, estáticos, em todas as etapas) e do <b>produto</b> (testes de validação: unidade → integração → sistema, com usuários).",
       "Cultura de não tolerância a erros; <b>auditorias e revisões frequentes</b> minimizam defeitos."
      ]
     },
     {
      "h": "Fatores e atributos de qualidade",
      "itens": [
       "<mark>Fatores de McCall</mark> em três perspectivas: <b>operação</b> (correção, confiabilidade, eficiência, integridade, usabilidade), <b>revisão</b> (manutenibilidade, flexibilidade, testabilidade) e <b>transição</b> (portabilidade, reusabilidade, interoperabilidade).",
       "<b>Confiabilidade</b>: realizar a função com a precisão exigida (e, no Praticando, o tempo em que o software fica disponível). <b>Eficiência</b>: recursos computacionais exigidos. <b>Integridade</b>: controle de acesso não autorizado. <b>Usabilidade</b>: esforço para aprender e operar. <b>Manutenibilidade</b>: esforço para localizar e corrigir erros. <b>Portabilidade</b>: esforço para transferir para outro ambiente. <b>Reusabilidade</b>: reaproveitamento em outras aplicações.",
       "Normas relacionadas: ISO/IEC 9126 e sua sucessora ISO/IEC 25010 (modelo de qualidade de produto), ISO 9001 (gestão da qualidade), CMMI e MPS.BR (maturidade de processo)."
      ]
     },
     {
      "h": "Custos da qualidade",
      "itens": [
       "<mark>Custo da qualidade</mark> = custo da <b>conformidade</b> + custo da <b>não conformidade</b>.",
       "Conformidade: <b>prevenção</b> (planejamento, treinamento, padrões) + <b>detecção/avaliação</b> (revisões, testes, auditorias). Não conformidade: <b>falhas internas</b> (antes da entrega) e <b>externas</b> (após a entrega — as mais caras).",
       "Quanto mais tarde um defeito é encontrado, mais caro é corrigi-lo."
      ]
     },
     {
      "h": "Métricas",
      "itens": [
       "<mark>Métrica</mark>: medida quantitativa do grau em que um sistema, componente ou processo possui um atributo.",
       "Abordagem <b>GQM</b> (objetivo → questões → métricas). Ex.: objetivo “testar todos os requisitos funcionais” → questão “qual a cobertura?” → métrica “nº de requisitos testados”.",
       "<mark>Complexidade ciclomática</mark> (McCabe): número de caminhos independentes; relacionada ao nível de <b>compreensão</b> e à testabilidade do programa.",
       "<b>Fan-in/Fan-out</b>: acoplamento — quantas funções chamam a função (fan-in) e quantas ela chama (fan-out). <b>Fog index</b>: legibilidade de documentos (tamanho de palavras e frases). <b>Comprimento do código (LOC)</b>: quanto maior, mais propenso a erros. <b>Profundidade de aninhamento</b>: quanto mais profundo, mais difícil de entender. Pontos de função: tamanho funcional."
      ]
     }
    ],
    "pegadinhas": [
     "Portabilidade = transferir entre ambientes; eficiência = uso de recursos; confiabilidade = funcionar corretamente/disponível.",
     "Fan-in/Fan-out mede acoplamento, não número de funções. Fog index mede legibilidade de texto, não caracteres do programa.",
     "Mais linhas de código → mais erros (não o inverso). Aninhamento profundo dificulta a compreensão.",
     "Auditorias frequentes reduzem erros; testes tardios e menos revisões aumentam o custo.",
     "Garantia estabelece padrões; controle verifica se foram seguidos."
    ],
    "flash": [
     [
      "Qualidade (Pressman)",
      "Gestão efetiva que gera produto útil com valor mensurável."
     ],
     [
      "Atividades do gerenciamento da qualidade",
      "Garantia, planejamento e controle."
     ],
     [
      "Fatores de McCall",
      "Operação, revisão e transição do produto."
     ],
     [
      "Confiabilidade",
      "Executar a função com a precisão exigida / disponibilidade."
     ],
     [
      "Portabilidade",
      "Esforço para transferir a outro ambiente."
     ],
     [
      "Custo da qualidade",
      "Conformidade (prevenção + detecção) + não conformidade (falhas internas + externas)."
     ],
     [
      "GQM",
      "Goal, Question, Metric."
     ],
     [
      "Complexidade ciclomática",
      "Caminhos independentes; ligada à compreensão."
     ],
     [
      "Fan-in / Fan-out",
      "Quem chama a função / quem ela chama (acoplamento)."
     ],
     [
      "Fog index",
      "Legibilidade de documentos."
     ]
    ],
    "quiz": [
     {
      "q": "Qual métrica pode estar relacionada ao nível de compreensão do programa?",
      "op": [
       "Fan-In/Fan-Out, que conta funções",
       "Complexidade ciclomática",
       "Fog index, que conta caracteres do programa",
       "Comprimento total, inversamente proporcional aos erros"
      ],
      "c": 1,
      "exp": "Quanto mais caminhos independentes, mais difícil entender e testar."
     },
     {
      "q": "Qual relação entre atributo de qualidade e descrição está correta?",
      "op": [
       "Eficiência: facilidade de transferir entre ambientes",
       "Usabilidade: uso otimizado de recursos",
       "Manutenibilidade: tempo disponível para uso",
       "Confiabilidade: período de tempo em que o software está disponível para uso"
      ],
      "c": 3,
      "exp": "Transferir entre ambientes é portabilidade; uso de recursos é eficiência."
     },
     {
      "q": "Qual prática minimiza a ocorrência de erros durante o desenvolvimento?",
      "op": [
       "Abordagem Waterfall",
       "Uso frequente de auditorias de qualidade",
       "Testes de sistema tardios",
       "Redução de revisões de código"
      ],
      "c": 1,
      "exp": "Detectar cedo é mais barato e eficaz."
     },
     {
      "q": "O custo da conformidade é composto por:",
      "op": [
       "Falhas internas e externas",
       "Prevenção e detecção de defeitos",
       "Salários e impostos",
       "Hardware e software"
      ],
      "c": 1,
      "exp": "Falhas internas e externas formam o custo da não conformidade."
     },
     {
      "q": "A métrica Fan-In/Fan-Out mede principalmente:",
      "op": [
       "Legibilidade do texto",
       "Acoplamento entre funções",
       "Número de linhas",
       "Tempo de resposta"
      ],
      "c": 1,
      "exp": "Fan-in: quem chama; fan-out: quem é chamado."
     },
     {
      "q": "Segundo Sommerville, a equipe de garantia da qualidade deve ser:",
      "op": [
       "A mesma equipe de desenvolvimento",
       "Independente da equipe de desenvolvimento",
       "Formada só por clientes",
       "Dispensada em projetos ágeis"
      ],
      "c": 1,
      "exp": "Evita que a pressão de prazo comprometa a qualidade."
     },
     {
      "q": "A implantação de um sistema de qualidade em um projeto de software exige, como condição:",
      "op": [
       "Um processo de desenvolvimento definido",
       "Uma ferramenta de testes paga",
       "Um cliente certificado",
       "Equipe maior que 10 pessoas"
      ],
      "c": 0,
      "exp": "Não se garante a qualidade do que não existe."
     },
     {
      "q": "Na abordagem GQM, a sequência é:",
      "op": [
       "Métrica → questão → objetivo",
       "Objetivo → questões → métricas",
       "Teste → código → requisito",
       "Custo → prazo → escopo"
      ],
      "c": 1,
      "exp": "As questões ligam os objetivos às métricas."
     },
     {
      "q": "O fator de McCall que indica o esforço para transferir o programa para outro ambiente de hardware ou software é:",
      "op": [
       "Portabilidade",
       "Integridade",
       "Testabilidade",
       "Eficiência"
      ],
      "c": 0,
      "exp": "Pertence à perspectiva de transição do produto."
     },
     {
      "q": "Defeitos encontrados pelo cliente após a entrega fazem parte do custo de:",
      "op": [
       "Prevenção",
       "Detecção",
       "Falhas externas",
       "Planejamento"
      ],
      "c": 2,
      "exp": "São os mais caros de corrigir."
     }
    ]
   },
   {
    "id": "gcs",
    "cor": "var(--t5)",
    "titulo": "Gerenciamento de configurações",
    "curto": "Gerência de configuração",
    "desc": "GCS, itens de configuração, baselines e codelines, processo de GCS, gerenciamento de mudanças, versões e releases, Git, integração, entrega e implantação contínuas.",
    "resumo": [
     {
      "h": "Conceitos de GCS",
      "itens": [
       "<mark>Gerenciamento de configuração de software (GCS)</mark>: gerencia alterações ao longo de todo o ciclo de vida; atividade de <b>garantia da qualidade</b>. Principais atribuições: <b>controle de versão</b>, <b>controle de mudança</b> e <b>auditoria de configuração</b>.",
       "Exemplo clássico: falha na versão 1 em produção enquanto a 2 está em desenvolvimento → corrigir a v1 e replicar a correção na v2 exige GCS.",
       "Elementos de um sistema de GCS (Pressman): componentes, processos, construção e humanos.",
       "<mark>Item de configuração de software (ICS)</mark>: artefato sob controle (especificações, modelos, código, testes, até versões de ferramentas como compiladores). Organizados como objetos de configuração relacionados, guardados num <b>repositório</b>.",
       "<mark>Baseline (referência)</mark>: ICS revisado e aprovado; a partir dela, mudanças só via controles formais. Também é a definição de uma versão do sistema (componentes, bibliotecas, configurações). <b>Codeline</b>: sequência de versões de um componente. <b>Mainline</b>: sequência de baselines."
      ]
     },
     {
      "h": "Processo de GCS",
      "itens": [
       "<mark>Camadas concêntricas</mark> (Pressman): <b>identificação</b> → <b>controle de versão</b> → <b>controle de alteração (mudança)</b> → <b>auditoria de configuração</b> → <b>relato (relatório de status)</b>.",
       "<mark>Gerenciamento de mudanças</mark> (Sommerville): solicitação → análise de impacto e custo → aprovação (comitê de controle de mudanças) → implementação → teste → nova baseline. Prioriza mudanças urgentes e com bom custo-benefício.",
       "<b>Versão</b>: instância de um item com mudanças. <mark>Release</mark>: versão distribuída aos clientes.",
       "<b>Construção do sistema (build)</b>: compilar e ligar componentes, bibliotecas e arquivos de configuração para gerar o executável."
      ]
     },
     {
      "h": "Controle de versão e Git",
      "itens": [
       "Sistemas de controle de versão: centralizados (CVS, SVN) e <mark>distribuídos</mark> (<b>Git</b>, criado por Linus Torvalds para o kernel Linux).",
       "<code>clone</code>: copia o repositório do projeto para o computador. <mark>commit</mark>: agrupa um conjunto de alterações no repositório local. <mark>push</mark>: envia as alterações do repositório local para outro repositório. <mark>pull</mark>: <b>atualiza o repositório local com as alterações feitas em outro repositório</b> (baixa e mescla).",
       "<code>branch</code>: linha de desenvolvimento separada; <code>merge</code>: une linhas. <b>Pull request</b>: pedido para que suas alterações sejam incorporadas ao repositório original."
      ]
     },
     {
      "h": "Integração, entrega e implantação contínuas",
      "itens": [
       "<mark>Integração contínua</mark>: construir o sistema com frequência e rodar testes automatizados. Passos: extrair a mainline → construir e testar → fazer as mudanças → construir e testar localmente → enviar ao servidor de construção → construir e testar no servidor → efetivar a nova baseline. Build “quebrada” deve ser reparada por quem fez o último check-in.",
       "<mark>Entrega contínua</mark>: a versão fica sempre pronta para ir à produção (liberação ainda pode ser manual).",
       "<mark>Implantação contínua</mark>: a versão aprovada vai automaticamente para produção; o pipeline automatizado <b>impede que a versão entre em produção se algum teste falhar</b>.",
       "<b>Smoke test</b>: teste rápido de fumaça para verificar se as funções básicas funcionam."
      ]
     }
    ],
    "pegadinhas": [
     "<code>pull</code> atualiza o repositório <b>local</b> com alterações de outro repositório; <code>push</code> envia do local para outro.",
     "Pull request é o pedido para contribuir de volta ao repositório original (não é o comando pull).",
     "Baseline = item revisado e aprovado; mudanças posteriores só com controle formal.",
     "Implantação contínua: pipeline que bloqueia a produção se o teste falhar.",
     "Ordem das camadas: identificação, versão, mudança, auditoria, relato."
    ],
    "flash": [
     [
      "GCS",
      "Gerencia alterações em todo o ciclo de vida; atividade de garantia da qualidade."
     ],
     [
      "ICS",
      "Item de configuração de software sob controle."
     ],
     [
      "Baseline",
      "ICS revisado e aprovado; referência para mudanças controladas."
     ],
     [
      "Codeline / mainline",
      "Versões de um componente / sequência de baselines."
     ],
     [
      "Camadas do processo de GCS",
      "Identificação, controle de versão, controle de mudança, auditoria, relato."
     ],
     [
      "Release",
      "Versão distribuída aos clientes."
     ],
     [
      "commit",
      "Agrupa alterações no repositório local."
     ],
     [
      "push",
      "Envia do local para outro repositório."
     ],
     [
      "pull",
      "Atualiza o local com alterações de outro repositório."
     ],
     [
      "Integração contínua",
      "Builds frequentes com testes automatizados."
     ],
     [
      "Implantação contínua",
      "Vai para produção automaticamente; teste falhou → bloqueia."
     ]
    ],
    "quiz": [
     {
      "q": "O comando pull do Git:",
      "op": [
       "Envia arquivos para o repositório remoto",
       "Envia arquivos para o repositório local",
       "É o pedido para contribuir ao repositório original",
       "Atualiza o repositório local com todas as alterações feitas em outro repositório"
      ],
      "c": 3,
      "exp": "Enviar é push; o pedido de contribuição é o pull request."
     },
     {
      "q": "Para impedir que uma nova versão entre em produção caso um teste falhe, a abordagem adequada é:",
      "op": [
       "Na implantação contínua, automatizar o processo de forma que impeça a entrada em produção se o teste falhar",
       "Na entrega contínua, pôr em produção automaticamente sempre",
       "Na integração contínua, agregar mudanças sem testar",
       "Rodar smoke tests só depois da produção"
      ],
      "c": 0,
      "exp": "O pipeline automatizado barra versões com falha."
     },
     {
      "q": "As principais atribuições da gestão de configuração de software são:",
      "op": [
       "Codificação, testes e implantação",
       "Controle de versão, controle de mudança e auditoria das configurações",
       "Levantamento de requisitos e prototipação",
       "Cronograma, custos e riscos"
      ],
      "c": 1,
      "exp": "É área de apoio ao desenvolvimento e à qualidade."
     },
     {
      "q": "Um item de configuração revisado, aprovado e registrado no repositório, que só pode ser alterado por controles formais, é uma:",
      "op": [
       "Codeline",
       "Baseline (referência)",
       "Branch temporária",
       "Release candidata"
      ],
      "c": 1,
      "exp": "A partir da baseline, mudanças seguem o controle de GCS."
     },
     {
      "q": "O comando que envia as alterações do repositório local para outro repositório é:",
      "op": [
       "commit",
       "pull",
       "push",
       "clone"
      ],
      "c": 2,
      "exp": "commit grava localmente; push publica."
     },
     {
      "q": "A ordem das camadas do processo de GCS (Pressman) é:",
      "op": [
       "Relato, auditoria, mudança, versão, identificação",
       "Identificação, controle de versão, controle de mudança, auditoria, relato",
       "Versão, release, deploy, teste, código",
       "Planejamento, execução, controle, encerramento"
      ],
      "c": 1,
      "exp": "Os ICS transitam da camada interna para as externas."
     },
     {
      "q": "Na integração contínua, quando a construção fica “quebrada”, o responsável por repará-la é:",
      "op": [
       "O cliente",
       "Quem fez o último check-in na baseline",
       "O gerente de projeto",
       "A equipe de suporte"
      ],
      "c": 1,
      "exp": "Os testes automatizados identificam a quebra."
     },
     {
      "q": "Uma versão do sistema distribuída aos clientes é chamada de:",
      "op": [
       "Codeline",
       "Release",
       "Branch",
       "Commit"
      ],
      "c": 1,
      "exp": "Nem toda versão vira release."
     },
     {
      "q": "O Git é um sistema de controle de versões:",
      "op": [
       "Centralizado, criado pela Microsoft",
       "Distribuído, criado por Linus Torvalds",
       "Exclusivo para documentos de texto",
       "Sem histórico de alterações"
      ],
      "c": 1,
      "exp": "Foi criado para o desenvolvimento do kernel Linux."
     },
     {
      "q": "O gerenciamento de mudanças garante que:",
      "op": [
       "Qualquer alteração entre em produção imediatamente",
       "As alterações sejam aplicadas de forma controlada, priorizando as urgentes e de bom custo-benefício",
       "Nenhuma mudança seja permitida após o levantamento",
       "Apenas o cliente altere o código"
      ],
      "c": 1,
      "exp": "Inclui análise de impacto e aprovação antes da implementação."
     }
    ]
   }
  ]
 }
];
