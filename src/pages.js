const main = document.createElement("main");
main.classList.add("pt-7", "pb-6", "flex", "flex-col", "items-center");

const inicio = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Transparência de Compras";

  const p = document.createElement("p");

  const button = document.createElement("button");  
  button.classList.add("p-2");
  button.textContent = "Visualizar Pedidos";

  main.appendChild(h1);
  main.appendChild(p);
  main.appendChild(button);

  return main;
};

const contato = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Contato";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("grid", "contact");
  contactDiv.innerHTML = "<p class='m-auto'>STMA</p>";
  contactDiv.innerHTML += "<p><span>(12) 3123-2733</span></p>";
  contactDiv.innerHTML += "<p><a href='mailto:sma.feg@unesp.br'>sma.feg@unesp.br</a></p>";

  main.appendChild(h1);
  main.appendChild(contactDiv);

  return main;
}

const equipe = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Equipe";

  const funcionariosDiv = document.createElement("div");
  funcionariosDiv.classList.add("grid", "funcionarios");
  const funcionarios = require("./contact.json").funcionarios;
  funcionarios.forEach(funcionario => {
    const div = document.createElement("div");
    const nome = document.createElement("h3");
    const cargo = document.createElement("p");
    const email = document.createElement("p");
    const telefone = document.createElement("p");
    nome.textContent = funcionario.nome;
    cargo.textContent = funcionario.cargo;
    email.innerHTML = "<a href='mailto:" + funcionario.email + "'>" + funcionario.email + "</a>";
    telefone.innerHTML = "<a>" + funcionario.telefone + "</a>";

    div.appendChild(nome);
    div.appendChild(cargo);
    div.appendChild(email);
    div.appendChild(telefone);
    funcionariosDiv.appendChild(div);
  });

  main.appendChild(h1);
  main.appendChild(funcionariosDiv);

  return main;
}

export {inicio, equipe, contato};