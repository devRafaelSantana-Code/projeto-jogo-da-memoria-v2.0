# 🧠 Jogo da Memória — O Desafio das Três Stacks

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=FFFFFF" alt="jQuery">
  <img src="https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=FFFFFF" alt="Bootstrap 5">
</p>

## 📌 Sobre o Projeto

O **Jogo da Memória — O Desafio das Três Stacks** é um projeto desenvolvido com o objetivo de explorar diferentes abordagens de desenvolvimento front-end por meio da implementação de um mesmo jogo utilizando tecnologias e paradigmas distintos.

Atualmente, o projeto possui duas versões desenvolvidas: a primeira utiliza JavaScript Vanilla, CSS3 e HTML5, enquanto a segunda foi reconstruída com jQuery e Bootstrap 5.

A proposta é demonstrar a evolução da implementação, comparando diferentes estratégias de manipulação da DOM, gerenciamento da lógica da aplicação, organização do código e construção de interfaces responsivas.

O projeto também possui uma terceira versão planejada, que utilizará React para explorar uma arquitetura declarativa baseada em componentes e gerenciamento de estados reativos.

## 🚀 As Três Etapas do Projeto

### 1. Versão 1.0 — JavaScript Vanilla + CSS3

<badge color="success">Concluída</badge>

**Paradigma:** Programação imperativa.

- **Estrutura:** HTML5 para organização dos elementos e CSS3 para construção da interface.
- **Lógica:** JavaScript puro com manipulação direta da DOM por meio das APIs nativas do navegador.
- **Estilização:** CSS3 personalizado, utilizando recursos de transformações tridimensionais, como `perspective`, `transform-style: preserve-3d` e `backface-visibility`.
- **Gerenciamento da partida:** Controle das cartas selecionadas, identificação de pares, tentativas e condições de vitória por meio de variáveis e estruturas de dados JavaScript.
- **Destaque técnico:** Desenvolvimento da lógica do jogo sem bibliotecas externas, explorando os recursos nativos da plataforma web.

### 2. Versão 2.0 — jQuery + Bootstrap 5

<badge color="success">Concluída — Versão atual</badge>

**Paradigma:** Programação imperativa com abstrações de bibliotecas.

- **Estrutura:** HTML5 para organização da interface, com Bootstrap 5 para construção de componentes e layouts responsivos.
- **Lógica:** jQuery para manipulação da DOM, seleção de elementos e gerenciamento de eventos.
- **Estilização:** Bootstrap 5, CSS personalizado e recursos de transformações tridimensionais para as animações das cartas.
- **Gerenciamento da partida:** Controle das cartas selecionadas, identificação de pares e condições de conclusão por meio de variáveis JavaScript e manipulação de classes.
- **Componentes de interface:** Utilização dos recursos do Bootstrap, incluindo o Modal de conclusão da partida.
- **Destaque técnico:** Evolução da primeira implementação por meio da utilização de bibliotecas que simplificam a manipulação da interface e aceleram o desenvolvimento de funcionalidades.

### 3. Versão 3.0 — React

<badge color="info">Planejada</badge>

**Paradigma:** Programação declarativa baseada em componentes.

A terceira etapa prevê a reconstrução do jogo utilizando React, explorando uma arquitetura moderna baseada em componentes reutilizáveis e gerenciamento de estados reativos.

- **Arquitetura:** Organização da aplicação em componentes independentes e reutilizáveis.
- **Lógica:** Implementação das regras do jogo utilizando JavaScript e os recursos do React.
- **Gerenciamento de estado:** Utilização de `useState` para controlar as cartas selecionadas, os pares encontrados e o andamento da partida.
- **Controle de efeitos:** Utilização de `useEffect` para gerenciamento de efeitos colaterais, como cronômetros e temporizadores.
- **Estilização:** Definição da abordagem visual durante o desenvolvimento da nova versão.

A versão 3.0 representa a próxima etapa de evolução do projeto, permitindo comparar a abordagem imperativa das versões anteriores com o paradigma declarativo do React.

---

## 📊 Comparativo Técnico de Arquitetura

| Critério                    | JavaScript Vanilla                | jQuery + Bootstrap 5                       | React (Planejada)                                |
| :-------------------------- | :-------------------------------- | :----------------------------------------- | :----------------------------------------------- |
| **Paradigma**               | Imperativo                        | Imperativo com abstrações                  | Declarativo                                      |
| **Manipulação da DOM**      | APIs nativas do navegador         | Seletores e métodos jQuery                 | Renderização e reconciliação pelo React          |
| **Gerenciamento de estado** | Variáveis e estruturas de dados   | Variáveis JavaScript e classes CSS         | Estados reativos com `useState`                  |
| **Arquitetura**             | Estrutura tradicional de arquivos | Bibliotecas e componentes de interface     | Componentes reutilizáveis                        |
| **Estilização**             | CSS3 personalizado                | Bootstrap 5 e CSS personalizado            | A definir                                        |
| **Responsividade**          | Media Queries e CSS3              | Sistema de Grid e breakpoints do Bootstrap | A definir                                        |
| **Animações 3D**            | CSS3 Transform                    | CSS3 Transform com manipulação via jQuery  | A definir                                        |
| **Dependências**            | Nenhuma biblioteca externa        | jQuery e Bootstrap 5                       | React                                            |
| **Build**                   | Não exige compilação              | Não exige compilação                       | A definir                                        |
| **Organização**             | Manipulação direta de elementos   | Abstrações para manipulação da interface   | Componentização e separação de responsabilidades |

## 💻 Como Executar Cada Versão

### 1. JavaScript Vanilla

1. Acesse a pasta correspondente à versão Vanilla.
2. Abra o arquivo `index.html` diretamente no navegador.
3. Opcionalmente, utilize a extensão **Live Server** no Visual Studio Code.

### 2. jQuery + Bootstrap 5

1. Acesse a pasta correspondente à versão jQuery.
2. Abra o arquivo `index.html` diretamente no navegador.
3. Certifique-se de possuir conexão com a internet para carregar as bibliotecas disponibilizadas por CDN.
4. Opcionalmente, utilize a extensão **Live Server** no Visual Studio Code.

### 3. React

A terceira versão ainda está planejada e terá suas instruções de instalação e execução documentadas após sua implementação.

## 🧠 Conhecimentos Consolidados e Aprendizados

O desenvolvimento das duas primeiras versões proporcionou uma experiência prática de comparação entre diferentes abordagens de desenvolvimento front-end.

- **JavaScript Vanilla:** aprofundamento na manipulação nativa da DOM, no gerenciamento de eventos, nas estruturas de dados e no controle imperativo da lógica de uma aplicação.
- **jQuery + Bootstrap 5:** compreensão das abstrações oferecidas por bibliotecas, utilização de seletores, encadeamento de métodos, manipulação de elementos e construção de interfaces responsivas.
- **Evolução arquitetural:** compreensão das diferenças entre desenvolver uma aplicação utilizando recursos nativos do navegador e utilizar bibliotecas que oferecem abstrações para simplificar sua implementação.

A terceira versão, planejada com React, permitirá ampliar essa experiência por meio da componentização, do gerenciamento de estados reativos e da programação declarativa.

O principal objetivo é consolidar conhecimentos, compreender diferentes paradigmas de programação e desenvolver a capacidade de selecionar ferramentas adequadas para solucionar problemas reais de desenvolvimento de software.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

<p align="left">
  <a href="https://github.com/devRafaelSantana-Code">
    <img src="https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Rafael Santana">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript, jQuery, Bootstrap 5 e desenvolvimento de interfaces responsivas.
</p>
