const form = document.querySelector("form");
const students = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});
