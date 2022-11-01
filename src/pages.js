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

  const funcionariosDiv = document.createElement("div");
  funcionariosDiv.classList.add("grid", "funcionarios");

  main.appendChild(h1);
  main.appendChild(contactDiv);
  main.appendChild(funcionariosDiv);

  return main;
}

export {inicio, contato};