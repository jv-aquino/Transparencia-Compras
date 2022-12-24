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
    dropLi.addEventListener("click", () => {
      if (dropLi.classList.contains("visible")) {
        dropLi.classList.remove("visible");

        document.querySelector("ul#" + dropLi.id + "s").classList.remove("visible");
      } 
      else {
        dropLi.classList.add("visible");

        document.querySelector("ul#" + dropLi.id + "s").classList.add("visible");
      }
    });
  });
  downs.forEach(downUl => {
    downUl.parentNode.addEventListener("mouseleave", () => {
      document.querySelector("li#" + downUl.id.slice(0, -1)).classList.remove("visible");

      downUl.classList.remove("visible");
    });
  });

  const mobileMenuIcon = document.querySelector("nav #mobileButton span");
  
  const closeMenu = () => {
    mobileMenuIcon.textContent = "menu";
    mobileMenuIcon.classList.remove("selected");
    mobileNav.classList.remove("selected");
  }

  const toggleMenu = () => {
    if (mobileMenuIcon.textContent == "menu") {
      mobileMenuIcon.textContent = "close";
      mobileMenuIcon.classList.add("selected");
      mobileNav.classList.add("selected");
    }
    else {
      closeMenu();
    }
  }

  mobileMenuIcon.addEventListener("click", toggleMenu);

  return {toggleMenu, closeMenu}
})();

const Dom = (() => {
  const div = document.querySelector("div#container");
  const liPages = document.querySelectorAll("li.page");
  const logoImg = document.querySelector("#logo");
  
  const cleanMain = () => {
    if (div.children.length > 2) {
      div.removeChild(div.children[1]);
    }
  }

  const changePage = (page) => {
    const main = Pages[page]();
    div.insertBefore(main, div.children[1]);

    try {
      Nav.closeMenu();
    } catch (e) {}
  }

  const highlightLi = (liId) => {
    document.querySelectorAll("nav li").forEach(li => {
      li.classList.remove("selected");
    });

    const liSelected = document.querySelector("#" + liId);

    let dropdownGroup = liSelected.getAttribute("data-drop");
    if (dropdownGroup != null) {
      document.querySelector("nav #" + dropdownGroup).classList.add("selected");
    }
    
    liSelected.classList.add("selected");
  }

  const showContent = (e) => {
    let actualQuestion = document.querySelector(".content button#" + e.target.id);

    let showDiv = document.querySelector(".content button#" + e.target.id + " + div");
    // Selecting the div right after the question

    actualQuestion.classList.toggle("selected");
    showDiv.classList.toggle("selected");
  }

  const addContent = () => {
    const questions = Array.from(document.querySelectorAll("main .content button"));
    questions.forEach(question => {
      question.innerHTML = "<span class='material-symbols-outlined'>expand_more</span>" + question.textContent;

      question.addEventListener("click", showContent);
    });
  };


  liPages.forEach(li => {
    li.addEventListener("click", () => {Controller.switchPage(li.id)});
  });

  logoImg.addEventListener("click", () => {Controller.switchPage("inicio")})
  

  return {changePage, cleanMain, highlightLi, addContent};
})();

const Controller = (() => {
  const switchPage = (page) => {
    Dom.cleanMain();
    Dom.changePage(page);
    Dom.highlightLi(page);
    
    (page == 'inicio') ? Dom.addContent() : null;
  }

  return {switchPage};
})();

const Start = (() => {
  Controller.switchPage("inicio");
})();