import "./main_content.css";

const mainHTML = document.createElement("main");
const sectionSkills = document.createElement("section");

export const sectionContent = (nodoPadre, text, text2) => {
  const sectionAbout = document.createElement("section");

  const h3About = document.createElement("h2");
  const pAbout = document.createElement("p");
  const h5About = document.createElement("h5");

  h3About.textContent = "About me";
  pAbout.textContent = text;
  h5About.textContent = "Skills";

  sectionAbout.setAttribute("id", "about_me");

  sectionAbout.appendChild(h3About);
  sectionAbout.appendChild(pAbout);

  mainHTML.appendChild(sectionAbout);

  nodoPadre.appendChild(mainHTML);
};

export const sectionEducation = (nodoPadre, educationData) => {
  const sectionContent = document.createElement("section");
  const divEducation = document.createElement("div");

  const h3HTML = document.createElement("h2");
  const h4HTML = document.createElement("h4");
  const h5HTML = document.createElement("h5");
  const pHTML = document.createElement("p");

  h3HTML.textContent = "Education";
  sectionContent.setAttribute("id", "education");
  divEducation.setAttribute("id", "education_div");

  for (let i = 0; i < educationData.length; i++) {
    const item = educationData[i];

    h4HTML.textContent = `Degree: ${item.degree}`;
    h5HTML.textContent = `College: ${item.university}`;
    pHTML.textContent = `Graduation Year: ${item.graduationYear}`;
  }

  divEducation.appendChild(h3HTML);
  divEducation.appendChild(h4HTML);
  divEducation.appendChild(h5HTML);
  divEducation.appendChild(pHTML);

  sectionContent.appendChild(divEducation);
  mainHTML.appendChild(sectionContent);
  nodoPadre.appendChild(mainHTML);
};

export const sectionExperience = (nodoPadre, experienceData) => {
  const sectionContent = document.createElement("section");
  const divExperience = document.createElement("div");

  const h2HTML = document.createElement("h2");

  h2HTML.textContent = "Experience";
  sectionContent.setAttribute("id", "experience");
  divExperience.setAttribute("id", "divExperience");

  sectionContent.appendChild(h2HTML);

  for (let i = 0; i < experienceData.length; i++) {
    const item = experienceData[i];

    const h3HTML = document.createElement("h3");
    const h4HTML = document.createElement("h4");
    const pHTML = document.createElement("p");
    const p_HTML = document.createElement("p");
    const h5HTML = document.createElement("h5");
    const divContent = document.createElement("div");

    divContent.className = "contentInfo";

    h3HTML.textContent = `Position: ${item.position}`;
    h4HTML.textContent = `Company: ${item.company}`;
    pHTML.textContent = `Start Date: ${item.startDate}`;
    p_HTML.textContent = `End Date: ${item.endDate}`;
    h5HTML.textContent = `City: ${item.city}`;

    divContent.appendChild(h3HTML);
    divContent.appendChild(h4HTML);
    divContent.appendChild(pHTML);
    divContent.appendChild(p_HTML);
    divContent.appendChild(h5HTML);

    divExperience.appendChild(divContent);
  }

  sectionContent.appendChild(divExperience);
  mainHTML.appendChild(sectionContent);
  nodoPadre.appendChild(mainHTML);
};

export const sectionSkill = (nodoPadre, skillsData) => {
  const divSkills = document.createElement("div");
  const h3HTML = document.createElement("h2");

  divSkills.className = "skills_info";
  sectionSkills.setAttribute("id", "skills");
  h3HTML.textContent = "Skills";

  sectionSkills.appendChild(h3HTML);

  for (let i = 0; i < skillsData.length; i++) {
    const item = skillsData[i];

    const pHTML = document.createElement("p");

    pHTML.textContent = item;

    divSkills.appendChild(pHTML);
  }

  sectionSkills.appendChild(divSkills);
  mainHTML.appendChild(sectionSkills);
  nodoPadre.appendChild(mainHTML);
};

