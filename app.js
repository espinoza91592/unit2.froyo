/*
A visitor receives a prompt upon opening the website to
enter a list of comma-separated froyo flavors.
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
When they view the browser console, they observe a table
listing how many of each flavor they have ordered. In this case,
they will be able to observe that they have ordered three vanilla,
two coffee, and one strawberry froyo.

*/

// Need prompt ---> vanilla, vanilla, vanilla, strawberry, coffee, coffee

// create a prompt that will promt the user to enter a list of froyo flavors

const userInput = prompt(
  "Please enter a list of comma-seperated froyo flavors"
);

console.log(userInput);

// split converts strings into arrays and delete commas
const froyoFlavors = userInput.split(",");

console.log(froyoFlavors);

const arrayOfFlavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
console.table(arrayOfFlavors);

// create a function named freqCounter that takes in an array as a parameter
function createFreqCounter(array) {
  // create an empty object to populate with key:value pairs
  // key:values are going to be a count of all the elements in the array
  const flavorCounter = {};
  // loop over the froyoFlavors array to get every element
  for (let i = 0; i < array.length; i++) {
    //   grab each element and store in a variable
    const element = array[i];
    // if the element exist in the object
    if (element in flavorCounter) {
      // I want to increment the value in the object
      flavorCounter[element] += 1;
      // otherwise
    } else {
      // I want to add the element to the object and give it a value of 1
      flavorCounter[element] = 1;
    }
  }

  // return the built object
  return flavorCounter;
}

// {"vanilla": 3, "strawbery": 1, "coffee": 2}

const getFlavorCount = createFreqCounter(froyoFlavors);
console.table(getFlavorCount);
