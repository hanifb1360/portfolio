function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.style.width = "100%";
  card.style.backgroundColor = "#eeeee4";
  card.style.color = "white";
  card.style.backgroundImage = `url(${project.image})`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.borderRadius = "20px";
  card.style.border = "solid 2px #8f8f89";
  card.style.transition = "0.5s ease-in-out";

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.flexDirection = "column";
  overlay.style.width = "100%";
  overlay.style.padding = "10%";

  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = project.title;
  title.style.letterSpacing = "4px";

  const description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent = project.description;

  const readMore = document.createElement("button");
  readMore.classList.add("readMore-button");
  readMore.textContent = "Read More";
  readMore.style.letterSpacing = "2px";
  readMore.style.padding = "4px 15px";
  readMore.style.marginTop = "25px";
  readMore.style.border = "none";
  readMore.style.borderRadius = "20px";
  readMore.style.fontSize = "10px";
  readMore.style.backgroundColor = "#8f8f89";
  readMore.style.transition = "0.5s ease-in-out";

  readMore.addEventListener("click", function () {
    window.location.href = project.link;
  });

  overlay.appendChild(title);
  overlay.appendChild(description);
  overlay.appendChild(readMore);
  card.appendChild(overlay);

  // add hover effect
  readMore.addEventListener("mouseover", function () {
    readMore.style.backgroundColor = "#eeeee4";
    readMorestyle.transition = "background-color 0.5s ease";
  });

  readMore.addEventListener("mouseout", function () {
    readMore.style.backgroundColor = "#8f8f89";
  });

  card.addEventListener("mouseover", function () {
    card.style.border = "solid 2px white";
    card.style.boxShadow = "-2px 6px 55px -11px rgba(255,255,255,1)";
  });
  card.addEventListener("mouseout", function () {
    card.style.border = "solid 2px #8f8f89";
    card.style.boxShadow = "none";
  });

  return card;
}

const container = document.querySelector(".projects-container");
const projects = [
  {
    title: "tDigital",
    description: "Gatsby & WordPress Project",
    image: "images/tdigital-dark.png",
    link: "projects/tdigital/tdigital.html",
  },
  {
    title: "Shikton Webshop",
    description: "React JS, Strapi & Stripe Project",
    image: "images/shikton-dark.png",
    link: "projects/shikton/shikton.html",
  },
  {
    title: "SNEAKEX",
    description: "React JS, TypeScript & Bootstrap Project",
    image: "images/sneakex-dark.png",
    link: "https://shikton.vercel.app/",
  },
];

for (const project of projects) {
  const card = createProjectCard(project);
  container.appendChild(card);
}
