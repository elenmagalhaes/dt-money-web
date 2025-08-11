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
  <img alt="Status do Projeto" src="https://img.shields.io/badge/status-complete-brightgreen">
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

O **DT Money** é uma aplicação completa de controle financeiro pessoal desenvolvida com React e TypeScript. A aplicação permite o gerenciamento eficiente de transações financeiras com interface moderna e responsiva.

## 🎯 O que o projeto oferece

### 💰 **Controle Financeiro Completo**
- **Dashboard interativo** com resumo financeiro em tempo real
- **Visualização de saldo total** calculado automaticamente
- **Separação clara** entre receitas (entradas) e despesas (saídas)
- **Formatação de valores** em moeda brasileira (R$)

### 🔄 **Gerenciamento de Transações**
- **Cadastro de transações** através de modal intuitivo
- **Listagem completa** de todas as transações ordenadas por data
- **Busca e filtros** para encontrar transações específicas
- **Categorização** personalizada para organização

### 🛠️ **Arquitetura Técnica Robusta**
- **Integração com API** via JSON Server para persistência de dados
- **Gerenciamento de estado global** com Context API otimizado
- **Validação de formulários** com React Hook Form + Zod
- **Hooks customizados** para lógica de negócio reutilizável
- **Sistema de tema** unificado com Styled Components

### 🎨 **Interface de Usuário**
- **Design responsivo** que se adapta a diferentes dispositivos
- **Componentes acessíveis** utilizando Radix UI
- **Ícones modernos** da biblioteca Phosphor
- **Feedback visual** diferenciado para entradas e saídas

### ⚡ **Performance e Desenvolvimento**
- **Build otimizado** com Vite para desenvolvimento rápido
- **Lint configurado** com padrões Rocketseat
- **TypeScript** para tipagem estática e melhor DX
- **Otimizações de renderização** com useCallback e Context Selector

**🏁 Status do Projeto:** Desenvolvimento de features **FINALIZADO**. A partir de agora, o foco será exclusivamente em **testes e qualidade de código**.

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

### � **Funcionalidades Principais**

#### ✅ **Sistema Completo de Transações**
- **Dashboard financeiro** - Resumo visual com entradas, saídas e saldo total
- **Cadastro de transações** - Modal com formulário validado para adicionar receitas e despesas
- **Listagem dinâmica** - Tabela responsiva com todas as transações carregadas da API
- **Sistema de busca** - Campo de pesquisa integrado com backend para filtrar transações
- **Diferenciação visual** - Cores distintas para entradas (verde) e saídas (vermelha)

#### 🔧 **Recursos Técnicos Implementados**
- **Context API otimizado** - TransactionsContext com use-context-selector para performance
- **Hook customizado useSummary** - Cálculos financeiros centralizados e reutilizáveis
- **Validação robusta** - React Hook Form + Zod para formulários seguros
- **Cliente HTTP configurado** - Axios com interceptors e configurações otimizadas
- **Formatação inteligente** - Utilitários para valores monetários e datas
- **Componentização avançada** - Header, Summary, Modal e SearchForm modulares

#### 💎 **Qualidades da Aplicação**
- **Performance otimizada** - useCallback e memorização para evitar re-renders
- **Acessibilidade** - Componentes Radix UI com suporte a leitores de tela
- **Responsividade** - Layout adaptável para mobile, tablet e desktop
- **Tipagem completa** - TypeScript em 100% do código para maior confiabilidade
- **Código limpo** - ESLint com configuração Rocketseat para padronização

#### 📱 **Interface de Usuário**
- **Design moderno** - Interface clean baseada no Figma oficial
- **Componentes reutilizáveis** - Sistema de componentes bem estruturado
- **Tema consistente** - Paleta de cores e tipografia unificada
- **Ícones otimizados** - Phosphor Icons para melhor experiência visual
- **Feedback visual** - Estados de loading, success e error bem definidos

## 🚀 Tecnologias

