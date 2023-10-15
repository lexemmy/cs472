class Student {
  constructor(studentId) {
    this.studentId = studentId
    this.answers = []
  }

  addAnswer(question) {
    this.answers.push(question)
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid
    this.answer = answer
  }

  checkAnswer(answer) {
    return this.answer === answer
  }
}

class Quiz {
  constructor(questions, students) {
    this.questions = new Map(
      questions.map((question) => [question.qid, question.answer])
    )
    this.students = students
  }

  scoreStudentBySid(sid) {
    let student = this.students.find((s) => s.studentId === sid)

    let score = 0
    student.answers.forEach((studentAnswer) => {
      let correctAnswer = this.questions.get(studentAnswer.qid)
      if (studentAnswer.checkAnswer(correctAnswer)) {
        score++
      }
    })

    return score
  }

  getAverageScore() {
    let totalScore = 0
    let totalStudents = 0

    for (const student of this.students) {
      let score = this.scoreStudentBySid(student.studentId)
      totalScore += score
      totalStudents++
    }

    return totalScore / totalStudents
  }
}

const student1 = new Student(10)
student1.addAnswer(new Question(2, 'a'))
student1.addAnswer(new Question(3, 'b'))
student1.addAnswer(new Question(1, 'b'))

const student2 = new Student(11)
student2.addAnswer(new Question(3, 'b'))
student2.addAnswer(new Question(2, 'a'))
student2.addAnswer(new Question(1, 'd'))

const students = [student1, student2]

const questions = [
  new Question(1, 'b'),
  new Question(2, 'a'),
  new Question(3, 'b'),
]

const quiz = new Quiz(questions, students)

let scoreforStudent10 = quiz.scoreStudentBySid(10)
console.log(scoreforStudent10)

let scoreforStudent11 = quiz.scoreStudentBySid(11)
console.log(scoreforStudent11)

let average = quiz.getAverageScore()
console.log(average)
