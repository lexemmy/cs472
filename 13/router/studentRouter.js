const express = require('express')
const router = express.Router()
const studentController = require('../controller/studentController')

router.get('/', studentController.getStudents)
router.get('/search', studentController.filterByProgram)
router.get('/:id', studentController.getStudentById)
router.post('/', studentController.createStudent)
router.delete('/:id', studentController.deleteStudent)
router.put('/:id', studentController.updateStudent)

module.exports = router
