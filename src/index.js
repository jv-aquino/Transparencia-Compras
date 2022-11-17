import * as Pages from "./pages.js";

const Nav = (() => {
  const mobileNav = document.querySelector("nav div.ul")
  const drops = document.querySelectorAll(".dropdown > li");
  const downs = document.querySelectorAll(".dropdown ul");

  drops.forEach(dropLi => {
    dropLi.addEventListener("mouseenter", () => {
      dropLi.classList.add("visible");

      document.querySelector("ul#" + dropLi.id + "s").classList.add("visible");
    });
  });
  downs.forEach(downUl => {
    downUl.parentNode.addEventListener("mouseleave", () => {
      document.querySelector("li#" + downUl.id.slice(0, -1)).classList.remove("visible");

      downUl.classList.remove("visible");
    });
  });

  const mobileMenuIcon = document.querySelector("nav #mobileButton span");
  
  const toggleMenu = () => {
    if (mobileMenuIcon.textContent == "menu") {
      mobileMenuIcon.textContent = "close";
      mobileMenuIcon.classList.add("selected");
      mobileNav.classList.add("selected");
    }
    else {
      mobileMenuIcon.textContent = "menu";
      mobileMenuIcon.classList.remove("selected");
      mobileNav.classList.remove("selected");
    }
  }

  mobileMenuIcon.addEventListener("click", toggleMenu);
})();

const Dom = (() => {
  const div = document.querySelector("div#container");
  const liPages = document.querySelectorAll("li.page");
  
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

    let dropdownGroup = liSelected.getAttribute("data-drop");
    if (dropdownGroup != null) {
      document.querySelector("#" + dropdownGroup).classList.add("selected");
    }
    
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