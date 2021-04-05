// TODO: Activate the 'random student' button to pick a random student
// TODO: `log` a random student's name when the button is clicked

const form = document.querySelector("form");
const students = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  console.log("hello");
});
