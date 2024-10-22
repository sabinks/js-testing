class Student {
  constructor(fName, lName, year, late) {
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
    this.late = late;
  }
  fullName() {
    return `Your full name is ${this.fName} ${this.lName}`;
  }
  markLate() {
    this.late += 1;
    return `${this.fName} ${this.lName} has been late ${this.late}`;
  }
}

const saksham = new Student('Saksham', 'Shrestha', 'JK', 1);
console.log(saksham);
console.log(saksham.fullName());
