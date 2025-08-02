<div align="center">
  <img src="src/assets/logo.svg" alt="DT Money" width="200"/>
</div>

<p align="center">
  Uma aplicação web para controle financeiro pessoal desenvolvida em React com TypeScript
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/elenmagalhaes/dt-money-web?color=00875F">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/elenmagalhaes/dt-money-web?color=00875F">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/elenmagalhaes/dt-money-web?color=00875F">
  <img alt="Status do Projeto" src="https://img.shields.io/badge/status-development-yellow">
</p>


<div align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-projeto">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</div>

## 💻 Sobre

O **DT Money** é uma aplicação de controle financeiro pessoal desenvolvida com React e TypeScript, onde você pode gerenciar suas transações financeiras, acompanhar entradas e saídas, e ter um resumo completo do seu saldo. O projeto utiliza Styled Components para estilização e Radix UI para componentes acessíveis.

**Status atual:** Aplicação funcionalmente completa com API integrada, validação de formulários e sistema de gerenciamento de estado implementados.

## 🎨 Layout

O layout da aplicação foi baseado no design disponível no Figma:

<a href="https://www.figma.com/design/FYWzJOVbnhrIqUoX2hoea8/DT-Money--Community-?node-id=42078-424&t=S9ZSjdNTzcTWoR4h-0">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361?color=00875F">
</a>

## 📱 Preview

<div align="center">
  <img alt="Preview Home Desktop" src=".github/preview-home.png" width="800" />
  <img alt="Preview Modal Desktop" src=".github/preview-modal.png" width="800" />
</div>

### 📈 Últimas atualizações

