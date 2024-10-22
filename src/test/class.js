class Student {
  constructor(fName, lName, year) {
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
  }
  fullName() {
    return `Your full name is ${this.fName} ${this.lName}`;
  }
}

const saksham = new Student('Saksham', 'Shrestha', 'JK');
console.log(saksham);
console.log(saksham.fullName());
