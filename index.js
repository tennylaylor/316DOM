const friendForm = document.getElementById("friend-form");
const resultDiv = document.querySelector("#result");
console.log("Cached form and result elements");

friendForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload on submit
  console.log("Form submitted"); // Confirm form submission

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const contact = document.getElementById("contact").value;

  const ethnicity = document.getElementById("ethnicty").value;
  const term = document.getElementById("term").value;
  const age = document.getElementById("age").value;
  const style = document.getElementById("style").value;
  const occasion = document.getElementById("occasion").value;
  console.log(
    "Retrieved values:",
    name,
    gender,
    contact,
    ethnicity,
    term,
    age,
    style,
    occasion
  );

  resultDiv.innerHTML = `
        <p>Hello ${name}! We’re finding a friend for you with these preferences:</p>
        <ul>
            <li>Gender: ${gender}</li>
            <li>Ethnicity: ${ethnicity}</li> <!-- Ethnicity displayed incorrectly -->
            <li>Term: ${term}</li>
            <li>Age Group: ${age}</li>
            <li>Style: ${style}</li>
            <li>Occasion: ${occasion}</li>
            <li>Contact: ${contact}</li>
        </ul>
    `;
  resultDiv.style.color = "blue";
  console.log("Displayed result in resultDiv");
});
