const reviews = [
  {
    id: 1,
    name: "Ann Morawski",
    img: "./images/user1.jpg",
    occupation: "Web Developer",
    text: "Person 1 Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis ut corrupti excepturi? Debitis unde nam et adipiscicupiditate vitae nisi dolore voluptatum ipsa consectetur facilis, dolores ex iusto pariatur sint facere distinctio nulla esse. Illo facere quisquam recusandae odio vitae laborum quamdeleniti praesentium. Delectus sunt sint ducimus perspiciatis unde. Minima aut maxime, corporis provident debitis illum!Quasi, quisquam rerum.",
  },
  {
    id: 2,
    name: "Jimmy Page",
    img: "./images/user2.jpg",
    occupation: "Musician",
    text: "Person 2 Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis ut corrupti excepturi? Debitis unde nam et adipiscicupiditate vitae nisi dolore voluptatum ipsa consectetur facilis, dolores ex iusto pariatur sint facere distinctio nulla esse. Illo facere quisquam recusandae odio vitae laborum quamdeleniti praesentium. Delectus sunt sint ducimus perspiciatis unde. Minima aut maxime, corporis provident debitis illum!Quasi, quisquam rerum.",
  },
  {
    id: 3,
    name: "Karol Stefanski",
    img: "./images/user3.jpg",
    occupation: "Stuntman",
    text: "Person 3 Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis ut corrupti excepturi? Debitis unde nam et adipiscicupiditate vitae nisi dolore voluptatum ipsa consectetur facilis, dolores ex iusto pariatur sint facere distinctio nulla esse. Illo facere quisquam recusandae odio vitae laborum quamdeleniti praesentium. Delectus sunt sint ducimus perspiciatis unde. Minima aut maxime, corporis provident debitis illum!Quasi, quisquam rerum.",
  },
  {
    id: 4,
    name: "Karoline Splitswick",
    img: "./images/user4.jpg",
    occupation: "UI Designer",
    text: "Person 4 Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perspiciatis ut corrupti excepturi? Debitis unde nam et adipiscicupiditate vitae nisi dolore voluptatum ipsa consectetur facilis, dolores ex iusto pariatur sint facere distinctio nulla esse. Illo facere quisquam recusandae odio vitae laborum quamdeleniti praesentium. Delectus sunt sint ducimus perspiciatis unde. Minima aut maxime, corporis provident debitis illum!Quasi, quisquam rerum.",
  },
];

const userName = document.querySelector(".name");
const occupation = document.querySelector(".occupation");
const description = document.querySelector(".description");
const img = document.querySelector(".img");
const buttonRight = document.querySelector('[data-slide="right"]');
const buttonLeft = document.querySelector('[data-slide="left"]');
const buttonRandom = document.querySelector(".random");

let index = 0;

window.addEventListener("DOMContentLoaded", () => {
  let card = reviews[index];
  userName.textContent = card.name;
  occupation.textContent = card.occupation;
  description.textContent = card.text;
  img.setAttribute("src", card.img);
});

buttonRight.addEventListener("click", () => {
  index++;
  if (index > reviews.length - 1) {
    index = 0;
  }
  let card = reviews[index];

  userName.textContent = card.name;
  occupation.textContent = card.occupation;
  description.textContent = card.text;
  img.setAttribute("src", card.img);
});

buttonLeft.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = reviews.length - 1;
  }
  let card = reviews[index];

  userName.textContent = card.name;
  occupation.textContent = card.occupation;
  description.textContent = card.text;
  img.setAttribute("src", card.img);
});

buttonRandom.addEventListener("click", () => {
  index = Math.floor(Math.random() * reviews.length);
  let card = reviews[index];

  userName.textContent = card.name;
  occupation.textContent = card.occupation;
  description.textContent = card.text;
  img.setAttribute("src", card.img);
});
