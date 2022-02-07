// Create an array of 5 arrays.
  // Each inner array should contain a name and a numerical grade between 1 and 100.
  const studentGrades = [
    ['Hank', 85],
    ['Dale', 73],
    ['Bill', 62],
    ['Boomhauer', 96],
    ['Lucky', 54],
  ];

// Create a function called getGrade with a parameter of grade.
  function getGrade(grade) {
    let letterGrade = 'F'
    // Inside the above function, create an if/else statement that accounts for grades and their respective values from F to A.
    if(grade >= 60 && grade < 70) {
      letterGrade = 'D'
    } else if(grade >= 70 && grade < 80) {
      letterGrade = 'C';
    } else if(grade >= 80 && grade < 90) {
      letterGrade = 'B';
    } else if(grade >= 90) {
      letterGrade = 'A';
    }

    return letterGrade;
  }

// Create a for loop that iterates through the length of the students' array and increments by 1 with each loop.
  for(let i = 0; i < studentGrades.length; i++) {
    // Inside that for loop, use document.write(//your statement); to output a string of text that reads like the following example:
    // David's number grade is 80 and letter grade is a B.
    const studentName = studentGrades[i][0];
    const grade = studentGrades[i][1];
    const letterGrade = getGrade(grade);

    document.write(`${studentName}'s number grade is ${grade} and letter grade is ${letterGrade}<br>`);
  }