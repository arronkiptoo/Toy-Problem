// Students marks
// A > 79, 
//B - 60 to 79, 
//C -  59 to 49, 
//D - 40 to 49, 
//E - less 40.


// Prompt the user to input student marks
var marks = 63;


marks = Number(marks);

// Check if the input is a valid number between 0 and 100
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input! Please enter a number between 0 and 100.");
} else {
  // Determine the marks based on the given ranges
  var grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Output the marks
  console.log("The student's marks is:", grade);
}