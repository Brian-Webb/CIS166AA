/*
Create an object called stuHwAverage

Problem: The principal of a school needs to know the percentage of students in the school that submit their homework. (This should be calculated by first determining the homework submission per student in each classroom, and then calculating the average submission per classroom across the school.)

For this assignment, you'll be creating a function to create many objects.

*/
//1. The properties you'll create should include Teacher Name, Student Count and Homework Submitted. You'll also need to create a method that calculates the homework submitted per student.
  function stuHwAverage(teacherName = '', studentCount = 0, homeworkSubmitted = 0) {
    this.teacherName = teacherName;
    this.studentCount = studentCount;
    this.homeworkSubmitted = homeworkSubmitted;

    this.homeworkPerStudent = function () {
      return this.homeworkSubmitted / this.studentCount;
    }
  }


//2. Create at least 3 classroom objects. Each object should contain matching variables from above (Teacher Name, Student Count and Homework Submitted).
  // classroom1 -- created using all default values, setting values afterwards
  const classroom1 = new stuHwAverage();
  classroom1.teacherName =  'Mr. Mackey';
  classroom1.studentCount =  20;
  classroom1.homeworkSubmitted = 15;

  // classroom2 -- created passing all initial values into the constructor
  const classroom2 = new stuHwAverage('Mr. Escalante', 30, 19);

  // classroom3 -- using a mix of approaches
  const classroom3 = new stuHwAverage('Mrs. Gruwell');
  classroom3.studentCount =  42;
  classroom3.homeworkSubmitted = 40;

//3. Calculate the average number of homework assignments submitted per classroom across the school.
  const avgHomework = (classroom1.homeworkPerStudent() + classroom2.homeworkPerStudent() + classroom3.homeworkPerStudent()) / 3;

//4. Convert the returned number into a percentage
  const avgHomeworkPercentage = Math.round(avgHomework * 100);



//5. Output your results to an id called result and assign the id a string that reads like the following:
  let output = `Approoximately ${avgHomeworkPercentage}% of classes surveyed submit their homework.`;

  //get the result element
    const resultsDisplay = document.querySelector('#result');

  // output results
    resultsDisplay.textContent = output;

//Approximately 78% of classes surveyed submit their homework.
//(The percentage will change depending on the numbers you choose for student count and homework submitted.)
