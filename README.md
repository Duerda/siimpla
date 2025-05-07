# siimpla - Frontend 

Este é o projeto frontend para a startup "siimpla", desenvolvido com React.js. Video: https://media-hosting.imagekit.io/4fbdd1f0f1c041a5/VID-20250506-WA0009.mp4?Expires=1841247125&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KGiEuIsAPOWDyp1qGpolEkw2fi5~GcjYAZwGU4xQa0D2GG4auihDw2INBarM0TnEGt8TeZ35~uYC8xAlkHEwwrXwoKPFCjZnhBYD9xwM2y2PiJGuRl51XyPmrcyJpM5BU2ZXrFEbIH4TrPhNCZOmE0FEQHOrI-PkwQO6tjpsd7xgRC6pK1Vzc-oIdVuvRZ-OwPjPXM-d2jQXqy-X8PeusyKBM5hNomVc47aTNUirsfliUTXT78EbF3F6uMJxoi73MqBLJGwGqmSTguAb7fDIMPcuuW8KWOUNVie1HoC~DUYPtqL~Zd7Qp7cw8wrCqbyYx9SOIcdNR-Smxx7DLoobLA__

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


