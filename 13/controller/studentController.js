const students = require('../model/student')

let controller = {
  getStudents: function (req, res, next) {
    res.status(200).json(students.getAll())
  },

  getStudentById: function (req, res, next) {
    let id = parseInt(req.params.id)
    let student = students.getById(id)
    if (student) {
      res.status(200).json(student)
    } else {
      res.status(404).json({ message: 'student not found' })
    }
  },

  createStudent: function (req, res, next) {
    let { id, name, program } = req.body
    if (id && name && program) {
      let newStudent = new students(id, name, program)
      newStudent.create()
      res.status(201).json(newStudent)
    } else {
      res.status(400).json({ message: 'All fields are required' })
    }
  },

  deleteStudent: function (req, res, next) {
    let id = parseInt(req.params.id)
    let deletedStudent = students.removeById(id)
    if (!deletedStudent) {
      res.status(404).json({ message: 'student not found' })
    } else {
      res.status(200).json(deletedStudent)
    }
  },

  updateStudent: function (req, res, next) {
    let id = parseInt(req.params.id)
    let updatedStudent = students.updateStudent(id, req.body)
    res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent,
    })
  },

  filterByProgram: function (req, res, next) {
    const program = req.query.program

    const filteredStudents = students.filterByProgram(program)

    res.status(200).json(filteredStudents)
  },
}

module.exports = controller
