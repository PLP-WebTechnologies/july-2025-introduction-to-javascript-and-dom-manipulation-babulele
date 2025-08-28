// Variable declarations
let userName = "Alice";
let userAge = 20;

// Conditional logic
let message = "";
if (userAge >= 18) {
  message = `${userName} is an adult.`;
} else {
  message = `${userName} is a minor.`;
}

// Output result to the page
document.getElementById("part1-output").textContent = message;


// Function to Calculate total price
const calculateTotal = function(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(50, 3); 
  document.getElementById("total-output").textContent = `Total: $${total}`;
}

// Function to Format a string
const formatName = (name) =>  name.toUpperCase(); console.log(formatName("javascript")); 

//Countdown using for loop
function countdown() {
  let list = document.getElementById("countdown-list");
  list.innerHTML = ""; // Clear previous list
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

//  Iterate through array with forEach
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log("Fruit:", fruit));


// Toggle class on click
document.getElementById("toggle-btn").addEventListener("click", () => {
  document.getElementById("dom-text").classList.toggle("highlight");
});

//  Adding new item to a list
document.getElementById("add-item-btn").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  document.getElementById("dynamic-list").appendChild(newItem);
});

//  Changing text dynamically
document.getElementById("dom-text").addEventListener("mouseover", () => {
  document.getElementById("dom-text").textContent = "You hovered over me!";
});
document.getElementById("dom-text").addEventListener("mouseout", () => {
  document.getElementById("dom-text").textContent = "Click the button above to highlight me!";
});
