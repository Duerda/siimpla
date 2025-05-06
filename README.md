# siimpla - Frontend

Este é o projeto frontend para a startup "siimpla", desenvolvido com React.js.

## Descrição

O siimpla oferece um conjunto de ferramentas online simples e rápidas para facilitar tarefas do dia a dia. Este repositório contém o código-fonte do frontend da aplicação web.

## Tecnologias Utilizadas

*   **React.js:** Biblioteca principal para construção da interface.
*   **React Router:** Para gerenciamento de rotas e navegação.
*   **Context API:** Para gerenciamento de estado global (autenticação).
*   **useState & useEffect:** Para gerenciamento de estado local e efeitos colaterais.
*   **CSS:** Estilização personalizada seguindo a identidade visual da siimpla (minimalista, cores Preto, Branco, Azul Serenity #5C9EFF).
*   **HTML:** Estrutura semântica.

## Funcionalidades Implementadas

*   **Página Inicial (Home):** Apresentação da startup e chamada para login.
*   **Login:** Formulário para autenticação simulada (armazena um token JWT "fake" no localStorage).
*   **Dashboard:** Painel principal para usuários logados, listando as ferramentas disponíveis.
*   **Rotas Protegidas:** Acesso ao Dashboard e às ferramentas restrito a usuários autenticados.
*   **Ferramentas:**
    *   **Lista de Tarefas (ToDo List):** Permite adicionar, remover e marcar tarefas como concluídas (com persistência opcional no localStorage).
    *   **Conversor de Moedas:** Converte valores de Real (BRL) para Dólar (USD) usando uma taxa fixa simulada.
    *   **Removedor de Fundo:** Placeholder para futura implementação.
*   **Design Responsivo:** Interface adaptada para desktop, tablet e mobile.
*   **Componentização:** Código organizado em componentes reutilizáveis (Header, Footer).

## Estrutura do Projeto

```
/siimpla-frontend
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── RemoveBackground.js
│   │   ├── ToDoList.js
│   │   ├── ToDoList.css
│   │   ├── Converter.js
│   │   └── Converter.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Como Executar o Projeto Localmente

1.  **Clone o repositório (ou descompacte o arquivo .zip).**

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd siimpla-frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

    A aplicação estará disponível em `http://localhost:3000` (ou outra porta, se a 3000 estiver ocupada).

## Observações

*   A autenticação é simulada e utiliza `localStorage` para persistir o token "fake". Não há backend real ou segurança robusta implementada.
*   O conversor de moedas utiliza uma taxa de câmbio fixa e simulada.
*   A ferramenta "Removedor de Fundo" é apenas um placeholder.

