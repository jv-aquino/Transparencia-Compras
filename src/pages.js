const main = document.createElement("main");
main.classList.add("pt-7", "pb-6", "flex", "flex-col", "items-center");

const inicio = () => {
  main.textContent = '';
  const h1 = document.createElement("h1");
  h1.textContent = "Transparência de Compras";

  const p = document.createElement("p");

  const button = document.createElement("button");  
  button.classList.add("text-2xl", "p-2");
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

  main.appendChild(h1);

  return main;
}

export {inicio, contato};