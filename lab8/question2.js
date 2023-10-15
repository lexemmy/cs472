function Student(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.grades = []
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade)
}

Student.prototype.computeAverageGrade = function () {
  if (this.grades.length === 0) {
    return 0
  }
  const sum = this.grades.reduce((total, grade) => total + grade, 0)
  return sum / this.grades.length
}

student1 = new Student('Jone', 'Doe')
student1.inputNewGrade(85)
student1.inputNewGrade(90)

student2 = new Student('Jane', 'Smith')
student2.inputNewGrade(95)
student2.inputNewGrade(100)

student3 = new Student('Alice', 'Johnson')
student3.inputNewGrade(50)
student3.inputNewGrade(60)

let studentArray = [student1, student2, student3]

let totalGrades = studentArray.reduce(
  (total, student) => total + student.computeAverageGrade(),
  0
)
let averageGradeForAllStudents = totalGrades / studentArray.length

console.log('Average Grade for All Students: ' + averageGradeForAllStudents)
