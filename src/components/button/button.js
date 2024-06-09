import "./button.css"

export const buttonCreator = (nodoPadre) => {
    const buttonHTML = document.createElement("button");
    const divHTML = document.createElement("div");

    divHTML.setAttribute("id", "divButton")
    buttonHTML.textContent = "Back To Top";
    buttonHTML.setAttribute("id", "backToTop");

    buttonHTML.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    divHTML.appendChild(buttonHTML);
    nodoPadre.appendChild(divHTML);
}