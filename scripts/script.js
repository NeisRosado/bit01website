
// DOM elements
const dataForm = document.getElementById("form");
const nameData = document.getElementById("name");
const phoneData = document.getElementById("phone");
const cityData = document.getElementById("city");

const tbodyData = document.getElementById("tbodyData");
// Events Functions

const saveData = (e) => {
  e.preventDefault();
  console.log(nameData.value);
  console.log(phoneData.value);
  console.log(cityData.value);
  console.log("Saved information ");

  // add content to table

  tbodyData.innerHTML += `
  <tr>
  <td>${nameData.value}</td>
  <td>${phoneData.value}</td>
  <td>${cityData.value}</td>
</tr>`

};

// Event listener

dataForm.addEventListener("submit", (event) => {
  saveData(event);
});