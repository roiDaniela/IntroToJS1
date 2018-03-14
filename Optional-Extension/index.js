
alert("EX 2");
var citizenship = prompt("What country are you from?");

if (citizenship.toUpperCase() === "Israeli".toUpperCase()) {
  alert("Welcome!");
} else {
  alert("Sorry, we can't let you in.");
}

alert("EX 3")
var gender = prompt("Whats your gender?");
var age = prompt("Whats your age?");

if (gender.toUpperCase() === "female".toUpperCase() && age >= 18) {
  alert("You get a free drink!");
} else if (age >= 18) {
  alert("You can drink, but you must pay!");
} else {
  alert("No drink for you young one!");
}