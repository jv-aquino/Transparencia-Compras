# Transparência de Compras
Programa do setor de compras da FEG/Unesp que visa facilitar a parte de compras e licitação de materiais da instituição desenvolvido pela **Seção Técnica de Materiais (STMA)**.

### [Clique aqui para acessar o site](https://jv-aquino.github.io/Transparencia-Compras/)
<p align="center">
  <img src="./src/img/unesp.png" alt="Logo da Unesp" style="width: 350px; height: auto;">
</p>

------------

## Manual

### [**0. Tech Stack**](#0-tech-stack)
### [**1. Configurando o projeto**](#1-configurando-o-projeto)
### [**2. Alterando os dados do Site**](#2-alterando-os-dados-do-site)

------------

## 0. Tech Stack
### As tecnologias usadas nesse projeto foram escolhidas para facilitar o desenvolvimento mas ao mesmo tempo evitar overengineering e usar tecnologias mais fáceis, modernas e populares. Levando isso em consideração, segue abaixo a tech stack desse projeto:

- ### **<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" height="20" width="20"> HTML**

- ### **<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" height="20" width="20"> CSS** e **<img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" height="20" width="20"> Tailwind**

- ### **<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" height="20" width="20"> Javascript** e **<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" height="20" width="20"> React**

- ### **<img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" height="20" width="20"> NPM / <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" height="20" width="20"> NodeJS**

- ### **<img src="https://github.com/sempostma/office365-icons/blob/master/svg/excel.svg" height="20" width="20"> Google Sheets**

------------

## 1. Configurando o projeto
1. ### Como já citado, o programa usa Node/NPM e para os passos a seguir e para se mexer com o site no geral é necessário usá-los. Para isso, deve-se [instalar o Node.js](https://nodejs.org/en/) **(versão LTS)** e reiniciar o computador, assim tanto o Node.js quanto a NPM estarão instalados e funcionando em seu computador.
2. ### Para clonar e modificar o projeto também usamos o programa [Git](https://git-scm.com/downloads) que tem a função de controlar as versões e alterações do projeto. Se você ainda não tem essa importante ferramenta instalada, [instale-a aqui](https://git-scm.com/downloads). Após isso, clone este projeto em sua máquina.
3. ### Com tudo isso feito, abra o seu editor de código (como o [VSCode](https://code.visualstudio.com/)) na pasta do projeto e abra um Terminal indo em **Terminal > New Terminal**. No terminal, insira o seguinte comando para instalar todas as dependências do projeto que são usadas para modificá-lo e melhorá-lo:
```bash
npm install
```
#### * (após esse comando ser executado, uma pasta *node_modules* será criada)

------------

## 2. Alterando os dados do Site
### O site da STMA tem uma página com os dados da equipe da seção e uma seção de FAQ na página inicial com perguntas e respostas. Ambos esses dados são armazenados por meio de uma única planilha no Google Sheets a qual você deve ter acesso. Para alterar as informações no site é preciso alterar essa planilha e depois seguir os passos adiante:
1. ### Faça o Download da planilha em formato CSV e nomeie-a de "equipe.csv" ou "faq.csv" dependendo do que você quer alterar, substituindo o arquivo de mesmo nome já existente na pasta **/data/**
2. ### Abra o CMD ou Bash no VSCode indo em **Terminal > New Terminal**
3. ### Por fim, execute o comando a seguir no terminal e depois atualize o site:
```bash
npm run data
```
### Esse comando modificará o arquivo equipe.json (que está sendo usado para gerar o conteúdo da página) e executará o Webpack, que vai então atualizar o Javascript que está sendo utilizado na página e suas informações.
