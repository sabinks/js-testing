class Student {
  constructor(fName, lName, year) {
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
    this.late = 0;
  }
  fullName() {
    return `Your full name is ${this.fName} ${this.lName}`;
  }
  markLate() {
    this.late += 1;
    return `${this.fName} ${this.lName} has been late ${this.late}`;
  }
}

const saksham = new Student('Saksham', 'Shrestha', 'JK');
console.log(saksham);
saksham.markLate();
saksham.markLate();
saksham.markLate();
console.log(saksham.fullName());
console.log(saksham.late);
