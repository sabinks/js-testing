class Student {
  constructor(fName, lName, year) {
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
    this.late = 0;
    this.scores = [];
    this.averageScore = 0;
  }
  fullName() {
    return `Your full name is ${this.fName} ${this.lName}`;
  }
  markLate() {
    this.late += 1;
    if (this.late >= 4) {
      return 'You are Expelled!';
    }
    return `${this.fName} ${this.lName} has been late ${this.late} times`;
  }
  addScore(score) {
    this.scores.push(score);
  }
  calculateAverage() {
    this.averageScore =
      this.scores.reduce((a, b) => a + b) / this.scores.length;
  }
  static enrollStudents() {
    return 'Enroll Students';
  }
}

const saksham = new Student('Saksham', 'Shrestha', 'JK');
const sabin = new Student('Sabin', 'Shrestha', 'BE');
console.log(saksham);
saksham.markLate();
saksham.markLate();
saksham.markLate();
sabin.markLate();
sabin.markLate();
sabin.addScore(1);
sabin.addScore(3);
sabin.addScore(5);
console.log(sabin.calculateAverage());

console.log(saksham.fullName());
console.log(saksham.markLate());

console.log(sabin);
console.log(sabin.fullName());
console.log(sabin.late);
const student = Student.enrollStudents();
console.log(student);
