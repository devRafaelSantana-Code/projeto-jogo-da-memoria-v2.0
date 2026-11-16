# 🧠 Jogo da Memória — O Desafio das Três Stacks

\<p align="center"> \<img src="[https://img.shields.io/badge/JavaScript_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000](https://img.shields.io/badge/JavaScript_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)" alt="JavaScript Vanilla"> \<img src="[https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=FFFFFF](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=FFFFFF)" alt="jQuery"> \<img src="[https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=FFFFFF](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=FFFFFF)" alt="Bootstrap 5"> \<img src="[https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000000](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000000)" alt="React"> \<img src="[https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF)" alt="Vite"> \<img src="[https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF)" alt="Tailwind CSS"> \</p>

## 📌 Sobre o Projeto

O **Jogo da Memória — O Desafio das Três Stacks** é um projeto desenvolvido para demonstrar a implementação de uma mesma aplicação utilizando três arquiteturas e ecossistemas distintos do desenvolvimento front-end.

A proposta consiste em desenvolver um jogo da memória tridimensional em três versões independentes, explorando diferentes paradigmas de programação, estratégias de manipulação da DOM, gerenciamento de estado e abordagens de estilização.

Mais do que reproduzir a mesma funcionalidade, o projeto permite analisar como diferentes tecnologias resolvem problemas semelhantes, evidenciando a evolução dos conceitos de desenvolvimento web, a capacidade de adaptação tecnológica e a compreensão de diferentes arquiteturas de software.

## 🚀 As Três Versões Desenvolvidas

### 1. Versão 1.0 — JavaScript Vanilla + CSS3

**Paradigma:** Programação imperativa.

- **Lógica:** Manipulação direta da DOM utilizando JavaScript puro e APIs nativas do navegador.
- **Estilização:** CSS3 personalizado, com recursos de transformações tridimensionais, incluindo `transform-style: preserve-3d`, `perspective` e `backface-visibility`.
- **Gerenciamento de estado:** Controle das cartas selecionadas, identificação de pares, tentativas e condições de vitória por meio de variáveis e estruturas de dados JavaScript.
- **Destaque técnico:** Implementação da lógica do jogo sem dependências externas, proporcionando uma compreensão mais profunda do funcionamento nativo do navegador e do controle de eventos.

### 2. Versão 2.0 — jQuery + Bootstrap 5

**Paradigma:** Programação imperativa com abstrações de bibliotecas.

- **Lógica:** Manipulação da DOM por meio dos seletores e métodos do jQuery, facilitando o gerenciamento de eventos e interações.
- **Estilização:** Bootstrap 5 para estruturação responsiva, utilização do sistema de Grid e componentes de interface, incluindo o Modal de conclusão do jogo.
- **Gerenciamento de estado:** Controle das condições de funcionamento do jogo por meio de variáveis JavaScript, seletores e classes aplicadas aos elementos.
- **Destaque técnico:** Utilização do encadeamento de métodos do jQuery para manipulação de elementos e animações, com atenção à sincronização entre a lógica da aplicação e as transições visuais das cartas.

### 3. Versão 3.0 — React + Vite + Tailwind CSS

**Paradigma:** Programação declarativa baseada em componentes.

- **Lógica:** Arquitetura orientada a componentes React, com separação de responsabilidades e fluxo de dados previsível.
- **Estilização:** Tailwind CSS para construção de interfaces responsivas utilizando classes utilitárias.
- **Gerenciamento de estado:** Utilização de `useState` para controlar as cartas selecionadas, os pares encontrados, as tentativas e o andamento da partida.
- **Controle de efeitos:** Aplicação de `useEffect` para gerenciar efeitos colaterais, como cronômetros e comportamentos associados ao ciclo de vida dos componentes.
- **Build:** Vite para inicialização do ambiente de desenvolvimento e geração de builds otimizadas para produção.
- **Destaque técnico:** Organização da aplicação em componentes reutilizáveis, renderização reativa e gerenciamento centralizado dos estados necessários para controlar as regras do jogo.

---

## 📊 Comparativo Técnico de Arquitetura

| Critério                    | JavaScript Vanilla                | jQuery + Bootstrap 5                       | React + Vite + Tailwind CSS                      |
| :-------------------------- | :-------------------------------- | :----------------------------------------- | :----------------------------------------------- |
| **Paradigma**               | Imperativo                        | Imperativo com abstrações                  | Declarativo                                      |
| **Manipulação da DOM**      | APIs nativas do navegador         | Seletores e métodos jQuery                 | Reconciliação da árvore de elementos pelo React  |
| **Gerenciamento de estado** | Variáveis e estruturas de dados   | Variáveis JavaScript e classes CSS         | Estados reativos com `useState`                  |
| **Arquitetura**             | Estrutura tradicional de arquivos | Bibliotecas e componentes de interface     | Componentes reutilizáveis                        |
| **Estilização**             | CSS3 personalizado                | Bootstrap 5 e CSS personalizado            | Classes utilitárias do Tailwind CSS              |
| **Responsividade**          | Media Queries e CSS3              | Sistema de Grid e breakpoints do Bootstrap | Classes responsivas do Tailwind CSS              |
| **Animações 3D**            | CSS3 Transform                    | CSS3 Transform com manipulação via jQuery  | CSS3 Transform integrado aos componentes         |
| **Dependências**            | Nenhuma biblioteca externa        | jQuery e Bootstrap 5                       | React, Vite e Tailwind CSS                       |
| **Build**                   | Não exige compilação              | Não exige compilação                       | Gerenciada pelo Vite                             |
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

### 3. React + Vite + Tailwind CSS

1. Acesse a pasta da versão React pelo terminal:

   ```bash
   cd versao-react-vite
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o endereço local apresentado pelo Vite no terminal.

## 🧠 Conhecimentos Consolidado e Aprendizados

O desenvolvimento das três versões proporcionou uma análise prática de diferentes abordagens arquiteturais e suas particularidades.

- **JavaScript Vanilla:** aprofundamento na manipulação nativa da DOM, no gerenciamento de eventos, nas estruturas de dados e no controle imperativo da lógica de uma aplicação.
- **jQuery + Bootstrap 5:** compreensão das abstrações oferecidas por bibliotecas tradicionais, utilização de seletores, encadeamento de métodos e construção de interfaces responsivas.
- **React + Vite + Tailwind CSS:** aplicação de componentização, gerenciamento de estados reativos, controle de efeitos colaterais e desenvolvimento de interfaces declarativas.

A comparação entre as três implementações demonstra que a escolha de uma tecnologia depende das necessidades da aplicação, da complexidade do projeto, da organização do código e dos requisitos de manutenção e evolução.

O principal aprendizado está na capacidade de compreender diferentes paradigmas e selecionar ferramentas adequadas para solucionar problemas reais de desenvolvimento de software.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

\<p align="left">
&#x20; \<a href="[https://github.com/devRafaelSantana-Code](https://github.com/devRafaelSantana-Code)">
&#x20; \<img src="[https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white)" alt="GitHub Rafael Santana">
&#x20; \</a>
\</p>

---

\<p align="center">
&#x20; Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript, jQuery, Bootstrap 5, React, Vite e Tailwind CSS.
\</p>
