const Person = require("./person");

// Your code here
class Teacher extends Person {
  constructor(fistName, lastName, subject, yearsOfExperience) {
    super(fistName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((sum, teacher) => {
      return sum += teacher.yearsOfExperience;
    }, 0);
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
