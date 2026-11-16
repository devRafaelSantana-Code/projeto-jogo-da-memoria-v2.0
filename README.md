# 🧠 Jogo da Memória — O Desafio das Três Stacks

<p align="center">
  <img src="https://img.shields.io/badge/Vers%C3%A3o-2.0-2EA44F?style=for-the-badge" alt="Versão 2.0">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery">
  <img src="https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-demonstração-visual">Demonstração</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-arquitetura-e-tecnologias">Tecnologias</a> •
  <a href="#-roadmap-de-desenvolvimento">Roadmap</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-executar">Execução</a> •
  <a href="#-aprendizados">Aprendizados</a>
</p>

---

## 📌 Sobre o Projeto

O **Jogo da Memória — O Desafio das Três Stacks** é um projeto desenvolvido com o objetivo de explorar diferentes tecnologias e arquiteturas utilizadas no desenvolvimento front-end, implementando a mesma aplicação em três etapas evolutivas.

A proposta consiste em desenvolver um jogo da memória inicialmente com tecnologias fundamentais da web e, posteriormente, evoluí-lo utilizando bibliotecas e frameworks modernos.

Atualmente, o projeto encontra-se na **versão 2.0**, desenvolvida com HTML5, CSS3, jQuery e Bootstrap 5.

Nesta etapa, a aplicação evolui em relação à versão anterior por meio da utilização de bibliotecas especializadas na manipulação do DOM, gerenciamento de eventos e construção de interfaces responsivas.

A versão 2.0 representa uma etapa intermediária entre a implementação com JavaScript puro e a futura arquitetura baseada em componentes, prevista para a versão 3.0.

**Objetivo de engenharia:** Demonstrar a evolução de uma aplicação por meio de diferentes stacks tecnológicas, mantendo a consistência das regras de negócio e explorando novas arquiteturas a cada versão.

---

## 🖼️ Demonstração Visual

Acesse a versão online do projeto:

