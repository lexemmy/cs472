let student = {
  firstName: '',
  lastName: '',
  grades: [],
  inputNewGrade(newGrade) {
    this.grades.push(newGrade)
  },
  computeAverageGrade() {
    if (this.grades.length === 0) {
      return 0
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0)
    return sum / this.grades.length
  },
}

const studentsArray = [
  Object.create(student),
  Object.create(student),
  Object.create(student),
]

studentsArray[0].firstName = 'John'
studentsArray[0].lastName = 'Doe'
studentsArray[0].grades = []
studentsArray[0].inputNewGrade(85)
studentsArray[0].inputNewGrade(90)



studentsArray[1].firstName = 'Jane'
studentsArray[1].lastName = 'Smith'
studentsArray[1].grades = [95, 100]

studentsArray[2].firstName = 'Alice'
studentsArray[2].lastName = 'Johnson'
studentsArray[2].grades = [50, 60]

console.log(studentsArray)
console.log(student)

const totalGrades = studentsArray.reduce(
  (total, student) => total + student.computeAverageGrade(),
  0
)
const averageGradeForAllStudents = totalGrades / studentsArray.length

console.log('Average Grade for All Students: ' + averageGradeForAllStudents)
