import "./style.css"
import { data } from "./src/components/data/data"
import { headerContent } from "./src/components/header/header";
import { sectionContent } from "./src/components/main_content/main_content";
import { sectionEducation } from "./src/components/main_content/main_content";
import { sectionExperience } from "./src/components/main_content/main_content";
import { sectionSkill } from "./src/components/main_content/main_content";
import { footerContent } from "./src/components/footer/footer";
import { buttonCreator } from "./src/components/button/button";


const divApp = document.querySelector("#app");

//! Header
const textNav = ["Instagram", "Twitter", "LinkedIn"]
headerContent(divApp, textNav);

//! Main
//? About Me
sectionContent(divApp, data.aboutMe, data.skills);

//? Education
sectionEducation(divApp, data.education);

//? Experience
sectionExperience(divApp, data.workExpierence);

//? Skills
sectionSkill(divApp, data.skills, data.languages);

//? Button
buttonCreator(divApp);

//! Footer
footerContent(divApp, data.contact);