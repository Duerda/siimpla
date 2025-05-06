## Plano de Desenvolvimento - Startup Frontend Creator (siimpla)

**Status:** Em andamento

**Passos:**

- [ ] 001: Solicitar arquivo logo.png ao usuário (Concluído)
- [ ] 002: Estruturar projeto React com pastas necessárias (Concluído)
  - [X] Criar app React com `create-react-app`
  - [X] Instalar `react-router-dom`
  - [X] Criar estrutura de pastas: `/src`, `/components`, `/pages`, `/contexts`, `/public`
  - [X] Mover e renomear logo para `/public/logo.png`
  - [X] Remover arquivos padrão desnecessários
- [ ] 003: Implementar componentes e páginas principais
  - [X] Criar `src/components/Header.js`
  - [X] Criar `src/components/Footer.js`
  - [X] Criar `src/pages/Home.js`
  - [X] Criar `src/pages/Login.js`
  - [X] Criar `src/pages/Dashboard.js`
  - [X] Criar `src/pages/RemoveBackground.js` (placeholder)
  - [X] Criar `src/pages/ToDoList.js` (placeholder)
  - [X] Criar `src/pages/Converter.js` (placeholder)
  - [X] Criar `src/contexts/AuthContext.js`
  - [X] Configurar `src/index.js`
  - [X] Configurar roteamento básico em `src/App.js`
- [ ] 004: Adicionar funcionalidades obrigatórias
  - [X] Implementar sistema de Login/Cadastro simulado (JWT fake)
  - [X] Implementar Context API (`AuthContext`) para estado de autenticação
  - [X] Criar rotas protegidas (Dashboard, Ferramentas)
  - [X] Implementar pelo menos uma ferramenta (ToDo List ou Conversor)
- [ ] 005: Aplicar design minimalista e responsivo
  - [X] Estilizar Header (sticky, logo, menu/login)
  - [X] Estilizar Footer (fundo escuro, texto centralizado)
  - [X] Estilizar Home (logo, tagline, botão login, descrição)
  - [X] Estilizar Login (formulário centralizado, campos espaçados, botão azul)
  - [X] Estilizar Dashboard (título, lista/cards de ferramentas, botão logout)
  - [X] Estilizar Ferramenta(s) implementada(s)
  - [X] Garantir responsividade (desktop, tablet, mobile)
  - [X] Aplicar paleta de cores (Preto, Branco, Azul Serenity #5C9EFF)
  - [X] Usar tipografia moderna sem serifa
  - [X] Adicionar animações leves (opcional)
- [ ] 006: Validar funcionalidades e boas práticas
  - [X] Testar fluxo de login/logout
  - [X] Testar proteção de rotas
  - [X] Testar funcionalidade da(s) ferramenta(s)
  - [X] Verificar responsividade em diferentes tamanhos de tela
  - [X] Revisar nomes de variáveis/funções
  - [X] Revisar responsabilidade única das funções
  - [X] Verificar indentação e organização do código
- [ ] 007: Preparar documentação e README
  - [X] Escrever `README.md` com instruções (`npm install`, `npm start`)
- [ ] 008: Gerar arquivo zipado e reportar ao usuário
  - [X] Criar arquivo `.zip` do projeto
  - [ ] Enviar mensagem ao usuário com o arquivo anexado
