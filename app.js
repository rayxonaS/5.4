//FIRST CARD

/*const divWrapper = document.createElement("div");
divWrapper.style.borderRadius = "20px";
divWrapper.style.display = "flex";
divWrapper.style.backgroundColor = "white";
divWrapper.style.flexDirection = "column";
divWrapper.style.maxWidth = "384px";
divWrapper.style.alignItems = "center";
divWrapper.style.padding = "24px";
divWrapper.style.boxShadow = "16px 16px 0px 0px rgba(0, 0, 0, 1);";
divWrapper.style.border = "1px solid rgba(17, 17, 17, 1);";

const avatarImage = document.createElement("img");
avatarImage.src = "https://picsum.photos/id/50/384/200";
avatarImage.style.width = "100%";
avatarImage.style.borderRadius = "10px";

const href = document.createElement("p");
href.textContent = "Learning";
href.style.marginTop = "24px";
href.style.fontSize = "14px";
href.style.lineHeight = "21px";
href.style.fontWeight = "800";
href.style.color = "black";
href.style.fontFamily = "Figtree, sans-serif";

const text = document.createElement("p");
text.textContent = "Published 21 Dec 2023";
text.style.marginTop = "12px";
text.style.fontSize = "14px";
text.style.lineHeight = "21px";
text.style.fontWeight = "500";
text.style.color = "black";
text.style.fontFamily = "Figtree, sans-serif";

const heading = document.createElement("h1");
heading.textContent = "HTML & CSS foundations";
heading.style.marginTop = "12px";
heading.style.fontSize = "24px";
heading.style.lineHeight = "36px";
heading.style.fontWeight = "800";
heading.style.color = "black";
heading.style.fontFamily = "Figtree, sans-serif";

const pragraph = document.createElement("p");
pragraph.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
pragraph.style.marginTop = "12px";
pragraph.style.fontSize = "16px";
pragraph.style.lineHeight = "24px";
pragraph.style.fontWeight = "500";
pragraph.style.color = "grey";
pragraph.style.fontFamily = "Figtree, sans-serif";

const authorWrapper = document.createElement("div");
authorWrapper.style.display = "flex";
authorWrapper.style.alignItems = "center";
authorWrapper.style.marginTop = "16px";
authorWrapper.style.width = "100%";

const image = document.createElement("img");
image.src = "https://picsum.photos/id/45/32/32";
image.style.borderRadius = "50px";
image.style.marginRight = "12px";

const subtitle = document.createElement("p");
subtitle.style.marginTop = "12px";
subtitle.textContent = "Greg Hooper";
subtitle.style.fontSize = "14px";
subtitle.style.lineHeight = "21px";
subtitle.style.fontWeight = "800";
subtitle.style.color = "black";
subtitle.style.fontFamily = "Figtree, sans-serif";
authorWrapper.appendChild(image);
authorWrapper.appendChild(subtitle);
divWrapper.append(
  avatarImage,
  href,
  text,
  heading,
  pragraph,
  image,
  subtitle,
  authorWrapper
);

document.body.appendChild(divWrapper);
document.body.style.backgroundColor = "#F4D04E";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";*/

//SECOND CARD

/*const divWrapper = document.createElement("div");
divWrapper.style.borderRadius = "12px";
divWrapper.style.display = "flex";
divWrapper.style.backgroundColor = "#1F1F1F";
divWrapper.style.flexDirection = "column";
divWrapper.style.maxWidth = "384px";
divWrapper.style.alignItems = "center";
divWrapper.style.padding = "40px";
divWrapper.style.fontFamily = "Inter, sans-serif";
divWrapper.style.color = "white";

const avatarImage = document.createElement("img");
avatarImage.src = "https://picsum.photos/id/30/88/88";
avatarImage.style.borderRadius = "50%";
avatarImage.style.marginTop = "40px";

const title = document.createElement("h3");
title.textContent = "Jessica Randall";
title.style.fontFamily = "Inter, sans-serif";
title.style.fontweight = "600";
title.style.fontSize = "24px";
title.style.lineHeight = "36px";
title.style.color = "white";
title.style.marginTop = "24px";

const subtitle = document.createElement("h5");
subtitle.textContent = "London, United Kingdom";
subtitle.style.color = "#C4F82A";
subtitle.style.fontSize = "14px";
subtitle.style.lineHeight = "21px";
subtitle.style.fontweight = "700";
subtitle.style.marginTop = "4px";

const text = document.createElement("p");
text.textContent = "Front-end developer and avid reader.";
text.style.fontSize = "14px";
text.style.lineHeight = "21px";
text.style.fontweight = "400";
text.style.marginTop = "8px";
text.style.textAlign = "center";

const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.marginTop = "24px";

const linksText = [
  "Github",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.style.alignItems = "center";
  li.style.display = "flex";
  li.style.justifyContent = "center";
  li.style.width = "304px";
  li.style.height = "45px";
  li.style.backgroundColor = "rgba(51, 51, 51, 1)";
  li.style.padding = "12px";
  li.style.borderRadius = "8px";
  li.style.marginBottom = "8px";

  const a = document.createElement("a");
  a.style.textDecoration = "none";
  a.style.textAlign = "center";
  a.style.color = "white";
  a.style.fontSize = "14px";
  a.style.lineHeight = "21px";
  a.style.fontweight = "400";
  a.style.marginLeft = "auto";
  a.style.marginRight = "auto";
  a.href = "#";
  a.textContent = linksText[i];
  li.appendChild(a);
  ul.appendChild(li);
}

divWrapper.append(avatarImage, title, subtitle, text, ul);
document.body.appendChild(divWrapper);
document.body.style.backgroundColor = "black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";*/
