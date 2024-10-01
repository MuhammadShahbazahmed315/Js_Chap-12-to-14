[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: // 1. Empty array using JS literal notation
let studentNames = [];

// 2. Empty array using JS object notation
let studentNamesObject = {}; 

// 3. Strings array
let stringArray = ["apple", "banana", "cherry"];

// 4. Numbers array
let numbersArray = [1, 2, 3, 4, 5];

// 5. Boolean array
let booleanArray = [true, false, true];

// 6. Mixed array
let mixedArray = ["apple", 1, true, {name: "John"}];

// 7. Pakistani education qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying the qualifications array in the console
console.log(qualifications);

// You can iterate and display the qualifications in your HTML using JavaScript DOM manipulation
[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: // Question 8
const studentNames = ["Michael", "John", "Tony"];
const studentScores = [320, 230, 480];
const totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
  const percentage = (studentScores[i] / totalMarks) * 100;
  console.log(
    Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%
  );
}

// Question 9
const colors = ["red", "green", "blue"];
displayArray("Initial array:", colors);

// a. Add color to the beginning
const colorToAddAtBeginning = prompt(
  "Enter a color to add to the beginning:"
);
colors.unshift(colorToAddAtBeginning);
displayArray("Color added at beginning:", colors);

// b. Add color to the end
const colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
displayArray("Color added at end:", colors);

// c. Add two colors to the beginning
colors.unshift("purple", "yellow");
displayArray("Two colors added at beginning:", colors);

// d. Delete the first color
colors.shift();
displayArray("First color deleted:", colors);

// e. Delete the last color
colors.pop();
displayArray("Last color deleted:", colors);

// f. Add color at a specific index
const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
const colorToAddAtIndex = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
displayArray("Color added at specific index:", colors);

// g. Delete color(s) from a specific index
const indexToDelete = parseInt(
  prompt("Enter the index to delete color(s) from:")
);
const countToDelete = parseInt(prompt("How many colors to delete?"));
colors.splice(indexToDelete, countToDelete);
displayArray("Color(s) deleted from index:", colors);

// Function to display array contents in the browser console
function displayArray(message, array) {
  console.log(message);
  console.log(array);
}
[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: // 10. Sort student scores in ascending order
const scores = [320, 230, 480, 120];
scores.sort((a, b) => a - b); 
console.log("Ordered Scores of Students:", scores);

// 11. Copy city names to a new array
const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
const selectedCities = cities.slice(2, 5); 
console.log("Selected cities list:", selectedCities);

// 12. Create a string from an array using join
const arr = ["This ", "is ", "my ", "cat"];
const sentence = arr.join("");
console.log("String:", sentence);
[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: // Initialize an empty array to represent our queue
const devicesQueue = [];

// Enqueue (Add) elements to the back of the queue
devicesQueue.push('keyboard');
devicesQueue.push('mouse');
devicesQueue.push('printer');
devicesQueue.push('monitor');

console.log("Initial Queue:", devicesQueue); // Output: ['keyboard', 'mouse', 'printer', 'monitor']

// Dequeue (Remove) elements from the front of the queue (FIFO)
const firstOut = devicesQueue.shift();
console.log("First Out:", firstOut); // Output: keyboard
console.log("Queue after dequeue:", devicesQueue); // Output: ['mouse', 'printer', 'monitor']

// Further dequeues would follow the same pattern
[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: const devices = []; // Start with an empty array

// Pushing elements (adding to the top of the stack)
devices.push('keyboard'); 
devices.push('mouse');
devices.push('printer');
devices.push('monitor');

console.log("Devices pushed:", devices); // Output: ['keyboard', 'mouse', 'printer', 'monitor']

// Popping elements (removing from the top of the stack - LIFO)
console.log("Out:", devices.pop()); // Output: 'monitor'
console.log("Out:", devices.pop()); // Output: 'printer'
console.log("Out:", devices.pop()); // Output: 'mouse'
console.log("Out:", devices.pop()); // Output: 'keyboard'

console.log("Devices after popping:", devices); // Output: [] (empty array)
[7:41 pm, 01/10/2024] Wali Tahir❣️🤞🏻: <!DOCTYPE html>
<html>
<head>
<title>Phone Manufacturers Dropdown</title>
</head>
<body>

<script>
  // Store phone manufacturers in an array
  const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  // Begin creating the dropdown/select menu
  let dropdownHTML = "<select>";
  dropdownHTML += "<option value=''>Select a Manufacturer</option>"; 

  // Loop through the array and add each manufacturer as an option
  for (let i = 0; i < manufacturers.length; i++) {
    dropdownHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
  }

  // Close the dropdown/select menu
  dropdownHTML += "</select>";

  // Write the HTML code to the document
  document.write(dropdownHTML);
</script>

</body>
</html>