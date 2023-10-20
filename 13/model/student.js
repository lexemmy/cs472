class Student {
  constructor(id, name, program) {
    this.id = id
    this.name = name
    this.program = program
  }

  create() {
    students.push(this)
  }

  static getById(id) {
    return students.find((s) => s.id === id)
  }

  static getAll() {
    return students
  }

  static removeById(id) {
    let index = students.findIndex((s) => s.id === id)
    if (index !== -1) {
      students.splice(index, 1)
    }
  }

  static updateStudent(id, updatedStudent) {
    const index = students.findIndex((student) => student.id === id)

    if (index !== -1) {
      students[index] = { ...students[index], ...updatedStudent }
      return students[index]
    }
  }

  static filterByProgram(program) {
    return students.filter((student) => {
      return student.program.toLowerCase() === program.toLowerCase()
    })
  }
}
let students = [new Student(1, 'John', 'MSD')]
module.exports = Student
