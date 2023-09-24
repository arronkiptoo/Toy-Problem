// Prompt the user to enter the car's speed
let speed = 130;

// Define the speed limit and the demerit point threshold
let speedLimit = 70;
let demeritPointThreshold = 12;

// Calculate the demerit points based on the car's speed
let demeritPoints = 0;

if (speed < speedLimit) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((speed - speedLimit) / 5);

  if (demeritPoints > demeritPointThreshold) {
    console.log("License suspended");
  } else {
    console.log("Points: " + demeritPoints);
  }
}