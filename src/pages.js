const main = document.createElement("main");
main.classList.add("pt-7", "pb-6", "flex", "flex-col", "items-center");

const inicio = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Transparência de Compras";

  const content = document.createElement("div");
  content.classList.add("content", "shadow-lg");
  content.innerHTML = "<h3>Início<h3>";
  content.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Consectetur purus ut faucibus pulvinar elementum integer enim. Sodales ut etiam sit amet.</p>";
  content.innerHTML += "<h3>Perguntas Frequentes<h3>";
  content.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Consectetur purus ut faucibus pulvinar elementum integer enim. Sodales ut etiam sit amet.</p>";

  main.appendChild(h1);
  main.appendChild(content);

  return main;
};

const visualizar = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Pedidos";

  const button = document.createElement("button");
  button.classList.add("shadow-lg");
  button.textContent = "Visualizar Pedidos";

  main.appendChild(h1);
  main.appendChild(button);

  return main;
}

const contato = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.classList.add("contato");
  h1.textContent = "Contato da STMA";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("grid", "shadow-lg", "contact");
  contactDiv.innerHTML = "<p>STMA</p>";
  contactDiv.innerHTML += "<p class='telefone'>(12) 3123-2733</p>";
  contactDiv.innerHTML += "<p><a href='mailto:sma.feg@unesp.br'>sma.feg@unesp.br</a></p>";

  main.appendChild(h1);
  main.appendChild(contactDiv);

  return main;
}

const funcionarios = require("./contact.json").funcionarios;
const equipe = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Equipe";

  const funcionariosDiv = document.createElement("div");
  funcionariosDiv.classList.add("grid", "funcionarios");
  
  funcionarios.forEach(funcionario => {
    const div = document.createElement("div");
    div.classList.add("shadow-lg")

    Object.keys(funcionario).forEach(key => {
      const element = document.createElement("p");
      element.classList.add(key); 
      (key == "nome") ? element.classList.add("highlight") : null;
      element.innerHTML = (key == 'email') ? `<a href='mailto:${funcionario[key]}'>${funcionario[key]}</a>` : funcionario[key];
      div.appendChild(element);
    })

    funcionariosDiv.appendChild(div);
  });

  main.appendChild(h1);
  main.appendChild(funcionariosDiv);

  return main;
}

export {inicio, equipe, contato, visualizar};