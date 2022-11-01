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
    div.insertBefore(main, div.children[1]);
  }

  const highlightLi = (liId) => {
    document.querySelectorAll("nav li").forEach(li => {
      li.classList.remove("selected");
    });

    const liSelected = document.querySelector("#" + liId);
    liSelected.classList.add("selected");
  }

  liPages.forEach(li => {
    li.addEventListener("click", () => {Controller.switchPage(li.id)});
  });

  return {changePage, cleanMain, highlightLi};
})();

const Controller = (() => {
  const switchPage = (page) => {
    Dom.cleanMain();
    Dom.changePage(page);
    Dom.highlightLi(page);
  }

  return {switchPage};
})();

const Start = (() => {
  Controller.switchPage("inicio");
})();