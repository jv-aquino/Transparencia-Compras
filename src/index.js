import * as Pages from "./pages.js";

const Dom = (() => {
  const div = document.querySelector("div#container");
  const liPages = document.querySelectorAll("nav li");

  const cleanMain = () => {
    if (div.children.length > 2) {
      div.removeChild(div.children[1]);
    }
  }

  const changePage = (page) => {
    const main = Pages[page]();
    cleanMain();
    div.insertBefore(main, div.children[1]);
  }

  liPages.forEach(li => {
    li.addEventListener("click", () => {changePage(li.id)});
  });

  return {changePage};
})();

const Start = (() => {
  Dom.changePage("inicio");
})();