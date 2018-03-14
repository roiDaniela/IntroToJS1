var gender = prompt("male/female?");
var age = prompt("age?");

if (gender === "female" && age >= 18) {
  alert("free drink!");
} else if (age >= 18) {
  alert("pay ...");
} else {
  alert("No drink");
}