import "./footer.css"

const footerHTML = document.createElement("footer");
const divfooter = document.createElement("div");

divfooter.setAttribute("id", "footerDiv")

export const footerContent = (nodoPadre, contactData) => {
    const h3HTML = document.createElement("h3");

    h3HTML.textContent = "Contact";

    footerHTML.appendChild(h3HTML);

    for (const [key, value] of Object.entries(contactData)) {
        const pHTML = document.createElement("p");
        pHTML.textContent = `${key}: ${value}`;
        divfooter.appendChild(pHTML);
    }

    footerHTML.appendChild(divfooter);
    nodoPadre.appendChild(footerHTML);
}
