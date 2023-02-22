let home = document.querySelector("#home");
let about = document.querySelector("#about");
let pictures = document.querySelector("#pictures");
let employment = document.querySelector("#employment");

let aboutSection = document.querySelector(".about");
let picturesSection = document.querySelector(".pictures");
let employmentSection = document.querySelector(".employment");

about.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
pictures.addEventListener("click", function () {
  picturesSection.scrollIntoView({ behavior: "smooth" });
});
employment.addEventListener("click", function () {
  employmentSection.scrollIntoView({ behavior: "smooth" });
});
