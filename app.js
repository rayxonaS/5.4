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

const divWrapper = document.createElement("div");
const avatarImage = document.createElement("image");
avatarImage.src = "https://picsum.photos/id/500/88/88";
avatarImage.style.borderRadius = "50%";
const title = document.createElement("h3");
const subtitle = document.createElement("h5");
const text = document.createElement("p");
const ul = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  li.appendChild(a);
  ul.appendChild(li);
}
