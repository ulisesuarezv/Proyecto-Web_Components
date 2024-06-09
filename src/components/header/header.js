import { sectionContent } from "../main_content/main_content";
import "./header.css";
sectionContent

export const headerContent = (nodoPadre, texto) => {
  const headerHTML = document.createElement("header");

  const divHeader = document.createElement("div");
  const ulHTML = document.createElement("ul");
  const navHTML = document.createElement("nav");
  const h1HTML = document.createElement("h1");

  navHTML.setAttribute("id", "nav_list");
  h1HTML.textContent = "Ulises Suarez Victoria";
  divHeader.setAttribute("id", "header_content")

  divHeader.appendChild(h1HTML);

  //Bucle foreach para NAV

  texto.forEach((text) => {
    const aHTML = document.createElement("a");
    aHTML.textContent = text;
    ulHTML.appendChild(aHTML);
    navHTML.appendChild(ulHTML);
    divHeader.appendChild(navHTML);

    if (aHTML.textContent === "Instagram") {
      aHTML.href = "https://www.instagram.com/"
    }

    if (aHTML.textContent === "Twitter") {
      aHTML.href = "https://twitter.com/?lang=es"
    }

    if (aHTML.textContent === "LinkedIn") {
      aHTML.href = "https://es.linkedin.com/"
    }


    aHTML.className = "li_nav";

    aHTML.addEventListener("click", function(event) {
      event.preventDefault();
      var url = this.getAttribute("href");
      window.open(url, "_blank")
    });
  });


  headerHTML.appendChild(divHeader);
  nodoPadre.appendChild(headerHTML);

};
