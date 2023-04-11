# Transparência de Compras
Programa do setor de compras da FEG/Unesp que visa facilitar a parte de compras e licitação de materiais da instituição desenvolvido pela **Seção Técnica de Materiais (STMA)**.

### [Clique aqui para acessar o site](https://transparencia-compras.vercel.app/)
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

- ### **<img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" height="20" width="20"> Supabase**

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
### O site da STMA tem uma página com os dados da equipe da seção e uma seção de FAQ na página inicial com perguntas e respostas. Ambos esses dados são armazenados por meio de duas tabelas SQL na [*Supabase*](https://app.supabase.com/project/lzpnenviarjylhsikvtp), na parte "Table Editor".
<img src='https://i.imgur.com/S1GYPtu.png' />

## Para editar dados existentes, vá para a tabela desejada e clique duas vezes na célula a ser editada e faça as alterações necessárias
![image](https://user-images.githubusercontent.com/67425140/231265453-4b62ba54-e583-4e3f-9814-409b8ee94dbd.png)

## Para criar uma nova linha de dados, como um novo funcionário ou uma nova pergunta/resposta, va para a tabela desejada > Insert > Insert Row
![image](https://user-images.githubusercontent.com/67425140/231265929-5cb9d691-cc7b-427f-b10f-99ed3b038a7b.png)

## Para criar uma nova coluna de dados (um novo dado que todas as linhas terão), vá na tabela desejada > Insert > Insert Column.
### Ao criar uma nova coluna, lembre-se de:
1. Colocar um **nome descritivo**
2. Colocar um **tipo de dado** que condiza com os valores desejados (text pra texto, int8 para inteiros, float8 para decimais, etc.) 
3. Se necessário, colocar um **valor padrão** (default value, que é usado sempre que esse campo é nulo)
4. Informar se são permitidos valores nulos ou não - ou seja, se não é um **campo obrigatório**
5. Informar se o valor é **único** dentre todas as linhas ou não (o padrão é que não seja)
<br/>

<img width="630px" height="400px" src="https://user-images.githubusercontent.com/67425140/231266381-114b3510-1eea-4b48-9aab-c17b26d20ae5.png" />
<img width="600px" height="400px" src="https://user-images.githubusercontent.com/67425140/231266826-0ad2a268-ab0e-4172-89d6-91a9f97c8bfe.png" />