### **Core Technologies**
- **[React 19](https://reactjs.org/)** - Biblioteca JavaScript para interfaces de usuário
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[Vite 7](https://vitejs.dev/)** - Build tool moderna e dev server ultra-rápido

### **Estilização e UI**
- **[Styled Components 6](https://styled-components.com/)** - CSS-in-JS para estilização dinâmica
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis e não-estilizados
- **[Phosphor Icons](https://phosphoricons.com/)** - Biblioteca moderna de ícones SVG

### **Gerenciamento de Estado e Formulários**
- **[React Hook Form 7](https://react-hook-form.com/)** - Biblioteca performática para formulários
- **[Zod 4](https://zod.dev/)** - Schema validation com inferência de tipos TypeScript
- **[use-context-selector](https://github.com/dai-shi/use-context-selector)** - Context API otimizado para performance

### **HTTP Client e API**
- **[Axios 1.11](https://axios-http.com/)** - Cliente HTTP com interceptors e configurações
- **[JSON Server 0.17](https://github.com/typicode/json-server)** - API REST fake para desenvolvimento

### **Desenvolvimento e Qualidade**
- **[ESLint 9](https://eslint.org/)** - Ferramenta de linting para qualidade de código
- **[@rocketseat/eslint-config](https://github.com/rocketseat-education/eslint-config-rocketseat)** - Configuração ESLint otimizada

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

### ✅ **Aplicação Funcionalmente Completa**

O DT Money oferece um sistema completo de controle financeiro com as seguintes funcionalidades implementadas e testadas:

#### 💰 **Dashboard e Resumo Financeiro**
- **Cards de resumo** - Entradas, saídas e saldo total calculados em tempo real
- **Cálculos automáticos** - Hook useSummary para processamento dos valores
- **Formatação monetária** - Valores apresentados em formato brasileiro (R$)
- **Indicadores visuais** - Cores diferenciadas para receitas (verde) e despesas (vermelho)

#### 📊 **Gerenciamento de Transações**
- **Listagem completa** - Tabela responsiva com todas as transações
- **Cadastro via modal** - Formulário completo com validação em tempo real
- **Ordenação inteligente** - Transações organizadas por data (mais recente primeiro)
- **Categorização** - Sistema de categorias personalizáveis para organização

#### 🔍 **Sistema de Busca e Filtros**
- **Busca integrada** - Campo de pesquisa conectado ao backend
- **Filtros dinâmicos** - Pesquisa em descrição, categoria e outros campos
- **Resultados em tempo real** - Atualização instantânea da listagem

#### 🛠️ **Recursos Técnicos Avançados**
- **Context API otimizado** - Gerenciamento de estado global performático
- **Validação robusta** - React Hook Form + Zod para formulários seguros
- **Integração com API** - Comunicação completa via Axios com JSON Server
- **Hooks customizados** - useSummary para lógica de cálculos reutilizável
- **Performance otimizada** - useCallback e use-context-selector para evitar re-renders

#### 🎨 **Interface de Usuário**
- **Design responsivo** - Adaptação perfeita para mobile, tablet e desktop
- **Componentes acessíveis** - Radix UI com suporte completo a acessibilidade
- **Tema consistente** - Sistema unificado de cores e tipografia
- **Feedback visual** - Estados claros para todas as interações do usuário

### 🎯 **Status do Desenvolvimento**

**✅ DESENVOLVIMENTO DE FEATURES FINALIZADO**

A aplicação está funcionalmente completa e pronta para uso. Todas as funcionalidades essenciais de um sistema de controle financeiro foram implementadas e estão operacionais.

### � **Próxima Fase: Testes e Qualidade**

Com o desenvolvimento de funcionalidades concluído, o foco agora será exclusivamente em:

- **🧪 Implementação de testes unitários** - Jest + Testing Library
- **🧪 Testes de integração** - Validação de fluxos completos
- **🧪 Testes end-to-end** - Cypress ou Playwright para cenários reais
- **📊 Cobertura de código** - Meta de cobertura mínima de 80%
- **� Análise de qualidade** - SonarQube ou ferramentas similares
- **🚀 Otimizações de performance** - Análise e melhorias baseadas em métricas

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
# 🚀 Desenvolvimento
$ npm run dev          # Inicia aplicação em modo desenvolvimento (porta 5173)
$ npm run dev:server   # Inicia JSON Server - API fake (porta 3000)

# 📦 Build e Deploy
$ npm run build        # Gera build otimizado para produção
$ npm run preview      # Visualiza build de produção localmente

# 🔍 Qualidade de código
$ npm run lint         # Verifica problemas de lint no código
$ npm run lint:fix     # Corrige automaticamente problemas de lint
```

### 📊 **Como usar a aplicação**

1. **Inicie os serviços**
   ```bash
   # Terminal 1: API (obrigatório)
   npm run dev:server
   
   # Terminal 2: Aplicação
   npm run dev
   ```

2. **Acesse a aplicação**
   - **Frontend:** http://localhost:5173
   - **API:** http://localhost:3000
   - **Endpoint transações:** http://localhost:3000/transactions

3. **Funcionalidades disponíveis**
   - ✅ Visualize o resumo financeiro no dashboard
   - ✅ Cadastre novas transações via botão "Nova transação"
   - ✅ Pesquise transações no campo de busca
   - ✅ Veja todas as transações na tabela principal

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Elen Magalhães

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ecmrodrigues)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/elenmagalhaes)

Feito com 💜 no desafio Ignite da [Rocketseat](https://rocketseat.com.br/) 🚀
