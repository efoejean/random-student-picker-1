const form = document.querySelector("form");
const p = document.createElement("p");
const students = [];

document.body.appendChild(p);

// Copied from MDN
function getRandomIntInclusive(min, max) {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  return Math.floor(Math.random() * (currentMax - currentMin + 1) + currentMin); // The maximum is inclusive and the minimum is inclusive
}

// "submit" is on the form NOT on a submit button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  /**
   * 1. event.target is the form that got submitted
   * 2. FormData uses values and name attributes from the form fields
   * 3. Create a new object from the entries in the form
   */
  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  // Get a random student object in the `students` array
  const randomName = students[getRandomIntInclusive(0, students.length - 1)];

  // Log the first and last name of the student using template literals
  p.innerText = `${randomName.fname} ${randomName.lname}`;
});