- ✅ **Integração com API** - Axios configurado para comunicação com JSON Server
- ✅ **Context API implementado** - TransactionsContext para gerenciamento global de estado
- ✅ **Validação de formulários** - React Hook Form + Zod para validação robusta
- ✅ **Hook customizado** - useSummary para cálculos financeiros
- ✅ **CRUD completo** - Criação e listagem de transações com API
- ✅ **Sistema de busca funcional** - Filtro integrado com backend
- ✅ **Formatação de valores** - Utilitários para formatação de moeda
- ✅ **Lint configurado** - ESLint com configuração Rocketseat
- ✅ **Seleção de tipo** - Controller para seleção de entrada/saída

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://reactjs.org/) - Biblioteca para interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Linguagem com tipagem estática
- [Styled Components](https://styled-components.com/) - CSS-in-JS para estilização
- [Radix UI](https://www.radix-ui.com/) - Componentes primitivos acessíveis
- [Phosphor Icons](https://phosphoricons.com/) - Biblioteca de ícones
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [ESLint](https://eslint.org/) - Ferramenta de linting para código
- [Axios](https://axios-http.com/) - Cliente HTTP para requisições à API
- [React Hook Form](https://react-hook-form.com/) - Biblioteca para gerenciamento de formulários
- [Zod](https://zod.dev/) - Schema validation com TypeScript
- [JSON Server](https://github.com/typicode/json-server) - API REST fake para desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── @types/           # Tipos TypeScript customizados
│   └── styled.d.ts   # Tipagem do tema do Styled Components
├── assets/           # Assets da aplicação (imagens, ícones)
│   └── logo.svg      # Logo da aplicação
├── components/       # Componentes reutilizáveis
│   ├── Header/       # Cabeçalho com logo e botão de nova transação
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Summary/      # Cards de resumo financeiro
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── NewTransactionModal/ # Modal para cadastro de transações
│       ├── index.tsx
│       └── styles.ts
├── contexts/         # Contextos React para gerenciamento de estado
│   └── TransactionsContext.tsx # Context para transações
├── hooks/            # Hooks customizados
│   └── useSummary/   # Hook para cálculos do resumo financeiro
│       └── index.tsx
├── lib/              # Configurações de bibliotecas externas
│   └── axios.ts      # Configuração do cliente HTTP
├── pages/            # Páginas da aplicação
│   └── Transactions/ # Página principal com transações
│       ├── index.tsx
│       ├── styles.ts
│       └── components/
│           └── SearchForm/ # Formulário de busca
├── styles/           # Configurações de estilo globais
│   ├── global.ts     # Estilos globais
│   └── themes/
│       └── default.ts # Tema padrão da aplicação
├── utils/            # Funções utilitárias
│   └── formatter.ts  # Formatação de valores e datas
├── App.tsx           # Componente principal
└── main.tsx          # Ponto de entrada da aplicação
```

## ⚡ Funcionalidades

### ✅ Implementadas

- **Dashboard financeiro** - Visualização de entradas, saídas e saldo total com cálculos em tempo real
- **Listagem de transações** - Tabela com todas as transações carregadas da API
- **Destaque por tipo** - Cores diferenciadas para entradas (verde) e saídas (vermelho)
- **Modal de cadastro** - Formulário completo com validação para adicionar transações
- **Sistema de busca funcional** - Campo para filtrar transações integrado com backend
- **Validação robusta** - React Hook Form + Zod para validação de formulários
- **Gerenciamento de estado** - Context API para estado global das transações
- **Integração com API** - Comunicação completa com JSON Server via Axios
- **Hook customizado** - useSummary para cálculos do resumo financeiro
- **Formatação de valores** - Utilitários para formatação de moeda brasileira
- **Interface responsiva** - Design que se adapta a diferentes tamanhos de tela
- **Tema consistente** - Sistema de cores e tipografia unificado
- **Componentes reutilizáveis** - Header, Summary e Modal modulares
- **Paths absolutos** - Imports limpos sem caminhos relativos complexos
- **Configuração de lint** - ESLint com configuração Rocketseat para qualidade de código

### 🧩 Componentes e Arquitetura

- **Header** - Cabeçalho com logo e botão para nova transação
- **Summary** - Cards com resumo de entradas, saídas e total (usando useSummary hook)
- **NewTransactionModal** - Modal com formulário validado por React Hook Form + Zod
- **SearchForm** - Formulário de busca integrado com API
- **TransactionsTable** - Tabela de listagem das transações com formatação
- **TransactionsContext** - Context para gerenciamento global do estado das transações
- **useSummary** - Hook customizado para cálculos do resumo financeiro
- **Axios API Client** - Cliente configurado para comunicação com JSON Server

### 🚧 Em desenvolvimento

- **Categorização avançada** - Sistema expandido de categorias para organização
- **Filtros avançados** - Filtros por data, categoria e faixa de valor
- **Gráficos e relatórios** - Visualizações gráficas dos dados financeiros
- **Exportação de dados** - Funcionalidade para exportar relatórios em PDF/Excel
- **Edição de transações** - Funcionalidade para editar transações existentes
- **Exclusão de transações** - Funcionalidade para remover transações

### 💡 Próximas funcionalidades

- **Metas financeiras** - Sistema de definição e acompanhamento de metas
- **Notificações** - Alertas para gastos e lembretes
- **Modo escuro/claro** - Toggle entre temas
- **Backup e sincronização** - Sincronização entre dispositivos

## 🔧 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/elenmagalhaes/dt-money-web.git

# Acesse a pasta do projeto no terminal/cmd
$ cd dt-money-web

# Instale as dependências
$ npm install
# ou
$ yarn install

# Inicie o servidor JSON (API fake)
$ npm run dev:server
# ou
$ yarn dev:server

# Em outro terminal, execute a aplicação
$ npm run dev
# ou
$ yarn dev

# O servidor da API estará na porta:3000 - http://localhost:3000
# A aplicação estará na porta:5173 - http://localhost:5173
```

### 🏗️ Scripts disponíveis

```bash
# Desenvolvimento
$ npm run dev          # Inicia aplicação em modo desenvolvimento
$ npm run dev:server   # Inicia JSON Server (API fake)

# Build e Preview
$ npm run build        # Gerar build otimizado para produção
$ npm run preview      # Visualizar build localmente

# Qualidade de código
$ npm run lint         # Verificar problemas de lint
$ npm run lint:fix     # Corrigir problemas de lint automaticamente
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Elen Magalhães

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ecmrodrigues)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/elenmagalhaes)

Feito com 💜 no desafio Ignite da [Rocketseat](https://rocketseat.com.br/) 🚀