[**Jogo da Memória — Versão 2.0**](https://projeto-jogo-da-memoria-v20.vercel.app/)

---

## 🎮 Funcionalidades

- Embaralhamento aleatório das cartas.
- Identificação e validação de pares correspondentes.
- Animações tridimensionais para revelar e ocultar cartas.
- Controle de tentativas e interações.
- Bloqueio de cliques simultâneos durante a validação dos pares.
- Identificação dos pares encontrados.
- Verificação de conclusão da partida.
- Manipulação de elementos e eventos utilizando jQuery.
- Interface responsiva utilizando Bootstrap 5.
- Estilização personalizada com CSS3.

---

## 🛠️ Arquitetura e Tecnologias

### Versão 2.0 — jQuery + Bootstrap 5

**Tecnologias utilizadas:**

- HTML5
- CSS3
- JavaScript ES6+
- jQuery
- Bootstrap 5

**Características técnicas:**

- Manipulação do DOM utilizando os métodos da biblioteca jQuery.
- Gerenciamento de eventos com métodos como `on()` e `click()`.
- Seleção e manipulação de elementos por meio de seletores jQuery.
- Utilização de recursos do Bootstrap 5 para construção de interfaces responsivas.
- Aproveitamento de componentes e classes utilitárias do framework.
- Implementação da lógica do jogo com JavaScript.
- Controle de estado e interações da aplicação.
- Animações tridimensionais com recursos do CSS3.
- Integração entre JavaScript, jQuery e Bootstrap 5.

**Destaque técnico:** Evolução da manipulação direta do DOM para uma abordagem baseada em bibliotecas, explorando abstrações oferecidas pelo jQuery e recursos estruturais do Bootstrap 5 para construção de interfaces responsivas.

---

## 🚀 Roadmap de Desenvolvimento

O projeto foi planejado em três versões independentes, cada uma explorando uma abordagem diferente de desenvolvimento front-end.

### 1.0 — JavaScript Vanilla

**Stack:** HTML5 + CSS3 + JavaScript ES6+

- Estrutura semântica com HTML5.
- Estilização e animações com CSS3.
- Manipulação direta do DOM.
- Lógica de funcionamento desenvolvida com JavaScript puro.
- Gerenciamento de eventos e estado sem bibliotecas externas.

### 2.0 — jQuery + Bootstrap 5

<p><img src="https://img.shields.io/badge/Implementada-2EA44F?style=flat-square" alt="Implementada"></p>

**Stack:** HTML5 + CSS3 + jQuery + Bootstrap 5

- Manipulação do DOM utilizando jQuery.
- Gerenciamento de eventos com métodos da biblioteca.
- Construção de interfaces responsivas com Bootstrap 5.
- Utilização de componentes e classes utilitárias do framework.
- Integração entre bibliotecas e JavaScript.
- Reorganização da implementação para utilização das novas tecnologias.

### 3.0 — React + Vite + Tailwind CSS

<p><img src="https://img.shields.io/badge/Planejada-FFA500?style=flat-square" alt="Planejada"></p>

**Stack:** React + Vite + Tailwind CSS

Evolução planejada:

- Arquitetura baseada em componentes reutilizáveis.
- Gerenciamento de estado com React Hooks.
- Controle de efeitos colaterais com `useEffect`.
- Renderização declarativa da interface.
- Estilização responsiva com Tailwind CSS.
- Ambiente de desenvolvimento e build com Vite.

---

## 📊 Comparativo das Arquiteturas

| Critério                    | Versão 1.0       | Versão 2.0                | Versão 3.0             |
| :-------------------------- | :--------------- | :------------------------ | :--------------------- |
| **Tecnologias**             | HTML, CSS e JS   | jQuery e Bootstrap        | React, Vite e Tailwind |
| **Paradigma**               | Imperativo       | Imperativo com abstrações | Declarativo            |
| **Manipulação do DOM**      | Web APIs         | jQuery                    | React                  |
| **Gerenciamento de estado** | JavaScript puro  | JavaScript e jQuery       | React Hooks            |
| **Componentização**         | Estrutura manual | Elementos reutilizáveis   | Componentes React      |
| **Estilização**             | CSS3 puro        | Bootstrap + CSS3          | Tailwind CSS           |
| **Responsividade**          | CSS3             | Bootstrap 5               | Tailwind CSS           |

---

## 📂 Estrutura do Projeto

```text
📦 projeto-jogo-da-memoria-v2.0
│
├── 📁 assets/
│   ├── 📁 css/
│   ├── 📁 images/
│   └── 📁 js/
│
├── 📄 index.html
└── 📄 README.md
```

---

## 💻 Como Executar

### 1. Clonar o repositório

```bash
git clone URL-DO-REPOSITORIO.git
```

### 2. Acessar a pasta do projeto

```bash
cd projeto-jogo-da-memoria-v2.0
```

### 3. Executar a aplicação

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

As bibliotecas jQuery e Bootstrap 5 devem estar disponíveis conforme a configuração de dependências da aplicação.

Não é necessário configurar um ambiente de backend para executar a aplicação.

---

## 🧠 Aprendizados

A versão 2.0 amplia os conhecimentos adquiridos na primeira implementação, explorando bibliotecas que simplificam tarefas recorrentes no desenvolvimento de interfaces web.

- **HTML5:** Estruturação semântica dos elementos da aplicação.
- **CSS3:** Estilização personalizada, responsividade e implementação de animações tridimensionais.
- **JavaScript:** Lógica de programação, gerenciamento de estado e controle das interações.
- **jQuery:** Manipulação simplificada do DOM, seleção de elementos e gerenciamento de eventos.
- **Bootstrap 5:** Construção de interfaces responsivas, utilização de componentes e classes utilitárias.
- **Arquitetura front-end:** Integração entre tecnologias e organização de responsabilidades na aplicação.

A experiência adquirida nesta etapa permite compreender como bibliotecas especializadas podem otimizar o desenvolvimento e preparar a aplicação para uma futura evolução arquitetural.

A próxima etapa, prevista para a versão 3.0, explorará o desenvolvimento baseado em componentes com React, utilizando Vite e Tailwind CSS.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

<p align="left">
  <a href="https://github.com/devRafaelSantana-Code" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
